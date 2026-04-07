import { NextRequest, NextResponse } from "next/server";
import { listingsQuerySchema } from "@/lib/validators";

type Listing = {
  id: string;
  name: string;
  location: string;
  type: string;
  guests: number;
  beds: number;
  baths: number;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  amenities: string[];
  imageAlt: string;
};

const LISTINGS: Listing[] = [
  {
    id: "LIS-ALF-LOFT-01",
    name: "Sunny Alfama Loft w/ River View",
    location: "Lisbon, Portugal",
    type: "Entire apartment",
    guests: 2,
    beds: 1,
    baths: 1,
    pricePerNight: 149,
    rating: 4.91,
    reviewCount: 312,
    amenities: ["Fast Wi‑Fi", "Kitchen", "Washer", "Self check-in"],
    imageAlt: "Bright loft interior with balcony and river view",
  },
  {
    id: "KYO-GION-MACHIYA-02",
    name: "Gion Garden Townhouse (Machiya)",
    location: "Kyoto, Japan",
    type: "Entire home",
    guests: 4,
    beds: 2,
    baths: 1,
    pricePerNight: 219,
    rating: 4.95,
    reviewCount: 198,
    amenities: ["Garden patio", "Tea set", "Heating", "Quiet street"],
    imageAlt: "Traditional Japanese townhouse with small garden courtyard",
  },
  {
    id: "TUL-JUNG-VILLA-03",
    name: "Jungle Villa w/ Plunge Pool + Bikes",
    location: "Tulum, Mexico",
    type: "Entire villa",
    guests: 6,
    beds: 3,
    baths: 2,
    pricePerNight: 289,
    rating: 4.87,
    reviewCount: 146,
    amenities: ["Pool", "A/C", "Outdoor shower", "Free parking"],
    imageAlt: "Modern jungle villa with plunge pool and lush greenery",
  },
  {
    id: "ICE-REY-DESIGN-04",
    name: "Design Studio Near Harbor + Hot Tub Access",
    location: "Reykjavík, Iceland",
    type: "Private studio",
    guests: 2,
    beds: 1,
    baths: 1,
    pricePerNight: 239,
    rating: 4.89,
    reviewCount: 221,
    amenities: ["Blackout shades", "Heated floors", "Coffee bar", "Hot tub access"],
    imageAlt: "Minimal Scandinavian studio with warm lighting",
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = {
      location: searchParams.get("location") ?? undefined,
      guests: searchParams.get("guests") ?? undefined,
    };

    const parsed = listingsQuerySchema.safeParse(query);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid query parameters",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { location, guests } = parsed.data;

    let filtered = [...LISTINGS];

    if (location) {
      const locationLower = location.toLowerCase();
      filtered = filtered.filter((listing) =>
        listing.location.toLowerCase().includes(locationLower)
      );
    }

    if (guests) {
      filtered = filtered.filter((listing) => listing.guests >= guests);
    }

    return NextResponse.json(
      {
        success: true,
        data: filtered,
        meta: {
          total: filtered.length,
          filters: {
            location: location ?? null,
            guests: guests ?? null,
          },
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[LISTINGS_GET_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
