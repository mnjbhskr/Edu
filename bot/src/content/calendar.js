/**
 * Content Calendar — manages scheduling and state
 *
 * Stores upcoming posts in Cloudflare KV and tracks what has been posted.
 */

export class ContentCalendar {
    constructor(kv) {
        this.kv = kv; // Cloudflare KV namespace binding
    }

    /**
     * Store a week's generated content
     */
    async saveWeeklyPlan(weekKey, posts) {
        await this.kv.put(`plan:${weekKey}`, JSON.stringify({
            generated: new Date().toISOString(),
            posts,
            posted: []
        }), { expirationTtl: 30 * 24 * 60 * 60 }); // 30 days
    }

    /**
     * Get the current week's plan
     */
    async getCurrentPlan() {
        const weekKey = this._weekKey();
        const raw = await this.kv.get(`plan:${weekKey}`);
        return raw ? JSON.parse(raw) : null;
    }

    /**
     * Get the next unposted item for a platform
     */
    async getNextPost(platform) {
        const plan = await this.getCurrentPlan();
        if (!plan) return null;

        const today = new Date().toLocaleDateString("en-US", { weekday: "long" }).toLowerCase();
        return plan.posts.find(p =>
            p.platform === platform &&
            !plan.posted.includes(p.day + "-" + p.platform) &&
            this._dayMatch(p.day, today)
        );
    }

    /**
     * Mark a post as sent
     */
    async markPosted(platform, day, result) {
        const weekKey = this._weekKey();
        const plan = await this.getCurrentPlan();
        if (!plan) return;

        plan.posted.push(day + "-" + platform);

        // Store the result for analytics
        await this.kv.put(`posted:${weekKey}:${day}:${platform}`, JSON.stringify({
            timestamp: new Date().toISOString(),
            result,
        }), { expirationTtl: 90 * 24 * 60 * 60 }); // 90 days

        await this.kv.put(`plan:${weekKey}`, JSON.stringify(plan));
    }

    /**
     * List all posts from the past N weeks
     */
    async getPostHistory(weeks = 4) {
        const history = [];
        const now = new Date();

        for (let w = 0; w < weeks; w++) {
            const d = new Date(now);
            d.setDate(d.getDate() - (w * 7));
            const weekKey = this._weekKeyFor(d);
            const raw = await this.kv.get(`plan:${weekKey}`);
            if (raw) {
                const plan = JSON.parse(raw);
                history.push({ week: weekKey, ...plan });
            }
        }

        return history;
    }

    _weekKey() {
        return this._weekKeyFor(new Date());
    }

    _weekKeyFor(date) {
        const d = new Date(date);
        const day = d.getDay();
        const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Monday
        d.setDate(diff);
        return d.toISOString().slice(0, 10);
    }

    _dayMatch(planDay, today) {
        const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        return planDay.toLowerCase() === today.toLowerCase() ||
               days.indexOf(planDay.toLowerCase()) <= days.indexOf(today.toLowerCase());
    }
}
