import React from 'react'
import Layout from '../layout'
import Innerintro from '../partials/inner-intro'
import Stats from '../partials/stats'
import Innerabout from '../partials/inner-about'
import { CheckIcon } from 'lucide-react'
import Vision from './vision'
import Smartservices from '../partials/smart-services'
import ContactForm from '../partials/contact-form'
import Testimonials from '../partials/testimonials'
import Faqs from '../partials/faqs'

function About() {
  return (
    <>
      <Layout>
        <Innerintro headingUpline="About" heading="Advika Cloud" descp="At Advika Web, we are dedicated to reshaping the landscape of web hosting services through our commitment to reliability, innovation, and customer-centric solutions. Since our inception, we have set the standard for exceptional hosting experiences, providing robust and cutting-edge services that empower individuals and businesses to thrive online." thumb='/images/about-us.svg' thumbAlt="about-us" thumbClass="w-80 h-auto" />
        <Stats />
        <Innerabout heading='Advika Provides a Huge Range of Web Hosting Services' thumb='/images/sharad-k-rathi-ceo.png' thumbAlt={'sharad-k-rathi-ceo.png'}>
          <p className='font-medium leading-loose text-black/60'>
            Explore the wide variety of web hosting services offered by Advika. From cheap shared hosting to powerful dedicated servers, Advika perfectly meets every hosting need.
          </p>
          <p className='leading-loose text-black/60'>
            Whether you are a new blogger, a small business, or a large business, Advika's solution is suitable for you. Reliability, and security, With Advika is committed to hosting your website online and around the clock.
          </p>
          <p className='leading-loose text-black/60'>
            Their easy-to-use control panels make your hosting administration effortless, and their thoughtful customer support team is always there to help you expand your website No matter the shape, Advika has the resources and experience to back it up Find hosting plans today and find comfort and peace of mind which Advika gives you.
          </p>
          <ul className='space-y-3 font-medium text-black/60'>
            <li className='relative pl-10'>
              <span className='absolute left-0 top-1 inline-flex size-6 items-center justify-center rounded bg-secondary text-white'>
                <CheckIcon className='size-4' strokeWidth='3' />
              </span>
              Fastest-growing server provider with over 5,000 trusted and satisfied subscribers.
            </li>
            <li className='relative pl-10'>
              <span className='absolute left-0 top-1 inline-flex size-6 items-center justify-center rounded bg-secondary text-white'>
                <CheckIcon className='size-4' strokeWidth='3' />
              </span>
              Strong presence across 50 cities nationally and 12 international cities.
            </li>
          </ul>
        </Innerabout>
        <Vision />
        <Smartservices />
        <ContactForm />
        {/* Testimonials & Faq */}
        <section className='space-y-10 bg-light py-10 lg:space-y-16 lg:py-16 2xl:space-y-24 2xl:py-24'>
          <Testimonials />
          <Faqs />
        </section>
      </Layout>
    </>
  )
}

export default About
