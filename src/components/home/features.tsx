import { Cloudgearicon, Mailenvelopicon, Targeticon } from '@/icons';
const features = [
  {
    icon: <Cloudgearicon className='w-10 lg:w-14' />,
    name: 'Custom Solutions',
    tagline:
      'With Advika Cloud Simplify, Streamline, and Accelerate Your Business',
    active: false,
  },
  {
    icon: <Mailenvelopicon className='w-10 lg:w-14' />,
    name: 'Get Quick',
    tagline:
      '24x7 dedicated network operation center to resolve all your queries or issues',
    active: true,
  },
  {
    icon: <Targeticon className='w-10 lg:w-14' />,
    name: 'Futuristic Approach',
    tagline:
      'Prioritizing digital transformation and technological advancement',
    active: false,
  },
];

export default function HomeFeatures() {
  return (
    <section className='bg-white py-16 2xl:py-32'>
      <div className='container'>
        <div className='max-w-full overflow-auto pb-3 lg:overflow-visible lg:pb-0'>
          <div className='grid min-w-[750px] grid-cols-3 gap-5 lg:gap-10'>
            {features.map((item, index) => (
              <div
                key={index}
                className={`space-y-3 p-5 lg:space-y-5 xl:p-10 2xl:p-16 ${item.active ? 'bg-primary text-white' : 'bg-black/5'}`}
              >
                <div
                  className={`flex size-14 items-center justify-center lg:size-20 ${item.active ? 'text-white' : 'text-primary'}`}
                >
                  {item.icon}
                </div>
                <div className='space-y-2'>
                  <h2
                    className={`text-lg font-semibold uppercase lg:text-xl ${item.active ? 'text-white' : 'text-primary'}`}
                  >
                    {item.name}
                  </h2>
                  <p
                    className={`text-sm lg:text-base ${item.active ? 'text-white/60' : 'text-black/60'}`}
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
