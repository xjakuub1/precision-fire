"use client"

import type React from "react"
import { useState } from "react"
import { Send, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import FuturisticButton from "@/components/futuristic-button"
import FuturisticCard from "@/components/futuristic-card"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log(formState)
      setIsSubmitting(false)
      setIsSubmitted(true)

      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          inquiryType: "general",
        })
      }, 3000)
    }, 1500)
  }

  return (
    <FuturisticCard glowEffect techPattern className="relative overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className="h-px bg-red-500/50 flex-grow max-w-[30px]"></div>
          <h2 className="text-2xl font-bold mx-4 text-futuristic-title">
            ESTABLISH <span className="text-red-500">CONTACT</span>
          </h2>
          <div className="h-px bg-red-500/50 flex-grow max-w-[30px]"></div>
        </div>
        <p className="mb-6 text-zinc-400 text-center">
          Complete the secure form below to initiate communications with our tactical team.
        </p>
      </div>

      <div className="px-6 pb-6">
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-8 text-center animate-in zoom-in-50 duration-300">
            <div className="mb-4 rounded-full bg-red-600/20 p-3 text-red-500 border border-red-500">
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
                className="h-6 w-6"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-red-500 text-futuristic">TRANSMISSION COMPLETE</h3>
            <p className="mt-2 text-zinc-400">
              Your message has been securely transmitted. Our tactical team will respond within 24-48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-futuristic text-zinc-300">
                IDENTIFICATION
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formState.name}
                onChange={handleChange}
                required
                className="bg-[#0f1923] border-red-500/30 text-white focus:border-red-500"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email" className="text-futuristic text-zinc-300">
                SECURE COMMS
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formState.email}
                onChange={handleChange}
                required
                className="bg-[#0f1923] border-red-500/30 text-white focus:border-red-500"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone" className="text-futuristic text-zinc-300">
                TACTICAL LINE
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formState.phone}
                onChange={handleChange}
                className="bg-[#0f1923] border-red-500/30 text-white focus:border-red-500"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="subject" className="text-futuristic text-zinc-300">
                SUBJECT
              </Label>
              <Select value={formState.subject} onValueChange={(value) => handleSelectChange("subject", value)}>
                <SelectTrigger id="subject" className="bg-[#0f1923] border-red-500/30 text-white focus:border-red-500">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent className="bg-[#0f1923] border border-red-500/30 text-white">
                  <SelectItem value="custom-order" className="text-zinc-300 focus:bg-red-500/10 focus:text-white">
                    CUSTOM ORDER
                  </SelectItem>
                  <SelectItem value="technical-support" className="text-zinc-300 focus:bg-red-500/10 focus:text-white">
                    TECHNICAL SUPPORT
                  </SelectItem>
                  <SelectItem value="other" className="text-zinc-300 focus:bg-red-500/10 focus:text-white">
                    OTHER
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message" className="text-futuristic text-zinc-300">
                MESSAGE
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Enter your message details"
                value={formState.message}
                onChange={handleChange}
                className="min-h-[120px] bg-[#0f1923] border-red-500/30 text-white focus:border-red-500"
                required
              />
            </div>

            <FuturisticButton type="submit" variant="primary" className="mt-2 w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  TRANSMITTING...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Send className="mr-2 h-4 w-4" />
                  TRANSMIT MESSAGE
                </span>
              )}
            </FuturisticButton>
          </form>
        )}
      </div>
    </FuturisticCard>
  )
}

