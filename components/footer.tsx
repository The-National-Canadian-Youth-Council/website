import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1a2c4e] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/transparent-logo.png"
                alt="National Canadian Youth Council"
                width={60}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white/80 leading-relaxed mb-4">Youth voices shaping youth rights across Canada</p>
            <p className="text-sm text-white/60">
              National Canadian Youth Council is a youth-led platform advancing children's and youth rights through
              collaboration, consultation, and advocacy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/events" className="text-white/80 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-white/80 hover:text-white transition-colors">
                  Members
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-white/80 hover:text-white transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-white/80 hover:text-white transition-colors">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/sponsor" className="text-white/80 hover:text-white transition-colors">
                  Support Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-[#d32f2f] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:theNCYCouncil@gmail.com"
                  className="text-white/80 hover:text-white transition-colors break-all"
                >
                  theNCYCouncil@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Instagram className="h-5 w-5 text-[#d32f2f] flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.instagram.com/ncycouncil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  @ncycouncil
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[#d32f2f] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">Canada</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} National Canadian Youth Council. All rights reserved.</p>
          <p className="mt-2">
            Advancing youth rights across Canada through the UN Convention on the Rights of the Child
          </p>
        </div>
      </div>
    </footer>
  )
}
