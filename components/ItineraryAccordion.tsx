"use client";

import Container from '@/components/Container'
import Section from '@/components/Section'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function ItineraryAccordion() {
  const days = [
    { day: 'Day 1', plan: 'Arrival, local neighborhood walk, rooftop dinner, and host welcome.' },
    { day: 'Day 2', plan: 'Guided city highlights + market tasting and sunset sail experience.' },
    { day: 'Day 3', plan: 'Free morning, optional hiking tour, farewell beach evening.' },
  ]

  return (
    <Section id="experiences">
      <Container>
        <h2 className="font-[Montserrat] text-3xl font-bold text-[#222222] md:text-4xl">Sample 3-day itinerary</h2>
        <Accordion type="single" collapsible className="mt-8 w-full">
          {days.map((item) => (
            <AccordionItem key={item.day} value={item.day}>
              <AccordionTrigger>{item.day}</AccordionTrigger>
              <AccordionContent>{item.plan}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  )
}
