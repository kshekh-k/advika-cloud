import Image from 'next/image';
import React from 'react';
type intro = {
  headingUpline?: string;
  heading?: string;
  descp?: string;
  thumb?: string;
  thumbAlt?: string;
  dataAlt?: string;
  thumbClass?: string;
};
const Innerintro: React.FC<intro> = ({
  headingUpline,
  heading,
  descp,
  thumb,
  thumbAlt,
  dataAlt,
  thumbClass,
}) => {
  return (
    <section className='relative flex items-center overflow-hidden bg-primary lg:min-h-[485px]'>
      <div className='absolute inset-0 flex items-center justify-end'>
        <div className='relative hidden lg:-mr-20 lg:flex 2xl:mr-40'>
          <Image
            src={'/images/inner-intro-circle.svg'}
            alt='Gradient Circle'
            width={660}
            height={660}
            className='size-[660px]'
          />
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='flex size-[445px] items-center justify-center overflow-hidden rounded-full'>
              <Image
                src={`${thumb}`}
                alt={`${thumbAlt}`}
                width={445}
                height={445}
                className={`${thumbClass ? thumbClass : 'aspect-sqares object-cover'}`}
                data-alt={`${dataAlt}`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='container relative py-16'>
        <div className='lg:w-1/2 lg:max-w-[550px]'>
          <h1 className='text-center text-3xl font-bold leading-tight tracking-tighter text-white md:text-5xl md:leading-tight lg:text-left'>
            <span className='text-secondary'>{headingUpline}</span>
            <br />
            {heading}
          </h1>
          <p className='mt-4 text-center leading-loose text-white/60 lg:text-left'>
            {descp}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Innerintro;
