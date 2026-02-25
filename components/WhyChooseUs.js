"use client";

import { MapPin, UserCheck, ClipboardCheck, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="w-full py-16 bg-[#fff7f1]">
      <div className="max-w-7xl mx-auto px-1 text-center">
        {/* العنوان */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2c1b14]">
          Why Choose Us
        </h2>
        <p className="mt-2 text-sm md:text-base text-[#6f5a4e] max-w-2xl mx-auto">
          Elevating Your Home Buying Experience with Expertise, Integrity,
          and Unmatched Personalized Service
        </p>

        {/* البطاقات */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="bg-[#d8b8a4] p-6 rounded-xl shadow-md hover:shadow-lg transition text-left flex flex-col items-start">
            <div className="w-14 h-14 bg-white/70 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-[#2c1b14]" />
            </div>
            <h3 className="text-lg font-bold text-[#2c1b14]">
              Expert Guidance
            </h3>
            <p className="text-sm text-[#6f5a4e] mt-2">
              Benefit from our team’s seasoned expertise for a smooth buying
              experience
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#d8b8a4] p-6 rounded-xl shadow-md hover:shadow-lg transition text-left flex flex-col items-start">
            <div className="w-14 h-14 bg-white/70 rounded-lg flex items-center justify-center mb-4">
              <UserCheck className="w-7 h-7 text-[#2c1b14]" />
            </div>
            <h3 className="text-lg font-bold text-[#2c1b14]">
              Personalized Service
            </h3>
            <p className="text-sm text-[#6f5a4e] mt-2">
              Our services adapt to your unique needs, making your journey
              stress-free
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#d8b8a4] p-6 rounded-xl shadow-md hover:shadow-lg transition text-left flex flex-col items-start">
            <div className="w-14 h-14 bg-white/70 rounded-lg flex items-center justify-center mb-4">
              <ClipboardCheck className="w-7 h-7 text-[#2c1b14]" />
            </div>
            <h3 className="text-lg font-bold text-[#2c1b14]">
              Transparent Process
            </h3>
            <p className="text-sm text-[#6f5a4e] mt-2">
              Stay informed with our clear and honest approach to buying your
              home
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#d8b8a4] p-6 rounded-xl shadow-md hover:shadow-lg transition text-left flex flex-col items-start">
            <div className="w-14 h-14 bg-white/70 rounded-lg flex items-center justify-center mb-4">
              <Headphones className="w-7 h-7 text-[#2c1b14]" />
            </div>
            <h3 className="text-lg font-bold text-[#2c1b14]">
              Exceptional Support
            </h3>
            <p className="text-sm text-[#6f5a4e] mt-2">
              Providing peace of mind with our responsive and attentive customer
              service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}