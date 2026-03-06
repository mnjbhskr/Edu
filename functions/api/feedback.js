/**
 * Cloudflare Pages Function — POST /api/feedback
 *
 * Receives feedback form data, stores it in a KV namespace,
 * and optionally sends an email notification via MailChannels
 * (free on Cloudflare Workers).
 *
 * Environment bindings needed (set in Cloudflare dashboard):
 *   - FEEDBACK_KV: KV namespace for storing submissions
 *   - NOTIFY_EMAIL: (optional) email address to receive notifications
 */

export async function onRequestPost(context) {
    const { request, env } = context;

    /* ── CORS headers ── */
    const headers = {
        "Access-Control-Allow-Origin": "https://mathsedu.org",
        "Content-Type": "application/json",
    };

    try {
        const data = await request.json();

        /* Basic validation */
        if (!data.message || data.message.trim().length < 3) {
            return new Response(
                JSON.stringify({ ok: false, error: "Message is required" }),
                { status: 400, headers }
            );
        }

        /* Build feedback record */
        const id = crypto.randomUUID();
        const record = {
            id,
            type: data.type || "general",
            message: data.message.trim().slice(0, 5000),
            page: (data.page || "").slice(0, 200),
            name: (data.name || "").slice(0, 100),
            email: (data.email || "").slice(0, 200),
            phone: (data.phone || "").slice(0, 30),
            timestamp: new Date().toISOString(),
            ip: request.headers.get("CF-Connecting-IP") || "",
            country: request.headers.get("CF-IPCountry") || "",
        };

        /* Store in KV (if bound) */
        if (env.FEEDBACK_KV) {
            await env.FEEDBACK_KV.put(
                `feedback:${record.timestamp}:${id}`,
                JSON.stringify(record),
                { expirationTtl: 365 * 24 * 60 * 60 } /* 1 year */
            );
        }

        /* Send email notification via MailChannels (free on CF Workers) */
        if (env.NOTIFY_EMAIL) {
            try {
                await fetch("https://api.mailchannels.net/tx/v1/send", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        personalizations: [{
                            to: [{ email: env.NOTIFY_EMAIL }],
                        }],
                        from: {
                            email: "noreply@mathsedu.org",
                            name: "mathsedu.org Feedback",
                        },
                        subject: `[Feedback] ${record.type} — ${record.name || "Anonymous"}`,
                        content: [{
                            type: "text/plain",
                            value: [
                                `New feedback received on mathsedu.org`,
                                ``,
                                `Type: ${record.type}`,
                                `Page: ${record.page || "N/A"}`,
                                `Name: ${record.name || "N/A"}`,
                                `Email: ${record.email || "N/A"}`,
                                `Phone: ${record.phone || "N/A"}`,
                                `Country: ${record.country}`,
                                `Time: ${record.timestamp}`,
                                ``,
                                `Message:`,
                                record.message,
                            ].join("\n"),
                        }],
                    }),
                });
            } catch (mailErr) {
                /* Email failure should not block the response */
                console.error("Mail send failed:", mailErr);
            }
        }

        return new Response(
            JSON.stringify({ ok: true, id }),
            { status: 200, headers }
        );

    } catch (err) {
        return new Response(
            JSON.stringify({ ok: false, error: "Invalid request" }),
            { status: 400, headers }
        );
    }
}

/* Handle CORS preflight */
export async function onRequestOptions() {
    return new Response(null, {
        headers: {
            "Access-Control-Allow-Origin": "https://mathsedu.org",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Max-Age": "86400",
        },
    });
}
