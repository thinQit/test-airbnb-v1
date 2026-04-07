import { NextResponse } from "next/server";

const EXPERIENCES = [
  {
    name: "Lisbon Street Food Walk",
    city: "Lisbon",
    duration: "3 hours",
    pricePerPerson: 59,
    rating: 4.88,
    reviewCount: 920,
    includes: ["6 tastings", "Local guide", "Neighborhood map"],
  },
  {
    name: "Kyoto Tea Ceremony in Gion",
    city: "Kyoto",
    duration: "1.5 hours",
    pricePerPerson: 49,
    rating: 4.92,
    reviewCount: 1380,
    includes: ["Tea + sweets", "Etiquette lesson", "Photo time"],
  },
  {
    name: "Golden Circle + Hot Springs",
    city: "Reykjavík",
    duration: "10 hours",
    pricePerPerson: 129,
    rating: 4.86,
    reviewCount: 640,
    includes: ["Transport", "Stops at key sites", "Hot springs entry"],
  },
];

export async function GET() {
  try {
    return NextResponse.json(
      {
        success: true,
        data: EXPERIENCES,
        meta: {
          total: EXPERIENCES.length,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[EXPERIENCES_GET_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
