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
    <section className="bg-black/5 pt-24 pb-20">
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="border-r pr-10">
            <h2 className="text-5xl leading-normal font-bold text-primary">
              Advika&apos;s Technological Superiority
            </h2>
          </div>
          <div className="text-black/60 font-medium leading-loose space-y-5 pl-12">
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

        <div className="relative flex items-center">
          <Image
            src={"/images/advika-map-vector.svg"}
            alt="Advika Global Reach"
            className="mt-12"
            width={1400}
            height={800}
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="max-w-md mr-auto ml-72 flex gap-5 justify-center">

{stats.map((item,index)=>
 <div key={index} className="bg-white rounded-md shadow-2 gap-1 p-5 w-40 flex flex-col items-center justify-center">
 <h3 className="text-primary font-bold text-4xl text-center">{item.value}</h3>
 <p className="text-center text-black/50 uppercase font-semibold text-sm">{item.tagline}</p>
</div>
)}

           
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
