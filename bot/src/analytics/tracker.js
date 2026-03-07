/**
 * Analytics Tracker — collects and aggregates engagement metrics
 *
 * Pulls metrics from each platform API and stores in KV for the agent to review.
 */

export class AnalyticsTracker {
    constructor(kv, platforms) {
        this.kv = kv;        // Cloudflare KV namespace
        this.platforms = platforms; // { twitter, linkedin, reddit }
    }

    /**
     * Collect metrics from all platforms
     */
    async collectAll() {
        const metrics = {
            collected: new Date().toISOString(),
            twitter: await this._collectTwitter(),
            linkedin: await this._collectLinkedIn(),
            reddit: await this._collectReddit(),
        };

        const weekKey = this._weekKey();
        await this.kv.put(`metrics:${weekKey}`, JSON.stringify(metrics), {
            expirationTtl: 180 * 24 * 60 * 60 // 6 months
        });

        return metrics;
    }

    /**
     * Get aggregated metrics for the past N weeks
     */
    async getWeeklySummary(weeks = 4) {
        const summaries = [];
        const now = new Date();

        for (let w = 0; w < weeks; w++) {
            const d = new Date(now);
            d.setDate(d.getDate() - (w * 7));
            const weekKey = this._weekKeyFor(d);
            const raw = await this.kv.get(`metrics:${weekKey}`);
            if (raw) summaries.push(JSON.parse(raw));
        }

        return {
            weeks: summaries.length,
            summary: this._aggregate(summaries),
            trend: this._calculateTrend(summaries),
            raw: summaries,
        };
    }

    async _collectTwitter() {
        if (!this.platforms.twitter) return { available: false };
        try {
            const data = await this.platforms.twitter.getMetrics();
            if (!data?.data) return { available: false };

            const tweets = data.data;
            const totalImpressions = tweets.reduce((sum, t) =>
                sum + (t.public_metrics?.impression_count || 0), 0);
            const totalLikes = tweets.reduce((sum, t) =>
                sum + (t.public_metrics?.like_count || 0), 0);
            const totalRetweets = tweets.reduce((sum, t) =>
                sum + (t.public_metrics?.retweet_count || 0), 0);
            const totalReplies = tweets.reduce((sum, t) =>
                sum + (t.public_metrics?.reply_count || 0), 0);

            return {
                available: true,
                posts: tweets.length,
                impressions: totalImpressions,
                likes: totalLikes,
                retweets: totalRetweets,
                replies: totalReplies,
                engagementRate: totalImpressions > 0
                    ? ((totalLikes + totalRetweets + totalReplies) / totalImpressions * 100).toFixed(2) + "%"
                    : "N/A",
                topTweet: tweets.sort((a, b) =>
                    (b.public_metrics?.like_count || 0) - (a.public_metrics?.like_count || 0)
                )[0]?.text?.slice(0, 100)
            };
        } catch (e) {
            return { available: false, error: e.message };
        }
    }

    async _collectLinkedIn() {
        if (!this.platforms.linkedin) return { available: false };
        return { available: true, note: "LinkedIn analytics require manual review" };
    }

    async _collectReddit() {
        if (!this.platforms.reddit) return { available: false };
        try {
            const posts = await this.platforms.reddit.getUserMetrics();
            if (!posts) return { available: false };

            const totalScore = posts.reduce((sum, p) => sum + p.score, 0);
            const totalComments = posts.reduce((sum, p) => sum + p.comments, 0);

            return {
                available: true,
                posts: posts.length,
                totalKarma: totalScore,
                totalComments,
                avgScore: (totalScore / posts.length).toFixed(1),
                topPost: posts.sort((a, b) => b.score - a.score)[0],
            };
        } catch (e) {
            return { available: false, error: e.message };
        }
    }

    _aggregate(summaries) {
        if (summaries.length === 0) return {};
        // Simple aggregation across weeks
        return {
            totalPlatformsActive: new Set(
                summaries.flatMap(s => Object.keys(s).filter(k => s[k]?.available))
            ).size,
        };
    }

    _calculateTrend(summaries) {
        if (summaries.length < 2) return "insufficient_data";
        // Compare most recent week to previous
        const recent = summaries[0];
        const previous = summaries[1];

        const recentEngagement = (recent.twitter?.likes || 0) + (recent.reddit?.totalKarma || 0);
        const previousEngagement = (previous.twitter?.likes || 0) + (previous.reddit?.totalKarma || 0);

        if (recentEngagement > previousEngagement * 1.1) return "growing";
        if (recentEngagement < previousEngagement * 0.9) return "declining";
        return "stable";
    }

    _weekKey() { return this._weekKeyFor(new Date()); }

    _weekKeyFor(date) {
        const d = new Date(date);
        const day = d.getDay();
        const diff = d.getDate() - day + (day === 0 ? -6 : 1);
        d.setDate(diff);
        return d.toISOString().slice(0, 10);
    }
}
