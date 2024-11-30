import Image from "next/image";

export default function HomeFeatures() {
  return (
    <section className="bg-white py-32">
      <div className="container">
        {/* <h2 className="text-4xl font-semibold text-center capitalize">
            Over 15000+ Enterprises trust on us
          </h2>
          <div className="flex items-center justify-between mt-12">
            <Image
              src={"/svg/partners/infosys.svg"}
              alt="Infosys"
              width={101}
              height={39}
            />
            <Image
              src={"/svg/partners/axis-bank.svg"}
              alt="Axis Bank"
              width={135}
              height={35}
            />
            <Image
              src={"/svg/partners/itc.svg"}
              alt="ITC"
              width={44}
              height={45}
            />
            <Image
              src={"/svg/partners/ntpc.svg"}
              alt="ITC"
              width={94}
              height={46}
            />
            <Image
              src={"/svg/partners/airtel.svg"}
              alt="Airtel"
              width={48}
              height={48}
            />
            <Image
              src={"/svg/partners/google.svg"}
              alt="Google"
              width={126}
              height={41}
            />
            <Image
              src={"/svg/partners/L&T.svg"}
              alt="L&T"
              width={43}
              height={43}
            />
            <Image
              src={"/svg/partners/hcl.svg"}
              alt="HCL Tech"
              width={148}
              height={27}
            />
            <Image
              src={"/svg/partners/tata.svg"}
              alt="Tata"
              width={44}
              height={38}
            />
          </div> */}

        <div className="grid grid-cols-3">
          <div className="p-12 border">
            <Image
              src={"/svg/cloud-gear.svg"}
              alt="Cloud Gear"
              width={69}
              height={65}
            />
            <h2 className="text-4xl font-semibold mt-4">Custom Solutions</h2>
            <p className="text-black/60 mt-2">
              Experience unparalleled speed, reliability, and security with our
              .
            </p>
          </div>
          <div className="p-12 bg-primary text-white">
            <Image
              src={"/svg/mail-envelop.svg"}
              alt="Cloud Gear"
              width={69}
              height={65}
            />
            <h2 className="text-4xl font-semibold mt-4">Get Quick</h2>
            <p className="text-white/70 mt-2">
              Experience unparalleled speed, reliability, and security with our
              .
            </p>
          </div>
          <div className="p-12 border">
            <Image
              src={"/svg/target.svg"}
              alt="Cloud Gear"
              width={69}
              height={65}
            />
            <h2 className="text-4xl font-semibold mt-4">Futuristic Approach</h2>
            <p className="text-black/60 mt-2">
              Experience unparalleled speed, reliability, and security with our
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
