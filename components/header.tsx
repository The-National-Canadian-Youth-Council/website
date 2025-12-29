"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/transparent-logo.png"
              alt="National Canadian Youth Council logo - Youth voices shaping youth rights"
              width={60}
              height={60}
              className="h-12 w-auto"
            />
            <span className="font-bold text-lg md:text-xl text-[#1a2c4e] hidden sm:inline">
              National Canadian Youth Council
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/events" className="text-sm font-medium hover:text-[#d32f2f] transition-colors">
              Events
            </Link>
            <Link href="/members" className="text-sm font-medium hover:text-[#d32f2f] transition-colors">
              Members
            </Link>
            <Link href="/publications" className="text-sm font-medium hover:text-[#d32f2f] transition-colors">
              Publications
            </Link>
            <Link href="/join" className="text-sm font-medium hover:text-[#d32f2f] transition-colors">
              Join Us
            </Link>
            <Button asChild size="sm" className="bg-[#d32f2f] hover:bg-[#b71c1c]">
              <Link href="/sponsor">Support Us</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t">
            <Link
              href="/events"
              className="block py-2 text-sm font-medium hover:text-[#d32f2f] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/members"
              className="block py-2 text-sm font-medium hover:text-[#d32f2f] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Members
            </Link>
            <Link
              href="/publications"
              className="block py-2 text-sm font-medium hover:text-[#d32f2f] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Publications
            </Link>
            <Link
              href="/join"
              className="block py-2 text-sm font-medium hover:text-[#d32f2f] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Us
            </Link>
            <Button asChild size="sm" className="w-full bg-[#d32f2f] hover:bg-[#b71c1c]">
              <Link href="/sponsor" onClick={() => setMobileMenuOpen(false)}>
                Support Us
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
