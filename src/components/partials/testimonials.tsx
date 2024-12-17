'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
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
    <div className='container'>
      {/* Testimonials */}
      <h2 className='text-center text-3xl font-bold leading-snug lg:leading-snug text-primary lg:text-5xl'>
        What Customers Say?
        <span className='block text-black/60'>Testimonials</span>
      </h2>
      <div className='pt-5 lg:pt-16'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={false}
          autoplay={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          className='mySwiper'
        >
          {testimonies.map((item,index)=>
          <SwiperSlide key={index}>
            <div className='space-y-3 rounded-lg bg-primary/5 p-5 lg:p-10'>
              <div className='relative rounded border border-primary/50 bg-white p-5 lg:p-10'>
                <Quoteicon className='absolute left-5 top-5 size-16 text-primary/5' />
                <p className='relative z-10 italic leading-loose text-black/60 lg:text-xl lg:leading-loose'>
                {item.quote}
                </p>
              </div>
              <div className='space-y-1 pt-3'>
                <h4 className='text-xl font-semibold text-black/70'>
                {item.name}
                </h4>
                <p className='text-lg text-black/50'>{item.location}</p>
              </div>
            </div>
          </SwiperSlide>
        )}
        </Swiper>
      </div>
    </div>
  );
}
