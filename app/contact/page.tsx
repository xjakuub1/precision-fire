import type { Metadata } from "next"
import { Mail, MapPin, Phone } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import AnimatedSection from "@/components/animated-section"
import TechBackground from "@/components/tech-background"
import HUDElements from "@/components/hud-elements"
import FuturisticCard from "@/components/futuristic-card"

export const metadata: Metadata = {
  title: "Command Center",
  description:
    "Connect with our tactical specialists for expert consultation. Submit your inquiry and we'll establish contact promptly.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0f1923] text-white overflow-y-hidden">
      <Navbar />
      <main className="flex-1">
        <div className="relative bg-[#0f1923] py-12 text-white">
          <TechBackground className="opacity-20" />
          <div className="absolute inset-0 tech-pattern-subtle"></div>
          <HUDElements className="z-10" />

          <div className="container relative z-20">
            <AnimatedSection>
              <div className="text-center mb-4">
                <h1 className="text-3xl font-bold text-futuristic-title inline-flex items-center">
                  <span className="h-px w-8 bg-red-500/50 mr-4 hidden sm:block"></span>
                  COMMAND <span className="text-red-500 mx-2">CENTER</span>
                  <span className="h-px w-8 bg-red-500/50 ml-4 hidden sm:block"></span>
                </h1>
                <p className="mt-2 text-zinc-400">Connect with our tactical specialists for expert consultation</p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <AnimatedSection direction="left">
              <div>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-futuristic-title inline-flex items-center">
                    <span className="h-px w-6 bg-red-500/50 mr-3 hidden sm:block"></span>
                    TACTICAL <span className="text-red-500 mx-2">COMMUNICATIONS</span>
                    <span className="h-px w-6 bg-red-500/50 ml-3 hidden sm:block"></span>
                  </h2>
                </div>
                <p className="mb-6 text-zinc-400">
                  Have questions about our tactical systems or services? Our team of specialists is ready to provide
                  expert consultation. Submit your inquiry and we'll establish contact promptly.
                </p>

                <div className="mb-8 grid gap-6">
                  <FuturisticCard glowEffect techPattern className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-red-600/20 p-3 text-red-500 border border-red-500/50">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-futuristic">HEADQUARTERS</h3>
                        <p className="mt-1 text-zinc-400">
                          123 Precision Way
                          <br />
                          Tactical City, TC 12345
                        </p>
                      </div>
                    </div>
                  </FuturisticCard>

                  <FuturisticCard glowEffect techPattern className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-red-600/20 p-3 text-red-500 border border-red-500/50">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-futuristic">DIRECT LINE</h3>
                        <p className="mt-1 text-zinc-400">(555) 123-4567</p>
                        <p className="text-sm text-zinc-500">MON-FRI: 09:00-18:00 HOURS</p>
                      </div>
                    </div>
                  </FuturisticCard>

                  <FuturisticCard glowEffect techPattern className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-red-600/20 p-3 text-red-500 border border-red-500/50">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-futuristic">SECURE COMMUNICATIONS</h3>
                        <p className="mt-1 text-zinc-400">command@precisionfire.com</p>
                        <p className="text-sm text-zinc-500">RESPONSE TIME: 24-48 HOURS</p>
                      </div>
                    </div>
                  </FuturisticCard>
                </div>

                <FuturisticCard techPattern className="p-6">
                  <h3 className="mb-2 font-bold text-futuristic">OPERATIONAL HOURS</h3>
                  <ul className="grid gap-2 text-zinc-400">
                    <li className="flex justify-between">
                      <span>MONDAY - FRIDAY:</span>
                      <span className="text-red-500">09:00 - 18:00 HOURS</span>
                    </li>
                    <li className="flex justify-between">
                      <span>SATURDAY - SUNDAY:</span>
                      <span className="text-red-500">CLOSED</span>
                    </li>
                  </ul>
                </FuturisticCard>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

