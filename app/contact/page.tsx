"use client"


export const dynamic = 'force-dynamic';
import HeroSpotlight from "@/components/HeroSpotlight"
import ContactCards from "@/components/ContactCards"
import ContactForm from "@/components/ContactForm"
import CTASection from "@/components/CTASection"
import Section from "@/components/Section"
import Container from "@/components/Container"
import ScrollReveal from "@/components/ScrollReveal"

export default function ContactPage() {
  return (
    <main>
      <HeroSpotlight
        title="Contact Airbnb Travel support"
        subtitle="Questions about a stay, an experience, or hosting? Send a message and we’ll get back to you."
        primaryCta={{ label: "Send a message", href: "/contact#form" }}
        secondaryCta={{ label: "View pricing", href: "/pricing" }}
      />

      <ScrollReveal>
        <Section className="animate-fade-in-up py-24 md:py-28 bg-background">
          <Container>
            <ContactCards
              headline="How can we help?"
              subheadline="Choose the topic and we’ll route your message to the right team."
              primaryCta={{ label: "Host signup", href: "/host" }}
              secondaryCta={{ label: "Browse listings", href: "/features" }}
              topics={[
                {
                  title: "Booking help",
                  details: "Questions about availability, fees, or changing dates.",
                  recommendedInfo: ["Listing ID (if available)", "Travel dates", "Guest count"],
                },
                {
                  title: "Experiences",
                  details: "Group bookings, accessibility questions, or schedule changes.",
                  recommendedInfo: ["Experience name", "Preferred date/time", "Group size"],
                },
                {
                  title: "Hosting",
                  details: "Listing setup, pricing guidance, and hosting standards.",
                  recommendedInfo: ["City", "Listing type", "Timeline to publish"],
                },
              ]}
            />
          </Container>
        </Section>
      </ScrollReveal>

      <ScrollReveal>
        <Section id="form" className="animate-fade-in-up py-24 md:py-28 bg-muted">
          <Container>
            <ContactForm
              headline="Send a message"
              subheadline="We’ll respond by email. For urgent issues, include your travel dates and listing ID."
              contactInfo={[
                {
                  icon: "Mail",
                  label: "Email support",
                  value: "24/7 (responses typically within 12–24 hours)",
                },
                {
                  icon: "Phone",
                  label: "Phone support",
                  value: "Mon–Fri, 9:00–18:00 (local time)",
                },
              ]}
            />
          </Container>
        </Section>
      </ScrollReveal>

      <ScrollReveal>
        <Section className="animate-fade-in-up py-24 md:py-28 bg-background">
          <Container>
            <CTASection
              headline="Want personalized trip suggestions?"
              subheadline="Tell us your destination, budget per night, and must-have amenities—and we’ll recommend a short list of stays."
              primaryCta={{ label: "Send preferences", href: "/contact#form" }}
              secondaryCta={{ label: "Explore featured stays", href: "/features" }}
              leftBullets={[
                "Neighborhood recommendations",
                "Amenity trade-offs explained",
                "Family and remote-work friendly options",
              ]}
              imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577710/site-images/hero-backgrounds/12981879.jpg"
            />
          </Container>
        </Section>
      </ScrollReveal>
    </main>
  )
}
