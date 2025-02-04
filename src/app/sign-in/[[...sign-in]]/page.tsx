"use client"
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <div className='flex justify-center items-center  pt-40'> <SignIn /> </div>
}