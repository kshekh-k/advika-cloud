import Image from 'next/image'
import React from 'react'
type intro = {
  headingUpline?: string;
  heading?: string;
  descp?: string;
  thumb?: string;
  thumbAlt?: string;
  dataAlt?: string;
  thumbClass?: string;
}
const Innerintro: React.FC<intro> = ({ headingUpline, heading, descp, thumb, thumbAlt, dataAlt, thumbClass }) => {
  return (
    <section className='bg-primary relative lg:min-h-[485px] overflow-hidden flex items-center'>
      <div className="flex justify-end items-center absolute inset-0">
        <div className="hidden lg:flex relative lg:-mr-20 2xl:mr-40">
          <Image
            src={"/images/inner-intro-circle.svg"}
            alt="Gradient Circle"
            width={660}
            height={660}
            className="size-[660px]"
          />
          <div className="absolute inset-0 flex justify-center items-center" >
            <div className=' size-[445px] overflow-hidden rounded-full flex justify-center items-center'>
              <Image
                src={`${thumb}`}
                alt={`${thumbAlt}`}
                width={445}
                height={445}
                className={`${thumbClass ? thumbClass : 'object-cover aspect-sqares'}`} data-alt={`${dataAlt}`}
              /></div>
          </div>
        </div>
      </div>
      <div className="container py-16 relative ">
        <div className="lg:w-1/2 lg:max-w-[550px]">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight md:leading-tight tracking-tighter text-center lg:text-left text-white">
            <span className="text-secondary">{headingUpline}</span><br />
            {heading}
          </h1>
          <p className="text-white/60 leading-loose mt-4 text-center lg:text-left">
            {descp}
          </p>

        </div>
      </div>
    </section>
  )
}

export default Innerintro
