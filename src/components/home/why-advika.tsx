import { Button } from '@/components/ui/button';
import {
  Badgeicon,
  Clockicon,
  Cloudupicon,
  Companyicon,
  Globeicon,
  Staricon,
} from '@/icons';
import Image from 'next/image';
const stats = [
  {
    icon: <Companyicon className='size-10 xl:size-14' />,
    value: '3500+',
    tagline: 'Trusted EB Customers',
    border: 'lg:border-b',
  },
  {
    icon: <Globeicon className='size-10 xl:size-14' />,
    value: '1000+',
    tagline: 'Global reach',
    border: 'lg:border-b lg:!border-l',
  },
  {
    icon: <Clockicon className='size-10 xl:size-14' />,
    value: '24x7',
    tagline: 'Customer Support',
    border: 'lg:border-b lg:!border-l',
  },
  {
    icon: <Staricon className='size-10 xl:size-14' />,
    value: '4.7',
    tagline: 'Ratings at Google',
    border: '',
  },
  {
    icon: <Cloudupicon className='size-10 xl:size-14' />,
    value: '99.9%',
    tagline: 'Uptime & Availablity',
    border: 'lg:!border-l',
  },
  {
    icon: <Badgeicon className='size-10 xl:size-14' />,
    value: '30+',
    tagline: 'Awards & Recognitions',
    border: 'lg:!border-l',
  },
];
type Props = {
  onContactClick: () => void;
};
export default function HomeWhyAdvika({ onContactClick }: Props) {
  return (
    <section className='bg-primary text-white'>
      <div className='relative overflow-hidden py-10 lg:py-16 2xl:py-24'>
        <Image
          src={'/images/mesh-1.png'}
          alt='Mesh'
          className='absolute inset-0 max-w-none'
          width={1900}
          height={400}
        />
        <div className='container relative'>
          <h2 className='text-3xl font-bold leading-normal lg:leading-normal text-secondary lg:text-5xl'>
            Why Advika
            <span className='block text-white'>
              Explore Our Impressive Stats!
            </span>
          </h2>

          <Button
            variant={'white'}
            size={'lg'}
            onClick={onContactClick}
            className='mt-5 uppercase duration-200 ease-in-out hover:bg-secondary hover:text-white lg:mt-10'
          >
            Book a Call
          </Button>
        </div>
      </div>
      <hr className='border-white/10' />
      <div className='container'>
        <div className='max-w-full overflow-auto lg:overflow-visible'>
          <div className='flex min-w-[750px] divide-x divide-white/10 lg:divide-x-0 lg:grid lg:grid-cols-3 lg:border-x lg:border-white/10'>
            {stats.map((item, index) => (
              <div
                key={index}
                className={`flex w-[300px] shrink-0 items-center justify-center gap-5 border-white/10 py-10 lg:w-auto lg:py-14 xl:gap-10 xl:py-20 ${item.border}`}
              >
                <div className='flex size-16 shrink-0 items-center justify-center rounded-full bg-secondary text-white xl:size-24'>
                  {item.icon}
                </div>
                <div className='space-y-1'>
                  <h2 className='text-3xl font-semibold leading-none xl:text-5xl xl:leading-none'>
                    {item.value}
                  </h2>
                  <p className='text-sm uppercase leading-none tracking-wider'>
                    {' '}
                    {item.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
