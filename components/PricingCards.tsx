"use client";

import Container from '@/components/Container'
import Section from '@/components/Section'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export default function PricingCards() {
  const plans = [
    { name: 'Starter Host', price: '3%', bullets: ['Basic listing tools', 'Calendar sync', 'Email support'] },
    { name: 'Pro Host', price: '5%', bullets: ['Dynamic pricing insights', 'Priority support', 'Multi-listing dashboard'], featured: true },
    { name: 'Enterprise', price: 'Custom', bullets: ['Dedicated partner manager', 'API access', 'Custom analytics'] },
  ]

  return (
    <Section id="pricing" muted>
      <Container>
        <h2 className="font-[Montserrat] text-3xl font-bold text-[#222222]">Hosting pricing options</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={cn('rounded-xl p-6', plan.featured && 'border-[#FF5A5F] shadow-lg')}>
              <p className="font-[DM_Sans] text-sm text-[#484848]">{plan.name}</p>
              <p className="mt-2 font-[Montserrat] text-3xl font-bold text-[#222222]">{plan.price}</p>
              <ul className="mt-4 space-y-2">
                {plan.bullets.map((bullet) => (
                  <li key={bullet} className="font-[DM_Sans] text-sm text-[#484848]">
                    • {bullet}
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
