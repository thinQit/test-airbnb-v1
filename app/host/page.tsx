"use client"


export const dynamic = 'force-dynamic';
import HeroSpotlight from "@/components/HeroSpotlight"
import Section from "@/components/Section"
import Container from "@/components/Container"
import HostSignupForm from "@/components/HostSignupForm"
import CTASection from "@/components/CTASection"
import ScrollReveal from "@/components/ScrollReveal"
import FeaturesCards3D from "@/components/FeaturesCards3D"

export default function HostPage() {
  return (
    <main>
      <HeroSpotlight
        title="Become a host—share your space, earn on your schedule"
        subtitle="List a room, an entire home, or an experience. We’ll guide you through photos, pricing, and guest expectations."
        primaryCta={{ label: "Start host signup", href: "/host#signup" }}
        secondaryCta={{ label: "See host pricing", href: "/pricing" }}
      />

      <ScrollReveal>
        <Section className="animate-fade-in-up py-24 md:py-28 bg-background">
          <Container>
            <FeaturesCards3D
              badge="How hosting works"
              title="A simple setup process—then you’re ready to welcome guests."
              subtitle="Everything you need to launch with confidence."
              features={[
                { icon: "Home", title: "Describe your place", description: "Add room type, guest capacity, bed/bath counts, and standout amenities." },
                { icon: "Image", title: "Add photos that convert", description: "Use natural light, wide angles, and show key spaces guests care about." },
                { icon: "Wallet", title: "Set pricing and availability", description: "Choose nightly rate, cleaning fee, minimum nights, and your open dates." },
                { icon: "Handshake", title: "Publish and welcome guests", description: "Respond quickly, keep check-in simple, and share a short local guide." },
              ]}
            />
          </Container>
        </Section>
      </ScrollReveal>

      <ScrollReveal>
        <Section id="signup" className="animate-fade-in-up py-24 md:py-28 bg-muted">
          <Container>
            <HostSignupForm
              headline="Host signup"
              subheadline="Tell us about your space and we’ll send next steps. (Demo form—no account required.)"
              successMessage="Thanks—your host interest was received. We’ll email setup tips and next steps."
              fields={[
                { name: "fullName", label: "Full name", placeholder: "Jordan Lee", type: "text", required: true },
                { name: "email", label: "Email", placeholder: "jordan@example.com", type: "email", required: true },
                { name: "city", label: "City", placeholder: "Lisbon", type: "text", required: true },
                {
                  name: "listingType",
                  label: "What would you like to host?",
                  type: "select",
                  required: true,
                  options: ["Entire place", "Private room", "Shared room", "Experience"],
                },
                {
                  name: "notes",
                  label: "Anything we should know?",
                  placeholder: "Example: 2-bedroom apartment near metro, flexible check-in, pet-friendly.",
                  type: "textarea",
                  required: false,
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
              headline="Want help pricing your listing?"
              subheadline="Contact hosting support for a quick checklist and a suggested nightly range based on similar stays."
              primaryCta={{ label: "Contact hosting support", href: "/contact" }}
              secondaryCta={{ label: "Back to Home", href: "/" }}
            />
          </Container>
        </Section>
      </ScrollReveal>
    </main>
  )
}
