import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Allowed project type options
const ALLOWED_PROJECT_TYPES = [
  "AI Solution",
  "Software Development",
  "Website / Web Solution",
  "Automation",
  "SEO / Digital Growth",
  "Research / Product Development",
  "Other",
] as const;

// In-memory sliding window rate limiter
// Limits IP to max 5 requests per 10 minutes
const ipRateMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipRateMap.get(ip) || [];

  // Filter out timestamps outside current window
  const validTimestamps = timestamps.filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS
  );

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  validTimestamps.push(now);
  ipRateMap.set(ip, validTimestamps);
  return true;
}

// Basic HTML sanitization to prevent XSS in email preview
function sanitize(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(req: NextRequest) {
  try {
    // 1. Rate limiting check
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Too many requests. Please wait a few minutes before submitting again.",
        },
        { status: 429 }
      );
    }

    // 2. Read request body safely
    let body: any;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid JSON request payload." },
        { status: 400 }
      );
    }

    const { name, email, company, projectType, message, _gotcha } = body || {};

    // 3. Honeypot check (anti-spam decoy)
    if (_gotcha && String(_gotcha).trim().length > 0) {
      // Decoy success response for bots
      return NextResponse.json({
        success: true,
        message: "Thank you for your inquiry.",
      });
    }

    // 4. Server-side validation
    const errors: Record<string, string> = {};

    const cleanName = typeof name === "string" ? name.trim() : "";
    const cleanEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
    const cleanCompany = typeof company === "string" ? company.trim() : "";
    const cleanProjectType = typeof projectType === "string" ? projectType.trim() : "";
    const cleanMessage = typeof message === "string" ? message.trim() : "";

    if (!cleanName || cleanName.length < 2 || cleanName.length > 100) {
      errors.name = "Name must be between 2 and 100 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail) || cleanEmail.length > 150) {
      errors.email = "Please provide a valid email address.";
    }

    if (cleanCompany.length > 100) {
      errors.company = "Company name cannot exceed 100 characters.";
    }

    if (
      !cleanProjectType ||
      !ALLOWED_PROJECT_TYPES.includes(cleanProjectType as any)
    ) {
      errors.projectType = "Please select a valid project type.";
    }

    if (!cleanMessage || cleanMessage.length < 10 || cleanMessage.length > 3000) {
      errors.message = "Project description must be between 10 and 3,000 characters.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please check your form inputs.",
          errors,
        },
        { status: 400 }
      );
    }

    // 5. Email Service Processing (Resend Integration)
    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail =
      process.env.CONTACT_TO_EMAIL || "linsera.solutions@gmail.com";
    const senderEmail =
      process.env.CONTACT_FROM_EMAIL ||
      "LinSera Contact Form <onboarding@resend.dev>";

    const sanitizedName = sanitize(cleanName);
    const sanitizedCompany = cleanCompany ? sanitize(cleanCompany) : "N/A";
    const sanitizedMessageType = sanitize(cleanProjectType);
    const sanitizedMessage = sanitize(cleanMessage);
    const timestamp = new Date().toISOString();

    if (apiKey) {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: senderEmail,
          to: [recipientEmail],
          reply_to: cleanEmail,
          subject: `New Project Inquiry — ${sanitizedMessageType}`,
          text: `New Project Inquiry\n\nName: ${cleanName}\nEmail: ${cleanEmail}\nCompany: ${cleanCompany || "N/A"}\nProject Type: ${cleanProjectType}\nSubmitted: ${timestamp}\n\nProject Description:\n----------------------------------------\n${cleanMessage}\n----------------------------------------\n`,
          html: `
            <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; color: #0F172A; line-height: 1.6;">
              <div style="background-color: #07111F; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
                <h2 style="color: #FFFFFF; margin: 0; font-size: 20px;">LinSera Solutions</h2>
                <p style="color: #3B82F6; margin: 4px 0 0 0; font-size: 13px;">New Project Inquiry</p>
              </div>
              <div style="padding: 32px; border: 1px solid #E2E8F0; border-top: none; border-radius: 0 0 8px 8px; background-color: #FFFFFF;">
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                  <tr>
                    <td style="padding: 8px 0; color: #475569; font-weight: 600; width: 140px;">Name:</td>
                    <td style="padding: 8px 0; color: #0F172A;">${sanitizedName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #475569; font-weight: 600;">Email:</td>
                    <td style="padding: 8px 0; color: #2563EB;"><a href="mailto:${cleanEmail}" style="color: #2563EB;">${cleanEmail}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #475569; font-weight: 600;">Company:</td>
                    <td style="padding: 8px 0; color: #0F172A;">${sanitizedCompany}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #475569; font-weight: 600;">Project Type:</td>
                    <td style="padding: 8px 0; color: #2563EB; font-weight: 600;">${sanitizedMessageType}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #475569; font-weight: 600;">Submitted:</td>
                    <td style="padding: 8px 0; color: #64748B; font-size: 13px;">${timestamp}</td>
                  </tr>
                </table>
                <div style="border-top: 1px solid #E2E8F0; pt: 20px;">
                  <p style="font-weight: 600; color: #475569; margin: 16px 0 8px 0;">Project Description:</p>
                  <div style="background-color: #F4F7FB; padding: 16px; border-radius: 6px; border: 1px solid #E2E8F0; white-space: pre-wrap; font-size: 14px;">${sanitizedMessage}</div>
                </div>
              </div>
            </div>
          `,
        }),
      });

      if (!emailRes.ok) {
        console.error("Resend Email API error:", await emailRes.text());
        return NextResponse.json(
          {
            success: false,
            message:
              "We couldn't send your inquiry right now. Please try again or email us directly at linsera.solutions@gmail.com.",
          },
          { status: 500 }
        );
      }
    } else {
      // API key not configured yet — fallback graceful logging
      console.log(
        "[LinSera Contact API] Submission received (RESEND_API_KEY missing):",
        { name: cleanName, email: cleanEmail, projectType: cleanProjectType }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out. We've received your inquiry and will get back to you soon.",
    });
  } catch (error) {
    console.error("[LinSera Contact API Exception]:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "We couldn't send your inquiry right now. Please try again or email us directly at linsera.solutions@gmail.com.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { success: false, message: "Method Not Allowed. Use POST." },
    { status: 405 }
  );
}
