import Image from 'next/image';
import React from 'react';
type intro = {
  heading?: string;
  children: React.ReactNode;
  thumb?: string;
  thumbAlt?: string;
  dataAlt?: string;
  thumbClass?: string;
};
const Innerabout: React.FC<intro> = ({
  children,
  heading,
  thumb,
  thumbAlt,
  dataAlt,
  thumbClass,
}) => {
  return (
    <section className='py-10 xl:pb-5 xl:pt-0'>
      <div className='container'>
        <div className='flex flex-col items-start gap-5 md:grid md:grid-cols-12 xl:items-center xl:gap-14'>
          <div className='w-full md:col-span-6 md:w-auto'>
            <div className='flex w-full justify-center overflow-hidden bg-black/5'>
              <Image
                src={`${thumb}`}
                alt={`${thumbAlt}`}
                width={600}
                height={600}
                className={`'aspect-squares h-auto w-full ${thumbClass}`}
                data-alt={`${dataAlt}`}
              />
            </div>
          </div>
          <div className='md:col-span-6'>
            <div className='flex flex-col gap-5'>
              <h2 className='text-3xl font-bold leading-normal text-primary lg:text-5xl lg:leading-normal'>
                {heading}
              </h2>
              <div className='space-y-5'>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innerabout;
