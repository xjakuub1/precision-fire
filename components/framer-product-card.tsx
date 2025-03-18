"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Crosshair } from "lucide-react"
import { motion } from "framer-motion"
import { CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FuturisticButton from "@/components/futuristic-button"

interface ProductCardProps {
  id: string
  name: string
  category: string
  price: number
  image: string
  rating?: number
  isNew?: boolean
  isBestSeller?: boolean
}

export default function FramerProductCard({
  id,
  name,
  category,
  price,
  image,
  rating = Math.floor(Math.random() * 2) + 4,
  isNew = Math.random() > 0.8,
  isBestSeller = Math.random() > 0.8,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(255, 59, 48, 0.1), 0 10px 10px -5px rgba(255, 59, 48, 0.04)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="futuristic-card h-full">
        <div className="relative">
          <Link href={`/products/${id}`}>
            <div className="overflow-hidden">
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
                <Image
                  src={image || "/placeholder.svg"}
                  alt={name}
                  width={300}
                  height={300}
                  className="h-[200px] w-full object-cover"
                />
              </motion.div>
            </div>
          </Link>

          {/* HUD overlay elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-2 right-2 text-xs text-red-500 font-mono">ID:{id}</div>
            <div className="absolute top-0 left-0 w-12 h-12">
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-red-500"></div>
            </div>
            <div className="absolute top-0 right-0 w-12 h-12">
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-red-500"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-12 h-12">
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-red-500"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-12 h-12">
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-red-500"></div>
            </div>
          </div>

          <div className="absolute left-2 top-2 flex flex-col gap-1 z-10">
            {isNew && (
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <Badge className="bg-red-600 hover:bg-red-700 border border-red-500">
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    NEW
                  </motion.span>
                </Badge>
              </motion.div>
            )}
            {isBestSeller && (
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                <Badge className="bg-[#0f1923] hover:bg-[#0f1923]/80 border border-red-500 text-red-500">
                  TACTICAL CHOICE
                </Badge>
              </motion.div>
            )}
          </div>
        </div>

        <CardContent className="p-4 border-t border-red-500/20">
          <div className="mb-1 text-sm text-red-500 text-futuristic">{category}</div>
          <Link href={`/products/${id}`} className="group">
            <h3 className="line-clamp-2 font-medium group-hover:text-red-500 transition-colors duration-200 text-futuristic">
              {name}
            </h3>
          </Link>
          <div className="mt-2 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Star
                  className={`h-4 w-4 ${i < rating ? "fill-red-500 text-red-500" : "fill-zinc-700 text-zinc-700"}`}
                />
              </motion.div>
            ))}
            <span className="ml-1 text-xs text-zinc-400">({Math.floor(Math.random() * 100) + 10})</span>
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between border-t border-red-500/20 p-4">
          <motion.div whileHover={{ scale: 1.1 }} className="font-bold text-red-500 text-futuristic">
            ${price.toFixed(2)}
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <FuturisticButton variant="primary" size="sm" className="gap-2">
              <Crosshair className="h-4 w-4" />
              ACQUIRE
            </FuturisticButton>
          </motion.div>
        </CardFooter>
      </div>
    </motion.div>
  )
}

