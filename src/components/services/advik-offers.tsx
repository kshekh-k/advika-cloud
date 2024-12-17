import Image from 'next/image'
import React from 'react'
const advikaOffer = [
    {
        thumb: '/images/advika-offer-1.png',
        title: 'Public & Hybrid Cloud',
        descrp: 'Foundation Assessment & Migration Lift & Shift Re-Platform (PaaS) Containers Re-Architect Governance & Operation Managed Services "End of" migration'
    },
    {
        thumb: '/images/advika-offer-1.png',
        title: 'Cloud Security',
        descrp: 'Enterprise Mobility Advanced Threat Protection E-mail Encryption, Data Classification & DLP SIEM, CASE Self Service Password Reset Two Factor Authentication'
    },
    {
        thumb: '/images/advika-offer-1.png',
        title: 'Digital Workplace',
        descrp: 'Virtualization Endpoint Management Collaboration Authentication Application Networking'
    },
    {
        thumb: '/images/advika-offer-1.png',
        title: 'Application Modernization',
        descrp: 'Platform Services Containers PaaS Integration DevOps Release Management'
    },
    {
        thumb: '/images/advika-offer-1.png',
        title: 'DevOps',
        descrp: 'Continuous Development Integration Testing & Deployment Operations Automation Infrastructure as Code Configuration managemen'
    },
    {
        thumb: '/images/advika-offer-1.png',
        title: 'Big Data Analytics',
        descrp: 'Big Data & Databases Data Integration Data Management Data Science & Analytics Data & Metadata Modelling Business Intelligence'
    },
    {
        thumb: '/images/advika-offer-1.png',
        title: 'Resources Offered',
        descrp: 'Cloud servers transform business operations by offering secure storage, seamless networking, and efficient database management. '
    },
    {
        thumb: '/images/advika-offer-1.png',
        title: 'Ideal for',
        descrp: 'Scalable web apps, Cloud-native apps, DevOps, Disaster recovery, Data analytics, AI, and ML'
    },
]
function Advikoffers() {
    return (
        <section className='py-10 lg:py-16 2xl:py-24'>
            <div className='container'>
                <h2 className='text-3xl font-bold leading-normal text-primary lg:text-5xl lg:leading-normal text-center'>What Advika offers</h2>
                <div className='max-w-full overflow-auto py-5 xl:overflow-visible xl:py-0'>
                <div className='flex flex-nowrap min-w-[1500px] md:min-w-0 md:grid md:grid-cols-3 lg:grid-cols-4 gap-5 xl:gap-10 pt-5 md:pt-10'>
                    {advikaOffer.map((item, index) =>
                        <div key={index} className='bg-black/5 p-5 w-96 shrink-0 md:w-auto'>
                            <div className='overflow-hidden flex justify-center'>
                                <Image src={`${item.thumb}`} alt={`${item.thumb}`} width={350} height={350} className='aspect-square w-full h-auto' />
                            </div>
                            <div className='space-y-2 pt-5'>
                                <h3 className='text-xl text-primary text-left font-bold'>{item.title}</h3>
                                <p className='leading-loose text-black/60'>{item.descrp}</p>
                            </div>
                        </div>
                    )}
                </div>
                </div>
            </div>
           
        </section>
    )
}

export default Advikoffers
