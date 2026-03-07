#!/usr/bin/env node
/**
 * CLI for the mathsedu.org Marketing Bot
 *
 * Usage:
 *   node src/cli.js strategy        — View brand strategy (no API key needed)
 *   node src/cli.js generate        — Generate a week of content
 *   node src/cli.js post <platform> — Generate a single post
 *   node src/cli.js campaign <name> — Plan a campaign
 *   node src/cli.js hn              — Generate a Hacker News post
 */

import { BRAND, CONTENT_PILLARS, CAMPAIGNS, PLATFORM_GUIDELINES, getAgentSystemPrompt } from "./strategy.js";

const command = process.argv[2];
const arg = process.argv[3];

function getAgent() {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
        console.error("Error: ANTHROPIC_API_KEY environment variable is required");
        process.exit(1);
    }
    // Dynamic import to avoid loading SDK when not needed
    return import("./agent.js").then(m => new m.MarketingAgent(apiKey));
}

async function main() {
    switch (command) {
        case "strategy": {
            console.log("\n=== mathsedu.org Marketing Strategy ===\n");
            console.log(`Brand: ${BRAND.name}`);
            console.log(`URL: ${BRAND.url}`);
            console.log(`Tagline: ${BRAND.tagline}`);
            console.log(`\nVoice: ${BRAND.voice.tone}`);
            console.log(`\nPrinciples:`);
            BRAND.voice.principles.forEach(p => console.log(`  - ${p}`));
            console.log(`\nContent Pillars:`);
            CONTENT_PILLARS.forEach(p =>
                console.log(`  - ${p.name} (${Math.round(p.share * 100)}%): ${p.description}`)
            );
            console.log(`\nTarget Audiences:`);
            Object.values(BRAND.audiences).forEach(a =>
                console.log(`  - ${a.name}: ${a.motivation}`)
            );
            console.log(`\nPlatform Guidelines:`);
            Object.entries(PLATFORM_GUIDELINES).forEach(([name, g]) =>
                console.log(`  - ${name}: ${g.style}`)
            );
            console.log(`\nCampaigns:`);
            console.log(`  - ${CAMPAIGNS.launch.name}: ${CAMPAIGNS.launch.goal}`);
            console.log(`  - ${CAMPAIGNS.weekly.name}: ${CAMPAIGNS.weekly.format}`);
            console.log(`\nSeasonal:`);
            Object.entries(CAMPAIGNS.seasonal).forEach(([key, s]) =>
                console.log(`  - ${s.date}: ${s.topic}`)
            );
            console.log();
            break;
        }

        case "generate": {
            console.log("Generating weekly content...\n");
            const agent = await getAgent();
            const result = await agent.generateWeeklyContent();
            console.log(`Generated ${result.posts.length} posts:\n`);
            result.posts.forEach((post, i) => {
                console.log(`--- Post ${i + 1} [${post.platform}] [${post.day}] [${post.pillar}] ---`);
                console.log(post.content);
                if (post.hashtags) console.log(`Tags: ${post.hashtags.join(" ")}`);
                if (post.title) console.log(`Title: ${post.title}`);
                console.log();
            });
            break;
        }

        case "post": {
            const platform = arg || "twitter";
            const topic = process.argv[4] || "a featured interactive visualisation";
            console.log(`Generating ${platform} post about: ${topic}\n`);
            const agent = await getAgent();
            const post = await agent.generatePost(platform, topic);
            console.log(`--- ${platform} post ---`);
            console.log(post.content);
            if (post.hashtags) console.log(`\nTags: ${post.hashtags.join(" ")}`);
            if (post.title) console.log(`Title: ${post.title}`);
            if (post.altText) console.log(`Alt text: ${post.altText}`);
            console.log();
            break;
        }

        case "campaign": {
            const name = arg || "General Awareness";
            console.log(`Planning campaign: ${name}\n`);
            const agent = await getAgent();
            const plan = await agent.planCampaign(name, process.argv.slice(4).join(" "));
            console.log(`Campaign: ${plan.name}`);
            console.log(`Goal: ${plan.goal}`);
            console.log(`Duration: ${plan.duration}\n`);
            console.log("Timeline:");
            plan.timeline.forEach(t =>
                console.log(`  Day ${t.day} [${t.platform}]: ${t.action}`)
            );
            if (plan.metrics) {
                console.log("\nMetrics:");
                plan.metrics.forEach(m => console.log(`  - ${m}`));
            }
            console.log();
            break;
        }

        case "hn": {
            console.log("Generating Hacker News post...\n");
            const agent = await getAgent();
            const hn = await agent.generateHNPost();
            console.log(`Title: ${hn.title}\n`);
            console.log("First comment:");
            console.log(hn.comment);
            console.log();
            break;
        }

        default:
            console.log(`mathsedu.org Marketing Bot CLI

Usage:
  node src/cli.js strategy            View brand strategy
  node src/cli.js generate            Generate weekly content
  node src/cli.js post <platform>     Generate a single post
  node src/cli.js campaign <name>     Plan a campaign
  node src/cli.js hn                  Generate a Hacker News post

Set ANTHROPIC_API_KEY for commands that use Claude.`);
            break;
    }
}

main().catch(err => {
    console.error("Error:", err.message);
    process.exit(1);
});
