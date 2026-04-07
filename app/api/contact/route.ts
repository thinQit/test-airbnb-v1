import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    console.log("[CONTACT_SUBMISSION]", {
      ...parsed.data,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thanks—your message has been sent. We’ll reply to your email as soon as possible.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT_POST_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
