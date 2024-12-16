import { Acceptabilityicon, Adaptabilityicon, Affordabilityicon, Availabilityicon } from "@/icons";
const philosophy = [
  {
    icon: <Availabilityicon className="size-16 lg:size-24" />,
    name: 'Availability',
    tagline: 'of the networks.'
  },
  {
    icon: <Adaptabilityicon className="size-16 lg:size-24" />,
    name: 'Adaptability',
    tagline: 'to meet customers demands.',
    active: true
  },
  {
    icon: <Acceptabilityicon className="size-16 lg:size-24" />,
    name: 'Acceptability',
    tagline: 'to preferred uptime.'
  },
  {
    icon: <Affordabilityicon className="size-16 lg:size-24" />,
    name: 'Affordability',
    tagline: 'for customers.'
  },
]
export default function HomeFourSPhilosophy() {
  return (
    <section className="py-10 lg:py-16 2xl:py-24">
      <div className="container">
        <h2 className="text-3xl lg:text-5xl text-primary text-center font-bold">
          Our 4&apos;S Philosophy
        </h2>
        <div className="max-w-full pb-3 lg:pb-0 overflow-auto lg:overflow-visible pt-8 xl:mt-16">
          <div className="grid grid-cols-4 gap-5 xl:gap-10 min-w-[1023px] lg:min-w-0 max-w-full">
            {philosophy.map((item, index) =>
              <div key={index} className={`p-5 2xl:p-12 space-y-3 lg:space-y-5 ${item.active ? 'bg-primary' : 'bg-black/5'}`}>
                <div className="size-20 lg:size-28 flex justify-center items-center">
                  {item.icon}
                </div>
                <div className="space-y-1 lg:space-y-2">
                  <h3 className={`text-lg lg:text-xl font-semibold uppercase cursor-pointer ${item.active ? 'text-white' : 'text-primary'}`}>{item.name}</h3>
                  <p className={`cursor-pointer uppercase font-medium text-[10px] lg:text-sm ${item.active ? 'text-white/60' : 'text-black/60 '}`}>{item.tagline}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
