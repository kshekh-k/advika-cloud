import { CheckIcon } from 'lucide-react';
import Image from 'next/image';
const stats = [
  {
    value: '12+',
    tagline: 'Cities globally',
  },
  {
    value: '50+',
    tagline: 'Cities Nationally',
  },
  {
    value: '24+',
    tagline: 'Years of Excellence',
  },
];
export default function AdvikaGlobalReach() {
  return (
    <section className='bg-black/5 pt-10 lg:py-16 2xl:pb-20 2xl:pt-24'>
      <div className='container'>
        <div className='flex flex-col lg:grid lg:grid-cols-2'>
          <div className='border-black/10 pb-5 lg:border-r lg:pb-0 lg:pr-10'>
            <h2 className='text-3xl font-bold leading-normal text-primary lg:text-5xl lg:leading-normal'>
              Advika&apos;s Technological Superiority
            </h2>
          </div>
          <div className='space-y-5 font-medium leading-loose text-black/60 lg:pl-12'>
            <p>
              We are the pioneers in Cloud Server and Dedicated Server services
              in India, offering highly affordable and reliable server solutions
              to our customers. Here are some key highlights of our presence and
              achievements.
            </p>
            <ul className='space-y-3 font-normal'>
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
          </div>
        </div>

        <div className='relative flex min-h-96 items-center justify-center overflow-hidden lg:min-h-0'>
          <Image
            src={'/images/advika-map-vector.svg'}
            alt='Advika Global Reach'
            className='mt-10 hidden w-full lg:block'
            data-alt="<a href='https://www.freepik.com/free-vector/worldwide-connection-gray-background-illustration-vector_3439375.htm'>www.freepik.com</a>"
            width={1400}
            height={800}
          />
          <Image
            src={'/images/advika-map-mobile-vector.svg'}
            alt='Advika Global Reach'
            className='mt-5 h-full max-w-xl object-cover md:h-auto md:w-full md:max-w-full lg:hidden'
            width={1024}
            height={630}
          />
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='mr-auto flex max-w-md flex-wrap justify-center gap-2 pl-5 md:pl-20 lg:ml-72 lg:flex-nowrap lg:gap-5'>
              {stats.map((item, index) => (
                <div
                  key={index}
                  className='flex w-24 flex-col items-center justify-center gap-1 rounded-md bg-white p-3 shadow-2 lg:w-40 lg:p-5'
                >
                  <h3 className='text-center text-2xl font-bold text-primary lg:text-4xl'>
                    {item.value}
                  </h3>
                  <p className='text-center text-[10px] font-semibold uppercase text-black/50 lg:text-sm'>
                    {item.tagline}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
