import Image from "next/image";

export default function HomeAchievements() {
  return (
    <section className="bg-light py-20">
      <div className="container">
        <h2 className="text-6xl font-semibold text-primary text-center capitalize">
          Our Achievements
        </h2>
        <div className="grid grid-cols-2 gap-12 mt-16">
          <div>
            <div className="flex items-center gap-8">
              <h2 className="text-primary font-semibold text-2xl">
                Certificates
              </h2>
              <hr className="grow" />
            </div>
            <div className="flex justify-between mt-12">
              <div className="bg-white p-4 shadow-lg">
                <Image
                  src={"/images/certificate-1.png"}
                  alt="Certificate 1"
                  width={130}
                  height={180}
                />
              </div>
              <div className="bg-white p-4 shadow-lg">
                <Image
                  src={"/images/certificate-2.png"}
                  alt="Certificate 1"
                  width={130}
                  height={180}
                />
              </div>
              <div className="bg-white p-4 shadow-lg">
                <Image
                  src={"/images/certificate-3.png"}
                  alt="Certificate 1"
                  width={130}
                  height={180}
                />
              </div>
              <div className="bg-white p-4 shadow-lg">
                <Image
                  src={"/images/certificate-4.png"}
                  alt="Certificate 1"
                  width={130}
                  height={180}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-8">
              <h2 className="text-primary font-semibold text-2xl">Awards</h2>
              <hr className="grow" />
            </div>
            <div className="flex justify-between gap-6 mt-12">
              <div className="bg-white aspect-square grow shadow-lg flex items-center justify-center">
                <div className="bg-light rounded-full p-2">
                  <Image
                    src={"/images/achievement-1.png"}
                    alt="Certificate 1"
                    width={160}
                    height={160}
                  />
                </div>
              </div>
              <div className="bg-white aspect-square grow shadow-lg flex items-center justify-center">
                <div className="bg-light rounded-full p-2">
                  <Image
                    src={"/images/achievement-2.png"}
                    alt="Certificate 1"
                    width={160}
                    height={160}
                  />
                </div>
              </div>
              <div className="bg-white aspect-square grow shadow-lg flex items-center justify-center">
                <div className="bg-light rounded-full p-2">
                  <Image
                    src={"/images/achievement-3.png"}
                    alt="Certificate 1"
                    width={160}
                    height={160}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-6xl font-semibold text-primary text-center capitalize mt-32">
          We Partner with the best
        </h2>

        <div className="mt-16">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-8">
                <h2 className="text-primary font-semibold text-2xl">
                  Technology Partners
                </h2>
                <hr className="grow" />
              </div>
              <div className="flex gap-4 flex-wrap mt-12">
                <div className="bg-white border rounded-lg h-20 w-40 flex items-center justify-center shrink-0">
                  <Image
                    src={"/images/cpanel.png"}
                    alt="cPanel"
                    width={100}
                    height={40}
                  />
                </div>
                <div className="bg-white border rounded-lg h-20 w-40 flex items-center justify-center shrink-0">
                  <Image
                    src={"/images/plesk.png"}
                    alt="Plesk"
                    width={100}
                    height={40}
                  />
                </div>
                <div className="bg-white border rounded-lg h-20 w-40 flex items-center justify-center shrink-0">
                  <Image
                    src={"/images/virtualizor.png"}
                    alt="Virtualizor"
                    width={100}
                    height={40}
                  />
                </div>
                <div className="bg-white border rounded-lg h-20 w-40 flex items-center justify-center shrink-0">
                  <Image
                    src={"/images/webuzo.png"}
                    alt="Webuzo"
                    width={100}
                    height={40}
                  />
                </div>
                <div className="bg-white border rounded-lg h-20 w-40 flex items-center justify-center shrink-0">
                  <Image
                    src={"/images/softaculous.png"}
                    alt="Softaculous"
                    width={100}
                    height={40}
                  />
                </div>
                <div className="bg-white border rounded-lg h-20 w-40 flex items-center justify-center shrink-0">
                  <Image
                    src={"/images/immunify.png"}
                    alt="Imunify"
                    width={100}
                    height={40}
                  />
                </div>
                <div className="bg-white border rounded-lg h-20 w-40 flex items-center justify-center shrink-0">
                  <Image
                    src={"/images/solid-cp.png"}
                    alt="Solid CP"
                    width={100}
                    height={40}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-8">
                <h2 className="text-primary font-semibold text-2xl">
                  Internet Partners
                </h2>
                <hr className="grow" />
              </div>
              <div className="flex gap-4 flex-wrap mt-12">
                <div className="bg-white border rounded-lg h-20 w-40 flex items-center justify-center shrink-0">
                  <Image
                    src={"/images/act-fibernet.png"}
                    alt="ACT Fibernet"
                    width={100}
                    height={40}
                  />
                </div>
                <div className="bg-white border rounded-lg h-20 w-40 flex items-center justify-center shrink-0">
                  <Image
                    src={"/images/tata.png"}
                    alt="Tata Group"
                    width={100}
                    height={40}
                  />
                </div>
                <div className="bg-white border rounded-lg h-20 w-40 flex items-center justify-center shrink-0">
                  <Image
                    src={"/images/sify.png"}
                    alt="Sify"
                    width={100}
                    height={40}
                  />
                </div>
                <div className="bg-white border rounded-lg h-20 w-40 flex items-center justify-center shrink-0">
                  <Image
                    src={"/images/ishan.png"}
                    alt="Ishan"
                    width={100}
                    height={40}
                  />
                </div>
                <div className="bg-white border rounded-lg h-20 w-40 flex items-center justify-center shrink-0">
                  <Image
                    src={"/images/spider-link.png"}
                    alt="Spider Link"
                    width={100}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24 relative flex flex-col">
            <hr className="absolute top-1/2 w-full" />
            <h2 className="text-primary font-semibold text-2xl text-center bg-light px-10 relative z-10 self-center">
              Hardware Partners
            </h2>
          </div>
          <div className="grid grid-cols-6 gap-8 mt-12">
            <div className="bg-white border rounded-lg h-28 flex items-center justify-center">
              <Image
                src={"/images/amd.png"}
                alt="AMD"
                width={180}
                height={40}
              />
            </div>
            <div className="bg-white border rounded-lg h-28 flex items-center justify-center">
              <Image
                src={"/images/intel.png"}
                alt="Intel"
                width={120}
                height={40}
              />
            </div>
            <div className="bg-white border rounded-lg h-28 flex items-center justify-center">
              <Image
                src={"/images/asus.png"}
                alt="Asus"
                width={160}
                height={40}
              />
            </div>
            <div className="bg-white border rounded-lg h-28 flex items-center justify-center">
              <Image
                src={"/images/synology.png"}
                alt="Synology"
                width={180}
                height={40}
              />
            </div>
            <div className="bg-white border rounded-lg h-28 flex items-center justify-center">
              <Image src={"/images/hp.png"} alt="HP" width={60} height={60} />
            </div>
            <div className="bg-white border rounded-lg h-28 flex items-center justify-center">
              <Image
                src={"/images/lenovo.png"}
                alt="Lenovo"
                width={180}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
