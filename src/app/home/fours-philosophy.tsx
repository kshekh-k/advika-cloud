import { Acceptabilityicon, Adaptabilityicon, Affordabilityicon, Availabilityicon } from "@/icons";
import Image from "next/image";
const philosophy = [
  {
    icon:<Availabilityicon className="size-24" />,
    name:'Availability',
    tagline:'of the networks.'
  },
  {
    icon:<Adaptabilityicon className="size-24" />,
    name:'Adaptability',
    tagline:'to meet customers demands.',
    active:true
  },
  {
    icon:<Acceptabilityicon className="size-24" />,
    name:'Acceptability',
    tagline:'to preferred uptime.'
  },
  {
    icon:<Affordabilityicon className="size-24" />,
    name:'Affordability',
    tagline:'for customers.'
  },
]
export default function HomeFourSPhilosophy() {
  return (
    <section className="">
      <div className="container py-24">
        <h2 className="text-5xl text-primary text-center font-bold">
          Our 4&apos;S Philosophy
        </h2>
        <div className="grid grid-cols-4 gap-8 mt-16">
        {philosophy.map((item,index)=>
        <div className={`p-11 space-y-5 ${item.active ? 'bg-primary' : 'bg-black/5'}`}>
         <div className="size-28 flex justify-center items-center">
          {item.icon}
         </div>
         <div className="space-y-2">
        <h3 className={`text-xl font-semibold uppercase cursor-pointer ${item.active ? 'text-white' : 'text-primary'}`}>{item.name}</h3>
        <p className={`cursor-pointer uppercase font-medium text-sm ${item.active ? 'text-white/60' : 'text-black/60 '}`}>{item.tagline}</p>
        </div>
      </div>
          )}



          
         
        </div>
      </div>
    </section>
  );
}
