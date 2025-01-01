import React from 'react';
import Innerintro from '../partials/inner-intro';
import Layout from '../layout';
import Contactfrom from './contact-form';
import Image from 'next/image';
import { TbMail, TbMapPin, TbPhoneCall } from 'react-icons/tb';
import Link from 'next/link';
import Socialmedia from '../ui/social-media';

function ContactComponent() {
  return (
    <Layout>
      <Innerintro
        headingUpline='Advika'
        heading='Contact us'
        descp="Get in touch with us now! Simply fill out the form below, and we'll respond promptly to discuss your needs."
        thumb='/images/contact-us.png'
        thumbAlt='contact-us'
        dataAlt="<a href='https://www.freepik.com/free-photo/portrait-call-center-woman_4070847.htm'>www.freepik.com</a>"
      />
      <section className='relative py-10 lg:py-20'>
        <div className='absolute inset-0 overflow-hidden'>
          <Image
            src='/images/contact-bg.svg'
            width={1920}
            height={600}
            alt=''
            className='h-auto w-full'
          />
        </div>
        <div className='container relative z-10'>
          <div className='md:grid md:grid-cols-12'>
            <div className='col-span-6 md:order-2'>
              <Contactfrom />
            </div>
            <div className='col-span-6 pt-10 md:order-1'>
              <div className='max-w-lg'>
                <h2 className='text-left text-3xl font-bold leading-snug text-primary lg:text-5xl'>
                  Quick Connect
                </h2>
                <p className='mt-4 text-left font-semibold leading-loose text-black/60'>
                  Please get in touch with your dedicated account manager or
                  reach out to us on
                </p>

                <div className='flex max-w-96 flex-col gap-3 pt-4'>
                  <div className='flex gap-3'>
                    <div className='flex justify-center pt-1 text-black/60'>
                      {' '}
                      <TbMapPin className='size-6 shrink-0' />
                    </div>
                    <p className='font-medium leading-loose text-black/60'>
                      Advika Data Center Services Pvt. Ltd. Alt F, Plot no 21 &
                      21A, Sector 142 Noida - 201305 (UP) India
                    </p>
                  </div>
                  <div className='flex gap-3'>
                    <div className='flex justify-center pt-1 text-black/60'>
                      {' '}
                      <TbPhoneCall className='size-6 shrink-0' />
                    </div>
                    <p className='font-medium leading-loose text-black/60 duration-200 ease-in-out hover:text-primary'>
                      <Link href='tel:+919829714343'>+91-98297-14343</Link>
                    </p>
                  </div>
                  <div className='flex gap-3'>
                    <div className='flex justify-center pt-1 text-black/60'>
                      {' '}
                      <TbMail className='size-6 shrink-0' />
                    </div>
                    <p className='font-medium leading-loose text-black/60 duration-200 ease-in-out hover:text-primary'>
                      <Link href='mailto:eb.sales@advika.cloud'>
                        eb.sales@advika.cloud
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className='pt-10'>
                <h3 className='text-left text-xl font-bold uppercase leading-snug text-primary'>
                  Connect at Social media
                </h3>
                <div className='flex gap-2 pt-5'>
                  <Socialmedia className='inline-flex size-10 items-center justify-center rounded bg-primary hover:bg-secondary hover:!text-white' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ContactComponent;
