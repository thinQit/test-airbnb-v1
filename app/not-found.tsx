import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center bg-background text-foreground px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Page not found</h1>
      <p className="text-muted-foreground mb-8 text-center max-w-xl">
        The page you’re looking for doesn’t exist. Let’s get you back to exploring unforgettable stays.
      </p>
      <Button asChild className="transition-all duration-200 hover:scale-105">
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  )
}
