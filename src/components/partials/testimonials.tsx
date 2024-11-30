import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="container">
      {/* Testimonials */}
      <h2 className="text-6xl font-semibold text-primary text-center">
        What Customers Say?
      </h2>
      <h2 className="text-6xl font-semibold text-black/60 text-center leading-loose">
        Testimonials
      </h2>
      <div className="grid grid-cols-2 gap-10 mt-16">
        <div className="rounded-lg bg-[#002175]/5 p-10">
          <div className="bg-white p-9 rounded-lg border border-[#002175]/50">
            <p className="italic text-black/60 leading-loose text-xl">
              Advika Web Hosting is a reliable and affordable hosting solution
              provider The customer support team is very strong and gives us
              quick solutions. I am using VPS server for more than 7 years.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-8">
            <div className="rounded-full bg-red-300 size-16 outline outline-1 outline-offset-8 outline-black/10 ml-2">
              <Image
                src={
                  "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                className="size-full rounded-full object-cover"
                alt="John Doe"
                width={100}
                height={100}
              />
            </div>
            <div>
              <h4 className="font-semibold">John Doe</h4>
              <p className="text-black/60">CEO, Company Name</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-[#002175]/5 p-10">
          <div className="bg-white p-9 rounded-lg border border-[#002175]/50">
            <p className="italic text-black/60 leading-loose text-xl">
              Advika Web Hosting is a reliable and affordable hosting solution
              provider The customer support team is very strong and gives us
              quick solutions. I am using VPS server for more than 7 years.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-8">
            <div className="rounded-full bg-red-300 size-16 outline outline-1 outline-offset-8 outline-black/10 ml-2">
              <Image
                src={
                  "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                className="size-full rounded-full object-cover"
                alt="John Doe"
                width={100}
                height={100}
              />
            </div>
            <div>
              <h4 className="font-semibold">John Doe</h4>
              <p className="text-black/60">CEO, Company Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
