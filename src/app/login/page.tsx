"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function NikeLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!email || !password) {
      setError("Please fill in both email and password.")
      return
    }

    // Clear any previous errors
    setError("")

    // Mock submission
    console.log("Submitted data:", { email, password, rememberMe })

    // Redirect or perform further actions here
    alert("Login successful!")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 mt-[99px]">
      <Card className="w-full max-w-[380px] shadow-sm">
        <CardHeader className="space-y-6 text-center">
          <Image
            src="/nikeLogo.png"
            alt="Nike"
            width={60}
            height={22}
            className="mx-auto"
          />
          <h1 className="text-lg font-bold tracking-tight text-center">
            YOUR ACCOUNT FOR
            <br />
            EVERYTHING NIKE
          </h1>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit}>
            <div className="space-y-2 mb-5">
              <Input
                id="email"
                type="email"
                placeholder="Email address"
                className="h-10 text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2 mb-5">
              <Input
                id="password"
                type="password"
                placeholder="Password"
                className="h-10 text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(!!checked)}
                />
                <Label
                  htmlFor="remember"
                  className="text-xs text-gray-500 font-normal"
                >
                  Keep me signed in
                </Label>
              </div>
              <Link
                href="#"
                className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
              >
                Forgotten your password?
              </Link>
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            <div className="text-center text-xs text-gray-500 px-4 mt-5">
              By logging in, you agree to Nike&apos;s{" "}
              <Link href="#" className="underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline">
                Terms of Use
              </Link>
              .
            </div>
            <Button
              type="submit"
              className="w-full bg-black hover:bg-gray-900 text-xs h-10 mt-5"
            >
              SIGN IN
            </Button>
          </form>
          <div className="text-center text-xs text-gray-500">
            Not a Member?{" "}
            <Link href="#" className="underline">
              Join Us
            </Link>
            .
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


