import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Precision Fire",
    default: "Precision Fire | Advanced Tactical Solutions",
  },
  description: "Advanced gunsmithing and tactical tuning solutions for optimal performance",
  keywords: ["gunsmithing", "tactical", "precision", "firearms", "custom", "tuning"],
  authors: [{ name: "Precision Fire" }],
  creator: "Precision Fire",
  publisher: "Precision Fire",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://precisionfire.com",
    title: "Precision Fire | Advanced Tactical Solutions",
    description: "Advanced gunsmithing and tactical tuning solutions for optimal performance",
    siteName: "Precision Fire",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}

