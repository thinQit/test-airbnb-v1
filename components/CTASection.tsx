"use client";

import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { cn } from '@/lib/utils'

interface CTASectionProps {
  title?: string
  subtitle?: string
  buttonLabel?: string
  buttonHref?: string
  bullets?: string[]
  split?: boolean
}

export default function CTASection({
  title = 'Ready for your next unforgettable stay?',
  subtitle = 'Book unique homes and experiences curated for every travel style.',
  buttonLabel = 'Explore listings',
  buttonHref = '#listings',
  bullets = ['No hidden fees', 'Verified hosts', '24/7 traveler support'],
  split = false,
}: CTASectionProps) {
  return (
    <Section>
      <Container>
        <div className={cn('rounded-xl bg-[#222222] p-8 text-white md:p-12', split ? 'md:grid md:grid-cols-2 md:gap-8' : 'text-center')}>
          <div>
            <h2 className="font-[Montserrat] text-3xl font-bold">{title}</h2>
            <p className="mt-3 font-[DM_Sans] text-white/80">{subtitle}</p>
          </div>
          <div className={cn('mt-6', split ? 'md:mt-0' : 'mx-auto max-w-xl')}>
            <ul className={cn('space-y-2 text-sm text-white/85', split ? '' : 'text-left')}>
              {bullets.map((b) => (
                <li key={b} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00A699]" />
                  {b}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-6 rounded-lg bg-[#FF5A5F] px-6 py-3 text-white hover:bg-[#e84f53]">
              <a href={buttonHref}>{buttonLabel}</a>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
