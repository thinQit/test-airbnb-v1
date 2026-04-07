"use client";

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import ScrollReveal from '@/components/ScrollReveal'

interface SectionProps {
  children?: ReactNode
  id?: string
  className?: string
  muted?: boolean
}

export default function Section({ children = null, id = '', className = '', muted = false }: SectionProps) {
  return (
    <ScrollReveal>
      <section id={id} className={cn('py-24 md:py-28', muted ? 'bg-[#F7F7F7]' : 'bg-white', className)}>
        {children}
      </section>
    </ScrollReveal>
  )
}
