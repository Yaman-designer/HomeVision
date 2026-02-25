"use client";

import Image from "next/image";
import { MapPin, Home, DollarSign } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#fff7f1]">
      <div className="mx-auto max-w-6xl px-6 pt-10 grid grid-cols-1 md:grid-cols-2 items-center ">
        
        {/* Left Content */}
        <div className="space-y-2 max-w-md">
          <h1 className="text-4xl md:text-[68px] font-extrabold leading-tight text-[#2c1b14]">
            Find Your <br />
            Dream Home
          </h1>

          <p className="text-[#6f5a4e] text-sm md:text-base font-bold leading-relaxed">
            Explore our curated selection of exquisite properties meticulously
            tailored to your unique dream home vision.
          </p>

          <button className="rounded-md bg-[#2c1b14] px-6 py-2.5 text-sm font-medium text-[#fdf5ef] shadow-md font-bold hover:bg-[#3a251a] transition-colors">
            Sign up
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:justify-end flex">
          <div className="relative h-[420px] md:h-[520px] w-full max-w-2xl">
            <Image
              src="/hero-image.jpg"
              alt="Modern house"
              fill
              priority
              className="object-contain select-none"
            />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="absolute inset-x-0 -bottom-10 flex justify-center">
        <div className="
          w-full max-w-5xl 
          bg-[#e5c5b1] rounded-[14px] 
          px-6 md:px-10 py-6 md:py-8 
          shadow-[0_12px_30px_rgba(0,0,0,0.15)]
          flex flex-col md:flex-row items-center gap-4
        ">

          {/* Location Input */}
          <div className="flex flex-1 items-center gap-2 bg-[#fdf5ef] px-3 py-2 rounded-[12px] border border-[#d8b7a1]">
            <input
              type="text"
              placeholder="Location"
              className="bg-transparent w-full outline-none text-[#2c1b14] text-sm"
            />
            <MapPin className="h-4 w-4 text-[#2c1b14]" />
          </div>

          {/* Type Input */}
          <div className="flex flex-1 items-center gap-2 bg-[#fdf5ef] px-3 py-2 rounded-[12px] border border-[#d8b7a1]">
            <input
              type="text"
              placeholder="Type"
              className="bg-transparent w-full outline-none text-[#2c1b14] text-sm"
            />
            <Home className="h-4 w-4 text-[#2c1b14]" />
          </div>

          {/* Price Range Input */}
          <div className="flex flex-1 items-center gap-2 bg-[#fdf5ef] px-3 py-2 rounded-[12px] border border-[#d8b7a1]">
            <input
              type="text"
              placeholder="Price Range"
              className="bg-transparent w-full outline-none text-[#2c1b14] text-sm"
            />
            <DollarSign className="h-4 w-4 text-[#2c1b14]" />
          </div>

          {/* Button */}
          <button className="rounded-[12px] bg-[#2c1b14] px-6 py-2.5 text-sm font-medium text-[#fdf5ef] hover:bg-[#3a251a] transition">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
}