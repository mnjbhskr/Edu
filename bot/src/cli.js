#!/usr/bin/env node
/**
 * CLI for the mathsedu.org Marketing Bot
 *
 * Usage:
 *   node src/cli.js generate              — Generate a week's content
 *   node src/cli.js post twitter           — Generate a single tweet
 *   node src/cli.js post linkedin <topic>  — Generate a LinkedIn post
 *   node src/cli.js campaign <name>        — Plan a campaign
 *   node src/cli.js hn                     — Generate a Hacker News post
 *   node src/cli.js strategy               — Print the current strategy
 */

import { MarketingAgent } from "./agent.js";
import { BRAND, CONTENT_PILLARS, CAMPAIGNS, PLATFORM_GUIDELINES } from "./strategy.js";

const apiKey = process.env.ANTHROPIC_API_KEY;
if (!apiKey) {
    console.error("Error: ANTHROPIC_API_KEY environment variable is required");
    console.error("  export ANTHROPIC_API_KEY=sk-ant-...");
    process.exit(1);
}

const agent = new MarketingAgent(apiKey);
const [command, ...args] = process.argv.slice(2);

async function main() {
    switch (command) {
        case "generate": {
            console.log("Generating weekly content plan...\n");
            const content = await agent.generateWeeklyContent();
            console.log(JSON.stringify(content, null, 2));

            // Also print a human-readable summary
            console.log("\n--- WEEKLY CONTENT PLAN ---\n");
            for (const post of content.posts) {
                console.log(`[${post.day.toUpperCase()}] ${post.platform.toUpperCase()} (${post.pillar})`);
                if (post.title) console.log(`  Title: ${post.title}`);
                console.log(`  ${post.content.slice(0, 120)}${post.content.length > 120 ? "..." : ""}`);
                if (post.hashtags?.length) console.log(`  Tags: ${post.hashtags.join(" ")}`);
                console.log();
            }
            break;
        }

        case "post": {
            const platform = args[0] || "twitter";
            const topic = args.slice(1).join(" ") || "a featured visualisation from mathsedu.org";
            console.log(`Generating ${platform} post about: ${topic}\n`);
            const post = await agent.generatePost(platform, topic);
            console.log(JSON.stringify(post, null, 2));

            console.log("\n--- PREVIEW ---\n");
            if (post.title) console.log(`Title: ${post.title}`);
            console.log(post.content);
            if (post.hashtags?.length) console.log(`\n${post.hashtags.join(" ")}`);
            break;
        }

        case "campaign": {
            const name = args.join(" ") || "Journey Launch";
            console.log(`Planning campaign: ${name}\n`);
            const plan = await agent.planCampaign(name, `Launch campaign for mathsedu.org's new narrative journeys feature. 11 journeys, 44 acts, completely free.`);
            console.log(JSON.stringify(plan, null, 2));

            console.log("\n--- CAMPAIGN PLAN ---\n");
            console.log(`Name: ${plan.name}`);
            console.log(`Goal: ${plan.goal}`);
            console.log(`Duration: ${plan.duration}\n`);
            for (const step of plan.timeline) {
                console.log(`  Day ${step.day} [${step.platform}]: ${step.action}`);
            }
            break;
        }

        case "hn": {
            console.log("Generating Hacker News post...\n");
            const hn = await agent.generateHNPost();
            console.log("--- TITLE ---");
            console.log(hn.title);
            console.log("\n--- FIRST COMMENT ---");
            console.log(hn.comment);
            break;
        }

        case "strategy": {
            console.log("=== MATHSEDU.ORG MARKETING STRATEGY ===\n");
            console.log(`Brand: ${BRAND.name}`);
            console.log(`URL: ${BRAND.url}`);
            console.log(`Tagline: ${BRAND.tagline}`);
            console.log(`Voice: ${BRAND.voice.tone}\n`);

            console.log("--- Content Pillars ---");
            for (const p of CONTENT_PILLARS) {
                console.log(`  ${p.name} (${Math.round(p.share * 100)}%): ${p.description}`);
            }

            console.log("\n--- Target Audiences ---");
            for (const [key, a] of Object.entries(BRAND.audiences)) {
                console.log(`  ${a.name}: ${a.where.join(", ")}`);
                console.log(`    Hook: ${a.hook}`);
            }

            console.log("\n--- Platform Guidelines ---");
            for (const [name, g] of Object.entries(PLATFORM_GUIDELINES)) {
                console.log(`  ${name}: ${g.frequency}, ${g.style.slice(0, 60)}...`);
            }

            console.log("\n--- Active Campaigns ---");
            for (const [key, c] of Object.entries(CAMPAIGNS)) {
                if (typeof c === "object" && c.name) {
                    console.log(`  ${c.name}: ${c.goal || c.frequency || ""}`);
                }
            }
            break;
        }

        default:
            console.log(`mathsedu.org Marketing Bot CLI

Usage:
  node src/cli.js generate              Generate a week's content plan
  node src/cli.js post <platform> [topic]  Generate a single post
  node src/cli.js campaign <name>       Plan a marketing campaign
  node src/cli.js hn                    Generate a Hacker News post
  node src/cli.js strategy              View current marketing strategy

Platforms: twitter, linkedin, reddit

Environment:
  ANTHROPIC_API_KEY  Required. Your Claude API key.

Examples:
  node src/cli.js post twitter "the Mandelbrot Set visualisation"
  node src/cli.js post linkedin "teaching calculus with interactive demos"
  node src/cli.js campaign "Pi Day 2026"
`);
    }
}

main().catch(err => {
    console.error("Error:", err.message);
    process.exit(1);
});
