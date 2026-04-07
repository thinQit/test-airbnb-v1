'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { Button } from '@/components/ui/button'

export default function TestimonialsCarousel() {
  const items = [
    { quote: 'The villa was exactly as shown. Seamless check-in and amazing local tips.', name: 'Priya R.' },
    { quote: 'Booked an entire trip with stays + experiences in one flow. Loved it.', name: 'James T.' },
    { quote: 'Hosting on Airbnb Travel helped us increase occupancy in low season.', name: 'Elena M.' },
  ]
  const [index, setIndex] = useState(0)

  return (
    <Section id="testimonials" muted>
      <Container>
        <h2 className="font-[Montserrat] text-3xl font-bold text-[#222222]">Traveler testimonials</h2>
        <div className="mt-8 rounded-xl bg-white p-8 shadow-md">
          <p className="font-[DM_Sans] text-xl text-[#222222]">“{items[index].quote}”</p>
          <p className="mt-4 font-[DM_Sans] text-sm text-[#484848]">— {items[index].name}</p>
          <div className="mt-6 flex gap-2">
            <Button variant="outline" size="icon" onClick={() => setIndex((index - 1 + items.length) % items.length)}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => setIndex((index + 1) % items.length)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
