import React from 'react'
import Innerintro from '../partials/inner-intro'
import Layout from '../layout'
import Contactfrom from './contact-form'
import Image from 'next/image'
import {TbMail, TbMapPin, TbPhoneCall } from "react-icons/tb";
import Link from 'next/link'
import Socialmedia from '../ui/social-media'

function ContactComponent() {
  return (
    <Layout>
      <Innerintro headingUpline="Advika" heading="Contact us" descp="Get in touch with us now! Simply fill out the form below, and we'll respond promptly to discuss your needs." thumb='/images/contact-us.png' thumbAlt="contact-us" />
      <section className='py-10 lg:py-20 relative'>
        <div className='absolute inset-0 overflow-hidden'>
          <Image src="/images/contact-bg.svg" width={1920} height={600} alt="" className="w-full h-auto" />
        </div>
        <div className='container relative z-10'>
          <div className='md:grid md:grid-cols-12'>
            <div className='col-span-6 md:order-2'>
              <Contactfrom />
            </div>
            <div className='col-span-6 md:order-1 pt-10'>
              <div className="max-w-lg">
                <h2 className="text-3xl lg:text-5xl font-bold text-left leading-snug text-primary">Quick Connect</h2>
                <p className="text-black/60 font-semibold leading-loose mt-4 text-left">
                  Please get in touch with your dedicated account manager or reach out to us on
                </p>

              <div className='flex flex-col gap-3 pt-4 max-w-96'>
                <div className='flex gap-3'>
                  <div className='flex justify-center text-black/60 pt-1'> <TbMapPin className="size-6 shrink-0" /></div>
                   <p className="text-black/60 font-medium leading-loose">Advika Data Center Services Pvt. Ltd. Alt F, Plot no 21 & 21A, Sector 142 Noida - 201305 (UP) India</p>
                </div>
                <div className='flex gap-3'>
                  <div className='flex justify-center text-black/60 pt-1'> <TbPhoneCall className="size-6 shrink-0" /></div>
                   <p className="text-black/60 hover:text-primary font-medium leading-loose ease-in-out duration-200"><Link href="tel:+91-99502-49491">+91-99502-49491</Link></p>
                </div>
                <div className='flex gap-3'>
                  <div className='flex justify-center text-black/60 pt-1'> <TbMail className="size-6 shrink-0" /></div>
                   <p className="text-black/60 hover:text-primary font-medium leading-loose ease-in-out duration-200"><Link href="mailto:eb.sales@advika.cloud">eb.sales@advika.cloud</Link></p>
                </div>
              </div>
              </div>
              <div className="pt-10 ">
                <h3 className="font-bold text-xl text-left leading-snug text-primary uppercase">Connect at Social media</h3>
                <div className='flex gap-2 pt-5'>
                <Socialmedia className='bg-primary rounded size-10 inline-flex justify-center items-center hover:!text-white hover:bg-secondary' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactComponent
