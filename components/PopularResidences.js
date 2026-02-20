import React from 'react';
import { MapPin, Bed, Maximize } from 'lucide-react';

export default function PopularResidences() {
  const residences = [
    {
      id: 1,
      image: "/image 2.png", 
      location: "San Francisco, California",
      rooms: "4 Rooms",
      area: "3,500 sq ft",
      price: "$2,500,000"
    },
    {
      id: 2,
      image: "/image 2.png",
      location: "Beverly Hills, California",
      rooms: "3 Rooms",
      area: "1,500 sq ft",
      price: "$850,000"
    },
    {
      id: 3,
      image: "/image 2.png",
      location: "Palo Alto, California",
      rooms: "6 Rooms",
      area: "4,000 sq ft",
      price: "$3,700,000"
    }
  ];

  return (
    <section className="bg-background py-20 px-6 md:px-12 lg:px-24">
      {/* العنوان الرئيسي */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-accent text-center mb-16">
        Our Popular Residences
      </h2>

      {/* شبكة البطاقات (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {residences.map((res) => (
          <div 
            key={res.id} 
            className="flex flex-col rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            {/* صورة المنزل */}
            <div className="h-64 w-full bg-gray-200">
              <img 
                src={res.image} 
                alt={res.location} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* تفاصيل المنزل (الخلفية البيج) */}
            <div className="bg-primary p-6 md:p-8 flex-1 flex flex-col">
              
              {/* الموقع */}
              <div className="flex items-center gap-2 font-bold text-accent mb-6 text-lg">
                <MapPin size={20} className="text-accent" />
                <span>{res.location}</span>
              </div>

              {/* الغرف والمساحة */}
              <div className="flex items-center gap-8 text-brand font-medium mb-8">
                <div className="flex items-center gap-2">
                  <Bed size={20} />
                  <span>{res.rooms}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize size={20} />
                  <span>{res.area}</span>
                </div>
              </div>

              {/* السعر وزر التسجيل */}
              <div className="flex items-center justify-between mt-auto pt-2">
                <button className="bg-accent text-white px-8 py-3 rounded-xl font-bold hover:bg-brand transition-colors duration-300">
                  Sign up
                </button>
                <span className="font-extrabold text-accent text-2xl">
                  {res.price}
                </span>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}