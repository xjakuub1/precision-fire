"use client"

import { useState } from "react"
import { ChevronDown, Filter, SlidersHorizontal, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import FuturisticButton from "@/components/futuristic-button"

export default function ProductFilter() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const categories = [
    { id: "triggers", label: "Trigger Systems" },
    { id: "barrels", label: "Barrel Components" },
    { id: "gas-systems", label: "Gas Systems" },
    { id: "bolt-carriers", label: "Bolt Assemblies" },
    { id: "muzzle-devices", label: "Muzzle Devices" },
    { id: "handguards", label: "Tactical Rails" },
    { id: "charging-handles", label: "Charging Systems" },
    { id: "buffer-systems", label: "Buffer Systems" },
    { id: "optic-mounts", label: "Optic Platforms" },
    { id: "grips", label: "Interface Components" },
    { id: "controls", label: "Tactical Controls" },
    { id: "recoil-systems", label: "Stability Systems" },
  ]

  const brands = [
    { id: "precision-fire", label: "Precision Fire" },
    { id: "tactical-edge", label: "Tactical Edge" },
    { id: "marksman-pro", label: "Marksman Pro" },
    { id: "elite-arms", label: "Elite Arms" },
    { id: "performance-plus", label: "Performance Plus" },
  ]

  const materials = [
    { id: "steel", label: "Steel Alloy" },
    { id: "aluminum", label: "Aircraft Aluminum" },
    { id: "polymer", label: "Tactical Polymer" },
    { id: "titanium", label: "Titanium" },
    { id: "carbon-fiber", label: "Carbon Fiber" },
  ]

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden border-red-500/30 bg-[#0f1923] text-white hover:bg-red-500/10 hover:text-red-500 text-futuristic"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  FILTERS
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] sm:w-[400px] bg-[#0f1923] border-r border-red-500/30 text-white"
              >
                <SheetHeader>
                  <SheetTitle className="text-white text-futuristic">TACTICAL FILTERS</SheetTitle>
                </SheetHeader>
                <div className="grid gap-6 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="mobile-search" className="text-futuristic">
                      SEARCH
                    </Label>
                    <Input
                      id="mobile-search"
                      placeholder="Search arsenal..."
                      className="h-9 bg-[#0f1923] border-red-500/30 text-white focus:border-red-500"
                    />
                  </div>
                  <Separator className="bg-red-500/20" />
                  <div className="grid gap-2">
                    <h3 className="font-medium text-futuristic">PRICE RANGE</h3>
                    <div className="px-2">
                      <Slider
                        defaultValue={[0, 500]}
                        max={1000}
                        step={10}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="py-4"
                      />
                    </div>
                    <div className="flex items-center justify-between text-zinc-400">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                  <Separator className="bg-red-500/20" />
                  <div className="grid gap-2">
                    <h3 className="font-medium text-futuristic">CATEGORIES</h3>
                    <div className="grid gap-2">
                      {categories.map((category) => (
                        <div key={category.id} className="flex items-center gap-2">
                          <Checkbox
                            id={`mobile-category-${category.id}`}
                            className="border-red-500/50 data-[state=checked]:bg-red-500 data-[state=checked]:text-white"
                          />
                          <Label htmlFor={`mobile-category-${category.id}`} className="text-zinc-300">
                            {category.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Separator className="bg-red-500/20" />
                  <div className="grid gap-2">
                    <h3 className="font-medium text-futuristic">MANUFACTURERS</h3>
                    <div className="grid gap-2">
                      {brands.map((brand) => (
                        <div key={brand.id} className="flex items-center gap-2">
                          <Checkbox
                            id={`mobile-brand-${brand.id}`}
                            className="border-red-500/50 data-[state=checked]:bg-red-500 data-[state=checked]:text-white"
                          />
                          <Label htmlFor={`mobile-brand-${brand.id}`} className="text-zinc-300">
                            {brand.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Separator className="bg-red-500/20" />
                  <div className="grid gap-2">
                    <h3 className="font-medium text-futuristic">MATERIALS</h3>
                    <div className="grid gap-2">
                      {materials.map((material) => (
                        <div key={material.id} className="flex items-center gap-2">
                          <Checkbox
                            id={`mobile-material-${material.id}`}
                            className="border-red-500/50 data-[state=checked]:bg-red-500 data-[state=checked]:text-white"
                          />
                          <Label htmlFor={`mobile-material-${material.id}`} className="text-zinc-300">
                            {material.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <Button
                    variant="outline"
                    className="border-red-500/30 bg-[#0f1923] text-white hover:bg-red-500/10 hover:text-red-500 text-futuristic"
                  >
                    RESET
                  </Button>
                  <SheetClose asChild>
                    <FuturisticButton variant="primary">APPLY FILTERS</FuturisticButton>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>

            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-500/30 bg-[#0f1923] text-white hover:bg-red-500/10 hover:text-red-500 text-futuristic"
                  >
                    CATEGORY
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-[200px] bg-[#0f1923] border border-red-500/30 text-white"
                >
                  <DropdownMenuLabel className="text-futuristic">CATEGORIES</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-red-500/20" />
                  {categories.map((category) => (
                    <DropdownMenuCheckboxItem
                      key={category.id}
                      checked={false}
                      className="text-zinc-300 hover:bg-red-500/10 hover:text-white"
                    >
                      {category.label}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-500/30 bg-[#0f1923] text-white hover:bg-red-500/10 hover:text-red-500 text-futuristic"
                  >
                    MANUFACTURER
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-[200px] bg-[#0f1923] border border-red-500/30 text-white"
                >
                  <DropdownMenuLabel className="text-futuristic">MANUFACTURERS</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-red-500/20" />
                  {brands.map((brand) => (
                    <DropdownMenuCheckboxItem
                      key={brand.id}
                      checked={false}
                      className="text-zinc-300 hover:bg-red-500/10 hover:text-white"
                    >
                      {brand.label}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-500/30 bg-[#0f1923] text-white hover:bg-red-500/10 hover:text-red-500 text-futuristic"
                  >
                    MATERIAL
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-[200px] bg-[#0f1923] border border-red-500/30 text-white"
                >
                  <DropdownMenuLabel className="text-futuristic">MATERIALS</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-red-500/20" />
                  {materials.map((material) => (
                    <DropdownMenuCheckboxItem
                      key={material.id}
                      checked={false}
                      className="text-zinc-300 hover:bg-red-500/10 hover:text-white"
                    >
                      {material.label}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-500/30 bg-[#0f1923] text-white hover:bg-red-500/10 hover:text-red-500 text-futuristic"
                  >
                    PRICE
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-[200px] p-4 bg-[#0f1923] border border-red-500/30 text-white"
                >
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between text-zinc-400">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                      <Slider
                        defaultValue={[0, 500]}
                        max={1000}
                        step={10}
                        value={priceRange}
                        onValueChange={setPriceRange}
                      />
                    </div>
                    <FuturisticButton variant="primary" size="sm">
                      APPLY
                    </FuturisticButton>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex-1">
              <Input
                placeholder="Search arsenal..."
                className="h-9 md:w-[200px] lg:w-[300px] bg-[#0f1923] border-red-500/30 text-white focus:border-red-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-red-500/30 bg-[#0f1923] text-white hover:bg-red-500/10 hover:text-red-500 text-futuristic"
                >
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  SORT
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px] bg-[#0f1923] border border-red-500/30 text-white">
                <DropdownMenuCheckboxItem checked className="text-zinc-300 hover:bg-red-500/10 hover:text-white">
                  FEATURED
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="text-zinc-300 hover:bg-red-500/10 hover:text-white">
                  PRICE: LOW TO HIGH
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="text-zinc-300 hover:bg-red-500/10 hover:text-white">
                  PRICE: HIGH TO LOW
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="text-zinc-300 hover:bg-red-500/10 hover:text-white">
                  NEWEST FIRST
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="text-zinc-300 hover:bg-red-500/10 hover:text-white">
                  BEST SELLING
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant="secondary"
            size="sm"
            className="h-7 gap-1 text-xs bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/30 text-futuristic"
          >
            TRIGGER SYSTEMS
            <X className="h-3 w-3" />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="h-7 gap-1 text-xs bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/30 text-futuristic"
          >
            $50 - $200
            <X className="h-3 w-3" />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="h-7 gap-1 text-xs bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/30 text-futuristic"
          >
            PRECISION FIRE
            <X className="h-3 w-3" />
          </Button>
          <Button
            variant="link"
            size="sm"
            className="h-7 gap-1 text-xs text-red-500 hover:text-red-400 text-futuristic"
          >
            CLEAR ALL
          </Button>
        </div>
      </div>
    </div>
  )
}

