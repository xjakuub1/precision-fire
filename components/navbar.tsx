"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import FuturisticButton from "@/components/futuristic-button"

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-red-500/20 bg-[#0f1923]/90 text-white backdrop-blur-md">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-red-500 hover:bg-red-500/10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-[#0f1923] text-white border-r border-red-500/20">
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-red-600/20 border border-red-500 flex items-center justify-center">
                  <span className="font-bold text-red-500 text-futuristic">PF</span>
                </div>
                <span className="text-xl font-bold text-futuristic-title">PRECISION FIRE</span>
              </Link>
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-lg font-medium hover:text-red-500 transition-colors duration-200 text-futuristic"
                >
                  HOME
                </Link>
                <Link
                  href="/products"
                  className="text-lg font-medium hover:text-red-500 transition-colors duration-200 text-futuristic"
                >
                  ARSENAL
                </Link>
                <Link
                  href="/services"
                  className="text-lg font-medium hover:text-red-500 transition-colors duration-200 text-futuristic"
                >
                  SERVICES
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium hover:text-red-500 transition-colors duration-200 text-futuristic"
                >
                  INTEL
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium hover:text-red-500 transition-colors duration-200 text-futuristic"
                >
                  CONTACT
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center gap-2 mr-6 group">
          <div className="h-8 w-8 rounded-full bg-red-600/20 border border-red-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span className="font-bold text-red-500 text-futuristic">PF</span>
          </div>
          <span className="hidden font-bold md:inline-block text-futuristic-title">PRECISION FIRE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 mr-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-red-500 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full text-futuristic"
          >
            HOME
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium hover:text-red-500 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full text-futuristic"
          >
            ARSENAL
          </Link>
          <Link
            href="/about-us"
            className="text-sm font-medium hover:text-red-500 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full text-futuristic"
          >
            INTEL
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-red-500 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full text-futuristic"
          >
            CONTACT
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-4">
          {searchOpen ? (
            <div className="flex items-center animate-in slide-in-from-top-5 duration-300">
              <Input
                type="search"
                placeholder="Search arsenal..."
                className="w-full md:w-[200px] bg-[#0f1923] border-red-500/30 text-white placeholder:text-zinc-400 focus:border-red-500"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(false)}
                className="text-red-500 hover:bg-red-500/10"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(true)}
              className="hover:rotate-12 transition-transform duration-200 text-red-500 hover:bg-red-500/10"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <Link href="/contact" className="hidden sm:inline-flex">
            <FuturisticButton variant="primary" className="whitespace-nowrap">
              Contact Command
            </FuturisticButton>
          </Link>
        </div>
      </div>
    </header>
  )
}

