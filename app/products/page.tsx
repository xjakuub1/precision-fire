import type { Metadata } from "next"
import Link from "next/link"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductFilter from "@/components/product-filter"
import FramerAnimatedSection from "@/components/framer-animated-section"
import FramerProductCard from "@/components/framer-product-card"
import TechBackground from "@/components/tech-background"
import HUDElements from "@/components/hud-elements"
import { getProducts } from "@/lib/products"

export const metadata: Metadata = {
  title: "Tactical Arsenal",
  description:
    "Browse our selection of high-performance tactical components and accessories. Find precision-engineered products for optimal performance.",
}

export default function ProductsPage() {
  const products = getProducts()

  return (
    <div className="flex min-h-screen flex-col bg-[#0f1923] text-white overflow-y-hidden">
      <Navbar />
      <main className="flex-1">
        <div className="relative bg-[#0f1923] py-12 text-white">
          <TechBackground className="opacity-20" />
          <div className="absolute inset-0 tech-pattern-subtle"></div>
          <HUDElements className="z-10" />

          <div className="container relative z-20">
            <FramerAnimatedSection>
              <div className="text-center mb-4">
                <h1 className="text-3xl font-bold text-futuristic-title inline-flex items-center">
                  <span className="h-px w-8 bg-red-500/50 mr-4 hidden sm:block"></span>
                  TACTICAL <span className="text-red-500 mx-2">ARSENAL</span>
                  <span className="h-px w-8 bg-red-500/50 ml-4 hidden sm:block"></span>
                </h1>
                <p className="mt-2 text-zinc-400">
                  Browse our selection of high-performance tactical components and accessories
                </p>
              </div>
            </FramerAnimatedSection>
          </div>
        </div>

        <div className="container py-8">
          <FramerAnimatedSection>
            <ProductFilter />
          </FramerAnimatedSection>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product, index) => (
              <FramerAnimatedSection key={product.id} delay={0.05 * (index % 4)} direction="up">
                <FramerProductCard
                  id={product.id}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  image={product.image}
                />
              </FramerAnimatedSection>
            ))}
          </div>

          <FramerAnimatedSection delay={0.6}>
            <div className="mt-8 flex justify-center">
              <nav className="flex gap-1">
                <Link
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-red-500/50 bg-[#0f1923] text-sm font-medium text-white hover:bg-red-500/10 transition-colors duration-200"
                >
                  1
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-700 bg-[#0f1923] text-sm font-medium text-zinc-400 hover:bg-red-500/10 hover:border-red-500/50 hover:text-white transition-colors duration-200"
                >
                  2
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-700 bg-[#0f1923] text-sm font-medium text-zinc-400 hover:bg-red-500/10 hover:border-red-500/50 hover:text-white transition-colors duration-200"
                >
                  3
                </Link>
                <span className="inline-flex h-10 items-center justify-center px-2 text-sm font-medium text-zinc-400">
                  ...
                </span>
                <Link
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-700 bg-[#0f1923] text-sm font-medium text-zinc-400 hover:bg-red-500/10 hover:border-red-500/50 hover:text-white transition-colors duration-200"
                >
                  8
                </Link>
              </nav>
            </div>
          </FramerAnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  )
}

