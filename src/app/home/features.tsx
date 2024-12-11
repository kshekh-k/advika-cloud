import { Cloudgearicon, Mailenvelopicon, Targeticon } from "@/icons";
import Image from "next/image";
const features = [
  {   
    icon:<Cloudgearicon className="w-14" />,
     name:'Custom Solutions',
    tagline:'With Advika Cloud Simplify, Streamline, and Accelerate Your Business',
    active:false
  },
  {   
    icon:<Mailenvelopicon className="w-14" />,
     name:'Get Quick',
    tagline:'24x7 dedicated network operation center to resolve all your queries or issues',
    active:true
  },
  {   
    icon:<Targeticon className="w-14" />,
     name:'Futuristic Approach',
    tagline:'Prioritizing digital transformation and technological advancement',
    active:false
  },
]

export default function HomeFeatures() {
  return (
    <section className="bg-white py-32">
      <div className="container">
         <div className="grid grid-cols-3 gap-8">
          {features.map((item, index)=>
          <div key={index} className={`p-16 space-y-5  ${item.active ? 'bg-primary text-white' : ' bg-black/5'}`}>
            <div className={`size-20 flex justify-center items-center ${item.active ? 'text-white' : 'text-primary'}`} >
            {item.icon}</div>
            <div className="space-y-2">
            <h2 className={`text-xl font-semibold uppercase ${item.active ? 'text-white' : 'text-primary'}`}>{item.name}</h2>
            <p className={`${item.active ? 'text-white/60' : 'text-black/60'}`}>
              {item.tagline}
            </p>
          </div>
          </div>
           )}
        </div>
      </div>
    </section>
  );
}
