import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, Crosshair, Target } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import AnimatedTargetsBackground from "@/components/animated-targets-background"
import FuturisticButton from "@/components/futuristic-button"
import FuturisticCard from "@/components/futuristic-card"
import TechBackground from "@/components/tech-background"
import HUDElements from "@/components/hud-elements"

export const metadata: Metadata = {
  title: "Advanced Tactical Solutions",
  description:
    "Precision Fire offers advanced gunsmithing and tactical tuning solutions for optimal performance. Explore our arsenal of high-quality components and services.",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0f1923] text-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[600px] overflow-hidden bg-[#0f1923]">
            <TechBackground className="opacity-30" />
            <AnimatedTargetsBackground className="z-0" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent z-10" />
            <HUDElements className="z-20" />

            <div className="container absolute inset-0 z-30 flex flex-col items-center justify-center text-center">
              <div className="mb-6 h-24 w-24 animate-in slide-in-from-bottom-5 duration-700 relative">
                {/* Logo placeholder with futuristic design */}
                <div className="h-full w-full rounded-full border-2 border-red-500 flex items-center justify-center bg-black/50 backdrop-blur-sm relative overflow-hidden">
                  <span className="text-2xl font-bold text-futuristic-title neon-red">PF</span>
                  <div className="absolute inset-0 border-t-2 border-red-500 opacity-30 hud-rotate"></div>
                </div>
                <div className="absolute -inset-2 border-2 border-dashed border-red-500/30 rounded-full hud-rotate-reverse"></div>
              </div>

              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-in slide-in-from-bottom-5 duration-700 text-futuristic-title glow-text">
                PRECISION <span className="text-red-500">FIRE</span>
              </h1>

              <p className="mb-8 max-w-2xl text-lg animate-in slide-in-from-bottom-5 duration-700 delay-150 text-zinc-300">
                Advanced gunsmithing and tactical tuning solutions for optimal performance
              </p>

              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 animate-in slide-in-from-bottom-5 duration-700 delay-300">
                <Link href="/products">
                  <FuturisticButton variant="primary" size="lg" className="min-w-[200px] whitespace-nowrap">
                    <span className="flex items-center">
                      Browse Arsenal <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </FuturisticButton>
                </Link>
                <Link href="/contact">
                  <FuturisticButton variant="outline" size="lg" className="min-w-[200px] whitespace-nowrap">
                    Contact Command
                  </FuturisticButton>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="futuristic-gradient py-16 relative">
          <div className="tech-pattern absolute inset-0 opacity-10"></div>
          <div className="container relative z-10">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white text-futuristic-title inline-flex items-center">
                  <span className="h-px w-8 bg-red-500/50 mr-4 hidden sm:block"></span>
                  TACTICAL <span className="text-red-500 mx-2">SERVICES</span>
                  <span className="h-px w-8 bg-red-500/50 ml-4 hidden sm:block"></span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-3">
              <AnimatedSection delay={0.1} direction="up">
                <FuturisticCard glowEffect techPattern className="p-6 h-full">
                  <div className="mb-4 rounded-full bg-red-600/20 p-3 w-12 h-12 flex items-center justify-center border border-red-500/50">
                    <Crosshair className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-futuristic">PRECISION TUNING</h3>
                  <p className="text-zinc-300">
                    Advanced tuning services utilizing cutting-edge technology to enhance accuracy, reliability, and
                    tactical performance.
                  </p>
                </FuturisticCard>
              </AnimatedSection>

              <AnimatedSection delay={0.2} direction="up">
                <FuturisticCard glowEffect techPattern className="p-6 h-full">
                  <div className="mb-4 rounded-full bg-red-600/20 p-3 w-12 h-12 flex items-center justify-center border border-red-500/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-red-500"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-futuristic">TACTICAL COMPONENTS</h3>
                  <p className="text-zinc-300">
                    Military-grade components and accessories engineered for maximum performance in high-stress
                    environments.
                  </p>
                </FuturisticCard>
              </AnimatedSection>

              <AnimatedSection delay={0.3} direction="up">
                <FuturisticCard glowEffect techPattern className="p-6 h-full">
                  <div className="mb-4 rounded-full bg-red-600/20 p-3 w-12 h-12 flex items-center justify-center border border-red-500/50">
                    <Target className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-futuristic">ADVANCED ANALYTICS</h3>
                  <p className="text-zinc-300">
                    Cutting-edge diagnostic systems and performance analysis to optimize your tactical equipment.
                  </p>
                </FuturisticCard>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-[#0f1923] py-16 relative">
          <div className="absolute inset-0 tech-pattern-subtle"></div>
          <div className="container relative">
            <div className="grid gap-8 items-center md:grid-cols-2">
              <AnimatedSection direction="left">
                <div className="relative">
                  <div className="absolute -inset-1 border border-red-500/30"></div>
                  <div className="relative bg-[#0f1923]/80 p-6 backdrop-blur-sm">
                    <h2 className="mb-4 text-3xl font-bold text-white text-futuristic-title">
                      ABOUT <span className="text-red-500">PRECISION FIRE</span>
                    </h2>
                    <p className="mb-6 text-zinc-300">
                      Founded by elite tactical specialists with a passion for precision, Precision Fire has been
                      providing advanced gunsmithing services for over a decade. Our team combines military expertise
                      with cutting-edge technology to deliver superior results.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      We specialize in tactical enhancements, performance optimization, and precision modifications that
                      help operators achieve their maximum potential in any environment.
                    </p>
                    <Link href="/about">
                      <FuturisticButton variant="primary" className="group">
                        <span className="flex items-center">
                          Access Intel{" "}
                          <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </FuturisticButton>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.2}>
                <div className="relative">
                  <div className="absolute -inset-1 border border-red-500/30"></div>
                  <div className="relative h-[400px] overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Tactical workshop"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923] to-transparent opacity-60"></div>

                    {/* HUD overlay elements */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-4 left-4 text-xs text-red-500 font-mono">TACTICAL.SYSTEMS</div>
                      <div className="absolute bottom-4 right-4 text-xs text-red-500 font-mono">ID:PF-2025</div>
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
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-[#121e29] py-16 relative clip-path-slant">
          <div className="tech-pattern absolute inset-0 opacity-5"></div>
          <div className="container relative">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white text-futuristic-title inline-flex items-center">
                  <span className="h-px w-8 bg-red-500/50 mr-4 hidden sm:block"></span>
                  FEATURED <span className="text-red-500 mx-2">ARSENAL</span>
                  <span className="h-px w-8 bg-red-500/50 ml-4 hidden sm:block"></span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((item, index) => (
                <AnimatedSection key={item} delay={0.1 * index} direction="up">
                  <Link href={`/products/${item}`} className="block h-full">
                    <FuturisticCard className="h-full overflow-hidden group">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=200&width=300&text=Product ${item}`}
                          alt={`Product ${item}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923] to-transparent opacity-60"></div>

                        {/* HUD overlay elements */}
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute top-2 right-2 text-xs text-red-500 font-mono">
                            ID:TG-{1000 + item}
                          </div>
                          <div className="absolute top-0 left-0 w-12 h-12">
                            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-red-500"></div>
                          </div>
                          <div className="absolute top-0 right-0 w-12 h-12">
                            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-red-500"></div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="mb-2 font-bold text-white group-hover:text-red-500 transition-colors duration-300 text-futuristic">
                          TACTICAL TRIGGER SYSTEM
                        </h3>
                        <p className="mb-2 text-sm text-zinc-400">
                          Advanced precision engineering for optimal response and control.
                        </p>
                        <p className="font-bold text-red-500 transition-all duration-300 group-hover:scale-105 inline-block">
                          $129.99
                        </p>
                      </div>
                    </FuturisticCard>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.5}>
              <div className="mt-12 text-center">
                <Link href="/products">
                  <FuturisticButton variant="primary" size="lg" className="group">
                    <span className="flex items-center">
                      View Full Arsenal{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </FuturisticButton>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

