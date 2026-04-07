"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Container from '@/components/Container'

interface FooterLinkGroup {
  title: string
  links: { label: string; href: string }[]
}

interface FooterProps {
  columns?: FooterLinkGroup[]
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
}

export default function Footer({
  columns = [
    {
      title: 'Explore',
      links: [
        { label: 'Beach Homes', href: '#' },
        { label: 'Mountain Cabins', href: '#' },
        { label: 'City Lofts', href: '#' },
      ],
    },
    {
      title: 'Hosting',
      links: [
        { label: 'Host Resources', href: '#' },
        { label: 'Responsible Hosting', href: '#' },
        { label: 'Community Forum', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '#' },
        { label: 'Cancellation Options', href: '#' },
        { label: 'Safety Information', href: '#' },
      ],
    },
  ],
  primaryCtaLabel = 'List your property',
  primaryCtaHref = '/host-signup',
  secondaryCtaLabel = 'Contact travel team',
  secondaryCtaHref = '#contact',
}: FooterProps) {
  return (
    <footer className="bg-[#222222] py-16 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="font-[Montserrat] text-lg font-semibold">{column.title}</h4>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="font-[DM_Sans] text-sm text-white/80 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/20 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-[DM_Sans] text-sm text-white/70">© 2026 Airbnb Travel. All rights reserved. Terms · Privacy · Sitemap</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="rounded-lg bg-[#FF5A5F] text-white hover:bg-[#e84f53]">
              <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-lg border-white/40 bg-transparent text-white hover:bg-white/10">
              <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  )
}
