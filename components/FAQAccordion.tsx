"use client";

import Container from '@/components/Container'
import Section from '@/components/Section'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FAQAccordion() {
  const faqs = [
    { q: 'How do I become a host?', a: 'Create a listing, add photos, set house rules, and publish after review.' },
    { q: 'When do I get paid?', a: 'Payouts are typically sent 24 hours after guest check-in.' },
    { q: 'Can I set minimum nights?', a: 'Yes, configure minimum/maximum stays in booking settings.' },
    { q: 'Is there host protection?', a: 'Eligible bookings include protections and support workflows.' },
  ]

  return (
    <Section>
      <Container>
        <h2 className="font-[Montserrat] text-3xl font-bold text-[#222222]">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  )
}
