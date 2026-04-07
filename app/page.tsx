export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight"
import DestinationGrid from "@/components/DestinationGrid"
import SearchForm from "@/components/SearchForm"
import ItineraryAccordion from "@/components/ItineraryAccordion"
import TestimonialsCarousel from "@/components/TestimonialsCarousel"
import TipsBlogGrid from "@/components/TipsBlogGrid"
import NewsletterForm from "@/components/NewsletterForm"
import ScrollReveal from "@/components/ScrollReveal"
import Section from "@/components/Section"
import Container from "@/components/Container"

export default function HomePage() {
  return (
    <main>
      <HeroSpotlight
        title="Book unique stays and local experiences—anywhere you want to go"
        subtitle="From beach bungalows to city lofts, discover places that feel like home. Flexible dates, transparent pricing, and hosts who care."
        primaryCta={{ label: "Explore featured stays", href: "/#featured" }}
        secondaryCta={{ label: "Become a host", href: "/host" }}
      />

      <ScrollReveal>
        <Section className="animate-fade-in-up py-24 md:py-28 bg-background" id="featured">
          <Container>
            <DestinationGrid
              headline="Popular destinations for your next getaway"
              subheadline="Handpicked places with great stays, walkable neighborhoods, and unforgettable views."
              primaryCta={{ label: "See all destinations", href: "/features" }}
              secondaryCta={{ label: "Search stays", href: "/#search" }}
              destinations={[
                {
                  name: "Lisbon, Portugal",
                  tagline: "Tiles, trams, and sunset viewpoints",
                  fromPricePerNight: 129,
                  imageSrc:
                    "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576876/site-images/corporate/1181252.jpg",
                  imageAlt: "Colorful Lisbon street with tram and pastel buildings",
                  highlights: ["Alfama & Baixa", "Day trips to Sintra", "Food markets"],
                },
                {
                  name: "Kyoto, Japan",
                  tagline: "Temples, tea houses, and quiet lanes",
                  fromPricePerNight: 158,
                  imageSrc:
                    "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576897/site-images/corporate/10041267.jpg",
                  imageAlt: "Traditional Kyoto street with lanterns and wooden facades",
                  highlights: ["Gion evenings", "Arashiyama bamboo", "Seasonal gardens"],
                },
                {
                  name: "Tulum, Mexico",
                  tagline: "Beach mornings and cenote swims",
                  fromPricePerNight: 179,
                  imageSrc:
                    "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576895/site-images/corporate/10041266.jpg",
                  imageAlt: "Tulum beach with turquoise water and palm trees",
                  highlights: ["Beach clubs", "Cenotes", "Mayan ruins"],
                },
                {
                  name: "Reykjavík, Iceland",
                  tagline: "Northern lights and geothermal escapes",
                  fromPricePerNight: 205,
                  imageSrc:
                    "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576892/site-images/corporate/1181305.jpg",
                  imageAlt: "Reykjavik skyline with colorful rooftops and mountains",
                  highlights: ["Golden Circle", "Hot springs", "Winter auroras"],
                },
              ]}
            />
          </Container>
        </Section>
      </ScrollReveal>

      <ScrollReveal>
        <Section className="animate-fade-in-up py-24 md:py-28 bg-muted" id="search">
          <Container>
            <SearchForm
              headline="Search stays by destination, dates, and guests"
              subheadline="Quickly find the right place—then filter by amenities, neighborhoods, and booking flexibility."
              primaryCta={{ label: "Search stays", href: "/features" }}
              secondaryCta={{ label: "View pricing", href: "/pricing" }}
              fields={[
                {
                  name: "location",
                  label: "Where",
                  placeholder: "Try “Lisbon” or “Kyoto”",
                  type: "combobox",
                  suggestions: [
                    "Lisbon, Portugal",
                    "Kyoto, Japan",
                    "Tulum, Mexico",
                    "Reykjavík, Iceland",
                    "Austin, Texas",
                    "Paris, France",
                  ],
                },
                { name: "checkIn", label: "Check-in", placeholder: "Select date", type: "date" },
                { name: "checkOut", label: "Check-out", placeholder: "Select date", type: "date" },
                { name: "guests", label: "Guests", placeholder: "2 adults", type: "stepper", min: 1, max: 16 },
              ]}
            />
          </Container>
        </Section>
      </ScrollReveal>

      <ScrollReveal>
        <Section className="animate-fade-in-up py-24 md:py-28 bg-background">
          <Container>
            <ItineraryAccordion
              headline="Trip ideas built around real neighborhoods"
              subheadline="Use these itineraries to plan a weekend (or a week) with stays and experiences that fit your pace."
              primaryCta={{ label: "Browse experiences", href: "/features" }}
              secondaryCta={{ label: "Contact travel support", href: "/contact" }}
              itineraries={[
                {
                  title: "Lisbon in 3 days",
                  duration: "3 days",
                  bestFor: "Food + viewpoints",
                  days: [
                    {
                      day: "Day 1",
                      plan: [
                        "Check in near Baixa/Chiado for walkability",
                        "Pastéis tasting + coffee at a local pastelaria",
                        "Sunset at Miradouro da Senhora do Monte",
                      ],
                    },
                    {
                      day: "Day 2",
                      plan: ["Tram ride through Alfama", "Fado dinner reservation", "Late-night stroll along the Tagus river"],
                    },
                    {
                      day: "Day 3",
                      plan: ["Half-day trip to Sintra", "Return for Time Out Market dinner", "Pack up with a morning bakery stop"],
                    },
                  ],
                },
                {
                  title: "Tulum: beach + cenotes",
                  duration: "4 days",
                  bestFor: "Relaxed adventure",
                  days: [
                    {
                      day: "Day 1",
                      plan: [
                        "Arrive and settle into a jungle villa",
                        "Bike to the beach road for dinner",
                        "Early night for sunrise swim",
                      ],
                    },
                    {
                      day: "Day 2",
                      plan: ["Cenote tour with a local guide", "Tacos al pastor lunch stop", "Evening yoga or sound bath"],
                    },
                    {
                      day: "Day 3",
                      plan: ["Sian Ka’an boat excursion", "Fresh seafood dinner", "Stargazing on the beach"],
                    },
                    {
                      day: "Day 4",
                      plan: ["Brunch + souvenir market", "Checkout and airport transfer", "Save your favorites for next time"],
                    },
                  ],
                },
              ]}
            />
          </Container>
        </Section>
      </ScrollReveal>

      <ScrollReveal>
        <Section className="animate-fade-in-up py-24 md:py-28 bg-muted">
          <Container>
            <TestimonialsCarousel
              headline="Travelers love the little details"
              subheadline="Real reviews from guests who booked stays and experiences for their trips."
              primaryCta={{ label: "See featured listings", href: "/features" }}
              secondaryCta={{ label: "Become a host", href: "/host" }}
              testimonials={[
                {
                  quote:
                    "The Lisbon apartment was exactly as pictured—bright, quiet at night, and steps from everything. The host’s local bakery list was gold.",
                  name: "Maya R.",
                  designation: "Toronto, Canada",
                  src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577370/site-images/team-people/1181405.jpg",
                },
                {
                  quote:
                    "We booked a Kyoto machiya and a tea ceremony experience. Both were seamless, and the itinerary suggestions made planning effortless.",
                  name: "Kenji S.",
                  designation: "Osaka, Japan",
                  src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577335/site-images/team-people/1181734.jpg",
                },
                {
                  quote:
                    "Tulum was a dream. The cenote tour was the highlight, and the stay had a perfect outdoor shower setup—super private and clean.",
                  name: "Alicia P.",
                  designation: "San Diego, USA",
                  src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577321/site-images/team-people/1181622.jpg",
                },
              ]}
            />
          </Container>
        </Section>
      </ScrollReveal>

      <ScrollReveal>
        <Section className="animate-fade-in-up py-24 md:py-28 bg-background">
          <Container>
            <TipsBlogGrid
              headline="Travel tips to book smarter"
              subheadline="Short guides on choosing neighborhoods, reading reviews, and finding the best value."
              primaryCta={{ label: "Read all tips", href: "/features" }}
              secondaryCta={{ label: "Contact travel support", href: "/contact" }}
              posts={[
                {
                  title: "How to pick the right neighborhood (without overpaying)",
                  excerpt:
                    "Use commute time, noise level, and walkability to narrow down areas—then compare amenities across similar listings.",
                  readTime: "5 min",
                  category: "Planning",
                },
                {
                  title: "What “Instant Book” really means—and when to use it",
                  excerpt:
                    "Instant Book is great for last-minute trips. For longer stays, message hosts to confirm workspace, Wi‑Fi, and check-in details.",
                  readTime: "4 min",
                  category: "Booking",
                },
                {
                  title: "A simple checklist for family-friendly stays",
                  excerpt:
                    "Look for stair safety, crib availability, kitchen basics, and proximity to parks—plus flexible cancellation for peace of mind.",
                  readTime: "6 min",
                  category: "Families",
                },
              ]}
            />
          </Container>
        </Section>
      </ScrollReveal>

      <ScrollReveal>
        <Section className="animate-fade-in-up py-24 md:py-28 bg-muted">
          <Container>
            <NewsletterForm
              headline="Get destination drops and deal alerts"
              subheadline="Monthly inspiration: new featured stays, seasonal itineraries, and experience highlights."
              primaryCta={{ label: "Subscribe", href: "/contact" }}
              secondaryCta={{ label: "View pricing", href: "/pricing" }}
              incentive="Get a free “Weekend Packing List” PDF after you subscribe."
              consentText="By subscribing, you agree to receive travel emails. Unsubscribe anytime."
            />
          </Container>
        </Section>
      </ScrollReveal>
    </main>
  )
}
