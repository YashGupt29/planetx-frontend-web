'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homebuyer",
    image: "/placeholder.svg?height=60&width=60",
    quote: "Finding my dream home was so easy with this platform! The filters and direct communication with owners saved me so much time.",
    rating: 5
  },
  {
    name: "Rajiv Mehta",
    role: "Property Owner",
    image: "/placeholder.svg?height=60&width=60",
    quote: "I listed my property here, and it was rented out within a week! The process was seamless and hassle-free.",
    rating: 5
  },
  {
    name: "Rina Patel",
    role: "Traveler",
    image: "/placeholder.svg?height=60&width=60",
    quote: "I used this platform to book a hotel for a family vacation. The process was simple, and the hotel matched exactly what we saw online!",
    rating: 4
  }
]

export const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollContainerRef = useRef(null)

  const nextSlide = () => {
    if (scrollContainerRef.current) {
      const newSlide = (currentSlide + 1) % testimonials.length
      setCurrentSlide(newSlide)
      const cardWidth = 420 // card width (400) + gap (20)
      scrollContainerRef.current.scrollTo({
        left: cardWidth * newSlide,
        behavior: 'smooth'
      })
    }
  }

  const prevSlide = () => {
    if (scrollContainerRef.current) {
      const newSlide = (currentSlide - 1 + testimonials.length) % testimonials.length
      setCurrentSlide(newSlide)
      const cardWidth = 420 // card width (400) + gap (20)
      scrollContainerRef.current.scrollTo({
        left: cardWidth * newSlide,
        behavior: 'smooth'
      })
    }
  }

  const handleDotClick = (index) => {
    if (scrollContainerRef.current) {
      setCurrentSlide(index)
      const cardWidth = 420 // card width (400) + gap (20)
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="flex flex-col items-start py-[100px] px-4 mt-[80px] md:px-[100px] bg-[#F5F5FA] w-full">
      <div className="max-w-[1240px] w-full mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-[35px]">
          <div className="flex flex-col gap-[5px]">
            <h2 className="font-poppins font-semibold text-[32px] leading-[50px] text-[#0F0D0D]">
              What Our Users Say
            </h2>
            <p className="font-poppins font-medium text-lg leading-7 text-[#6C696A]">
              Discover why thousands trust us to find their perfect property.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-[15px]">
            <button
              onClick={prevSlide}
              className="p-[10px] bg-white border border-[#E1E1E1] rounded-[9px] hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-[#6C696A]" />
            </button>
            <div className="flex gap-[6px] items-center">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`rounded-full transition-all ${idx === currentSlide
                    ? "w-2.5 h-2.5 bg-[#6C696A]"
                    : "w-[7px] h-[7px] bg-[#B1B1B1] opacity-75 hover:opacity-100"
                    }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  aria-current={idx === currentSlide ? 'true' : 'false'}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-[10px] bg-white border border-[#E1E1E1] rounded-[9px] hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-[#6C696A]" />
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-hidden scroll-smooth pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex-none w-[400px] bg-white border border-[#E1E1E1] rounded-xl p-[30px] flex flex-col gap-[30px]"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-[10px]">
                  <div className="relative w-[60px] h-[60px] rounded-full border border-[#E1E1E1] overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-poppins font-medium text-lg leading-7 text-[#0F0D0D]">
                      {testimonial.name}
                    </h3>
                    <p className="font-poppins text-sm leading-5 text-[#6C696A]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#F2E6FF] rounded-lg">
                  <Quote className="w-[30px] h-[30px] text-[#7B00FF]" />
                </div>
              </div>

              <div className="flex flex-col gap-[10px]">
                <p className="font-poppins font-medium text-base leading-[26px] text-[#707070]">
                  {testimonial.quote}
                </p>
                <div className="flex gap-[5px]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${i < testimonial.rating ? "fill-[#FF9800] text-[#FF9800]" : "fill-[#D2D2D2] text-[#D2D2D2]"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center items-center gap-[6px] mt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`rounded-full transition-all ${idx === currentSlide
                ? "w-2.5 h-2.5 bg-[#6C696A]"
                : "w-[7px] h-[7px] bg-[#B1B1B1] opacity-75 hover:opacity-100"
                }`}
              aria-label={`Go to testimonial ${idx + 1}`}
              aria-current={idx === currentSlide ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


