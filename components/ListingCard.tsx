"use client";

import Image from 'next/image'
import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface ListingCardProps {
  title?: string
  location?: string
  imageSrc?: string
  rating?: number
  reviews?: number
  pricePerNight?: string
  amenities?: string[]
}

export default function ListingCard({
  title = 'Oceanfront Loft with Terrace',
  location = 'Miami, Florida',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576897/site-images/corporate/10041267.jpg',
  rating = 4.9,
  reviews = 184,
  pricePerNight = '$289',
  amenities = ['Wi-Fi', 'Pool', 'Kitchen'],
}: ListingCardProps) {
  return (
    <Card className="overflow-hidden rounded-xl border-0 shadow-md">
      <Image src={imageSrc} alt={title} width={1000} height={700} unoptimized className="h-52 w-full object-cover" />
      <div className="p-4">
        <p className="font-[DM_Sans] text-sm text-[#484848]">{location}</p>
        <h3 className="mt-1 font-[Montserrat] text-lg font-semibold text-[#222222]">{title}</h3>
        <div className="mt-2 flex items-center gap-1 text-sm text-[#484848]">
          <Star className="h-4 w-4 fill-[#FF5A5F] text-[#FF5A5F]" />
          {rating} · {reviews} reviews
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {amenities.map((a) => (
            <span key={a} className="rounded-full bg-[#F7F7F7] px-2 py-1 text-xs text-[#484848]">
              {a}
            </span>
          ))}
        </div>
        <p className="mt-4 font-[DM_Sans] text-sm text-[#222222]">
          <span className="font-semibold">{pricePerNight}</span> / night
        </p>
      </div>
    </Card>
  )
}
