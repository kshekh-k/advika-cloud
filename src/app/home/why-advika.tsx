import { Button } from "@/components/ui/button";
import { Badgeicon, Clockicon, Cloudupicon, Companyicon, Globeicon, Staricon } from "@/icons"; 
import Image from "next/image";
const stats = [
  {
    icon:<Companyicon className="size-14" />,
    value:'15000+',
    tagline:'Trusted EB Customers',
    border:'border-b'
  },
  {
    icon:<Globeicon className="size-14" />,
    value:'1000+',
    tagline:'Global reach',
     border:'border-b border-l'
  },
  {
    icon:<Clockicon className="size-14" />,
    value:'24x7',
    tagline:'Customer Support',
     border:'border-b border-l'
  },
  {
    icon:<Staricon className="size-14" />,
    value:'4.5',
    tagline:'Ratings at Google',
    
  },
  {
    icon:<Cloudupicon className="size-14" />,
    value:'99.9%',
    tagline:'Uptime & Availablity',
     border:'border-l'
  },
  {
    icon:<Badgeicon className="size-14" />,
    value:'30+',
    tagline:'Awards & Recognitions',
    border:'border-l'
  },
]
export default function HomeWhyAdvika() {
  return (
    <section className="bg-primary text-white ">
      <div className="py-20 relative overflow-hidden">
      
        <Image
          src={"/images/mesh-1.png"}
          alt="Mesh"
          className="absolute inset-0 max-w-none"
          width={1900}
          height={400}
        />
          <div className="container relative">
          <h2 className="text-5xl leading-normal font-bold text-secondary ">
            Why Advika
          <span className="text-white block">           
            Explore Our Impressive Stats! 
            </span>
          </h2>

          <Button variant={"white"} size={"lg"} className="uppercase mt-10 hover:text-white hover:bg-secondary ease-in-out duration-200">
            Book a Call
          </Button>
        </div>
      </div>
      <hr className="border-white/10" />
      <div className="container">
        <div className="grid grid-cols-3 border-x border-white/10">
          {stats.map((item,index)=>
          <div key={index} className={`flex items-center gap-8 py-20 border-white/10 justify-center ${item.border}`}>
            <div className="rounded-full size-24 bg-secondary flex items-center justify-center text-white">
              {item.icon}
            </div>
            <div className="space-y-1">
              <h2 className="text-5xl font-semibold leading-none">
              {item.value}
              </h2>
              <p className="tracking-wider uppercase text-sm leading-none"> {item.tagline}</p>
            </div>
          </div>
         )}
        </div>
      </div>
    </section>
  );
}
