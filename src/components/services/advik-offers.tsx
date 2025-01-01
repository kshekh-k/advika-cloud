import Image from 'next/image';
import React from 'react';
const advikaOffer = [
  {
    thumb: '/svg/server-public-cloud.svg',
    title: 'PUBLIC CLOUD SERVER',
    descrp:
      'Public cloud servers are third-party-owned, internet-delivered computing resources that offer scalable, on-demand services like virtual machines, storage, and applications. They are shared among multiple users (multi-tenancy) and managed entirely by the provider',
    serverUPS: [
      {
        subtitle: 'RESOURCES OFFERED',
        list: [
          'Virtual Machines (VMs)',
          'Storage',
          'Networking',
          'Databases',
          'Applications',
        ],
      },
      {
        subtitle: 'CORE FEATURES',
        list: ['Scalability', 'On-demand', 'Pay-as-you-go', 'Provider-managed'],
      },
      {
        subtitle: 'IDEAL FOR',
        list: [
          'Scalable web apps',
          'Cloud-native apps',
          'DevOps',
          'Disaster recovery',
          'Data analytics, AI, and ML',
        ],
      },
      {
        subtitle: 'LIMITATIONS',
        list: [
          'Not ideal for sensitive data or regulated industries.',
          'Unsuitable for highperformance computing or dedicated resources',
        ],
      },
    ],
    dataAlt:
      'https://www.freepik.com/free-vector/scheme-data-transmission-isometric-secure-connection-cloud-computing-server-room-datacent_4102311.htm',
  },
  {
    thumb: '/svg/server-private-cloud.svg',
    title: 'PRIVATE CLOUD SERVER',
    descrp:
      'A dedicated cloud environment for a single organization, managed on-premises or in a thirdparty data center, offering scalability, control, and enhanced security.',
    serverUPS: [
      {
        subtitle: 'CHARACTERISTICS',
        list: [
          'Dedicated infrastructure',
          'On-premises or hosted',
          'Customizable',
          'Secure',
          'Controlled access',
        ],
      },
      {
        subtitle: 'BENEFITS',
        list: [
          'Enhanced security',
          'Greater customization',
          'Cost-effective',
          'Scalable and flexible',
          'Improved performance',
        ],
      },
      {
        subtitle: 'USE CASES',
        list: [
          'Data storage and backup',
          'Web hosting',
          'Application developmen',
          'Database management',
          'ERP',
        ],
      },
      {
        subtitle: 'LIMITATIONS',
        list: [
          'High Initial Cost',
          'Maintenance',
          'Limited Scalability',
          'Resource Utilization',
          'Complexity',
        ],
      },
    ],
    dataAlt:
      'https://www.freepik.com/free-vector/server-room-cabinet-data-center-database-isometric-icon-server-rack-farm_4103156.htm',
  },
  {
    thumb: '/svg/server-gpu.svg',
    title: 'GPU SERVER',
    descrp:
      'Servers equipped with Graphics Processing Units (GPUs) for accelerating parallel processing tasks like machine learning, data analytics, and graphics rendering.',
    serverUPS: [
      {
        subtitle: 'APPLICATIONS',
        list: [
          'Scientific simulations',
          'Machine learning and AI',
          'Graphics rendering',
          'Cryptocurrency mining',
          'Real-time data analysis',
        ],
      },
      {
        subtitle: 'INDUSTRIES',
        list: [
          'Healthcare',
          'Finance',
          'Engineering',
          'Gaming',
          'Cloud computing',
        ],
      },
      {
        subtitle: 'BENEFITS',
        list: [
          'Faster processing',
          'Improved performance',
          'Accelerated data analysis',
          'Enhanced graphics',
          'Increased power',
        ],
      },
      {
        subtitle: 'TYPE',
        list: [
          'Dedicated GPU servers',
          'Shared GPU servers',
          'Cloud-based GPU servers',
          'Virtualized GPU servers',
          'Containerized GPU servers',
        ],
      },
      {
        subtitle: 'LIMITATIONS',
        list: [
          'High Cost',
          'Power Consumption',
          'Complex Setup',
          'Limited Suitability',
          'Scalability Challenges',
        ],
      },
    ],
    dataAlt:
      'https://www.freepik.com/free-vector/cloud-technology-storage-transfer-data-isometric-mobile-phone-data-downloading_4102313.htm',
  },
  {
    thumb: '/svg/server-dedicated.svg',
    title: 'DEDICATED SERVER',
    descrp:
      'A physical server exclusively dedicated to a single user or organization, offering full control, customization, and enhanced security.',
    serverUPS: [
      {
        subtitle: 'CHARACTERISTICS',
        list: [
          'Exclusive Use',
          'Full Control',
          'Enhanced Security',
          'High Performance',
          'Dedicated IP Address',
        ],
      },
      {
        subtitle: 'INDUSTRIES',
        list: [
          'High-traffic websites',
          'Large-scale e-commerce',
          'Resource-intensive',
          'Database-driven apps',
          'Compliance with regulations',
        ],
      },
      {
        subtitle: 'BENEFITS',
        list: [
          'No Resource Sharing',
          'Managed or Unmanaged',
          'Improved performance',
          'Reliability',
          'Scalability',
        ],
      },
      {
        subtitle: 'TYPE',
        list: [
          'Managed',
          'Unmanaged',
          'Colocation',
          'Virtual Dedicated Servers',
          'Cloud Dedicated Servers',
        ],
      },
      {
        subtitle: 'LIMITATIONS',
        list: [
          'High Cost',
          'Technical Expertise',
          'Maintenance',
          'Scalability Challenges',
          'Overprovisioning Risks',
        ],
      },
    ],
    dataAlt:
      'https://www.freepik.com/free-vector/server-room-datacenter-isometric-icon-white-background-cloud-technology-computing-data-databa_4102312.htm',
  },
  {
    thumb: '/svg/server-customize.svg',
    title: 'CUSTOMIZED SERVER',
    descrp:
      'A cloud solution tailored to meet specific business needs through custom configurations of compute, storage, networking, security, and software resources.',
    serverUPS: [
      {
        subtitle: 'CUSTOMIZATIONS',
        list: [
          'OS and software',
          'Resource allocation',
          'Network configurations',
          'Security settings',
          'Data storage and backups',
        ],
      },
      {
        subtitle: 'INDUSTRIES',
        list: [
          'Data analytics and science',
          'Machine learnin & AI',
          'Database management',
          'E-commerce platforms',
          'Enterprise applications',
        ],
      },
      {
        subtitle: 'BENEFITS',
        list: [
          'Flexibility',
          'Scalability',
          'Cost-Effectiveness',
          'Enhanced Performance',
          'Improved Security',
        ],
      },
      {
        subtitle: 'TYPE',
        list: [
          'Customized Cloud Servers',
          'Customized Dedicated',
          'Customized Hybrid',
          'Customized VPS',
          'Customized Managed',
        ],
      },
      {
        subtitle: 'LIMITATIONS',
        list: [
          'High Cost',
          'Complex Setup',
          'Maintenance',
          'Time-Consuming',
          'Overprovisioning Risks',
        ],
      },
    ],
    dataAlt:
      'https://www.freepik.com/free-vector/big-data-source-data-center-cloud-computing-cloud-storage-isometric-concept-server-room-rack_4102872.htm',
  },
];
function Advikoffers() {
  return (
    <section className='py-10 lg:py-16 2xl:py-24'>
      <div className='container'>
        <h2 className='text-center text-3xl font-bold leading-normal text-primary lg:text-5xl lg:leading-normal'>
          What Advika offers
        </h2>

        <div className='flex flex-col gap-10 pt-10'>
          {advikaOffer.map((item, index) => (
            <div
              key={index}
              className='flex shrink-0 flex-col gap-10 bg-black/5 p-5 md:w-auto lg:grid lg:grid-cols-12 lg:p-10'
            >
              <div className='col-span-4 mx-auto flex max-w-sm items-center justify-center overflow-hidden lg:max-w-none'>
                <Image
                  src={`${item.thumb}`}
                  alt={`${item.thumb}`}
                  width={350}
                  height={350}
                  className='aspect-square h-auto w-full'
                  data-alt={`<a href='${item.dataAlt}'>www.freepik.com</a>`}
                />
              </div>
              <div className='col-span-8 space-y-2'>
                <h3 className='text-left text-3xl font-bold text-primary'>
                  {item.title}
                </h3>
                <p className='leading-loose text-black/60'>{item.descrp}</p>
                <div className='max-w-full overflow-auto pb-5 lg:overflow-visible lg:pb-0'>
                  <div className='flex min-w-[950px] flex-nowrap justify-start gap-5 pt-5 sm:grid sm:grid-cols-2 lg:min-w-0'>
                    {item.serverUPS.map((server, i) => (
                      <div
                        key={i}
                        className='min-w-64 flex-1 bg-white p-5 md:min-w-0'
                      >
                        <h4 className='text-xl font-semibold uppercase leading-normal text-black/80'>
                          {server.subtitle}
                        </h4>
                        <ul className='list-disc pl-5'>
                          {server.list.map((li, x) => (
                            <li key={x} className='leading-loose text-black/60'>
                              {li}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advikoffers;
