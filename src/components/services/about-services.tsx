import { CheckIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Aboutservices() {
  return (
    <section className='py-10 xl:pt-0 xl:pb-5'>
      <div className='container'>
        <div className='flex flex-col md:grid md:grid-cols-12 gap-5 xl:gap-14 items-start xl:items-center'>
            <div className='md:col-span-6 w-full md:w-auto'>
                <div className='w-full bg-black/5 flex justify-center overflow-hidden'>
                <Image src="/images/about-services-2.png" alt='' width={600} height={600} className='aspect-squares w-full h-auto'/>
                </div>
            </div>
            <div className='md:col-span-6'>
            <div className='flex flex-col gap-5'>
            <h2 className='text-3xl font-bold leading-normal text-primary lg:text-5xl lg:leading-normal'>
            Advika Provides the best Cloud Server Technologies
            </h2>
          <div className='space-y-5'>
            <p className='font-medium leading-loose text-black/60'>
            We are the pioneers in Cloud Server services in India, offering highly affordable and reliable server solutions to our customers. Here are some key highlights of  our presence and achievements
            </p>
            <p className='leading-loose text-black/60'>
            In times when we need to offer more with less resources and take advantage of high speed, reliability, strategic edge and accessibility while enjoying significant cost optimization, cloud is our one way ticket to do it. Cloud computing is the new normal for organizations of all sizes and as analysts predict, by 2024 more that 45% of the IT spending will shift from traditional IT to cloud to support through various architectures, such as hybrid, public and private, all types of needs and workloads.


            </p>
            <ul className='space-y-3 font-medium text-black/60'>
              <li className='relative pl-10'>
                <span className='absolute left-0 top-1 inline-flex size-6 items-center justify-center rounded bg-secondary text-white'>
                  <CheckIcon className='size-4' strokeWidth='3' />
                </span>
                Fastest-growing server provider with over 5,000 trusted and satisfied subscribers
              </li>
              <li className='relative pl-10'>
                <span className='absolute left-0 top-1 inline-flex size-6 items-center justify-center rounded bg-secondary text-white'>
                  <CheckIcon className='size-4' strokeWidth='3' />
                </span>
                Strong presence across 50 cities nationally and 12 international cities
              </li>
            </ul>
          </div>
        </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutservices
