import { NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const TO_EMAIL = "moniemghazal@gmail.com";
// Resend lets you send from this address without verifying a domain.
const FROM_EMAIL = "Portfolio Contact <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    const data = await request.json().catch(() => null);

    if (!data || !data.email || !data.projectSummary) {
      return NextResponse.json(
        { success: false, message: "Email and project context are required." },
        { status: 400 },
      );
    }

    if (!RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Email is not configured yet. Please email moniemghazal@gmail.com directly for now.",
        },
        { status: 503 },
      );
    }

    const { name, email, company, projectSummary, timeline } = data;

    const bodyText = [
      "New message from your portfolio contact form.",
      "",
      `Name: ${name || "(not provided)"}`,
      `Email: ${email}`,
      `Company: ${company || "(not provided)"}`,
      `Timeline: ${timeline || "(not provided)"}`,
      "",
      "Project context:",
      projectSummary,
    ].join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Portfolio inquiry from ${name || email}`,
        text: bodyText,
      }),
    });

    const text = await res.text();
    let result: { id?: string; message?: string; name?: string };
    try {
      result = JSON.parse(text);
    } catch {
      result = { message: `Email provider returned ${res.status}.` };
    }

    if (res.ok && result.id) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, message: result.message || `Email provider returned ${res.status}.` },
      { status: 502 },
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Server error while sending your message." },
      { status: 500 },
    );
  }
}
