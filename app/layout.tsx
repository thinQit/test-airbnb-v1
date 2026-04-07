import "./globals.css"
import type { Metadata } from "next"
import { Montserrat, DM_Sans } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
})

export const metadata: Metadata = {
  title: "Airbnb Vacation Rentals | Book Stays & Experiences",
  description:
    "Discover unique vacation rentals and local experiences. Browse featured listings, plan itineraries, understand pricing, and contact Airbnb Travel support.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${dmSans.variable} font-sans bg-background text-foreground`}>
        <Navbar
          logo="Airbnb Vacation Rentals"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Listings & Experiences", href: "/features" },
            { label: "Host Signup", href: "/host" },
            { label: "Pricing", href: "/pricing" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Become a host"
          ctaHref="/host"
        />
        {children}
        <Footer
          brand="Airbnb Vacation Rentals"
          description="Find stays you’ll remember—book homes and experiences in the world’s best places."
          columns={[
            {
              title: "Explore",
              links: [
                { label: "Featured Listings", href: "/features" },
                { label: "Experiences", href: "/features" },
                { label: "Pricing", href: "/pricing" },
              ],
            },
            {
              title: "Hosting",
              links: [
                { label: "Host Signup", href: "/host" },
                { label: "Host Standards", href: "/host" },
                { label: "Payouts & Fees", href: "/pricing" },
              ],
            },
            {
              title: "Support",
              links: [
                { label: "Contact", href: "/contact" },
                { label: "Safety Tips", href: "/features" },
                { label: "Cancellation Basics", href: "/features" },
              ],
            },
          ]}
          copyright="© 2026 Airbnb Vacation Rentals. This is a demo vacation rental marketing site concept."
        />
      </body>
    </html>
  )
}
