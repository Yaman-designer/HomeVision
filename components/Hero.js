"use client";

import Image from "next/image";
import { MapPin, Home, DollarSign } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#fff7f1] pb-16">
      <div className="mx-auto max-w-7xl px-6 pt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        
        {/* Left Content */}
        <div className="space-y-4 max-w-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#2c1b14]">
            Find Your <br />
            Dream Home
          </h1>

          <p className="text-[#6f5a4e] text-sm md:text-base leading-relaxed">
            Explore our curated selection of exquisite properties meticulously
            tailored to your unique dream home vision.
          </p>

          <button className="rounded-md bg-[#2c1b14] px-6 py-2.5 text-sm font-medium text-[#fdf5ef] shadow-md transition hover:bg-[#3a251a]">
            Sign up
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full flex justify-center md:justify-end">
          <Image
           src="/hero-image.png" 
            alt="Modern house"
            width={850}
            height={600}
            className="object-cover select-none"
            priority
          />
        </div>
      </div>

      {/* Search Bar */}
      <div className="absolute inset-x-0 -bottom-10 flex justify-center">
        <div className="flex w-full max-w-5xl flex-col md:flex-row items-center gap-3 bg-[#e5c5b1] rounded-[22px] px-5 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.15)]">

          {/* Location */}
          <div className="flex flex-1 items-center gap-2 rounded-[16px] bg-[#fdf5ef] px-3 py-2 text-sm text-[#2c1b14]">
            <span className="font-medium">Location</span>
            <MapPin className="ml-auto h-4 w-4 text-[#2c1b14]" />
          </div>

          {/* Type */}
          <div className="flex flex-1 items-center gap-2 rounded-[16px] bg-[#fdf5ef] px-3 py-2 text-sm text-[#2c1b14]">
            <span className="font-medium">Type</span>
            <Home className="ml-auto h-4 w-4 text-[#2c1b14]" />
          </div>

          {/* Price Range */}
          <div className="flex flex-1 items-center gap-2 rounded-[16px] bg-[#fdf5ef] px-3 py-2 text-sm text-[#2c1b14]">
            <span className="font-medium">Price Range</span>
            <DollarSign className="ml-auto h-4 w-4 text-[#2c1b14]" />
          </div>

          {/* Button */}
          <button className="rounded-[16px] bg-[#2c1b14] px-5 py-2.5 text-sm font-medium text-[#fdf5ef] transition hover:bg-[#3a251a]">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
}