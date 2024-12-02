import Image from "next/image";
import { Button } from "../ui/button";

export default function ContactForm() {
  return (
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
  );
}
