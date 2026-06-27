import { NextResponse } from "next/server";

// TODO: Wire to Formspree, Resend, or your preferred form handler.
// Set FORMSPREE_ENDPOINT or similar env var in production.

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Replace with actual form submission
    // Example Formspree:
    // await fetch(process.env.FORMSPREE_ENDPOINT!, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ name, email, message }),
    // });

    if (process.env.NODE_ENV === "development") {
      console.log("[contact]", { name, email, message });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
