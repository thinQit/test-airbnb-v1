"use client";

import Container from '@/components/Container'
import Section from '@/components/Section'
import { Card } from '@/components/ui/card'

export default function ContactCards() {
  const topics = [
    { title: 'Trip support', items: ['Booking changes', 'Refund questions', 'Travel policies'] },
    { title: 'Host support', items: ['Listing quality', 'Payout settings', 'Performance insights'] },
    { title: 'Partnerships', items: ['Corporate travel', 'Tour operators', 'Affiliate programs'] },
  ]

  return (
    <Section id="contact" muted>
      <Container>
        <h2 className="font-[Montserrat] text-3xl font-bold text-[#222222]">Contact Airbnb Travel</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {topics.map((topic) => (
            <Card key={topic.title} className="rounded-xl p-6">
              <h3 className="font-[Montserrat] text-lg font-semibold text-[#222222]">{topic.title}</h3>
              <ul className="mt-3 space-y-2">
                {topic.items.map((i) => (
                  <li key={i} className="font-[DM_Sans] text-sm text-[#484848]">
                    • {i}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
