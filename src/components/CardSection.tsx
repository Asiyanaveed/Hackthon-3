// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel"

// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Link from "next/link";
// import Image from 'next/image'
// import { client } from "@/sanity/lib/client";
// // import { Key } from "react";

// interface Product {
//   id  : string,
//   cardSecImg: string,
//   cardSecHeading: string,
//   cardSecSubHeading: string,
//   cardSecPrice: number
// }

// export default async function ProductShowcase() {

//   const res = await client.fetch(`*[_type == 'landingPage'][0].sections[1]
//    {'cardSectionHeading': cardSectionHeading,
//     'cards': cards[]
//   {'cardSecImg': cardSecImg.asset->url,
//    'cardSecHeading': cardSecHeading,
//    'cardSecSubHeading': cardSecSubHeading,
//    'cardSecPrice': cardSecPrice}}`)


//   return (
//     <div className="w-full bg-white px-4 py-8 md:px-6 lg:px-8 mb-[84px]">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-xl font-medium text-gray-900">{res.cardSectionHeading}</h2>
//         <div className="flex items-center gap-3">
//           <span className="text-sm font-medium">Shop</span>

//           {/* Left Chevron */}
//           <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#E5E5E5]">
//             <ChevronLeft size={24} className="text-gray-900" />
//           </div>

//           {/* Right Chevron */}
//           <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#E5E5E5]">
//             <ChevronRight size={24} className="text-gray-900" />
//           </div>
//         </div>

//       </div>

//       <Link href={"/products"}>
//       <Carousel
//         opts={{
//           align: "start",
//           loop: true,
//         }}
//         className="w-full"
//       >
//         <CarouselContent className="-ml-2 md:-ml-4">
//           {res.cards.map((product: Product, index: number) => (
//             <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
//               <div className="group relative flex flex-col">
//                 <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 relative">
//                   <Image
//                     src={res.cards[index].cardSecImg}
//                     alt="Product"
//                     fill
//                     className="h-full w-full object-cover object-center"
//                   />
//                 </div>
//                 <div className="mt-4 flex items-start justify-between">
//                   <div>
//                     <h3 className="text-sm font-medium text-gray-900">{res.cards[index].cardSecHeading}</h3>
//                     <p className="mt-1 text-sm text-gray-500">{res.cards[index].cardSecSubHeading}</p>
//                   </div>
//                   <p className="text-sm font-medium text-gray-900">₹{res.cards[index].cardSecPrice}</p>
//                 </div>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>

//       </Carousel>
//       </Link>
//     </div>
//   )
// }

// "use client"; // Use this only if this component is a client component.

// import React, { useEffect, useState } from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";

// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";

// interface Product {
//   id: string;
//   cardSecImg: string;
//   cardSecHeading: string;
//   cardSecSubHeading: string;
//   cardSecPrice: number;
// }

// export default function ProductShowcase() {
//   const [data, setData] = useState<{
//     cardSectionHeading: string;
//     cards: Product[];
//   } | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await client.fetch(
//         `*[_type == 'landingPage'][0].sections[1]
//          {
//            'cardSectionHeading': cardSectionHeading,
//            'cards': cards[]{
//              'cardSecImg': cardSecImg.asset->url,
//              'cardSecHeading': cardSecHeading,
//              'cardSecSubHeading': cardSecSubHeading,
//              'cardSecPrice': cardSecPrice
//            }
//          }`
//       );
//       setData(res);
//     };

//     fetchData();
//   }, []);

 
//   if (!data) return null;

//   return (
//     <div className="w-full bg-white px-4 py-8 md:px-6 lg:px-8 mb-[84px]">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-xl font-medium text-gray-900">{data.cardSectionHeading}</h2>
//         <div className="flex items-center gap-3">
//           <span className="text-sm font-medium">Shop</span>

//           {/* Left Chevron */}
//           <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#E5E5E5]">
//             <ChevronLeft size={24} className="text-gray-900" />
//           </div>

//           {/* Right Chevron */}
//           <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#E5E5E5]">
//             <ChevronRight size={24} className="text-gray-900" />
//           </div>
//         </div>
//       </div>

//       <Link href={"/products"}>
//         <Carousel
//           opts={{
//             align: "start",
//             loop: true,
//           }}
//           className="w-full"
//         >
//           <CarouselContent className="-ml-2 md:-ml-4">
//             {data.cards.map((product: Product, index: number) => (
//               <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
//                 <div className="group relative flex flex-col">
//                   <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 relative">
//                     <Image
//                       src={product.cardSecImg}
//                       alt="Product"
//                       fill
//                       className="h-full w-full object-cover object-center"
//                     />
//                   </div>
//                   <div className="mt-4 flex items-start justify-between">
//                     <div>
//                       <h3 className="text-sm font-medium text-gray-900">{product.cardSecHeading}</h3>
//                       <p className="mt-1 text-sm text-gray-500">{product.cardSecSubHeading}</p>
//                     </div>
//                     <p className="text-sm font-medium text-gray-900">₹{product.cardSecPrice}</p>
//                   </div>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//         </Carousel>
//       </Link>
//     </div>
//   );
// }

"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { client } from "@/sanity/lib/client"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation, Autoplay } from "swiper/modules"

export default function ProductShowcase() {
  interface ProductData {
    cardSectionHeading: string;
    cards: {
      cardSecImg: string;
      cardSecHeading: string;
      cardSecSubHeading: string;
      cardSecPrice: number;
    }[];
  }

  const [productData, setProductData] = useState<ProductData | null>(null)

  useEffect(() => {
    const fetchProductData = async () => {
      const res = await client.fetch(`*[_type == 'landingPage'][0].sections[1]{
        "cardSectionHeading": cardSectionHeading,
        "cards": cards[]{
          "cardSecImg": cardSecImg.asset->url,
          "cardSecHeading": cardSecHeading,
          "cardSecSubHeading": cardSecSubHeading,
          "cardSecPrice": cardSecPrice
        }
      }`)
      setProductData(res)
    }

    fetchProductData()
  }, [])

  if (!productData) return <p>Loading...</p>

  return (
    <div className="w-full bg-white px-4 py-8 md:px-6 lg:px-8 mb-[84px]">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium text-gray-900">{productData.cardSectionHeading}</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">Shop</span>

          {/* Left Chevron (Prev) */}
          <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#E5E5E5] cursor-pointer swiper-button-prev">
            <ChevronLeft size={24} className="text-gray-900" />
          </div>

          {/* Right Chevron (Next) */}
          <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#E5E5E5] cursor-pointer swiper-button-next">
            <ChevronRight size={24} className="text-gray-900" />
          </div>
        </div>
      </div>

      {/* Product Slider */}
      <Link href={"/products"}>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="w-full"
        >
          {productData.cards.map((product, index) => (
            <SwiperSlide key={index} className="relative w-full h-full">
              <div className="group relative flex flex-col">
                {/* Image Section */}
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 relative">
                  <Image
                    src={product.cardSecImg}
                    alt="Product"
                    fill
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                {/* Product Info */}
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{product.cardSecHeading}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.cardSecSubHeading}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">₹{product.cardSecPrice}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Link>
    </div>
  )
}
