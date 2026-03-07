/**
 * Cloudflare Worker — Autonomous Marketing Bot Scheduler
 *
 * Runs on cron triggers:
 *   - Weekdays 9am UTC: Generate daily content
 *   - Tue/Thu 2pm UTC: Post to social platforms
 *   - Sunday 10am UTC: Weekly analytics review & strategy adjustment
 *
 * Also exposes an HTTP API for manual control.
 */

import { MarketingAgent } from "./agent.js";
import { TwitterClient } from "./platforms/twitter.js";
import { LinkedInClient } from "./platforms/linkedin.js";
import { RedditClient } from "./platforms/reddit.js";
import { ContentCalendar } from "./content/calendar.js";
import { AnalyticsTracker } from "./analytics/tracker.js";

export default {
    /**
     * Cron trigger handler — the autonomous loop
     */
    async scheduled(event, env, ctx) {
        const hour = new Date(event.scheduledTime).getUTCHours();
        const day = new Date(event.scheduledTime).getUTCDay();

        const agent = new MarketingAgent(env.ANTHROPIC_API_KEY);
        const calendar = new ContentCalendar(env.CONTENT_KV);
        const platforms = initPlatforms(env);
        const tracker = new AnalyticsTracker(env.ANALYTICS_KV, platforms);

        try {
            if (hour === 9 && day >= 1 && day <= 5) {
                // Weekday morning: ensure we have content for the week
                await handleContentGeneration(agent, calendar, tracker);
            }

            if (hour === 14 && (day === 2 || day === 4)) {
                // Tue/Thu afternoon: post scheduled content
                await handlePosting(calendar, platforms, env);
            }

            if (hour === 10 && day === 0) {
                // Sunday: weekly review
                await handleWeeklyReview(agent, tracker, calendar, env);
            }
        } catch (err) {
            console.error("Scheduled task error:", err);
            // Store error for debugging
            if (env.ANALYTICS_KV) {
                await env.ANALYTICS_KV.put(`error:${Date.now()}`, JSON.stringify({
                    time: new Date().toISOString(),
                    trigger: `hour=${hour},day=${day}`,
                    error: err.message,
                    stack: err.stack,
                }), { expirationTtl: 7 * 24 * 60 * 60 });
            }
        }
    },

    /**
     * HTTP handler — manual control API
     *
     * GET  /status           — bot status and upcoming posts
     * POST /generate         — force content generation
     * POST /post/:platform   — post next scheduled item
     * GET  /analytics        — view engagement metrics
     * POST /campaign/:name   — plan a new campaign
     * GET  /calendar         — view content calendar
     */
    async fetch(request, env) {
        const url = new URL(request.url);
        const path = url.pathname;

        // Simple auth check
        const authHeader = request.headers.get("Authorization");
        if (authHeader !== `Bearer ${env.BOT_API_KEY}`) {
            return new Response(JSON.stringify({ error: "Unauthorized" }), {
                status: 401,
                headers: { "Content-Type": "application/json" }
            });
        }

        const agent = new MarketingAgent(env.ANTHROPIC_API_KEY);
        const calendar = new ContentCalendar(env.CONTENT_KV);
        const platforms = initPlatforms(env);
        const tracker = new AnalyticsTracker(env.ANALYTICS_KV, platforms);

        try {
            if (path === "/status" && request.method === "GET") {
                const plan = await calendar.getCurrentPlan();
                return json({
                    status: "running",
                    currentPlan: plan ? {
                        generated: plan.generated,
                        totalPosts: plan.posts.length,
                        posted: plan.posted.length,
                        remaining: plan.posts.length - plan.posted.length,
                    } : null,
                    platforms: {
                        twitter: !!env.TWITTER_API_KEY,
                        linkedin: !!env.LINKEDIN_ACCESS_TOKEN,
                        reddit: !!env.REDDIT_CLIENT_ID,
                    }
                });
            }

            if (path === "/generate" && request.method === "POST") {
                const result = await handleContentGeneration(agent, calendar, tracker);
                return json(result);
            }

            if (path.startsWith("/post/") && request.method === "POST") {
                const platform = path.split("/post/")[1];
                const result = await handlePosting(calendar, platforms, env, platform);
                return json(result);
            }

            if (path === "/analytics" && request.method === "GET") {
                const metrics = await tracker.getWeeklySummary();
                return json(metrics);
            }

            if (path.startsWith("/campaign/") && request.method === "POST") {
                const name = decodeURIComponent(path.split("/campaign/")[1]);
                const body = await request.json();
                const plan = await agent.planCampaign(name, body.details || "");
                return json(plan);
            }

            if (path === "/calendar" && request.method === "GET") {
                const plan = await calendar.getCurrentPlan();
                return json(plan || { message: "No content plan for this week" });
            }

            if (path === "/hn" && request.method === "POST") {
                const hn = await agent.generateHNPost();
                return json(hn);
            }

            return json({ error: "Not found" }, 404);

        } catch (err) {
            return json({ error: err.message }, 500);
        }
    }
};

