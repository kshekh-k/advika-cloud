'use client'
import React, { useRef, useState } from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Quoteicon } from '@/icons';
const testimonies = [
  {
    quote: 'Advika Web Hosting is a reliable and affordable hosting solution provider The customer support team is very strong and gives us quick solutions. I am using VPS server for more than 7 years.',
    name: 'Abhishek Singh',
    location: 'Gurugram'
  },
  {
    quote: 'Advika Web Hosting is a reliable and affordable hosting solution provider The customer support team is very strong and gives us quick solutions. I am  using VPS server for more than 7 years.',
    name: 'Abhishek Singh',
    location: 'Gurugram'
  },
]
export default function Testimonials() {
  return (
    <div className="container">
      {/* Testimonials */}
      <h2 className="text-5xl font-bold text-primary text-center leading-snug">
        What Customers Say?

        <span className="text-black/60 block">
          Testimonials
        </span>
      </h2>
      <div className=" mt-16">

        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={false}     
          autoplay={true}     
          className="mySwiper"
        >
          <SwiperSlide>

            <div className="rounded-lg bg-primary/5 p-10 space-y-3">
              <div className="bg-white p-9 rounded border border-primary/50 relative">
              <Quoteicon className="size-16 text-primary/5 absolute left-5 top-5" />
                <p className="italic text-black/60 leading-loose text-xl relative z-10">
                  Advika Web Hosting is a reliable and affordable hosting solution
                  provider The customer support team is very strong and gives us
                  quick solutions. I am using VPS server for more than 7 years.
                </p>
              </div>
              <div className="space-y-1 pt-3">
                <h4 className="text-black/70 text-xl font-semibold">John Doe</h4>
                <p className="text-black/50 text-lg">CEO, Company Name</p>
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide>

            <div className="rounded-lg bg-primary/5 p-10 space-y-3">
              <div className="bg-white p-9 rounded border border-primary/50 relative">
              <Quoteicon className="size-16 text-primary/10 absolute left-5 top-5" />
                <p className="italic text-black/60 leading-loose text-xl relative z-10">
                  Advika Web Hosting is a reliable and affordable hosting solution
                  provider The customer support team is very strong and gives us
                  quick solutions. I am using VPS server for more than 7 years.
                </p>
              </div>
              <div className="space-y-1 pt-3">
                <h4 className="text-black/70 text-xl font-bold">John Doe</h4>
                <p className="text-black/50 text-lg">CEO, Company Name</p>
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide>

            <div className="rounded-lg bg-primary/5 p-10 space-y-3">
              <div className="bg-white p-9 rounded border border-primary/50 relative">
              <Quoteicon className="size-16 text-primary/10 absolute left-5 top-5" />
                <p className="italic text-black/60 leading-loose text-xl relative z-10">
                  Advika Web Hosting is a reliable and affordable hosting solution
                  provider The customer support team is very strong and gives us
                  quick solutions. I am using VPS server for more than 7 years.
                </p>
              </div>
              <div className="space-y-1 pt-3">
                <h4 className="text-black/70 text-xl font-bold">John Doe</h4>
                <p className="text-black/50 text-lg">CEO, Company Name</p>
              </div>
            </div>

          </SwiperSlide>

        </Swiper>

 
      </div>
    </div>
  );
}
