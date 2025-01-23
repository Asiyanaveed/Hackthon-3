"use client";
import Image from "next/image";
import { Heart, Trash2,  } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for App Router

interface IProduct {
  name: string;
  description: string;
  price: string;
  image: string;
  quantity: number;
}

export default function ShoppingCart() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    const updatedCart: IProduct[] = cart ? JSON.parse(cart) : [];

    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const name = params.get("name");
      const description = params.get("description");
      const price = params.get("price");
      const image = params.get("image");

      if (name && description && price && image) {
        const isDuplicate = updatedCart.some(
          (item) => item.name === name
        );

        if (!isDuplicate) {
          updatedCart.push({ name, description, price, image, quantity: 1 });
          localStorage.setItem("cart", JSON.stringify(updatedCart));
        }

        setCartItems(updatedCart);
        router.replace("/cart");
      }
    }
  }, [router]);

  function handleRemoveItem(index: number) {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  }

  function handleQuantity(index: number, value: number) {
    if (value < 1) return; // Prevent setting quantity less than 1

    const updatedCart = [...cartItems];
    updatedCart[index].quantity = value;

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-[99px]">
      {/* Free Delivery Banner */}
      <div className="mb-8 bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">Free Delivery</p>
          <p className="text-sm text-gray-600">
            Applies to orders of ₹ 14,000.00 or more.
          </p>
          <Link href="/shipment">
            <Button variant="link" className="text-sm">
              View Shipment details
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-medium mb-6">Bag</h1>

          {/* Cart Items */}
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 bg-gray-100 rounded-md">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                          <div className="mt-2 space-y-1">
                            <p className="text-sm">Quantity:</p>
                            <input
                              className="bg-slate-400 rounded pl-2 text-black w-12"
                              type="number"
                              min={1}
                              value={item.quantity}
                              onChange={(e) =>
                                handleQuantity(index, +e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <p className="text-sm">
                          MRP: ₹ {Number(item.price) * item.quantity}
                        </p>
                      </div>
                      <div className="flex gap-4 mt-4">
                        <Button variant="ghost" size="sm">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveItem(index)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Favorites */}
          <div className="mt-12">
            <h2 className="text-xl font-medium mb-4">Favourites</h2>
            <p className="text-sm text-gray-600">
              There are no items saved to your favourites.
            </p>
          </div>
        </div>

        {/* Summary */}
        <div>
          <Card className="sticky top-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-medium mb-4">Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">Subtotal</span>
                  <span className="text-sm">
                    ₹{" "}
                    {cartItems.reduce(
                      (total, item) =>
                        total + Number(item.price) * item.quantity,
                      0
                    )}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>
                    ₹{" "}
                    {cartItems
                      .reduce(
                        (total, item) =>
                          total + Number(item.price) * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </div>
                <Link href="/checkout">
                  <Button className="w-full">Member Checkout</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
