'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TbArrowNarrowLeft } from 'react-icons/tb';
// import Advika404 from './advika-404.json';
function Page404() {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client
  }, []);

  if (!isClient) return null; // Prevents rendering on the server

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center bg-primary'>
      <div className='relative opacity-5'>
        <Image
          className='h-auto w-full'
          alt='cloud-top'
          width={1920}
          height={100}
          src='/images/cloud-top.svg'
        />
      </div>
      <div className='relative z-10 flex w-full flex-1 items-center justify-center px-5 text-center'>
        <div className='flex max-w-xl flex-col items-center justify-center'>
          {/* <LottieReact src="/images/advika-404.json" autoplay /> */}
          {/* <LottieReact animationData={Advika404} /> */}
          <Image
            // className='h-auto w-full'
            alt='cloud-top'
            width={600}
            height={600}
            src='/images/advika-404.svg'
          />
          <div className=''>
            <p className='mt-10 border-y border-white/10 py-5 text-3xl font-bold uppercase tracking-wider text-white sm:text-4xl md:text-5xl lg:text-6xl'>
              Page <span className='text-secondary'>Not</span> Found
            </p>
            <p className='py-3 text-lg text-white/60 md:text-xl'>
              Sorry, the page you are looking for could not be found.
            </p>
            <div className='flex items-center justify-center pt-5'>
              <Link
                href='/'
                className='flex items-center space-x-2 rounded bg-white px-10 py-4 text-primary transition duration-150 hover:bg-secondary'
                title='Return Home'
              >
                <TbArrowNarrowLeft className='size-5' strokeWidth={2} />
                <span>Return Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='relative opacity-5'>
        <Image
          className='h-auto w-full'
          alt='cloud-top'
          width={1920}
          height={100}
          src='/images/cloud-bottom.svg'
        />
      </div>
    </div>
  );
}

export default Page404;
