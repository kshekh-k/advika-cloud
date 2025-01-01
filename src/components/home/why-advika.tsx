import { Button } from '@/components/ui/button';
import { stats } from '@/data/stats';
import Image from 'next/image';

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
          <h2 className='text-3xl font-bold leading-normal text-secondary lg:text-5xl lg:leading-normal'>
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
          <div className='flex min-w-[750px] divide-x divide-white/10 lg:grid lg:grid-cols-3 lg:divide-x-0 lg:border-x lg:border-white/10'>
            {stats.map(({ id, icon: Icon, value, tagline }) => (
              <div
                id={`item-${id}`}
                key={`item-${id}`}
                className={`flex w-[300px] shrink-0 items-center justify-center gap-5 border-white/10 py-10 lg:w-auto lg:py-14 xl:gap-10 xl:py-20 ${id == 1 ? 'lg:border-b' : id == 2 ? 'lg:!border-l lg:border-b' : id == 3 ? 'lg:!border-l lg:border-b' : id == 4 ? '' : id == 5 ? 'lg:!border-l' : 'lg:!border-l'}`}
              >
                <div className='flex size-16 shrink-0 items-center justify-center rounded-full bg-secondary text-white xl:size-24'>
                  <Icon className='size-10 xl:size-14' />
                </div>
                <div className='space-y-1'>
                  <h2 className='text-3xl font-semibold leading-none xl:text-5xl xl:leading-none'>
                    {value}
                  </h2>
                  <p className='text-sm uppercase leading-none tracking-wider'>
                    {' '}
                    {tagline}
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
