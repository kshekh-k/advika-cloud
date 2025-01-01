import {
  Agreementicon,
  Awardbadgeicon,
  Managericon,
  Support24x7icon,
} from '@/icons';
import Image from 'next/image';
import React from 'react';
const services = [
  {
    icon: <Support24x7icon className='size-8' />,
    name: '24x7 Enterprise Call-Centre ',
    descrp:
      '24x7 dedicated network operation center to resolve all your queries or issues',
  },
  {
    icon: <Agreementicon className='size-8' />,
    name: 'Service Level Agreement',
    descrp: 'Dedicated performance based metric service',
  },
  {
    icon: <Managericon className='size-8' />,
    name: 'Dedicated Account and Relationship Managers',
    descrp: 'Dedicated performance based metric service',
  },
  {
    icon: <Awardbadgeicon className='size-8' />,
    name: 'Quarterly Service Performance Review',
    descrp:
      'Performance review on a quarterly basis, so that we can work towards improvement of our products & services for each quarter',
  },
];
function Smartservices({ className }: { className?: string }) {
  return (
    <section className={`py-10 lg:py-16 2xl:py-24 ${className}`}>
      <div className='container'>
        <div className='flex flex-col-reverse items-start gap-5 md:grid md:grid-cols-12'>
          <div className='md:col-span-8 lg:col-span-6'>
            <h2 className='text-left text-3xl font-bold leading-normal text-primary lg:text-5xl lg:leading-normal'>
              What Advika offers
            </h2>
            <p className='font-medium leading-loose text-black/60'>
              Premier service experience because it is convenient, reliable and
              provides instant solutions
            </p>
            <div className='space-y-10 pt-5'>
              {services.map((item, index) => (
                <div
                  key={index}
                  className='flex items-start gap-5 lg:items-center'
                >
                  <div className='flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-white'>
                    {item.icon}
                  </div>
                  <div className='space-y-2'>
                    <h3 className='text-left text-xl font-bold leading-normal text-primary'>
                      {item.name}
                    </h3>
                    <p className='text-left text-sm leading-normal tracking-wider text-black/65'>
                      {item.descrp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='relative flex items-center justify-center overflow-hidden md:col-span-4 lg:col-span-6'>
            <Image
              src={'/images/smart-services.png'}
              alt='Smart Services'
              width={800}
              height={600}
              className='h-auto w-full'
              data-alt="<a href='https://www.freepik.com/free-photo/smiley-dealers-car-sellers-office_5876715.htm'>www.freepik.com</a>"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Smartservices;
