


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { client } from "@/sanity/lib/client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default async function GearUp() {
  const res = await client.fetch(`
    *[_type == 'landingPage'][0].sections[2].gearUpCards[]{
      'gearUpCardsHeading': gearUpCardsHeading,
      'gearUpCardsSubHeading': gearUpCardsSubHeading,
      'gearUpCardsPrice': gearUpCardsPrice,
      'gearUpCardsImg': gearUpCardsImg.asset->url
    }
  `);

  return (
    <div className="container mx-auto px-4 mb-[84px]">
      <h2 className="text-2xl font-medium mb-8">Gear Up</h2>

      <div className="flex items-center justify-between gap-4 mb-4">
        <span className="text-sm font-medium">Shop Men&apos;s & Women&apos;s</span>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full bg-gray-100">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-gray-200">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {res.slice(0, 4).map((product: any, index: number) => (
          <Link key={index} href={"/products"}>
            <Card className="border-0 shadow-none">
              <CardContent className="p-0">
                <div className="aspect-[3/4] bg-gray-100 relative">
                  <Image
                    src={product.gearUpCardsImg || "/placeholder.png"} // Fallback for missing images
                    alt="Product"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-sm">
                      {product.gearUpCardsHeading || "Product Name"}
                    </h3>
                    <span className="text-sm font-medium">
                      ₹{product.gearUpCardsPrice || "N/A"}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    {product.gearUpCardsSubHeading || "Description"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
