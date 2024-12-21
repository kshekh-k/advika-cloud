import Image from 'next/image'
import React from 'react'
const css = [
    {
        thumb:'/images/css-1.png',
        title:'Unlocking Boundless Opportunities for Industry Growth',
        descrp:'Advika Enterprises cloud computing solutions unlock limitless opportunities for industries to achieve exponential growth. Our services reshape the business landscape, fostering a seamless environment for efficient operations and innovative applications.',
    dataAlt:'https://www.freepik.com/free-photo/close-up-man-using-smart-touch-screen-server_7133526.htm'
    },
    {
        thumb:'/images/css-2.png',
        title:'Eliminating Boundaries, Connecting the World',
        descrp:'Advika Enterprises cloud solutions empower industries like retail, railways, manufacturing, banking, education, and healthcare. By breaking geographical barriers, we help businesses expand horizons and embrace new opportunities.',
        dataAlt:'https://www.freepik.com/free-photo/young-businesswoman-leaning-her-working-desk-with-crossed-arms_20722934.htm'
    },
    {
        thumb:'/images/css-3.png',
        title:'Unleashing Limitless Opportunities for Growth',
        descrp:'Advika Enterprises cloud computing solutions drive continuous growth and innovation across industries. From retail and railways to manufacturing, banking, education, and healthcare, our services break geographical barriers, opening doors to new opportunities and enabling applications to thrive.',
        dataAlt:'https://www.freepik.com/free-photo/modern-data-center-providing-cloud-services-enabling-businesses-access-computing-resources-storage-demand-internet-server-room-infrastructure-3d-render-animation_56001615.htm'
    },
]
function Cloudeserversolution() {
  return (
    <section className='bg-black/5 py-10 lg:py-16 2xl:py-24 mt-10'>
      <div className='container'>
      <h2 className='text-3xl font-bold leading-normal text-primary lg:text-5xl lg:leading-normal text-center'>Cloud Server Solutions</h2>
      <div className='pt-5 md:pt-10 flex flex-col md:grid md:grid-cols-3 gap-5 lg:gap-10'>
        {css.map((item,index)=>
        <div key={index} className='bg-white p-5 flex flex-col gap-4'>
            <div className='overflow-hidden flex justify-center'>
                <Image src={`${item.thumb}`} alt={`${item.thumb}`} width={300} height={300} className='aspect-square w-full h-auto' data-alt={`<a href='${item.dataAlt}'>www.freepik.com</a>`} />
            </div>
            <div className='space-y-2'>
            <h3 className='text-xl text-primary text-left font-bold'>
                {item.title}
            </h3>
            <p className='leading-loose text-black/60'>             
                {item.descrp}
            </p>
            </div>
        </div>
    )}
      </div>
      </div>
    </section>
  )
}

export default Cloudeserversolution
