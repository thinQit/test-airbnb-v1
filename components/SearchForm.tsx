'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Minus, Plus, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

export default function SearchForm() {
  const router = useRouter()
  const [location, setLocation] = useState('Barcelona')
  const [checkIn, setCheckIn] = useState('2026-07-15')
  const [checkOut, setCheckOut] = useState('2026-07-21')
  const [guests, setGuests] = useState(2)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const query = new URLSearchParams({
      location,
      checkIn,
      checkOut,
      guests: String(guests),
    })
    router.push('/features?' + query.toString())
  }

  return (
    <Card className="rounded-xl border-[#EAEAEA] p-4 shadow-md md:p-6">
      <form onSubmit={submit} className="grid gap-4 md:grid-cols-5 md:items-end">
        <div className="md:col-span-2">
          <label className="mb-2 block font-[DM_Sans] text-sm text-[#484848]">Where to?</label>
          <Input value={location} onChange={(e) => setLocation(e.target.value)} className="h-11" />
        </div>
        <div>
          <label className="mb-2 block font-[DM_Sans] text-sm text-[#484848]">Check in</label>
          <Input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="h-11" />
        </div>
        <div>
          <label className="mb-2 block font-[DM_Sans] text-sm text-[#484848]">Check out</label>
          <Input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="h-11" />
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="rounded-lg border p-2" onClick={() => setGuests((g) => Math.max(1, g - 1))}>
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-16 text-center font-[DM_Sans] text-sm">{guests} guests</span>
          <button type="button" className="rounded-lg border p-2" onClick={() => setGuests((g) => g + 1)}>
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <Button type="submit" className="h-11 rounded-lg bg-[#FF5A5F] text-white hover:bg-[#e84f53] md:col-span-5">
          <Search className="mr-2 h-4 w-4" />
          Search stays
        </Button>
      </form>
    </Card>
  )
}
