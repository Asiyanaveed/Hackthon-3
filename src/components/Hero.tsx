import Image from "next/image"
import { Button } from "@/components/ui/button"
import { client } from "@/sanity/lib/client"

async function Hero() {

  const res = await client.fetch(`*[_type == 'landingPage'][0].sections[0]
   {'heroImg': heroImg.asset->url,
   'heroHeading': heroHeading ,
   'heroPara': heroPara,
   'heroBtnText': heroBtnText}`)

   const {heroImg, heroHeading, heroPara, heroBtnText} = await res

  return (
  <div className="w-full max-w-7xl mx-auto mb-[84px]">
  {/* Main Product Image Section */}
  <div className="w-full h-[700px] mb-16 overflow-hidden relative">
    <Image
      src={heroImg}
      alt="Nike Air Max Pulse"
      layout="fill"
      objectFit="cover"
      className="-mt-[24px]"
      priority
    />
  </div>

  {/* Text Section */}
  <div className="max-w-4xl mx-auto text-center space-y-6 px-4 sm:px-6 lg:px-8">
    <span className="text-sm font-medium text-gray-900">First Look</span>
    
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 uppercase">
      {heroHeading}
    </h1>
    
    <p className="text-base text-gray-600 max-w-xl mx-auto">
      {heroPara}
     
    </p>
    
    {/* Buttons */}
    <div className="flex items-center justify-center gap-3 pt-4">
      <Button
        variant="default"
        className="rounded-full px-6 py-2 text-sm sm:text-base"
      >
        Notify Me
      </Button>
      <Button
        variant="default"
        className="rounded-full px-6 py-2 text-sm sm:text-base"
      >
        Shop {heroBtnText}
      </Button>
    </div>
  </div>
</div>


  )
}

export default Hero