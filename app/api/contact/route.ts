import { NextResponse } from "next/server";

const ACCESS_KEY =
  process.env.WEB3FORMS_ACCESS_KEY ||
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "c3529407-f9f7-4616-b81d-5db8e6bd05b4";

export async function POST(request: Request) {
  try {
    const data = await request.json().catch(() => null);

    if (!data || !data.email || !data.projectSummary) {
      return NextResponse.json(
        { success: false, message: "Email and project context are required." },
        { status: 400 },
      );
    }

    const { name, email, company, projectSummary, timeline } = data;

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: projectSummary
          ? `Portfolio inquiry: ${String(projectSummary).slice(0, 60)}`
          : "New freelance inquiry from your portfolio",
        from_name: name || "Portfolio visitor",
        name,
        email,
        company,
        timeline,
        message: projectSummary,
      }),
    });

    const text = await res.text();
    let result: { success?: boolean; message?: string };
    try {
      result = JSON.parse(text);
    } catch {
      result = {
        success: false,
        message: `Email provider returned ${res.status}. ${text.slice(0, 160)}`.trim(),
      };
    }

    return NextResponse.json(result, { status: result.success ? 200 : 502 });
  } catch {
    return NextResponse.json(
      { success: false, message: "Server error while sending your message." },
      { status: 500 },
    );
  }
}
