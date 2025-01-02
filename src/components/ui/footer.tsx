import Image from 'next/image';
import Link from 'next/link';
import { TbMail, TbMapPin, TbPhoneCall } from 'react-icons/tb';
import Socialmedia from './social-media';
const AboutCompany = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'About Us',
    link: '/about',
  },
  {
    label: 'Services',
    link: '/our-services',
  },
];
const HelpSupport = [
  {
    label: 'FAQs',
    link: '/#faq',
  },
  {
    label: 'Contact us',
    link: '/contact',
  },
  {
    label: 'Terms of Services',
    link: '/terms-service',
  },
  {
    label: 'Backup Policy',
    link: '/backup-policy',
  },
];

export default function Footer() {
  const currentyear = new Date().getFullYear();
  return (
    <footer className='bg-primary pt-10 text-white xl:pt-20'>
      <div className='container'>
        <div className='flex flex-col gap-5 lg:grid lg:grid-cols-12 lg:gap-12'>
          <div className='col-span-3 space-y-2'>
            <Image
              src={'/svg/advika-cloud-white-logo.svg'}
              alt='Advika Cloud'
              width={254}
              height={45}
            />
            <p className='pt-3 text-sm leading-normal text-white/50 md:pt-5'>
              Advika cloud Data Center Services provides complete solutions for
              businesses seeking secure and reliable hosting.
            </p>
          </div>
          <div className='col-span-6 flex justify-center'>
            <div className='grid max-w-lg flex-1 grid-cols-2 gap-12'>
              <div className='flex flex-col gap-4'>
                <h4 className='text-sm font-semibold md:text-xl'>
                  About Company
                </h4>
                <ul className='flex flex-col gap-4 text-sm'>
                  {AboutCompany.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.link}
                        className='text-white/70 duration-200 ease-in-out hover:text-secondary'
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='flex flex-col gap-4'>
                <h4 className='text-sm font-semibold md:text-xl'>
                  Help & Support
                </h4>
                <ul className='flex flex-col gap-4 text-sm'>
                  {HelpSupport.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.link}
                        className='text-white/70 duration-200 ease-in-out hover:text-secondary'
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='col-span-3 flex flex-col gap-4'>
            <h4 className='text-sm font-semibold md:text-xl'>Contacts</h4>
            <ul className='flex flex-col gap-4 text-sm'>
              <li className='flex items-start gap-2'>
                <TbMapPin className='size-5 shrink-0' />
                <span className='text-white/70'>
                  Advika Data Center Services Pvt. Ltd.
                  <br />Alt F, Plot no 21 & 21A, Sector 142 <br />Noida - 201305 (UP) India
                </span>
              </li>
              <li>
                <Link
                  href='tel:+919829714343'
                  className='flex items-center gap-2 text-white/70 duration-200 ease-in-out hover:text-secondary'
                >
                  <TbPhoneCall className='size-5 shrink-0' />
                  <span>+91-98297-14343</span>
                </Link>
              </li>
              <li>
                <Link
                  href='mailto:eb.sales@advika.cloud'
                  className='flex items-center gap-2 text-white/70 duration-200 ease-in-out hover:text-secondary'
                >
                  <TbMail className='size-5 shrink-0' />
                  <span>eb.sales@advika.cloud</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className='mt-10 border-white/10' />
        <div className='flex flex-wrap justify-center gap-3 py-5 md:justify-between'>
          <p className='text-center text-sm text-white/70 md:text-left'>
            Copyright &copy; {currentyear} Advika.cloud | All Right Reserved
          </p>
          <div className='flex items-center justify-center gap-5 md:justify-end'>
            <Socialmedia />
          </div>
        </div>
      </div>
    </footer>
  );
}
