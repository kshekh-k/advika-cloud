import Image from "next/image";
import Link from "next/link";
const crtfin = [
  {
    crt: '/images/crtfin-iso-9001-2015.png',
    name: 'ISO 9001 : 2015',
    file: '/certificates/ISO-9001-2015.pdf',
    target: '_blank'
  },
  {
    crt: '/images/crtfin-iso-14001-2015.png',
    name: 'ISO 14001 : 2015',
    file: '/certificates/ISO-14001-2015.pdf',
    target: '_blank'
  },
  {
    crt: '/images/crtfin-iso-45001-2018.png',
    name: 'ISO 45001 : 2018',
    file: '/certificates/ISO-45001-2018.pdf',
    target: '_blank'
  },
  {
    crt: '/images/crtfin-iso-iec-27001-2013.png',
    name: 'ISO/IEC 27001 : 2013',
    file: '/certificates/ISO-27001-2013.pdf',
    target: '_blank'
  },
  {
    crt: '/images/crtfin-iso-iec-27017-2015.png',
    name: 'ISO/IEC 27017 : 2015',
    file: '/certificates/ISO-27017-2015.pdf',
    target: '_blank'
  },
  {
    crt: '/images/crtfin-iso-iec-20000-1-2018.png',
    name: 'ISO/IEC 20000-1 : 2018',
    file: '/certificates/ISO-20000-2018.pdf',
    target: '_blank'
  },
  {
    crt: '/images/crtfin-letter-of-empanelment.png',
    name: 'letter of empanelment',
    file: '/certificates/Meity-Letter-of-Empanelment.pdf'
  },
  {
    crt: '/images/crtfin-tier-facility.png',
    name: 'TIER Facility',
    file: '/',
    target: '_self'
  },
  {
    crt: '/images/crtfin-tier-operations.png',
    name: 'TIER Operations',
    file: '/',
    target: '_self'
  },
  {
    crt: '/images/crtfin-yotta-datacenter.png',
    name: 'Yotta data center',
    file: '/',
    target: '_self'
  },
]

const awards = [
  '/images/achievement-1.png',
  '/images/achievement-2.png',
  '/images/achievement-3.png',
]

const techPartners = [
  '/images/cpanel.png',
  '/images/plesk.png',
  '/images/virtualizor.png',
  '/images/webuzo.png',
  '/images/softaculous.png',
  '/images/immunify.png',
  '/images/solid-cp.png',
]
const internetPartners = [
  '/images/act-fibernet.png',
  '/images/tata.png',
  '/images/sify.png',
  '/images/ishan.png',
  '/images/spider-link.png',
]
const hardwarePartners = [
  '/images/amd.png',
  '/images/intel.png',
  '/images/asus.png',
  '/images/Synology.png',
  '/images/hp.png',
  '/images/lenovo.png',
]
export default function HomeAchievements() {
  return (
    <section className="bg-black/5 py-20">
      <div className="container">
        <h2 className="text-5xl font-bold text-primary text-center capitalize">
          Our Achievements
        </h2>
        <div className="flex flex-col gap-12 mt-16">

          <div className="flex flex-col gap-12">
            <h3 className="text-primary text-center font-bold text-xl relative after:h-px after:absolute after:inset-x-0 after:top-1/2 after:-translate-y-1/2 after:bg-black/10">
              <span className="bg-[#F2F2F2] px-5 uppercase relative z-10">Certificates</span>
            </h3>


            <div className="flex gap-10 flex-wrap justify-center ">
              {crtfin.map((item, i) =>

                <div key={i} className="shadow-2 bg-white w-60 flex flex-col">
                  <Link href={`${item.file}`} key={i} target={item.target} className="flex flex-col gap-2 flex-1 bg-white p-4  hover:scale-105 ease-in-out duration-200">
                    <div className="flex flex-1 justify-center items-center">
                      <Image
                        src={`${item.crt}`}
                        alt={`Certificate: ${item.name}`}
                        width={130}
                        height={180}
                        className="h-auto w-auto min-w-full object-cover"
                      />
                    </div>
                    <div className="flex justify-center items-center flex-1">
                      <p className="text-center font-bold uppercase text-primary ">{item.name}</p>
                    </div>
                  </Link>

                </div>

              )}

            </div>
          </div>


          <div className="flex flex-col gap-12 pt-5">
            <h3 className="text-primary text-center font-bold text-xl relative after:h-px after:absolute after:inset-x-0 after:top-1/2 after:-translate-y-1/2 after:bg-black/10">
              <span className="bg-[#F2F2F2] px-5 uppercase relative z-10">Awards</span>
            </h3>

            <div className="flex justify-center gap-6 ">

              {awards.map((item, index) =>
                <div key={index} className="bg-white w-52 shadow-2 flex items-center justify-center">
                  <div className="p-5">
                    <Image
                      src={`${item}`}
                      alt="Advika Award"
                      width={160}
                      height={160}
                      className="object-cover min-w-full h-auto w-auto"
                    />
                  </div>
                </div>
              )}


            </div>
          </div>
        </div>
        <div className="py-20 space-y-20">
          <h2 className="text-5xl font-bold text-primary text-center capitalize pt-16">
            We Partner with the best
          </h2>


          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col gap-12 pt-5">

              <h3 className="text-primary text-left font-bold text-xl relative after:h-px after:absolute after:inset-x-0 after:top-1/2 after:-translate-y-1/2 after:bg-black/10">
                <span className="bg-[#F2F2F2] pr-5 -ml-px uppercase relative z-10">Technology Partners</span>
              </h3>


              <div className="flex gap-4 flex-wrap">
                {techPartners.map((item, index) =>
                  <div key={index} className="bg-white p-5 h-20 w-40 flex shadow items-center justify-center shrink-0">
                    <Image
                      src={`${item}`}
                      alt={`${item}`}
                      width={100}
                      height={40}
                      className="max-h-28 max-w-32 h-auto w-auto object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-12 pt-5">

              <h3 className="text-primary text-left font-bold text-xl relative after:h-px after:absolute after:inset-x-0 after:top-1/2 after:-translate-y-1/2 after:bg-black/10">
                <span className="bg-[#F2F2F2] pr-5 -ml-px uppercase relative z-10">Internet Partners</span>
              </h3>


              <div className="flex gap-4 flex-wrap">
                {internetPartners.map((item, index) =>
                  <div key={index} className="bg-white p-5 h-20 w-40 flex shadow items-center justify-center shrink-0">
                    <Image
                      src={`${item}`}
                      alt={`${item}`}
                      width={100}
                      height={40}
                      className="max-h-28 max-w-32 h-auto w-auto object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <h3 className="text-primary text-center font-bold text-xl relative after:h-px after:absolute after:inset-x-0 after:top-1/2 after:-translate-y-1/2 after:bg-black/10">
              <span className="bg-[#F2F2F2] px-5 uppercase relative z-10">Hardware Partners</span>
            </h3>
            <div className="flex justify-between gap-4 flex-wrap">
              {hardwarePartners.map((item, index) =>
                <div key={index} className="bg-white p-5 h-28 w-52 flex shadow items-center justify-center shrink-0">
                  <Image
                    src={`${item}`}
                    alt={`${item}`}
                    width={100}
                    height={40}
                    className="max-h-28 max-w-44 h-auto w-auto object-cover"
                  />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
