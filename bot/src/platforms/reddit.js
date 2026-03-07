/**
 * Reddit API Integration
 *
 * Posts to subreddits using Reddit's OAuth2 API.
 * Requires: REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, REDDIT_USERNAME, REDDIT_PASSWORD
 */

export class RedditClient {
    constructor(env) {
        this.clientId = env.REDDIT_CLIENT_ID;
        this.clientSecret = env.REDDIT_CLIENT_SECRET;
        this.username = env.REDDIT_USERNAME;
        this.password = env.REDDIT_PASSWORD;
        this.accessToken = null;
        this.userAgent = "mathsedu-bot/1.0 (by /u/" + (env.REDDIT_USERNAME || "mathsedu") + ")";
    }

    /**
     * Authenticate with Reddit API
     */
    async authenticate() {
        const auth = btoa(`${this.clientId}:${this.clientSecret}`);
        const response = await fetch("https://www.reddit.com/api/v1/access_token", {
            method: "POST",
            headers: {
                "Authorization": `Basic ${auth}`,
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": this.userAgent,
            },
            body: `grant_type=password&username=${encodeURIComponent(this.username)}&password=${encodeURIComponent(this.password)}`,
        });

        if (!response.ok) {
            throw new Error(`Reddit auth failed: ${response.status}`);
        }

        const data = await response.json();
        this.accessToken = data.access_token;
        return data;
    }

    /**
     * Submit a link post to a subreddit
     */
    async submitLink(subreddit, title, url) {
        if (!this.accessToken) await this.authenticate();

        const response = await fetch("https://oauth.reddit.com/api/submit", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${this.accessToken}`,
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": this.userAgent,
            },
            body: `kind=link&sr=${encodeURIComponent(subreddit)}&title=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&resubmit=true`,
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(`Reddit submit error: ${error}`);
        }

        return response.json();
    }

    /**
     * Submit a text (self) post to a subreddit
     */
    async submitText(subreddit, title, text) {
        if (!this.accessToken) await this.authenticate();

        const response = await fetch("https://oauth.reddit.com/api/submit", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${this.accessToken}`,
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": this.userAgent,
            },
            body: `kind=self&sr=${encodeURIComponent(subreddit)}&title=${encodeURIComponent(title)}&text=${encodeURIComponent(text)}`,
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(`Reddit submit error: ${error}`);
        }

        return response.json();
    }

    /**
     * Get karma and post metrics
     */
    async getUserMetrics() {
        if (!this.accessToken) await this.authenticate();

        const response = await fetch(`https://oauth.reddit.com/user/${this.username}/submitted?limit=25`, {
            headers: {
                "Authorization": `Bearer ${this.accessToken}`,
                "User-Agent": this.userAgent,
            },
        });

        if (!response.ok) return null;
        const data = await response.json();

        return data.data.children.map(post => ({
            title: post.data.title,
            subreddit: post.data.subreddit,
            score: post.data.score,
            comments: post.data.num_comments,
            url: post.data.url,
            created: new Date(post.data.created_utc * 1000).toISOString(),
        }));
    }
}
