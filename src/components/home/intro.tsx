import { Button } from '@/components/ui/button';
import Image from 'next/image';

type Props = {
  onContactClick: () => void;
};
export default function HomeIntro({ onContactClick }: Props) {
  return (
    <>
      <section className='relative flex flex-1 items-center overflow-hidden bg-primary text-white lg:min-h-[calc(100vh-135px)]'>
        {/* Intro */}
        <div className='absolute inset-0 flex items-center justify-end'>
          <div className='relative hidden lg:-right-[10%] lg:flex xl:-right-[17%] 2xl:-right-[10%]'>
            <Image
              src={'/images/intro-bg-gradient.png'}
              alt='Gradient Circle'
              width={1200}
              height={1200}
              className='w-[700px] xl:size-[900px] 2xl:size-[1200px]'
            />
            <div className='absolute inset-0 flex items-center justify-center'>
              <Image
                src={'/images/cloud-servers.png'}
                alt='Cloud Server'
                width={593}
                height={748}
                className='h-auto w-[300px] xl:w-[400px] 2xl:w-[500px]'
              />
            </div>
          </div>
        </div>
        <div className='container relative py-16'>
          <div className='lg:w-1/2 lg:max-w-[550px]'>
            <h1 className='text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl md:leading-tight lg:text-left'>
              Elevate Business with{' '}
              <span className='text-secondary'>Premium</span> Cloud Server
              Solutions!
            </h1>
            <p className='mt-4 text-center leading-loose text-white/60 lg:text-left'>
              Our scalable services grow with your business, ensuring seamless
              support, robust security, and reliable backups. Discover our Cloud
              Server Solutions today!
            </p>
            <div className='mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start'>
              <Button
                variant={'white'}
                size={'lg'}
                onClick={onContactClick}
                className='text-lg font-semibold uppercase duration-200 ease-in-out hover:bg-secondary hover:text-white'
              >
                Book A Call
              </Button>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
