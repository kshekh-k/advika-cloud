import Image from 'next/image';
import React from 'react';

function Vision() {
  return (
    <section className='mt-10 bg-black/5 py-10 lg:mt-16 lg:py-16 2xl:mt-20 2xl:py-32'>
      <div className='container'>
        <div className='flex flex-col items-start gap-5 md:grid md:grid-cols-12 xl:items-center xl:gap-14'>
          <div className='md:col-span-6'>
            <div className='flex flex-col gap-5'>
              <h2 className='text-3xl font-bold leading-normal text-primary lg:text-5xl lg:leading-normal'>
                Advika&apos;s Vision
              </h2>
              <div className='space-y-5'>
                <p className='font-medium leading-loose text-black/60'>
                  Join us at Advika Cloud, where hosting excellence meets
                  unwavering commitment. Let&apos;s embark on a journey to
                  elevate your online presence and propel your success in the
                  digital realm.
                </p>
                <p className='leading-loose text-black/60'>
                  Advika Cloud envisions a digital landscape where web hosting
                  is not just a service but an experience. We aspire to be the
                  catalysts behind our clients&apos; online success stories,
                  empowering them with the tools and support needed to achieve
                  their goals.
                </p>

                <h3 className='pt-3 text-3xl font-bold uppercase leading-normal text-primary'>
                  OUR APPROACH
                </h3>
                <p className='leading-loose text-black/60'>
                  <b>Customer-Centric Philosophy:</b> We believe in forging
                  lasting relationships with our clients. Our customer-centric
                  approach means we listen attentively, understand thoroughly,
                  and provide tailored solutions that exceed expectations.
                </p>
                <p className='leading-loose text-black/60'>
                  <b>Innovation and Adaptability: </b> Innovation is ingrained
                  in our DNA. We continually evolve our services to embrace the
                  latest technological advancements, ensuring that our clients
                  have access to the best-in-class hosting solutions.
                </p>
              </div>
            </div>
          </div>
          <div className='w-full md:col-span-6 md:w-auto'>
            <div className='flex w-full justify-center overflow-hidden bg-black/5'>
              <Image
                src={`/images/about-us.png`}
                alt={`about-us`}
                width={600}
                height={600}
                className={`'aspect-squares h-auto w-full`}
                data-alt="<a href='https://www.freepik.com/free-photo/woman-scrolling-laptop_28096252.htm'>www.freepik.com</a>"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
