export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface Listing {
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
  imageUrl?: string;
}

export interface Experience {
  name: string;
  city: string;
  duration: string;
  pricePerPerson: number;
  rating: number;
  reviewCount: number;
  includes: string[];
  imageUrl?: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  stay?: string;
  rating: number;
}
