import { Cloudgearicon, Mailenvelopicon, Targeticon } from "@/icons";
const features = [
  {
    icon: <Cloudgearicon className="w-10 lg:w-14" />,
    name: 'Custom Solutions',
    tagline: 'With Advika Cloud Simplify, Streamline, and Accelerate Your Business',
    active: false
  },
  {
    icon: <Mailenvelopicon className="w-10 lg:w-14" />,
    name: 'Get Quick',
    tagline: '24x7 dedicated network operation center to resolve all your queries or issues',
    active: true
  },
  {
    icon: <Targeticon className="w-10 lg:w-14" />,
    name: 'Futuristic Approach',
    tagline: 'Prioritizing digital transformation and technological advancement',
    active: false
  },
]

export default function HomeFeatures() {
  return (
    <section className="bg-white py-16 2xl:py-32">
      <div className="container">
        <div className="max-w-full pb-3 lg:pb-0 overflow-auto lg:overflow-visible">
          <div className="grid grid-cols-3 gap-5 lg:gap-10 min-w-[750px]">
            {features.map((item, index) =>
              <div key={index} className={`p-5 xl:p-10 2xl:p-16 space-y-3 lg:space-y-5  ${item.active ? 'bg-primary text-white' : ' bg-black/5'}`}>
                <div className={`size-14 lg:size-20 flex justify-center items-center ${item.active ? 'text-white' : 'text-primary'}`} >
                  {item.icon}</div>
                <div className="space-y-2">
                  <h2 className={`text-lg lg:text-xl font-semibold uppercase ${item.active ? 'text-white' : 'text-primary'}`}>{item.name}</h2>
                  <p className={`text-sm lg:text-base ${item.active ? 'text-white/60' : 'text-black/60'}`}>
                    {item.tagline}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
