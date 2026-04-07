"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center bg-background text-foreground px-6">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Something went wrong</h2>
      <p className="text-muted-foreground mb-8 text-center max-w-xl">
        We couldn’t load this page right now. Please try again.
      </p>
      <Button onClick={() => reset()} className="transition-all duration-200 hover:scale-105">
        Try again
      </Button>
    </main>
  )
}
