import {
  Acceptabilityicon,
  Adaptabilityicon,
  Affordabilityicon,
  Availabilityicon,
} from '@/icons';
const philosophy = [
  {
    icon: <Availabilityicon className='size-16 lg:size-24' />,
    name: 'Availability',
    tagline: 'of the networks.',
  },
  {
    icon: <Adaptabilityicon className='size-16 lg:size-24' />,
    name: 'Adaptability',
    tagline: 'to meet customers demands.',
    active: true,
  },
  {
    icon: <Acceptabilityicon className='size-16 lg:size-24' />,
    name: 'Acceptability',
    tagline: 'to preferred uptime.',
  },
  {
    icon: <Affordabilityicon className='size-16 lg:size-24' />,
    name: 'Affordability',
    tagline: 'for customers.',
  },
];
export default function HomeFourSPhilosophy() {
  return (
    <section className='py-10 lg:py-16 2xl:py-24'>
      <div className='container'>
        <h2 className='text-center text-3xl font-bold text-primary lg:text-5xl'>
          Our 4&apos;S Philosophy
        </h2>
        <div className='max-w-full overflow-auto pb-3 pt-8 lg:overflow-visible lg:pb-0 xl:mt-16'>
          <div className='grid min-w-[1023px] max-w-full grid-cols-4 gap-5 lg:min-w-0 xl:gap-10'>
            {philosophy.map((item, index) => (
              <div
                key={index}
                className={`space-y-3 p-5 lg:space-y-5 2xl:p-12 ${item.active ? 'bg-primary' : 'bg-black/5'}`}
              >
                <div className='flex size-20 items-center justify-center lg:size-28'>
                  {item.icon}
                </div>
                <div className='space-y-1 lg:space-y-2'>
                  <h3
                    className={`cursor-pointer text-lg font-semibold uppercase lg:text-xl ${item.active ? 'text-white' : 'text-primary'}`}
                  >
                    {item.name}
                  </h3>
                  <p
                    className={`cursor-pointer text-[10px] font-medium uppercase lg:text-sm ${item.active ? 'text-white/60' : 'text-black/60'}`}
                  >
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
