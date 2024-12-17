import Layout from '@/components/layout'
import Innerintro from '@/components/partials/inner-intro'
import React from 'react'
import Stats from '../stats'
import Aboutservices from '../about-services'
import Cloudeserversolution from './cloude-server-solution'
import Advikoffers from '../advik-offers'
import Smartservices from '../smart-services'
import ContactForm from '@/components/partials/contact-form'
import Testimonials from '@/components/partials/testimonials'
import Faqs from '@/components/partials/faqs'

function CloudserverComp() {
  return (
    <Layout>
      <Innerintro headingUpline="Advika's" heading="Cloud Server Solution" descp="cloud solutions drive limitless industry growth by breaking geographical barriers and unlocking endless expansion potential." thumb='/images/cloud-server.svg' thumbAlt="cloud-server.svg" thumbClass="w-80 h-auto" />

      <Stats />
       <Aboutservices />
     <Cloudeserversolution />
       <Advikoffers />
      <Smartservices />
      <ContactForm />
                {/* Testimonials & Faq */}
                <section className='space-y-10 bg-light py-10 lg:space-y-16 lg:py-16 2xl:space-y-24 2xl:py-24'>
                  <Testimonials />
                  <Faqs />
                </section>
      </Layout>
  )
}

export default CloudserverComp
