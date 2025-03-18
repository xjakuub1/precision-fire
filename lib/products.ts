export interface Product {
  id: string
  name: string
  category: string
  price: number
  image: string
  description: string
  features: string[]
  specifications: Record<string, string>
  compatibility: string[]
  rating?: number
  isNew?: boolean
  isBestSeller?: boolean
}

export function getProducts(): Product[] {
  return [
    {
      id: "1001",
      name: "Tactical Trigger System",
      category: "Trigger Systems",
      price: 129.99,
      image: "/placeholder.svg?height=300&width=300&text=Trigger System",
      description:
        "The Tactical Trigger System represents the pinnacle of precision engineering, designed for operators who demand instantaneous response and unparalleled control. This advanced system features a precision-machined sear interface, adjustable pre-travel, and zero overtravel to deliver a crisp, clean break with every pull.",
      features: [
        "Precision-machined from aerospace-grade materials",
        "Adjustable pull weight from 2.5-4.5 lbs",
        "Zero creep design with positive reset",
        "Self-lubricating components for extended service life",
        "Drop-safe design with integrated safety features",
      ],
      specifications: {
        Material: "Aircraft-grade aluminum with titanium components",
        "Pull Weight": "Adjustable 2.5-4.5 lbs",
        "Reset Travel": "0.1 inches",
        "Total Travel": "0.2 inches",
        Installation: "Drop-in design, no gunsmithing required",
        Finish: "Mil-Spec anodized, matte black",
      },
      compatibility: [
        "AR-15 platform",
        "M4/M16 variants",
        "SR-25 pattern rifles",
        "Compatible with mil-spec lower receivers",
      ],
      rating: 4.9,
      isNew: true,
      isBestSeller: true,
    },
    {
      id: "1002",
      name: "Match-Grade Precision Barrel",
      category: "Barrel Components",
      price: 249.99,
      image: "/placeholder.svg?height=300&width=300&text=Precision Barrel",
      description:
        "Our Match-Grade Precision Barrel delivers exceptional accuracy and consistency for the most demanding tactical applications. Each barrel is precision-machined from premium steel, button-rifled, and stress-relieved to ensure optimal performance in all environmental conditions.",
      features: [
        "416R stainless steel construction",
        "5R rifling for reduced bullet deformation",
        "Cryogenically treated for enhanced durability",
        "Hand-lapped bore for superior accuracy",
        "Threaded muzzle with protective cap",
      ],
      specifications: {
        Material: "416R stainless steel",
        "Twist Rate": '1:8" (customizable)',
        Rifling: "5R precision rifling",
        "Length Options": '16", 18", 20"',
        Finish: "Matte black nitride",
        Weight: '1.2 lbs (16" version)',
      },
      compatibility: ["AR-15 platform", "DPMS pattern rifles", "Compatible with standard barrel extensions"],
      rating: 4.8,
      isNew: false,
      isBestSeller: true,
    },
    {
      id: "1003",
      name: "Advanced Gas Block",
      category: "Gas Systems",
      price: 89.99,
      image: "/placeholder.svg?height=300&width=300&text=Gas Block",
      description:
        "The Advanced Gas Block provides precise gas regulation for optimal cycling and reduced felt recoil. Machined from solid steel and featuring an adjustable gas system, this component allows operators to fine-tune their weapon's performance for different ammunition types and operating conditions.",
      features: [
        "Precision CNC machined from 4140 steel",
        "20-position adjustable gas regulation",
        "Low-profile design compatible with most handguards",
        "Set screw and pin mounting options included",
        "Melonite QPQ finish for corrosion resistance",
      ],
      specifications: {
        Material: "4140 steel",
        Diameter: ".750 inch (standard)",
        Adjustment: "20 positions from closed to full open",
        Weight: "1.6 oz",
        Installation: "Set screw or pin mount",
        Finish: "Melonite QPQ",
      },
      compatibility: ["AR-15 platform", ".750 barrel diameter (standard)", "Also available in .625 and .875 diameters"],
      rating: 4.7,
      isNew: false,
      isBestSeller: false,
    },
    {
      id: "1004",
      name: "Enhanced Bolt Carrier",
      category: "Bolt Assemblies",
      price: 149.99,
      image: "/placeholder.svg?height=300&width=300&text=Bolt Carrier",
      description:
        "Our Enhanced Bolt Carrier is engineered for flawless operation in high-stress tactical environments. Featuring a proprietary coating and optimized mass distribution, this bolt carrier group reduces friction, enhances reliability, and provides smoother cycling under all conditions.",
      features: [
        "Full-auto profile for consistent cycling",
        "Properly staked gas key with Grade 8 fasteners",
        "Enhanced extractor with dual spring system",
        "Proprietary NP3 coating for reduced friction",
        "MPI and HPT tested for reliability",
      ],
      specifications: {
        Material: "Carpenter 158 steel",
        Coating: "NP3 nickel-Teflon",
        Weight: "11.5 oz",
        Testing: "MPI and HPT certified",
        Extractor: "Enhanced with dual spring system",
        "Cam Pin": "Hardened steel with DLC coating",
      },
      compatibility: ["AR-15 platform", "M4/M16 variants", "Compatible with standard upper receivers"],
      rating: 4.9,
      isNew: true,
      isBestSeller: false,
    },
    {
      id: "1005",
      name: "Recoil Compensator",
      category: "Muzzle Devices",
      price: 69.99,
      image: "/placeholder.svg?height=300&width=300&text=Compensator",
      description:
        "The Recoil Compensator significantly reduces muzzle rise and felt recoil, allowing for faster follow-up shots and improved accuracy during rapid fire. Precision-machined ports redirect gases to counteract muzzle movement, keeping you on target through multiple engagements.",
      features: [
        "Three-chamber design for maximum recoil reduction",
        "Top ports to eliminate muzzle rise",
        "Side ports tuned to minimize lateral movement",
        "CNC machined from 17-4 stainless steel",
        "Compatible with standard threading",
      ],
      specifications: {
        Material: "17-4 stainless steel",
        Threading: "1/2x28 (5.56) or 5/8x24 (7.62)",
        Length: "2.25 inches",
        Diameter: "0.875 inches",
        Weight: "3.0 oz",
        Finish: "Matte black nitride",
      },
      compatibility: ["AR-15 platform", "AR-10 platform", "Any firearm with compatible threading"],
      rating: 4.6,
      isNew: false,
      isBestSeller: false,
    },
    {
      id: "1006",
      name: "Carbon Fiber Handguard",
      category: "Tactical Rails",
      price: 199.99,
      image: "/placeholder.svg?height=300&width=300&text=Handguard",
      description:
        "Our Carbon Fiber Handguard combines exceptional strength with minimal weight, providing a stable platform for accessories while enhancing maneuverability. The proprietary carbon fiber construction dissipates heat rapidly while maintaining structural integrity under the most demanding conditions.",
      features: [
        "Proprietary carbon fiber construction",
        "Full-length top rail with M-LOK slots at 3, 6, and 9 o'clock",
        "Anti-rotation design with steel barrel nut",
        "Superior heat dissipation properties",
        "QD sling mount points integrated",
      ],
      specifications: {
        Material: "Carbon fiber with aluminum components",
        "Length Options": '10", 12", 15"',
        Weight: '7.5 oz (12" version)',
        Mounting: "Proprietary barrel nut system",
        Attachment: "M-LOK compatible with top Picatinny rail",
        "Heat Resistance": "Rated to 800°F continuous",
      },
      compatibility: ["AR-15 platform", "M4/M16 variants", "Compatible with standard upper receivers"],
      rating: 4.8,
      isNew: true,
      isBestSeller: true,
    },
    {
      id: "1007",
      name: "Ambidextrous Control Module",
      category: "Control Systems",
      price: 79.99,
      image: "/placeholder.svg?height=300&width=300&text=Control Module",
      description:
        "The Ambidextrous Control Module provides full weapon manipulation capabilities for both right and left-handed operators. This drop-in replacement enhances tactical versatility with ambidextrous magazine release, bolt catch, and safety selector functions.",
      features: [
        "True ambidextrous controls for right or left-handed operation",
        "Enhanced ergonomics for positive manipulation with gloves",
        "Drop-in installation with no permanent modifications",
        "Precision machined from 7075-T6 aluminum",
        "Textured surfaces for positive control in all conditions",
      ],
      specifications: {
        Material: "7075-T6 aluminum",
        Weight: "2.1 oz",
        Installation: "Drop-in design",
        Finish: "Type III hard anodized",
        Controls: "Magazine release, bolt catch, safety selector",
        Compatibility: "Standard AR-15 lower receivers",
      },
      compatibility: ["AR-15 platform", "M4/M16 variants", "Most mil-spec lower receivers"],
      rating: 4.7,
      isNew: false,
      isBestSeller: false,
    },
    {
      id: "1008",
      name: "Kinetic Buffer System",
      category: "Recoil Management",
      price: 119.99,
      image: "/placeholder.svg?height=300&width=300&text=Buffer System",
      description:
        "Our Kinetic Buffer System utilizes advanced fluid dynamics to significantly reduce felt recoil and improve cycling reliability. The proprietary multi-stage design absorbs energy progressively, resulting in smoother operation and enhanced control during rapid fire sequences.",
      features: [
        "Hydraulic damping system with progressive resistance",
        "Self-regulating for different ammunition loads",
        "Reduced bolt carrier velocity for extended component life",
        "Drop-in replacement for standard buffer assemblies",
        "Machined from high-grade stainless steel and aluminum",
      ],
      specifications: {
        Material: "17-4 stainless steel and 7075 aluminum",
        Weight: "4.7 oz",
        Length: "Standard carbine buffer length",
        "Damping Medium": "Proprietary hydraulic fluid",
        Spring: "Chrome silicon wire with enhanced durability",
        "Recoil Reduction": "Up to 40% compared to standard systems",
      },
      compatibility: ["AR-15 platform", "Standard carbine buffer tubes", "Compatible with most stock systems"],
      rating: 4.9,
      isNew: true,
      isBestSeller: false,
    },
    {
      id: "1009",
      name: "Tactical Optic Mount",
      category: "Optic Platforms",
      price: 109.99,
      image: "/placeholder.svg?height=300&width=300&text=Optic Mount",
      description:
        "The Tactical Optic Mount provides a rock-solid platform for precision optics, maintaining zero through the most demanding conditions. The quick-detach system allows for rapid transitions between optics while returning to zero when remounted.",
      features: [
        "Precision machined from 7075-T6 aluminum",
        "Quick-detach lever system with tension adjustment",
        "Return to zero capability when remounted",
        "Anti-cant indicator built into mount",
        "Available in multiple heights for proper cheek weld",
      ],
      specifications: {
        Material: "7075-T6 aluminum",
        Weight: "5.8 oz",
        "Height Options": 'Absolute co-witness, 1/3 co-witness, 1.93"',
        Mounting: "Picatinny rail compatible",
        Retention: "QD lever with tension adjustment",
        Finish: "Type III hard anodized",
      },
      compatibility: [
        "Standard Picatinny rails",
        'Compatible with most 30mm and 1" optics',
        "Adapter available for 34mm optics",
      ],
      rating: 4.8,
      isNew: false,
      isBestSeller: true,
    },
    {
      id: "1010",
      name: "Ergonomic Grip Interface",
      category: "Interface Components",
      price: 39.99,
      image: "/placeholder.svg?height=300&width=300&text=Grip Interface",
      description:
        "Our Ergonomic Grip Interface enhances weapon control and reduces fatigue during extended operations. The textured surface and optimized angle provide superior ergonomics for improved accuracy and comfort in all firing positions.",
      features: [
        "Optimized 17-degree grip angle for natural pointing",
        "Interchangeable palm swells for custom fit",
        "Aggressive texture pattern for secure grip in all conditions",
        "Waterproof storage compartment in base",
        "Constructed from high-strength polymer with rubber overmolding",
      ],
      specifications: {
        Material: "Reinforced polymer with rubber overmolding",
        Angle: "17 degrees",
        Weight: "2.8 oz",
        Height: "4.5 inches",
        Storage: "Waterproof compartment with threaded cap",
        Installation: "Drop-in with single bolt mounting",
      },
      compatibility: ["AR-15 platform", "M4/M16 variants", "Compatible with standard lower receivers"],
      rating: 4.6,
      isNew: false,
      isBestSeller: false,
    },
    {
      id: "1011",
      name: "Extended Control System",
      category: "Tactical Controls",
      price: 59.99,
      image: "/placeholder.svg?height=300&width=300&text=Control System",
      description:
        "The Extended Control System enhances weapon manipulation with oversized controls for faster, more positive operation. Designed for tactical professionals who need reliable control under stress, this system improves reload times and handling efficiency.",
      features: [
        "Extended magazine release for faster reloads",
        "Enlarged bolt catch/release for positive manipulation",
        "Textured surfaces for secure operation with gloves",
        "Drop-in installation with no permanent modifications",
        "Precision machined from aircraft-grade aluminum",
      ],
      specifications: {
        Material: "7075-T6 aluminum",
        Weight: "1.9 oz",
        Installation: "Drop-in design",
        Finish: "Type III hard anodized",
        Components: "Magazine release, bolt catch/release",
        Operation: "Compatible with right or left-handed use",
      },
      compatibility: ["AR-15 platform", "M4/M16 variants", "Most mil-spec lower receivers"],
      rating: 4.7,
      isNew: false,
      isBestSeller: false,
    },
    {
      id: "1012",
      name: "Stabilization Platform",
      category: "Stability Systems",
      price: 149.99,
      image: "/placeholder.svg?height=300&width=300&text=Stabilization Platform",
      description:
        "Our Stabilization Platform provides enhanced shooting stability for improved accuracy in various positions. The quick-deploy design allows for rapid transitions between standing, kneeling, and prone positions while maintaining a stable shooting platform.",
      features: [
        "Carbon fiber construction for optimal strength-to-weight ratio",
        "Quick-deploy legs with positive locking mechanism",
        "Adjustable height for various shooting positions",
        "M-LOK attachment system for accessories",
        "Non-slip rubber feet for secure placement",
      ],
      specifications: {
        Material: "Carbon fiber with aluminum components",
        Weight: "9.5 oz",
        "Extended Length": "9 inches",
        "Collapsed Length": "6 inches",
        "Adjustment Range": "3 positions with positive detents",
        Mounting: "M-LOK compatible",
      },
      compatibility: [
        "Any firearm with M-LOK handguard",
        "Picatinny rail adapter available",
        "Universal mounting options for various platforms",
      ],
      rating: 4.8,
      isNew: true,
      isBestSeller: false,
    },
  ]
}

// Update the getProductById function to be more robust
export function getProductById(id: string): Product | undefined {
  // Simply find the product with the matching ID
  return getProducts().find((product) => product.id === id)
}

