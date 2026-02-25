"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-40">
      <div className="mx-auto max-w-6xl px-6 grid gap-40 md:grid-cols-2 items-center">
        {/* الصورة */}
        <div className="relative h-[260px] sm:h-[320px] md:h-[360px]">
          <Image
            src="/about-image.jpg"
            alt="Modern house"
            fill
            className="rounded-2xl object-cover shadow-lg"
            priority
          />
        </div>

        {/* النص والإحصائيات */}
        <div className="space-y-5 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-[#2c1b14] leading-snug">
            We Help You To Find <br className="hidden sm:block" />
            Your Dream Home
          </h2>

          <p className="text-sm sm:text-base text-[#6f5a4e] leading-relaxed max-w-md mx-auto md:mx-0">
            From cozy cottages to luxurious estates, our dedicated team guides you
            through every step of the journey, ensuring your dream home becomes
            a reality.
          </p>

          {/* الإحصائيات */}
          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-6 sm:gap-10">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#2c1b14]">
                8K+
              </p>
              <p className="text-xs sm:text-sm text-[#6f5a4e]">
                Houses Available
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#2c1b14]">
                6K+
              </p>
              <p className="text-xs sm:text-sm text-[#6f5a4e]">
                Houses Sold
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#2c1b14]">
                2K+
              </p>
              <p className="text-xs sm:text-sm text-[#6f5a4e]">
                Trusted Agents
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}