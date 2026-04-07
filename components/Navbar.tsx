'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Globe, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Container from '@/components/Container'

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  brandName?: string
  links?: NavItem[]
  ctaLabel?: string
  ctaHref?: string
}

export default function Navbar({
  brandName = 'Airbnb Travel',
  links = [
    { label: 'Destinations', href: '#destinations' },
    { label: 'Listings', href: '#listings' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Host', href: '/host-signup' },
    { label: 'Contact', href: '#contact' },
  ],
  ctaLabel = 'Start Hosting',
  ctaHref = '/host-signup',
}: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#EAEAEA] bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="rounded-lg bg-[#FF5A5F]/10 p-2 text-[#FF5A5F]">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-[Montserrat] text-lg font-semibold text-[#222222]">{brandName}</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((item) => (
              <Link key={item.label} href={item.href} className="font-[DM_Sans] text-sm text-[#484848] hover:text-[#222222]">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" className="text-[#484848]">
              <Globe className="mr-2 h-4 w-4" />
              EN
            </Button>
            <Button asChild className="rounded-lg bg-[#00A699] px-6 py-3 text-white hover:bg-[#008f83]">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-lg p-2 text-[#484848] md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      <div className={cn('border-t border-[#EAEAEA] bg-white md:hidden', open ? 'block' : 'hidden')}>
        <Container>
          <div className="flex flex-col gap-4 py-5">
            {links.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="font-[DM_Sans] text-[#484848]">
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 rounded-lg bg-[#00A699] text-white hover:bg-[#008f83]">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>
        </Container>
      </div>
    </header>
  )
}
