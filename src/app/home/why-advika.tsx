import { Button } from "@/components/ui/button";
import { Badgeicon, Clockicon, Cloudupicon, Companyicon, Globeicon, Staricon } from "@/icons"; 
import Image from "next/image";
const stats = [
  {
    icon:<Companyicon className="size-10 xl:size-14" />,
    value:'15000+',
    tagline:'Trusted EB Customers',
    border:'lg:border-b'
  },
  {
    icon:<Globeicon className="size-10 xl:size-14" />,
    value:'1000+',
    tagline:'Global reach',
     border:'lg:border-b lg:border-l'
  },
  {
    icon:<Clockicon className="size-10 xl:size-14" />,
    value:'24x7',
    tagline:'Customer Support',
     border:'lg:border-b lg:border-l'
  },
  {
    icon:<Staricon className="size-10 xl:size-14" />,
    value:'4.5',
    tagline:'Ratings at Google',
     border:'lg:border-l-0'
  },
  {
    icon:<Cloudupicon className="size-10 xl:size-14" />,
    value:'99.9%',
    tagline:'Uptime & Availablity',
     border:'lg:border-l'
  },
  {
    icon:<Badgeicon className="size-10 xl:size-14" />,
    value:'30+',
    tagline:'Awards & Recognitions',
    border:'lg:border-l'
  },
]
type Props = {
  onContactClick: () => void;
};
export default function HomeWhyAdvika({ onContactClick }: Props) {
  return (
    <section className="bg-primary text-white ">
      <div className="py-10 lg:py-16 2xl:py-24 relative overflow-hidden">
      
        <Image
          src={"/images/mesh-1.png"}
          alt="Mesh"
          className="absolute inset-0 max-w-none"
          width={1900}
          height={400}
        />
          <div className="container relative">
          <h2 className="text-3xl lg:text-5xl leading-normal font-bold text-secondary ">
            Why Advika
          <span className="text-white block">           
            Explore Our Impressive Stats! 
            </span>
          </h2>

          <Button variant={"white"} size={"lg"} onClick={onContactClick} className="uppercase mt-5 lg:mt-10 hover:text-white hover:bg-secondary ease-in-out duration-200">
            Book a Call
          </Button>
        </div>
      </div>
      <hr className="border-white/10" />
      <div className="container">
      <div className="max-w-full overflow-auto lg:overflow-visible">
        <div className="flex lg:grid lg:grid-cols-3 lg:border-x lg:border-white/10 min-w-[750px] divide-x divide-white/10">
          {stats.map((item,index)=>
          <div key={index} className={`w-[300px] lg:w-auto shrink-0 flex items-center gap-5 xl:gap-10 py-10 lg:py-14 xl:py-20 border-white/10 justify-center ${item.border}`}>
            <div className="rounded-full shrink-0 size-16 xl:size-24 bg-secondary flex items-center justify-center text-white">
              {item.icon}
            </div>
            <div className="space-y-1">
              <h2 className="text-3xl xl:text-5xl font-semibold leading-none xl:leading-none">
              {item.value}
              </h2>
              <p className="tracking-wider uppercase text-sm leading-none"> {item.tagline}</p>
            </div>
          </div>
         )}
        </div>
        </div>
      </div>
    </section>
  );
}
