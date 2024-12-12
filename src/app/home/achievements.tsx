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
  '/images/award-1.svg',
  '/images/award-2.svg',
  '/images/award-3.svg',
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
    <section className="bg-black/5 py-10 lg:py-16 2xl:py-24">
      <div className="container">
        <h2 className="text-3xl lg:text-5xl font-bold text-primary text-center capitalize">
          Our Achievements
        </h2>
        <div className="flex flex-col gap-10 mt-8 xl:mt-16">

          <div className="flex flex-col gap-5 lg:gap-10">
            <h3 className="text-primary text-center font-bold text-xl relative after:h-px after:absolute after:inset-x-0 after:top-1/2 after:-translate-y-1/2 after:bg-black/10">
              <span className="bg-[#F2F2F2] px-5 uppercase relative z-10">Certificates</span>
            </h3>

            <div className="max-w-full pb-5 lg:pb-0 overflow-auto lg:overflow-visible">
            <div className="flex lg:flex-wrap justify-start lg:justify-center gap-5 xl:gap-10 min-w-[1200px] lg:min-w-0">
              {crtfin.map((item, i) =>

                <div key={i} className="shadow-2 bg-white w-60 shrink-0 flex flex-col">
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
          </div>


          <div className="flex flex-col gap-5 lg:gap-10 lg:pt-5">
            <h3 className="text-primary text-center font-bold text-xl relative after:h-px after:absolute after:inset-x-0 after:top-1/2 after:-translate-y-1/2 after:bg-black/10">
              <span className="bg-[#F2F2F2] px-5 uppercase relative z-10">Awards</span>
            </h3>

             
            <div className="max-w-full pb-5 lg:pb-0 overflow-auto lg:overflow-visible">
            <div className="flex justify-center gap-6 min-w-[750px] lg:min-w-0">
              {awards.map((item, index) =>
                <div key={index} className="bg-white w-52 shrink-0 shadow-2 flex items-center justify-center p-5">
                  
                    <Image
                      src={`${item}`}
                      alt="Advika Award"
                      width={160}
                      height={160}
                      className="object-cover min-w-full h-auto w-auto"
                    />
               
                </div>
              )}


            </div>
            </div>
          </div>
        </div>
        <div className="pt-10 lg:pt-16 2xl:pt-24 ">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary text-center capitalize ">
            We Partner with the best
          </h2>


          <div className="lg:grid lg:grid-cols-2 flex flex-col gap-5 lg:gap-10 mt-8 xl:mt-16">
            <div className="flex flex-col gap-5 lg:gap-10 lg:pt-5">

              <h3 className="text-primary text-left font-bold text-xl relative after:h-px after:absolute after:inset-x-0 after:top-1/2 after:-translate-y-1/2 after:bg-black/10">
                <span className="bg-[#F2F2F2] pr-5 -ml-px uppercase relative z-10">Technology Partners</span>
              </h3>

              <div className="max-w-full pb-5 lg:pb-0 overflow-auto lg:overflow-visible">
              <div className="flex gap-4 lg:flex-wrap min-w-[750px] lg:min-w-0">
                {techPartners.map((item, index) =>
                  <div key={index} className="bg-white p-5 h-20 w-40 flex shadow items-center justify-center shrink-0">
                    <Image
                      src={`${item}`}
                      alt={`${item}`}
                      width={100}
                      height={40}
                      className="max-w-24 h-auto w-full object-cover"
                    />
                  </div>
                )}
              </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 lg:gap-10 lg:pt-5">

              <h3 className="text-primary text-left font-bold text-xl relative after:h-px after:absolute after:inset-x-0 after:top-1/2 after:-translate-y-1/2 after:bg-black/10">
                <span className="bg-[#F2F2F2] pr-5 -ml-px uppercase relative z-10">Internet Partners</span>
              </h3>

              <div className="max-w-full pb-5 lg:pb-0 overflow-auto lg:overflow-visible">
              <div className="flex gap-4 lg:flex-wrap min-w-[750px] lg:min-w-0">
                {internetPartners.map((item, index) =>
                  <div key={index} className="bg-white p-5 h-20 w-40 flex shadow items-center justify-center shrink-0">
                    <Image
                      src={`${item}`}
                      alt={`${item}`}
                      width={100}
                      height={40}
                      className="max-w-24 h-auto w-full object-cover"
                    />
                  </div>
                )}
              </div>
              </div>
            </div>
          </div>
          <div className=" gap-5 lg:gap-10 flex flex-col pt-5 lg:pt-10">
            <h3 className="text-primary text-left lg:text-center font-bold text-xl relative after:h-px after:absolute after:inset-x-0 after:top-1/2 after:-translate-y-1/2 after:bg-black/10">
              <span className="bg-[#F2F2F2] pr-5 lg:px-5 uppercase relative z-10">Hardware Partners</span>
            </h3>
            <div className="max-w-full pb-5 lg:pb-0 overflow-auto lg:overflow-visible">
            <div className="flex justify-start lg:justify-between gap-4 lg:flex-wrap min-w-[750px] lg:min-w-0">
              {hardwarePartners.map((item, index) =>
                <div key={index} className="bg-white p-5 h-20 w-40 lg:h-28 lg:w-52 flex shadow items-center justify-center shrink-0">
                  <Image
                    src={`${item}`}
                    alt={`${item}`}
                    width={100}
                    height={40}
                    className="max-w-24 h-auto w-full max-h-16 object-cover"
                  />
                </div>
              )}
            </div>
          </div>
          </div>

        </div>
      </div>
    </section>
  );
}
