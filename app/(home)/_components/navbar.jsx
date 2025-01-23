
"use client"

import Image from "next/image"
import logo from "../../../public/logo.png"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { CgProfile } from "react-icons/cg"
import { Bell, ChevronDown } from "lucide-react"

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)
  }, [])

  return (
    <div className="w-full border-b border-[#E1E1E1] shadow-[0px_6px_10.2px_rgba(0,0,0,0.05)]">
      <div className="py-[15px] px-[30px] flex justify-between items-center max-w-[1440px] mx-auto">
        <div className="flex gap-2 items-center justify-center">
          <Image src={logo || "/placeholder.svg"} width={40} height={40} alt="logo of planet-x" />
          <span className="font-extrabold text-lg">PLANET X</span>
        </div>
        <div className="flex gap-6 font-medium text-base justify-center items-center text-[#0F0D0D]">
          <Link href="./">Home</Link>
          <div className="flex items-center gap-1">
            <Select>
              <SelectTrigger className="w-[100px] p-1 ring-0 focus:ring-0 focus:ring-offset-0 border-none focus:border-none">
                <SelectValue placeholder="Properties" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Residential">Residential</SelectItem>
                <SelectItem value="Commercial">Commercial</SelectItem>
                <SelectItem value="Warehouse">Warehouse</SelectItem>
              </SelectContent>
            </Select>
            <ChevronDown className="h-4 w-4" />
          </div>
          <Link href="/post-property" className="flex items-center gap-1">
            Post Property
            <span className="bg-[#4CAF50] text-white px-2 py-0.5 text-sm rounded text-center">FREE</span>
          </Link>
          <Link href="/highlights">Highlights</Link>
          <Link href="/wishlist">Wishlist</Link>
        </div>
        <div className="flex items-center gap-5">
          {isLoggedIn ? (
            <>
              <div className="relative">
                <Button variant="outline" size="icon" className="rounded-full w-11 h-11">
                  <Bell className="h-6 w-6" />
                </Button>
                <div className="absolute w-2.5 h-2.5 bg-[#4CAF50] rounded-full right-2.5 top-3" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-11 h-11 rounded-full bg-[#CED5D8]" />
                <span className="font-medium">User</span>
                <ChevronDown className="h-5 w-5" />
              </div>
            </>
          ) : (
            <Button className="bg-gray-100 flex items-center justify-center gap-2">
              <CgProfile color="#7B00FF" className="text-[20px]" />
              <p className="text-black text-[15px]">Login</p>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}


