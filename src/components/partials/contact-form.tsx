import Image from "next/image";
import { Button } from "../ui/button";

export default function ContactForm() {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container">
        <h2 className="text-6xl font-semibold text-center leading-snug capitalize">
          Do you have a query?
        </h2>
        <h2 className="text-6xl font-semibold text-center leading-snug text-secondary">
          Book a Call
        </h2>

        <div className="grid grid-cols-2 gap-16 mt-12">
          <div className="bg-white rounded-lg overflow-hidden">
            <Image
              src={"/images/sales-agent.png"}
              alt="Sales Agent"
              className="size-full object-cover"
              width={600}
              height={500}
            />
          </div>
          <div className="grid gap-5">
            <input
              type="text"
              className="bg-white/10 py-6 px-8 rounded-lg font-medium placeholder:text-white"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="bg-white/10 py-6 px-8 rounded-lg font-medium placeholder:text-white"
              placeholder="Email"
            />
            <div className="grid grid-cols-2 gap-5">
              <input
                type="tel"
                className="bg-white/10 py-6 px-8 rounded-lg font-medium placeholder:text-white"
                placeholder="Phone"
              />
              <input
                type="url"
                className="bg-white/10 py-6 px-8 rounded-lg font-medium placeholder:text-white"
                placeholder="Website"
              />
            </div>
            <textarea
              className="bg-white/10 py-6 px-8 rounded-lg font-medium placeholder:text-white resize-none"
              rows={5}
              placeholder="Message"
            ></textarea>
            <div className="flex justify-end">
              <Button variant={"white"} size={"lg"} className="uppercase">
                Book Now
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-4xl font-semibold leading-loose">
            For further queries
          </h3>
          <p className="text-2xl font-semibold">
            please get in touch with your dedicated account manager or reach out
            to us on
          </p>
          <div className="flex items-center gap-5 font-medium mt-7 text-2xl">
            <span className="flex items-center gap-2">
              <Image
                src={"/svg/phone.svg"}
                alt="Advika Facebook"
                className="size-6"
                width={40}
                height={40}
              />
              +91-98283-68878
            </span>
            <span className="h-6 bg-white w-px"></span>
            <span className="flex items-center gap-2">
              <Image
                src={"/svg/mail.svg"}
                alt="Advika Facebook"
                className="size-6"
                width={40}
                height={40}
              />
              sales@advika.cloud
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
