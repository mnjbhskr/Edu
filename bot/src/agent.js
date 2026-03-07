/**
 * Core Marketing Agent — powered by Claude
 *
 * Generates platform-specific content, reviews analytics,
 * and adjusts strategy based on engagement data.
 */

import Anthropic from "@anthropic-ai/sdk";
import { getAgentSystemPrompt, CONTENT_PILLARS, PLATFORM_GUIDELINES, CAMPAIGNS } from "./strategy.js";

export class MarketingAgent {
    constructor(apiKey) {
        this.client = new Anthropic({ apiKey });
        this.systemPrompt = getAgentSystemPrompt();
    }

    /**
     * Generate a batch of social media posts for the week
     */
    async generateWeeklyContent(analyticsContext = "") {
        const prompt = `Generate a week's worth of social media content for mathsedu.org.

Create content for Monday through Friday:
- 1 Twitter/X post per day (max 280 chars, include relevant hashtag)
- 2 LinkedIn posts for the week (longer form, professional)
- 1 Reddit post (genuine, helpful, for r/learnmath or r/matheducation)

${analyticsContext ? `RECENT ANALYTICS (use this to inform your content choices):\n${analyticsContext}\n` : ""}

For each post, output JSON in this exact format:
{
  "posts": [
    {
      "platform": "twitter|linkedin|reddit",
      "day": "monday|tuesday|...",
      "pillar": "wonder|demo|journey|education",
      "content": "The post text",
      "hashtags": ["#tag1"],
      "subreddit": "r/learnmath",  // only for reddit
      "title": "Post title",       // only for reddit/linkedin
      "scheduledTime": "09:00"
    }
  ]
}

Make each post unique and engaging. Reference specific mathsedu.org pages or journeys.
Vary the content pillars across the week.`;

        const response = await this.client.messages.create({
            model: "claude-sonnet-4-20250514",
            max_tokens: 4000,
            system: this.systemPrompt,
            messages: [{ role: "user", content: prompt }]
        });

        const text = response.content[0].text;
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error("Failed to parse content JSON");
        return JSON.parse(jsonMatch[0]);
    }

    /**
     * Generate a single post for a specific platform and topic
     */
    async generatePost(platform, topic, context = "") {
        const guidelines = PLATFORM_GUIDELINES[platform];
        const prompt = `Generate a single ${platform} post about: ${topic}

Platform guidelines:
- Max length: ${guidelines.maxLength || "no limit"} characters
- Style: ${guidelines.style}
- Hashtags to consider: ${guidelines.hashtags?.join(", ") || "none"}
- CTA approach: ${guidelines.cta}

${context ? `Additional context: ${context}` : ""}

Return JSON:
{
  "content": "The post text",
  "hashtags": ["#tag1"],
  "title": "Title if needed",
  "pillar": "wonder|demo|journey|education",
  "altText": "Image alt text if a screenshot should accompany this"
}`;

        const response = await this.client.messages.create({
            model: "claude-sonnet-4-20250514",
            max_tokens: 1500,
            system: this.systemPrompt,
            messages: [{ role: "user", content: prompt }]
        });

        const text = response.content[0].text;
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error("Failed to parse post JSON");
        return JSON.parse(jsonMatch[0]);
    }

    /**
     * Review analytics and recommend strategy adjustments
     */
    async reviewAnalytics(metrics) {
        const prompt = `Review these engagement metrics and recommend strategy adjustments:

${JSON.stringify(metrics, null, 2)}

Analyse:
1. Which content pillars are performing best?
2. Which platforms are driving the most engagement?
3. What topics resonate most with our audience?
4. What should we do more of? Less of?
5. Any campaign ideas based on the data?

Return JSON:
{
  "summary": "One paragraph summary",
  "topPerforming": { "pillar": "", "platform": "", "topic": "" },
  "recommendations": ["recommendation 1", "..."],
  "nextWeekFocus": "Brief description of next week's content focus",
  "campaignIdea": { "name": "", "description": "", "platform": "" }
}`;

        const response = await this.client.messages.create({
            model: "claude-sonnet-4-20250514",
            max_tokens: 2000,
            system: this.systemPrompt,
            messages: [{ role: "user", content: prompt }]
        });

        const text = response.content[0].text;
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error("Failed to parse analytics JSON");
        return JSON.parse(jsonMatch[0]);
    }

    /**
     * Generate a campaign plan for a specific event or launch
     */
    async planCampaign(eventName, details) {
        const prompt = `Plan a marketing campaign for: ${eventName}

Details: ${details}

Create a detailed campaign plan with:
- 2-week timeline with daily actions
- Platform-specific content for each day
- Key metrics to track
- Budget considerations (we operate on $0 budget — organic only)

Return JSON:
{
  "name": "${eventName}",
  "goal": "Specific measurable goal",
  "duration": "X days",
  "timeline": [
    { "day": 1, "platform": "twitter", "action": "...", "content": "Draft post text" }
  ],
  "metrics": ["metric 1"],
  "risks": ["risk 1"]
}`;

        const response = await this.client.messages.create({
            model: "claude-sonnet-4-20250514",
            max_tokens: 4000,
            system: this.systemPrompt,
            messages: [{ role: "user", content: prompt }]
        });

        const text = response.content[0].text;
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error("Failed to parse campaign JSON");
        return JSON.parse(jsonMatch[0]);
    }

    /**
     * Generate a Hacker News "Show HN" post
     */
    async generateHNPost() {
        const prompt = `Write a "Show HN" post for Hacker News about mathsedu.org.

The HN audience values:
- Technical merit (pure HTML/JS, no frameworks)
- Genuine passion projects
- Educational value
- Clean design

Write the title (under 80 chars) and the comment text (the first comment the author posts explaining the project). Be authentic, humble, and technically interesting.

Return JSON:
{
  "title": "Show HN: ...",
  "comment": "The explanatory first comment (2-3 paragraphs)"
}`;

        const response = await this.client.messages.create({
            model: "claude-sonnet-4-20250514",
            max_tokens: 1500,
            system: this.systemPrompt,
            messages: [{ role: "user", content: prompt }]
        });

        const text = response.content[0].text;
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error("Failed to parse HN post JSON");
        return JSON.parse(jsonMatch[0]);
    }
}
