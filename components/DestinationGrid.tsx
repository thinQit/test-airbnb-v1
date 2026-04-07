"use client";

import { Button } from '@/components/ui/button'
import Container from '@/components/Container'
import Section from '@/components/Section'
import DestinationCard from '@/components/DestinationCard'

export default function DestinationGrid() {
  const items = [
    {
      name: 'Bali, Indonesia',
      tagline: 'Rice terraces, private villas, and surf mornings',
      price: 'From $145/night',
      imageSrc:
        'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577714/site-images/hero-backgrounds/1279813.jpg',
    },
    {
      name: 'Kyoto, Japan',
      tagline: 'Temple stays and tranquil neighborhood homes',
      price: 'From $180/night',
      imageSrc:
        'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577737/site-images/hero-backgrounds/12966912.jpg',
    },
    {
      name: 'Lisbon, Portugal',
      tagline: 'Hilltop apartments with Atlantic breezes',
      price: 'From $130/night',
      imageSrc:
        'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577710/site-images/hero-backgrounds/12981879.jpg',
    },
  ]

  return (
    <Section id="destinations">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-[DM_Sans] text-sm text-[#00A699]">Top picks for 2026 travel</p>
            <h2 className="font-[Montserrat] text-3xl font-bold text-[#222222] md:text-4xl">Featured destinations</h2>
          </div>
          <div className="flex gap-3">
            <Button className="rounded-lg bg-[#FF5A5F] text-white hover:bg-[#e84f53]">Browse all stays</Button>
            <Button variant="outline" className="rounded-lg border-[#484848]/30 text-[#484848]">
              See experiences
            </Button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <DestinationCard key={item.name} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
