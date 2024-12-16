import React from 'react'
import Image from "next/image"; 
import { TbMail, TbPhoneCall } from 'react-icons/tb';
import Link from 'next/link';
import Formcontact from './form';

export default function ContactForm() {
  
  return (
    <section className="bg-primary text-white py-10 lg:py-16 2xl:py-24 ">
      <div className="container">
        <h2 className="text-3xl lg:text-5xl font-bold text-center leading-snug">
          Do you have a query?

          <span className="block text-secondary">
            Book a Call
          </span>
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 xl:gap-24 mt-5 lg:mt-10">
          <div className="bg-white rounded-lg overflow-hidden max-w-sm mx-auto md:max-w-full">
            <Image
              src={"/images/sales-agent.png"}
              alt="Sales Agent"
              className="size-full object-cover"
              width={600}
              height={500}
            />
          </div>
         <Formcontact />
        </div>

        <div className="pt-5 lg:pt-14">
          <h3 className="text-3xl lg:text-4xl font-semibold leading-loose">
            For further queries
          </h3>
          <p className="text-lg lg:text-xl font-light lg:font-normal">
           Please get in touch with your dedicated account manager or reach out
            to us on
          </p>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-y-2 gap-x-10 mt-5 text-lg lg:text-xl">
            <Link href="tel:+919950249491" className="flex tracking-wider items-center gap-2 hover:text-white/70 ease-in-out duration-200">
            <TbPhoneCall className='size-6' />
            +91-99502-49491
            </Link>
            <span className="h-6 bg-white/20 w-px hidden md:inline"></span>
            <Link href="mailto:eb.sales@advika.cloud" className="flex  tracking-wider items-center gap-2 hover:text-white/70 ease-in-out duration-200">
            <TbMail className='size-6'/>
              eb.sales@advika.cloud
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
