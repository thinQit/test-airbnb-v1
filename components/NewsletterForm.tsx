'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const ok = /\S+@\S+\.\S+/.test(email)
    if (!ok) return setError('Please enter a valid email.')
    setError('')
    setSubmitted(true)
  }

  return (
    <Card className="rounded-xl p-6">
      {submitted ? (
        <p className="font-[DM_Sans] text-[#00A699]">You’re subscribed! Expect destination picks and travel deals.</p>
      ) : (
        <form onSubmit={onSubmit} className="space-y-3">
          <h3 className="font-[Montserrat] text-xl font-semibold text-[#222222]">Get travel inspiration weekly</h3>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          <p className="font-[DM_Sans] text-xs text-[#484848]">By subscribing, you agree to receive marketing emails from Airbnb Travel.</p>
          {error ? <p className="text-sm text-[#FF5A5F]">{error}</p> : null}
          <Button className="w-full rounded-lg bg-[#FF5A5F] text-white hover:bg-[#e84f53]">Subscribe</Button>
        </form>
      )}
    </Card>
  )
}
