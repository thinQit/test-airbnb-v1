"use client";

import Container from '@/components/Container'
import Section from '@/components/Section'
import { Card } from '@/components/ui/card'

export default function ComparisonTable() {
  return (
    <Section>
      <Container>
        <h2 className="font-[Montserrat] text-3xl font-bold text-[#222222]">Host fee and payout example</h2>
        <div className="mt-6 overflow-hidden rounded-xl border border-[#EAEAEA]">
          <table className="w-full text-left font-[DM_Sans] text-sm">
            <thead className="bg-[#F7F7F7]">
              <tr>
                <th className="px-4 py-3">Item</th>
                <th className="px-4 py-3">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3">Nightly booking value</td>
                <td className="px-4 py-3">$200.00</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Host service fee (3%)</td>
                <td className="px-4 py-3">-$6.00</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3 font-semibold">Estimated payout</td>
                <td className="px-4 py-3 font-semibold">$194.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Card className="mt-4 rounded-xl bg-[#00A699]/10 p-4 text-sm text-[#222222]">
          Example payout is illustrative and may vary by local taxes, cleaning fee, and cancellation policy.
        </Card>
      </Container>
    </Section>
  )
}
