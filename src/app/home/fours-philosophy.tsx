import Image from "next/image";

export default function HomeFourSPhilosophy() {
  return (
    <section className="border-t">
      <div className="container py-24">
        <h2 className="text-5xl text-primary text-center font-semibold">
          Our 4&apos;S Philosophy
        </h2>
        <div className="grid grid-cols-4 gap-9 mt-16">
          <div className="p-11 border hover:bg-primary hover:text-white duration-200 cursor-pointer">
            <Image
              src={"/svg/availability.svg"}
              alt="Availability"
              width={120}
              height={120}
            />
            <h3 className="text-3xl font-semibold mt-4">Availability</h3>
            <p className="uppercase mt-2">of the networks.</p>
          </div>
          <div className="p-11 border hover:bg-primary hover:text-white duration-200 cursor-pointer">
            <Image
              src={"/svg/adaptability.svg"}
              alt="Adaptability"
              width={120}
              height={120}
            />
            <h3 className="text-3xl font-semibold mt-4">Adaptability</h3>
            <p className="uppercase mt-2">to meet customer&apos;s demands.</p>
          </div>
          <div className="p-11 border hover:bg-primary hover:text-white duration-200 cursor-pointer">
            <Image
              src={"/svg/acceptability.svg"}
              alt="Acceptability"
              width={120}
              height={120}
            />
            <h3 className="text-3xl font-semibold mt-4">Acceptability</h3>
            <p className="uppercase mt-2">to preferred uptime.</p>
          </div>
          <div className="p-11 border hover:bg-primary hover:text-white duration-200 cursor-pointer">
            <Image
              src={"/svg/affordability.svg"}
              alt="Affordability"
              width={120}
              height={120}
            />
            <h3 className="text-3xl font-semibold mt-4">Affordability</h3>
            <p className="uppercase mt-2">for customers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
