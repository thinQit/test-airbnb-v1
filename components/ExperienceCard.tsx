"use client";

import Image from 'next/image'
import { Star, Clock } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface ExperienceCardProps {
  title?: string
  imageSrc?: string
  duration?: string
  pricePerPerson?: string
  rating?: number
  includedItems?: string[]
}

export default function ExperienceCard({
  title = 'Sunrise Kayak & Coastal Breakfast',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771578296/site-images/events/12876404.jpg',
  duration = '3 hours',
  pricePerPerson = '$75',
  rating = 4.8,
  includedItems = ['Guide', 'Gear', 'Snacks'],
}: ExperienceCardProps) {
  return (
    <Card className="overflow-hidden rounded-xl">
      <Image src={imageSrc} alt={title} width={1000} height={700} unoptimized className="h-48 w-full object-cover" />
      <div className="space-y-3 p-4">
        <h3 className="font-[Montserrat] text-lg font-semibold text-[#222222]">{title}</h3>
        <div className="flex items-center gap-4 text-sm text-[#484848]">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {duration}
          </span>
          <span className="inline-flex items-center gap-1">
            <Star className="h-4 w-4 fill-[#FF5A5F] text-[#FF5A5F]" />
            {rating}
          </span>
        </div>
        <p className="font-[DM_Sans] text-sm text-[#222222]">
          <span className="font-semibold">{pricePerPerson}</span> per person
        </p>
        <div className="flex flex-wrap gap-2">
          {includedItems.map((i) => (
            <span key={i} className="rounded-full bg-[#F7F7F7] px-2 py-1 text-xs text-[#484848]">
              {i}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
}
