export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight"
import PricingCards from "@/components/PricingCards"
import ComparisonTable from "@/components/ComparisonTable"
import FAQAccordion from "@/components/FAQAccordion"
import Section from "@/components/Section"
import Container from "@/components/Container"
import ScrollReveal from "@/components/ScrollReveal"

export default function PricingPage() {
  return (
    <main>
      <HeroSpotlight
        title="Transparent pricing for guests and hosts"
        subtitle="Understand what you’ll pay (and earn) before you book or list. Example fees shown for demo purposes."
        primaryCta={{ label: "Explore listings", href: "/features" }}
        secondaryCta={{ label: "Become a host", href: "/host" }}
      />

      <ScrollReveal>
        <Section className="animate-fade-in-up py-24 md:py-28 bg-background">
          <Container>
            <PricingCards
              headline="Guest booking examples"
              subheadline="See how nightly rates, cleaning fees, and service fees can add up for a typical stay."
              primaryCta={{ label: "Contact travel support", href: "/contact" }}
              secondaryCta={{ label: "Browse stays", href: "/features" }}
              plans={[
                {
                  name: "Weekend City Break",
                  priceLabel: "$149/night",
                  description: "2 nights in a central apartment",
                  features: [
                    "Nightly rate: $149 × 2 = $298",
                    "Cleaning fee: $35",
                    "Service fee (est.): $28",
                    "Estimated total: $361 (excl. taxes)",
                  ],
                  ctaLabel: "Find city stays",
                  ctaHref: "/features",
                  highlight: false,
                },
                {
                  name: "Family Beach Week",
                  priceLabel: "$289/night",
                  description: "5 nights in a 3-bedroom villa",
                  features: [
                    "Nightly rate: $289 × 5 = $1,445",
                    "Cleaning fee: $90",
                    "Service fee (est.): $120",
                    "Estimated total: $1,655 (excl. taxes)",
                  ],
                  ctaLabel: "Find beach stays",
                  ctaHref: "/features",
                  highlight: true,
                },
                {
                  name: "Experience Add‑On",
                  priceLabel: "$59/person",
                  description: "Food walk for 2 people",
                  features: ["Experience: $59 × 2 = $118", "Included: guide + tastings", "Estimated total: $118 (excl. taxes)"],
                  ctaLabel: "Browse experiences",
                  ctaHref: "/features",
                  highlight: false,
                },
              ]}
            />
          </Container>
        </Section>
      </ScrollReveal>

      <ScrollReveal>
        <Section className="animate-fade-in-up py-24 md:py-28 bg-muted">
          <Container>
            <ComparisonTable
              headline="Host fees and payouts (example)"
              subheadline="A simple breakdown to help you estimate earnings and understand typical fee structures."
              primaryCta={{ label: "Start host signup", href: "/host#signup" }}
              secondaryCta={{ label: "Contact hosting support", href: "/contact" }}
              rows={[
                { label: "Typical host service fee", value: "Around 3% (varies by region and policy)" },
                { label: "Typical guest service fee", value: "Varies; shown at checkout before booking" },
                { label: "Payout timing", value: "Often 24 hours after check-in (varies by method)" },
                { label: "Optional cleaning fee", value: "Set by host; shown in booking breakdown" },
              ]}
            />
          </Container>
        </Section>
      </ScrollReveal>

      <ScrollReveal>
        <Section className="animate-fade-in-up py-24 md:py-28 bg-background">
          <Container>
            <FAQAccordion
              headline="Pricing FAQ"
              subheadline="Quick answers to common questions about totals, fees, and refunds."
              items={[
                {
                  question: "Why does the total differ from nightly rate × nights?",
                  answer:
                    "Totals can include cleaning fees, service fees, and taxes. You’ll see a full breakdown before you confirm.",
                },
                {
                  question: "Can I see fees before booking?",
                  answer:
                    "Yes—this site shows an estimate, and the booking flow should always present a full breakdown before payment.",
                },
                {
                  question: "Do experiences have separate fees?",
                  answer: "Experiences are priced per person and may include taxes depending on location.",
                },
              ]}
              primaryCta={{ label: "Contact Airbnb Travel", href: "/contact" }}
              secondaryCta={{ label: "Explore listings", href: "/features" }}
            />
          </Container>
        </Section>
      </ScrollReveal>
    </main>
  )
}
