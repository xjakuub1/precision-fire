import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronRight, Star, Crosshair, Shield, Zap } from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import TechBackground from "@/components/tech-background"
import HUDElements from "@/components/hud-elements"
import FuturisticButton from "@/components/futuristic-button"
import FuturisticCard from "@/components/futuristic-card"
import { getProductById, getProducts } from "@/lib/products"

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  // The ID from the URL might need normalization
  const product = getProductById(params.id)

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    }
  }

  return {
    title: product.name,
    description: product.description.substring(0, 160),
    openGraph: {
      title: `${product.name} | Precision Fire`,
      description: product.description.substring(0, 160),
      images: [product.image],
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  // The ID from the URL might need normalization
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#0f1923] text-white">
      <Navbar />
      <main className="flex-1">
        <div className="relative bg-[#0f1923] py-8 text-white">
          <TechBackground className="opacity-20" />
          <div className="absolute inset-0 tech-pattern-subtle"></div>
          <HUDElements className="z-10" />

          <div className="container relative z-20">
            <AnimatedSection>
              <div className="flex items-center mb-4">
                <Link
                  href="/products"
                  className="text-zinc-400 hover:text-red-500 transition-colors duration-200 flex items-center"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  <span className="text-sm text-futuristic">BACK TO ARSENAL</span>
                </Link>
                <div className="flex items-center ml-2">
                  <ChevronRight className="h-4 w-4 text-zinc-600" />
                  <span className="ml-1 text-sm text-zinc-400">{product.category}</span>
                  <ChevronRight className="h-4 w-4 text-zinc-600 ml-2" />
                  <span className="ml-1 text-sm text-red-500">{product.name}</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="container py-8">
          <div className="grid gap-8 md:grid-cols-2">
            <AnimatedSection direction="left">
              <div className="relative">
                <FuturisticCard className="overflow-hidden">
                  <div className="relative aspect-square">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />

                    {/* HUD overlay elements */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-4 left-4 text-xs text-red-500 font-mono">TACTICAL.SYSTEMS</div>
                      <div className="absolute bottom-4 right-4 text-xs text-red-500 font-mono">ID:{product.id}</div>
                      <div className="absolute top-0 left-0 w-20 h-20">
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500"></div>
                      </div>
                      <div className="absolute top-0 right-0 w-20 h-20">
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-20 h-20">
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500"></div>
                      </div>
                      <div className="absolute bottom-0 right-0 w-20 h-20">
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500"></div>
                      </div>
                    </div>
                  </div>
                </FuturisticCard>

                {product.isNew && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded text-futuristic">
                      NEW
                    </span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-4 gap-2 mt-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative aspect-square">
                    <FuturisticCard className="overflow-hidden cursor-pointer hover:border-red-500 transition-colors duration-200">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={`${product.name} view ${i}`}
                        fill
                        className="object-cover"
                      />
                    </FuturisticCard>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <FuturisticCard className="p-6">
                <div className="mb-2 text-sm text-red-500 text-futuristic">{product.category}</div>
                <h1 className="text-3xl font-bold text-white mb-2 text-futuristic-title">{product.name}</h1>

                <div className="flex items-center mb-4">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < (product.rating || 0) ? "fill-red-500 text-red-500" : "fill-zinc-700 text-zinc-700"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-zinc-400">({Math.floor(Math.random() * 100) + 10} reviews)</span>
                </div>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-red-500">${product.price.toFixed(2)}</span>
                  {product.isBestSeller && (
                    <span className="ml-3 bg-[#0f1923] text-red-500 text-xs font-bold px-2 py-1 rounded border border-red-500 text-futuristic">
                      TACTICAL CHOICE
                    </span>
                  )}
                </div>

                <p className="text-zinc-300 mb-6">{product.description}</p>

                <div className="grid gap-4 mb-6">
                  <div className="flex items-center text-zinc-300">
                    <Shield className="h-5 w-5 text-red-500 mr-2" />
                    <span>Lifetime warranty on all tactical components</span>
                  </div>
                  <div className="flex items-center text-zinc-300">
                    <Zap className="h-5 w-5 text-red-500 mr-2" />
                    <span>Engineered for optimal performance in all environments</span>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mb-6">
                  <FuturisticButton variant="primary" size="lg" className="flex-1">
                    <span className="flex items-center justify-center">
                      <Crosshair className="mr-2 h-5 w-5" />
                      ACQUIRE NOW
                    </span>
                  </FuturisticButton>
                  <FuturisticButton variant="outline" size="lg" className="flex-1">
                    ADD TO LOADOUT
                  </FuturisticButton>
                </div>

                <div className="border-t border-zinc-800 pt-6">
                  <h3 className="font-bold mb-2 text-futuristic">PRODUCT SPECIFICATIONS</h3>
                  <ul className="grid gap-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <li key={key} className="flex justify-between">
                        <span className="text-zinc-400">{key}:</span>
                        <span className="text-white">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FuturisticCard>
            </AnimatedSection>
          </div>

          <div className="mt-12">
            <AnimatedSection>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white text-futuristic-title inline-flex items-center">
                  <span className="h-px w-8 bg-red-500/50 mr-4 hidden sm:block"></span>
                  TACTICAL <span className="text-red-500 mx-2">FEATURES</span>
                  <span className="h-px w-8 bg-red-500/50 ml-4 hidden sm:block"></span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-2">
              <AnimatedSection direction="up" delay={0.1}>
                <FuturisticCard className="p-6">
                  <h3 className="font-bold mb-4 text-futuristic">KEY FEATURES</h3>
                  <ul className="grid gap-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="rounded-full bg-red-600/20 p-1 mr-3 mt-0.5">
                          <ChevronRight className="h-4 w-4 text-red-500" />
                        </div>
                        <span className="text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </FuturisticCard>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.2}>
                <FuturisticCard className="p-6">
                  <h3 className="font-bold mb-4 text-futuristic">COMPATIBILITY</h3>
                  <p className="text-zinc-300 mb-4">
                    This tactical component is designed for seamless integration with the following platforms:
                  </p>
                  <ul className="grid gap-3">
                    {product.compatibility.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="rounded-full bg-red-600/20 p-1 mr-3 mt-0.5">
                          <ChevronRight className="h-4 w-4 text-red-500" />
                        </div>
                        <span className="text-zinc-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </FuturisticCard>
              </AnimatedSection>
            </div>
          </div>

          <div className="mt-12">
            <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
              {getProducts()
                .filter((p) => p.id !== product.id && p.category === product.category)
                .slice(0, 4)
                .map((relatedProduct, index) => (
                  <AnimatedSection key={relatedProduct.id} delay={0.1 * index} direction="up">
                    <Link href={`/products/${relatedProduct.id}`} className="block h-full">
                      <FuturisticCard className="h-full overflow-hidden group">
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={relatedProduct.image || "/placeholder.svg"}
                            alt={relatedProduct.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-sm font-bold text-white group-hover:text-red-500 transition-colors duration-300 text-futuristic line-clamp-2">
                            {relatedProduct.name}
                          </h3>
                          <p className="font-bold text-red-500 mt-2 text-sm">${relatedProduct.price.toFixed(2)}</p>
                        </div>
                      </FuturisticCard>
                    </Link>
                  </AnimatedSection>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

