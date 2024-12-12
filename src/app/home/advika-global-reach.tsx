import { CheckIcon } from "lucide-react";
import Image from "next/image";
const stats =[
  {
    value:'12+',
    tagline:'Cities globally'
  },
  {
    value:'50+',
    tagline:'Cities Nationally'
  },
  {
    value:'24+',
    tagline:'Years of Excellence'
  },
]
export default function AdvikaGlobalReach() {
  return (
    <section className="bg-black/5 pt-10 lg:py-16 2xl:pt-24 2xl:pb-20">
      <div className="container">
        <div className="flex flex-col lg:grid lg:grid-cols-2">
          <div className="border-black/10 lg:border-r pb-5 lg:pb-0 lg:pr-10">
            <h2 className="text-3xl lg:text-5xl leading-normal lg:leading-normal font-bold text-primary">
              Advika&apos;s Technological Superiority
            </h2>
          </div>
          <div className="text-black/60 font-medium leading-loose space-y-5 lg:pl-12">
            <p>
              We are the pioneers in Cloud Server and Dedicated Server services
              in India, offering highly affordable and reliable server solutions
              to our customers. Here are some key highlights of our presence and
              achievements.
            </p>
            <ul className="space-y-3 font-normal">
              <li className="relative pl-10">
                <span className="bg-secondary inline-flex size-6 justify-center items-center rounded text-white absolute left-0 top-1">
                  <CheckIcon className="size-4" strokeWidth="3" />
                </span>
                Fastest-growing server provider with over 5,000 trusted and
                satisfied subscribers
              </li>
              <li className="relative pl-10">
                <span className="bg-secondary inline-flex size-6 justify-center items-center rounded text-white absolute left-0 top-1">
                  <CheckIcon className="size-4" strokeWidth="3" />
                </span>
                Strong presence across 50 cities nationally and 12 international
                cities
              </li>
            </ul>
          </div>
        </div>

        <div className="relative flex justify-center items-center min-h-96 lg:min-h-0 overflow-hidden">
          <Image
            src={"/images/advika-map-vector.svg"}
            alt="Advika Global Reach"
            className="mt-10 hidden lg:block w-full"
            width={1400}
            height={800}
          />
          <Image
            src={"/images/advika-map-mobile-vector.svg"}
            alt="Advika Global Reach"
            className="mt-5 lg:hidden md:h-auto md:w-full md:max-w-full object-cover h-full max-w-xl"
            width={1024}
            height={630}
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="max-w-md mr-auto pl-5 md:pl-20 lg:ml-72 flex flex-wrap lg:flex-nowrap gap-2 lg:gap-5 justify-center">

{stats.map((item,index)=>
 <div key={index} className="bg-white rounded-md shadow-2 gap-1 p-3 lg:p-5 w-24 lg:w-40 flex flex-col items-center justify-center">
 <h3 className="text-primary font-bold text-2xl lg:text-4xl text-center">{item.value}</h3>
 <p className="text-[10px] lg:text-sm text-center text-black/50 uppercase font-semibold">{item.tagline}</p>
</div>
)}

           
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
