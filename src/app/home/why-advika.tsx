import { Button } from "@/components/ui/button";
import Image from "next/image";

type Props = {
  onContactClick: () => void;
};
export default function HomeWhyAdvika({ onContactClick }: Props) {
  return (
    <section className="bg-primary text-white pb-20">
      <div className="py-20 relative overflow-hidden">
        <div className="container relative z-10">
          <h2 className="text-6xl font-semibold text-secondary leading-tight">
            Why Advika
          </h2>
          <h3 className="text-6xl font-semibold leading-tight">
            Explore Our Impressive Stats!
          </h3>

          <Button
            variant={"white"}
            size={"lg"}
            className="uppercase mt-10"
            onClick={onContactClick}
          >
            Book a Call
          </Button>
        </div>
        <Image
          src={"/images/mesh-1.png"}
          alt="Mesh"
          className="absolute inset-0 max-w-none"
          width={1900}
          height={400}
        />
      </div>
      <hr className="border-white/10" />
      <div className="container">
        <div className="grid grid-cols-3">
          <div className="flex items-center gap-8 py-20">
            <div className="rounded-full size-24 bg-secondary flex items-center justify-center">
              <Image
                src={"/svg/company.svg"}
                alt="Cloud"
                width={60}
                height={60}
              />
            </div>
            <div>
              <h2 className="text-5xl font-semibold">15,000+</h2>
              <p className="font-medium">Trusted Customers</p>
            </div>
          </div>
          <div className="flex items-center gap-8 py-20">
            <div className="rounded-full size-24 bg-secondary flex items-center justify-center">
              <Image
                src={"/svg/globe.svg"}
                alt="Cloud"
                width={60}
                height={60}
              />
            </div>
            <div>
              <h2 className="text-5xl font-semibold">1,000+</h2>
              <p className="font-medium">Global Reach</p>
            </div>
          </div>
          <div className="flex items-center gap-8 py-20">
            <div className="rounded-full size-24 bg-secondary flex items-center justify-center">
              <Image
                src={"/svg/clock.svg"}
                alt="Cloud"
                width={60}
                height={60}
              />
            </div>
            <div>
              <h2 className="text-5xl font-semibold">24x7</h2>
              <p className="font-medium">Customer Support</p>
            </div>
          </div>
          <div className="flex items-center gap-8 py-20">
            <div className="rounded-full size-24 bg-secondary flex items-center justify-center">
              <Image src={"/svg/star.svg"} alt="Cloud" width={60} height={60} />
            </div>
            <div>
              <h2 className="text-5xl font-semibold">4.5</h2>
              <p className="font-medium">Rating at Google</p>
            </div>
          </div>
          <div className="flex items-center gap-8 py-20">
            <div className="rounded-full size-24 bg-secondary flex items-center justify-center">
              <Image
                src={"/svg/cloud-up.svg"}
                alt="Cloud"
                width={60}
                height={60}
              />
            </div>
            <div>
              <h2 className="text-5xl font-semibold">99.99%</h2>
              <p className="font-medium">Uptime and Availability</p>
            </div>
          </div>
          <div className="flex items-center gap-8 py-20">
            <div className="rounded-full size-24 bg-secondary flex items-center justify-center">
              <Image
                src={"/svg/badge.svg"}
                alt="Cloud"
                width={40}
                height={40}
              />
            </div>
            <div>
              <h2 className="text-5xl font-semibold">30+</h2>
              <p className="font-medium">Awards and Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
