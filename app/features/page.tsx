export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight"
import ListingsGrid from "@/components/ListingsGrid"
import CTASection from "@/components/CTASection"
import Section from "@/components/Section"
import Container from "@/components/Container"
import ExperienceCard from "@/components/ExperienceCard"
import ScrollReveal from "@/components/ScrollReveal"

export default function FeaturesPage() {
  return (
    <main>
      <HeroSpotlight
        title="Featured stays and experiences—curated for comfort"
        subtitle="Browse standout listings and book experiences led by locals. Filter by amenities, style, and trip type."
        primaryCta={{ label: "View pricing", href: "/pricing" }}
        secondaryCta={{ label: "Contact travel support", href: "/contact" }}
      />

      <ScrollReveal>
        <Section className="animate-fade-in-up py-24 md:py-28 bg-background">
          <Container>
            <ListingsGrid
              headline="Featured listings"
              subheadline="A mix of city stays, beach escapes, and nature retreats—each with standout reviews."
              primaryCta={{ label: "Start a search", href: "/#search" }}
              secondaryCta={{ label: "Become a host", href: "/host" }}
              listings={[
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
                  imageSrc:
                    "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576912/site-images/corporate/10384120.jpg",
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
                  imageSrc:
                    "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576897/site-images/corporate/10041273.jpg",
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
                  imageSrc:
                    "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576884/site-images/corporate/10347510.jpg",
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
                  imageSrc:
                    "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576911/site-images/corporate/11408874.jpg",
                  imageAlt: "Minimal Scandinavian studio with warm lighting",
                },
              ]}
            />
          </Container>
        </Section>
      </ScrollReveal>

      <ScrollReveal>
        <Section className="animate-fade-in-up py-24 md:py-28 bg-muted">
          <Container>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold">Experiences led by locals</h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-3xl">
                Book hands-on activities that fit your schedule—food, culture, nature, and wellness.
              </p>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                <ExperienceCard
                  name="Lisbon Street Food Walk"
                  city="Lisbon"
                  duration="3 hours"
                  pricePerPerson={59}
                  rating={4.88}
                  reviewCount={920}
                  includes={["6 tastings", "Local guide", "Neighborhood map"]}
                  imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576893/site-images/corporate/10041276.jpg"
                />
                <ExperienceCard
                  name="Kyoto Tea Ceremony in Gion"
                  city="Kyoto"
                  duration="1.5 hours"
                  pricePerPerson={49}
                  rating={4.92}
                  reviewCount={1380}
                  includes={["Tea + sweets", "Etiquette lesson", "Photo time"]}
                  imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577712/site-images/hero-backgrounds/12981878.jpg"
                />
                <ExperienceCard
                  name="Golden Circle + Hot Springs"
                  city="Reykjavík"
                  duration="10 hours"
                  pricePerPerson={129}
                  rating={4.86}
                  reviewCount={640}
                  includes={["Transport", "Stops at key sites", "Hot springs entry"]}
                  imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577714/site-images/hero-backgrounds/1279813.jpg"
                />
              </div>
            </div>
          </Container>
        </Section>
      </ScrollReveal>

      <ScrollReveal>
        <Section className="animate-fade-in-up py-24 md:py-28 bg-background">
          <Container>
            <CTASection
              headline="Ready to plan your trip?"
              subheadline="Save favorites, compare listings, and reach out if you want help choosing the right neighborhood."
              primaryCta={{ label: "Contact Airbnb Travel", href: "/contact" }}
              secondaryCta={{ label: "View pricing", href: "/pricing" }}
              leftBullets={[
                "Fast response from travel support",
                "Tips for families, remote work, and longer stays",
                "Group trip planning available",
              ]}
              imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577737/site-images/hero-backgrounds/12966912.jpg"
            />
          </Container>
        </Section>
      </ScrollReveal>
    </main>
  )
}
