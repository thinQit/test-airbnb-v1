"use client";

import Image from 'next/image'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { Card } from '@/components/ui/card'

export default function TipsBlogGrid() {
  const posts = [
    {
      title: 'How to choose the right vacation rental neighborhood',
      category: 'Planning',
      readTime: '5 min read',
      excerpt: 'Compare walkability, transit access, and safety signals before you book.',
      imageSrc:
        'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576912/site-images/corporate/10384120.jpg',
    },
    {
      title: 'Packing smarter for 1-week remote work trips',
      category: 'Remote Work',
      readTime: '4 min read',
      excerpt: 'A practical packing list for hybrid travel and productivity on the move.',
      imageSrc:
        'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576897/site-images/corporate/10041273.jpg',
    },
    {
      title: 'Host playbook: pricing your listing seasonally',
      category: 'Hosting',
      readTime: '6 min read',
      excerpt: 'Set rates confidently with demand windows, events, and minimum stay strategy.',
      imageSrc:
        'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771576884/site-images/corporate/10347510.jpg',
    },
  ]

  return (
    <Section id="tips">
      <Container>
        <h2 className="font-[Montserrat] text-3xl font-bold text-[#222222]">Travel tips & insights</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.title} className="overflow-hidden rounded-xl">
              <Image src={post.imageSrc} alt={post.title} width={1000} height={700} unoptimized className="h-44 w-full object-cover" />
              <div className="p-4">
                <p className="font-[DM_Sans] text-xs text-[#00A699]">
                  {post.category} · {post.readTime}
                </p>
                <h3 className="mt-2 font-[Montserrat] text-lg font-semibold text-[#222222]">{post.title}</h3>
                <p className="mt-2 font-[DM_Sans] text-sm text-[#484848]">{post.excerpt}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
