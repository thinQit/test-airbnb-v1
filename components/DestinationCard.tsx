"use client";

import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface DestinationCardProps {
  name?: string
  tagline?: string
  price?: string
  highlights?: string[]
  imageSrc?: string
}

export default function DestinationCard({
  name = 'Santorini, Greece',
  tagline = 'Sunset villas over the caldera',
  price = 'From $210/night',
  highlights = ['Ocean view', 'Infinity pool', 'Walkable old town'],
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577712/site-images/hero-backgrounds/12981878.jpg',
}: DestinationCardProps) {
  return (
    <Card className="group relative overflow-hidden rounded-xl border-0">
      <Image src={imageSrc} alt={name} width={1200} height={800} unoptimized className="h-[420px] w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
        <div className="mb-2 inline-flex items-center rounded-full bg-[#00A699] px-3 py-1 text-xs font-medium">{price}</div>
        <h3 className="font-[Montserrat] text-2xl font-semibold">{name}</h3>
        <p className="mt-1 font-[DM_Sans] text-sm text-white/85">{tagline}</p>
        <ul className="mt-4 hidden gap-2 text-xs md:flex">
          {highlights.map((item) => (
            <li key={item} className="rounded-full bg-white/15 px-3 py-1 backdrop-blur">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center gap-2 text-sm text-white/90 opacity-0 transition-opacity group-hover:opacity-100">
          <MapPin className="h-4 w-4" />
          Explore this destination
        </div>
      </div>
    </Card>
  )
}
