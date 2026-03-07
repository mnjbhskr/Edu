/**
 * LinkedIn API Integration
 *
 * Posts articles and updates using LinkedIn Marketing API.
 * Requires: LINKEDIN_ACCESS_TOKEN, LINKEDIN_PERSON_URN
 */

export class LinkedInClient {
    constructor(env) {
        this.accessToken = env.LINKEDIN_ACCESS_TOKEN;
        this.personUrn = env.LINKEDIN_PERSON_URN; // "urn:li:person:XXXX"
    }

    /**
     * Create a text post on LinkedIn
     */
    async createPost(text, articleUrl = null) {
        const body = {
            author: this.personUrn,
            lifecycleState: "PUBLISHED",
            specificContent: {
                "com.linkedin.ugc.ShareContent": {
                    shareCommentary: { text },
                    shareMediaCategory: articleUrl ? "ARTICLE" : "NONE",
                }
            },
            visibility: {
                "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
            }
        };

        if (articleUrl) {
            body.specificContent["com.linkedin.ugc.ShareContent"].media = [{
                status: "READY",
                originalUrl: articleUrl,
            }];
        }

        const response = await fetch("https://api.linkedin.com/v2/ugcPosts", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${this.accessToken}`,
                "Content-Type": "application/json",
                "X-Restli-Protocol-Version": "2.0.0",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(`LinkedIn API error ${response.status}: ${error}`);
        }

        return response.json();
    }

    /**
     * Get engagement on recent posts
     */
    async getPostAnalytics(postUrn) {
        const url = `https://api.linkedin.com/v2/socialActions/${encodeURIComponent(postUrn)}`;

        const response = await fetch(url, {
            headers: {
                "Authorization": `Bearer ${this.accessToken}`,
                "X-Restli-Protocol-Version": "2.0.0",
            },
        });

        if (!response.ok) return null;
        return response.json();
    }
}
