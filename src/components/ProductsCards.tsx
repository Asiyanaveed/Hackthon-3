


// function importData() {
//   throw new Error("Function not implemented.")
// }

// "use client"; // Ensure this runs on the client side.

// import { useEffect, useState } from "react";
// import { Card } from "@/components/ui/card";
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";

// interface Product {
//   productName: string;
//   category: string;
//   price: number;
//   inventory: number;
//   colors: string[];
//   status: string;
//   description: string;
//   image: string;
// }

// export default function ProductsCards() {
//   const [products, setProducts] = useState<Product[]>([]); // State to store products
//   const [isLoading, setIsLoading] = useState(true); // Loading state

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const res: Product[] = await client.fetch(
//         `*[_type == "product"]{
//           productName,
//           category,
//           price,
//           inventory,
//           colors,
//           status,
//           description,
//           'image': image.asset->url
//         }`
//       );
//       if (!res || res.length === 0) {
//         importData(); // Handle case where no products are found
//       } else {
//         setProducts(res); // Set fetched products to state
//       }
//       setIsLoading(false); // Stop loading once data is fetched
//     };

//     fetchProducts(); // Fetch products when component mounts
//   }, []); // Empty dependency array ensures it runs only once

//   if (isLoading) {
//     return <div>Loading...</div>; // Show loading state while fetching data
//   }

//   return (
//     <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {products.map((item: Product, index: number) => (
//         <Card
//           className="relative w-full max-w-[348px] overflow-hidden border-none shadow-none hover:scale-[1.02]"
//           key={index}
//         >
//           <Link
//             href={`/products/ProductDetail?productName=${item.productName}&category=${item.category}&description=${item.description}&price=${item.price}&image=${item.image}&inventory=${item.inventory}&colors=${item.colors}&status=${item.status}`}
//           >
//             <div className="relative h-[348px] w-full bg-[#F5F5F5]">
//               <Image
//                 src={item.image}
//                 alt="card Image"
//                 fill
//                 className="object-contain p-4"
//                 priority
//               />
//             </div>
//           </Link>
//           <div className="p-4 space-y-2">
//             {true && (
//               <span className="text-[#9E3500] text-[15px] font-medium font-['Helvetica_Neue']">
//                 Just In
//               </span>
//             )}
//             <div className="space-y-1">
//               <h3 className="text-[15px] font-medium leading-6 text-[#111111] font-['Helvetica_Neue']">
//                 {item.productName}
//               </h3>
//               <p className="text-[15px] leading-6 text-[#757575] font-['ABeeZee']">
//                 {item.description}
//               </p>
//             </div>
//             <p className="text-[15px] leading-6 text-[#757575] font-['ABeeZee']">
//               {1} Colour
//             </p>
//             <p className="text-[15px] font-medium leading-7 text-[#111111] font-['Helvetica_Neue']">
//               MRP : ₹{item.price.toLocaleString()}
//             </p>
//           </div>
//         </Card>
//       ))}
//     </div>
//   );
// }

// // Dummy function for handling no products (you can replace this with actual logic)
// function importData() {
//   throw new Error("Function not implemented.");
// }


"use client"; // Ensure this runs on the client side.

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface Product {
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  description: string;
  image: string;
}

export default function ProductsCards() {
  const [products, setProducts] = useState<Product[]>([]); // State to store products

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res: Product[] = await client.fetch(
          `*[_type == "product"]{
            productName,
            category,
            price,
            inventory,
            colors,
            status,
            description,
            'image': image.asset->url
          }`
        );
        if (!res || res.length === 0) {
          console.warn("No products found."); // Log a warning if no products are found
        } else {
          setProducts(res); // Set fetched products to state
        }
      } catch (error) {
        console.error("Error fetching products:", error); // Log any errors
      }
    };

    fetchProducts(); // Fetch products when component mounts
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.length > 0 ? (
        products.map((item: Product, index: number) => (
          <Card
            className="relative w-full max-w-[348px] overflow-hidden border-none shadow-none hover:scale-[1.02]"
            key={index}
          >
            <Link
              href={`/products/ProductDetail?productName=${item.productName}&category=${item.category}&description=${item.description}&price=${item.price}&image=${item.image}&inventory=${item.inventory}&colors=${item.colors}&status=${item.status}`}
            >
              <div className="relative h-[348px] w-full bg-[#F5F5F5]">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt="card Image"
                    fill
                    className="object-contain p-4"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Image not available
                  </div>
                )}
              </div>
            </Link>
            <div className="p-4 space-y-2">
              {true && (
                <span className="text-[#9E3500] text-[15px] font-medium font-['Helvetica_Neue']">
                  Just In
                </span>
              )}
              <div className="space-y-1">
                <h3 className="text-[15px] font-medium leading-6 text-[#111111] font-['Helvetica_Neue']">
                  {item.productName}
                </h3>
                <p className="text-[15px] leading-6 text-[#757575] font-['ABeeZee']">
                  {item.description}
                </p>
              </div>
              <p className="text-[15px] leading-6 text-[#757575] font-['ABeeZee']">
                {1} Colour
              </p>
              <p className="text-[15px] font-medium leading-7 text-[#111111] font-['Helvetica_Neue']">
                MRP : ₹{item.price.toLocaleString()}
              </p>
            </div>
          </Card>
        ))
      ) : (
        <div className="w-full text-center text-gray-500">
          No products available.
        </div>
      )}
    </div>
  );
}