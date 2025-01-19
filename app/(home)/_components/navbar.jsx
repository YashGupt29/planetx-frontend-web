"use client";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CgProfile } from "react-icons/cg";

export const Navbar = () => {
  return (
    <div className="w-full shadow-sm">
      <div className="py-3 px-8 flex justify-between">
        <div className="flex gap-2 items-center justify-center">
          <Image src={logo} width={40} height={40} alt="logo of planet-x" />
          <span className="font-extrabold text-lg">PLANET X</span>
        </div>
        <div className="flex gap-4 font-semibold justify-center items-center">
          <Link href="./" className="text-sm">
            Home
          </Link>
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
          <Link href="/highlights" className="text-sm">
            Highlights
          </Link>
          <Link href="/about" className="text-sm">
            About Us
          </Link>
        </div>
        <div className="flex">
          <Button className="bg-gray-100 flex items-center justify-center gap-2">
            {" "}
            <CgProfile color="#7B00FF" className="text-[20px]" />
            <p className="text-black text-[15px]">Login</p>
          </Button>
          <Button className="bg-[#7B00FF]">
            Add Property{" "}
            <div className="bg-white text-black px-2 py-1 text-xs rounded-lg ml-2 font-normal">
              FREE
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
