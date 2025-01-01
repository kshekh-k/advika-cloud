import Layout from '@/components/layout';
import Innerintro from '@/components/partials/inner-intro';
import React from 'react';
import Stats from '../partials/stats';
import Innerabout from '../partials/inner-about';
import Cloudeserversolution from './cloude-server-solution';
import Advikoffers from './advik-offers';
import Smartservices from '../partials/smart-services';
import ContactForm from '@/components/partials/contact-form';
import Testimonials from '@/components/partials/testimonials';
import Faqs from '@/components/partials/faqs';
import { CheckIcon } from 'lucide-react';

function Services() {
  return (
    <Layout>
      <Innerintro
        headingUpline="Advika's"
        heading='Cloud Server Solution'
        descp='cloud solutions drive limitless industry growth by breaking geographical barriers and unlocking endless expansion potential.'
        thumb='/images/cloud-server.svg'
        thumbAlt='cloud-server.svg'
        thumbClass='w-80 h-auto'
        dataAlt='<a href="https://www.freepik.com/free-vector/scheme-data-transmission-isometric-secure-connection-cloud-computing-server-room-datacent_4102311.htm">www.freepik.com</a>'
      />
      <Stats />
      <Innerabout
        heading='Advika Provides the best Cloud Server Technologies'
        thumb='/images/about-services-2.png'
        thumbAlt={'about-services-2.png'}
        dataAlt="<a href='https://www.freepik.com/free-photo/portrait-happy-woman-with-digital-tablet_12652731.htm'>www.freepik.com</a>"
      >
        <p className='font-medium leading-loose text-black/60'>
          We are the pioneers in Cloud Server services in India, offering highly
          affordable and reliable server solutions to our customers. Here are
          some key highlights of our presence and achievements
        </p>
        <p className='leading-loose text-black/60'>
          In times when we need to offer more with less resources and take
          advantage of high speed, reliability, strategic edge and accessibility
          while enjoying significant cost optimization, cloud is our one way
          ticket to do it. Cloud computing is the new normal for organizations
          of all sizes and as analysts predict, by 2024 more that 45% of the IT
          spending will shift from traditional IT to cloud to support through
          various architectures, such as hybrid, public and private, all types
          of needs and workloads.
        </p>
        <ul className='space-y-3 font-medium text-black/60'>
          <li className='relative pl-10'>
            <span className='absolute left-0 top-1 inline-flex size-6 items-center justify-center rounded bg-secondary text-white'>
              <CheckIcon className='size-4' strokeWidth='3' />
            </span>
            Fastest-growing server provider with over 5,000 trusted and
            satisfied subscribers
          </li>
          <li className='relative pl-10'>
            <span className='absolute left-0 top-1 inline-flex size-6 items-center justify-center rounded bg-secondary text-white'>
              <CheckIcon className='size-4' strokeWidth='3' />
            </span>
            Strong presence across 50 cities nationally and 12 international
            cities
          </li>
        </ul>
      </Innerabout>
      <Cloudeserversolution />
      <Advikoffers />
      <Smartservices className='bg-black/5' />
      <ContactForm />
      {/* Testimonials & Faq */}
      <section className='space-y-10 bg-light py-10 lg:space-y-16 lg:py-16 2xl:space-y-24 2xl:py-24'>
        <Testimonials />
        <Faqs />
      </section>
    </Layout>
  );
}

export default Services;
