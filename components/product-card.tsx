import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

export default function ProductCard({
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
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="relative overflow-hidden">
        <Link href={`/products/${id}`}>
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={300}
            height={300}
            className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </Link>
        <div className="absolute left-2 top-2 flex flex-col gap-1">
          {isNew && <Badge className="bg-red-600 hover:bg-red-700 animate-pulse">New</Badge>}
          {isBestSeller && <Badge className="bg-amber-500 hover:bg-amber-600">Best Seller</Badge>}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="mb-1 text-sm text-zinc-500">{category}</div>
        <Link href={`/products/${id}`} className="group">
          <h3 className="line-clamp-2 font-medium group-hover:text-red-600 transition-colors duration-200">{name}</h3>
        </Link>
        <div className="mt-2 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 transition-all duration-300 ${
                i < rating ? "fill-amber-400 text-amber-400" : "fill-zinc-200 text-zinc-200"
              } group-hover:animate-pulse`}
            />
          ))}
          <span className="ml-1 text-xs text-zinc-500">({Math.floor(Math.random() * 100) + 10})</span>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-4">
        <div className="font-bold text-red-600 transition-all duration-300 group-hover:scale-110">
          ${price.toFixed(2)}
        </div>
        <Button size="sm" className="bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

