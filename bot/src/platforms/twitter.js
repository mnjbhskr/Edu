/**
 * X/Twitter API Integration
 *
 * Posts tweets using Twitter API v2 with OAuth 1.0a user context.
 * Requires: TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET
 */

export class TwitterClient {
    constructor(env) {
        this.apiKey = env.TWITTER_API_KEY;
        this.apiSecret = env.TWITTER_API_SECRET;
        this.accessToken = env.TWITTER_ACCESS_TOKEN;
        this.accessSecret = env.TWITTER_ACCESS_SECRET;
    }

    /**
     * Generate OAuth 1.0a signature for Twitter API
     */
    async _sign(method, url, params = {}) {
        const timestamp = Math.floor(Date.now() / 1000).toString();
        const nonce = crypto.randomUUID().replace(/-/g, "");

        const oauthParams = {
            oauth_consumer_key: this.apiKey,
            oauth_nonce: nonce,
            oauth_signature_method: "HMAC-SHA1",
            oauth_timestamp: timestamp,
            oauth_token: this.accessToken,
            oauth_version: "1.0",
            ...params
        };

        const sortedParams = Object.keys(oauthParams).sort()
            .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(oauthParams[k])}`)
            .join("&");

        const baseString = `${method}&${encodeURIComponent(url)}&${encodeURIComponent(sortedParams)}`;
        const signingKey = `${encodeURIComponent(this.apiSecret)}&${encodeURIComponent(this.accessSecret)}`;

        const key = await crypto.subtle.importKey(
            "raw",
            new TextEncoder().encode(signingKey),
            { name: "HMAC", hash: "SHA-1" },
            false,
            ["sign"]
        );
        const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(baseString));
        const signature = btoa(String.fromCharCode(...new Uint8Array(sig)));

        return `OAuth oauth_consumer_key="${encodeURIComponent(this.apiKey)}", ` +
            `oauth_nonce="${nonce}", ` +
            `oauth_signature="${encodeURIComponent(signature)}", ` +
            `oauth_signature_method="HMAC-SHA1", ` +
            `oauth_timestamp="${timestamp}", ` +
            `oauth_token="${encodeURIComponent(this.accessToken)}", ` +
            `oauth_version="1.0"`;
    }

    /**
     * Post a tweet
     */
    async postTweet(text) {
        const url = "https://api.twitter.com/2/tweets";
        const auth = await this._sign("POST", url);

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": auth,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text }),
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(`Twitter API error ${response.status}: ${error}`);
        }

        return response.json();
    }

    /**
     * Post a thread (array of tweets)
     */
    async postThread(tweets) {
        let lastTweetId = null;
        const results = [];

        for (const text of tweets) {
            const url = "https://api.twitter.com/2/tweets";
            const auth = await this._sign("POST", url);

            const body = { text };
            if (lastTweetId) {
                body.reply = { in_reply_to_tweet_id: lastTweetId };
            }

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Authorization": auth,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                const error = await response.text();
                throw new Error(`Twitter thread error at tweet ${results.length + 1}: ${error}`);
            }

            const result = await response.json();
            lastTweetId = result.data.id;
            results.push(result);
        }

        return results;
    }

    /**
     * Get engagement metrics for recent tweets
     */
    async getMetrics(userId, count = 10) {
        const url = `https://api.twitter.com/2/users/${userId}/tweets?max_results=${count}&tweet.fields=public_metrics`;
        const auth = await this._sign("GET", url);

        const response = await fetch(url, {
            headers: { "Authorization": auth },
        });

        if (!response.ok) return null;
        return response.json();
    }
}
