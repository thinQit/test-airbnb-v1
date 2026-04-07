'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function HostSignupForm() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    const res = await fetch('/api/host-signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    setLoading(false)
    setStatus(res.ok ? 'Thanks! We will contact you shortly.' : 'Submission failed. Please try again.')
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <Input name="fullName" placeholder="Full name" required />
      <Input name="email" placeholder="Email address" type="email" required />
      <select name="listingType" className="h-11 rounded-md border px-3 text-sm">
        <option>Entire home</option>
        <option>Private room</option>
        <option>Shared room</option>
        <option>Boutique stay</option>
      </select>
      <textarea name="notes" className="min-h-28 rounded-md border p-3 text-sm" placeholder="Tell us about your property" />
      <Button type="submit" disabled={loading} className="rounded-lg bg-[#00A699] text-white hover:bg-[#008f83]">
        {loading ? 'Submitting...' : 'Submit host interest'}
      </Button>
      {status ? <p className="text-sm text-[#484848]">{status}</p> : null}
    </form>
  )
}