/* ── Handlers ── */

async function handleContentGeneration(agent, calendar, tracker) {
    const existing = await calendar.getCurrentPlan();
    if (existing && existing.posts.length > 0) {
        return { action: "skipped", reason: "Plan already exists for this week" };
    }

    // Get recent analytics to inform content
    let analyticsContext = "";
    try {
        const metrics = await tracker.getWeeklySummary(2);
        if (metrics.summary) {
            analyticsContext = JSON.stringify(metrics.summary);
        }
    } catch (_) { /* analytics optional */ }

    const content = await agent.generateWeeklyContent(analyticsContext);

    const weekKey = new Date().toISOString().slice(0, 10);
    await calendar.saveWeeklyPlan(weekKey, content.posts);

    return { action: "generated", posts: content.posts.length, weekKey };
}

async function handlePosting(calendar, platforms, env, specificPlatform = null) {
    const results = [];
    const platformsToPost = specificPlatform
        ? [specificPlatform]
        : ["twitter", "linkedin", "reddit"];

    for (const platform of platformsToPost) {
        const post = await calendar.getNextPost(platform);
        if (!post) continue;

        try {
            let result;
            switch (platform) {
                case "twitter":
                    if (!platforms.twitter) break;
                    const tweetText = post.hashtags
                        ? post.content + "\n\n" + post.hashtags.join(" ")
                        : post.content;
                    result = await platforms.twitter.postTweet(tweetText);
                    break;

                case "linkedin":
                    if (!platforms.linkedin) break;
                    result = await platforms.linkedin.createPost(
                        post.content,
                        "https://www.mathsedu.org"
                    );
                    break;

                case "reddit":
                    if (!platforms.reddit) break;
                    const subreddit = (post.subreddit || "r/learnmath").replace("r/", "");
                    result = await platforms.reddit.submitText(
                        subreddit,
                        post.title || post.content.slice(0, 100),
                        post.content
                    );
                    break;
            }

            if (result) {
                await calendar.markPosted(platform, post.day, result);
                results.push({ platform, day: post.day, status: "posted" });
            }
        } catch (err) {
            results.push({ platform, day: post.day, status: "error", error: err.message });
        }
    }

    return { action: "posted", results };
}

async function handleWeeklyReview(agent, tracker, calendar, env) {
    const metrics = await tracker.collectAll();
    const review = await agent.reviewAnalytics(metrics);

    // Store the review
    if (env.ANALYTICS_KV) {
        await env.ANALYTICS_KV.put(
            `review:${new Date().toISOString().slice(0, 10)}`,
            JSON.stringify(review),
            { expirationTtl: 365 * 24 * 60 * 60 }
        );
    }

    return { action: "reviewed", review };
}

/* ── Helpers ── */

function initPlatforms(env) {
    return {
        twitter: env.TWITTER_API_KEY ? new TwitterClient(env) : null,
        linkedin: env.LINKEDIN_ACCESS_TOKEN ? new LinkedInClient(env) : null,
        reddit: env.REDDIT_CLIENT_ID ? new RedditClient(env) : null,
    };
}

function json(data, status = 200) {
    return new Response(JSON.stringify(data, null, 2), {
        status,
        headers: { "Content-Type": "application/json" }
    });
}
