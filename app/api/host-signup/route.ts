import { NextRequest, NextResponse } from "next/server";
import { hostSignupSchema } from "@/lib/validators";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = hostSignupSchema.safeParse(body);

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

    console.log("[HOST_SIGNUP_SUBMISSION]", {
      ...parsed.data,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thanks—your host interest was received. We’ll email setup tips and next steps.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[HOST_SIGNUP_POST_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
