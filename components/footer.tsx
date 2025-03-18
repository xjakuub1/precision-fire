import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FuturisticButton from "@/components/futuristic-button"

export default function Footer() {
  return (
    <footer className="bg-[#0f1923] text-white border-t border-red-500/20 relative">
      <div className="tech-pattern-subtle absolute inset-0"></div>
      <div className="container py-12 relative">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-red-600/20 border border-red-500 flex items-center justify-center">
                <span className="font-bold text-red-500 text-futuristic">PF</span>
              </div>
              <span className="text-xl font-bold text-futuristic-title">PRECISION FIRE</span>
            </Link>
            <p className="mb-4 text-zinc-400">
              Advanced tactical solutions and custom tuning for optimal performance in any environment.
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-red-600/20 hover:text-red-500 text-zinc-400"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-red-600/20 hover:text-red-500 text-zinc-400"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-red-600/20 hover:text-red-500 text-zinc-400"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-red-600/20 hover:text-red-500 text-zinc-400"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-futuristic">QUICK LINKS</h3>
            <ul className="grid gap-2">
              <li>
                <Link
                  href="/"
                  className="text-zinc-400 hover:text-red-500 transition-colors duration-200 text-futuristic"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-zinc-400 hover:text-red-500 transition-colors duration-200 text-futuristic"
                >
                  ARSENAL
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-zinc-400 hover:text-red-500 transition-colors duration-200 text-futuristic"
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-zinc-400 hover:text-red-500 transition-colors duration-200 text-futuristic"
                >
                  INTEL
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-400 hover:text-red-500 transition-colors duration-200 text-futuristic"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-futuristic">COMMAND CENTER</h3>
            <ul className="grid gap-4">
              <li className="flex items-start gap-2">
                <MapPin className="mt-1 h-5 w-5 text-red-500 shrink-0" />
                <span className="text-zinc-400">
                  123 Precision Way
                  <br />
                  Tactical City, TC 12345
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-red-500 shrink-0" />
                <span className="text-zinc-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-red-500 shrink-0" />
                <span className="text-zinc-400">command@precisionfire.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-futuristic">TACTICAL UPDATES</h3>
            <p className="mb-4 text-zinc-400">
              Subscribe to receive intel on the latest products, services, and tactical innovations.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-[#0f1923] border-zinc-700 text-white placeholder:text-zinc-400 focus:border-red-500"
              />
              <FuturisticButton variant="primary">Subscribe</FuturisticButton>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-800 pt-6 text-center text-zinc-400">
          <p className="text-futuristic text-sm">© {new Date().getFullYear()} PRECISION FIRE // ALL RIGHTS SECURED</p>
        </div>
      </div>
    </footer>
  )
}

