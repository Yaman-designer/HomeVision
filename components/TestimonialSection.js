"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Nguyen",
      location: "San Francisco",
      rating: "5.0",
      text: "Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.",
      avatar: "/image (39) 1.png", 
      image: "/Group 15.png"     
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      location: "San Diego",
      rating: "4.5",
      text: "I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!",
      avatar: "/image (39) 1.png", 
      image: "/Group 15.png" 
    },
    {
      id: 3,
      name: "Emily Johnson",
      location: "Los Angeles",
      rating: "5.0",
      text: "Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!",
      avatar: "/image (39) 1.png", 
      image: "/Group 15.png" 
    },
    {
      id: 4,
      name: "David Smith",
      location: "New York",
      rating: "4.8",
      text: "The service was incredible, and the properties shown were exactly what I was looking for. A truly premium experience from start to finish.",
      avatar: "/image (39) 1.png", 
      image: "/Group 15.png" 
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleCards = () => {
    return [
      testimonials[currentIndex % testimonials.length],
      testimonials[(currentIndex + 1) % testimonials.length],
      testimonials[(currentIndex + 2) % testimonials.length],
    ];
  };

  return (
    <section className="bg-secondary py-20 px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl md:text-5xl font-extrabold text-accent text-center mb-16 leading-tight">
        What People Say<br />About Dwello
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {getVisibleCards().map((testimonial, index) => (
          <div key={`${testimonial.id}-${index}`} className="flex flex-col rounded-[2rem] overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
            
            <div className="h-56 w-full bg-gray-200">
              <img 
                src={testimonial.image} 
                alt="Room" 
                className="w-full h-full object-cover"
                onError={(e) => {e.target.src = 'https://via.placeholder.com/400x300?text=Room+Image'}} 
              />
            </div>

            <div className="bg-primary p-6 md:p-8 flex-1 flex flex-col">
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300 shrink-0">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {e.target.src = 'https://via.placeholder.com/100?text=User'}}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-accent text-lg">{testimonial.name}</h3>
                    <p className="text-brand text-sm">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg text-sm font-bold text-accent shadow-sm">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span>{testimonial.rating}</span>
                </div>
              </div>

              <p className="text-brand text-sm md:text-base leading-relaxed font-medium">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-12">
        <button 
          onClick={prevSlide} 
          className="bg-accent text-white p-4 rounded-full hover:bg-brand transition-colors focus:outline-none flex items-center justify-center"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide} 
          className="bg-accent text-white p-4 rounded-full hover:bg-brand transition-colors focus:outline-none flex items-center justify-center"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}