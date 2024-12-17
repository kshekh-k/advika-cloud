import { Badgeicon, Clockicon, Cloudupicon, Companyicon, Globeicon, Staricon } from '@/icons';
import React from 'react'
const stats = [
    {
      icon: <Companyicon className='size-7' />,
      value: '15000+',
      tagline: 'Trusted EB Customers',
 
    },
    {
      icon: <Globeicon className='size-7' />,
      value: '1000+',
      tagline: 'Global reach',
     
    },
    {
      icon: <Clockicon className='size-7' />,
      value: '24x7',
      tagline: 'Customer Support',
   
    },
    {
      icon: <Staricon className='size-7' />,
      value: '4.5',
      tagline: 'Ratings at Google',
    
    },
    {
      icon: <Cloudupicon className='size-7' />,
      value: '99.9%',
      tagline: 'Uptime & Availablity',
   
    },
    {
      icon: <Badgeicon className='size-7' />,
      value: '30+',
      tagline: 'Awards & Recognitions',
     
    },
  ];
function Stats() {
  return (
   
       <div className='container'>
       <div className='max-w-full overflow-auto py-5 xl:overflow-visible xl:py-0'>
          <div className='flex justify-between min-w-[1200px] xl:min-w-0 xl:grid xl:grid-cols-6 gap-3 xl:py-10'>
            {stats.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col bg-black/5 w-60 xl:w-auto px-3 py-5 shrink-0 items-center justify-center gap-5 `}
              >
                <div className='flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-white xl:size-11'>
                  {item.icon}
                </div>
                <div className='space-y-1.5 text-center'>
                  <h3 className='text-xl font-bold leading-none text-primary text-center'>
                    {item.value}
                  </h3>
                  <p className='text-sm font-semibold text-black/65 uppercase leading-none tracking-wider'>
                    {' '}
                    {item.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
   
    
  )
}

export default Stats
