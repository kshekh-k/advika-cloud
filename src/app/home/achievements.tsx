import Image from 'next/image';
import Link from 'next/link';
const crtfin = [
  {
    crt: '/images/crtfin-iso-9001-2015.png',
    name: 'ISO 9001 : 2015',
    file: '/certificates/ISO-9001-2015.pdf',
    target: '_blank',
  },
  {
    crt: '/images/crtfin-iso-14001-2015.png',
    name: 'ISO 14001 : 2015',
    file: '/certificates/ISO-14001-2015.pdf',
    target: '_blank',
  },
  {
    crt: '/images/crtfin-iso-45001-2018.png',
    name: 'ISO 45001 : 2018',
    file: '/certificates/ISO-45001-2018.pdf',
    target: '_blank',
  },
  {
    crt: '/images/crtfin-iso-iec-27001-2013.png',
    name: 'ISO/IEC 27001 : 2013',
    file: '/certificates/ISO-27001-2013.pdf',
    target: '_blank',
  },
  {
    crt: '/images/crtfin-iso-iec-27017-2015.png',
    name: 'ISO/IEC 27017 : 2015',
    file: '/certificates/ISO-27017-2015.pdf',
    target: '_blank',
  },
  {
    crt: '/images/crtfin-iso-iec-20000-1-2018.png',
    name: 'ISO/IEC 20000-1 : 2018',
    file: '/certificates/ISO-20000-2018.pdf',
    target: '_blank',
  },
  {
    crt: '/images/crtfin-letter-of-empanelment.png',
    name: 'letter of empanelment',
    file: '/certificates/Meity-Letter-of-Empanelment.pdf',
  },
  {
    crt: '/images/crtfin-tier-facility.png',
    name: 'TIER Facility',
    file: '/',
    target: '_self',
  },
  {
    crt: '/images/crtfin-tier-operations.png',
    name: 'TIER Operations',
    file: '/',
    target: '_self',
  },
  {
    crt: '/images/crtfin-yotta-datacenter.png',
    name: 'Yotta data center',
    file: '/',
    target: '_self',
  },
];

const awards = [
  '/images/award-1.svg',
  '/images/award-2.svg',
  '/images/award-3.svg',
];

const techPartners = [
  '/images/cpanel.png',
  '/images/plesk.png',
  '/images/virtualizor.png',
  '/images/webuzo.png',
  '/images/softaculous.png',
  '/images/immunify.png',
  '/images/solid-cp.png',
];
const internetPartners = [
  '/images/act-fibernet.png',
  '/images/tata.png',
  '/images/sify.png',
  '/images/ishan.png',
  '/images/spider-link.png',
];
const hardwarePartners = [
  '/images/amd.png',
  '/images/intel.png',
  '/images/asus.png',
  '/images/Synology.png',
  '/images/hp.png',
  '/images/lenovo.png',
];
export default function HomeAchievements() {
  return (
    <section className='bg-black/5 py-10 lg:py-16 2xl:py-24'>
      <div className='container'>
        <h2 className='text-center text-3xl font-bold capitalize text-primary lg:text-5xl'>
          Our Achievements
        </h2>
        <div className='mt-8 flex flex-col gap-10 xl:mt-16'>
          <div className='flex flex-col gap-5 lg:gap-10'>
            <h3 className='relative text-center text-xl font-bold text-primary after:absolute after:inset-x-0 after:top-1/2 after:h-px after:-translate-y-1/2 after:bg-black/10'>
              <span className='relative z-10 bg-[#F2F2F2] px-5 uppercase'>
                Certificates
              </span>
            </h3>

            <div className='max-w-full overflow-auto pb-5 lg:overflow-visible lg:pb-0'>
              <div className='flex min-w-[1200px] justify-start gap-5 lg:min-w-0 lg:flex-wrap lg:justify-center xl:gap-10'>
                {crtfin.map((item, i) => (
                  <div
                    key={i}
                    className='flex w-60 shrink-0 flex-col bg-white shadow-2'
                  >
                    <Link
                      href={`${item.file}`}
                      key={i}
                      target={item.target}
                      className='flex flex-1 flex-col gap-2 bg-white p-4 duration-200 ease-in-out hover:scale-105'
                    >
                      <div className='flex flex-1 items-center justify-center'>
                        <Image
                          src={`${item.crt}`}
                          alt={`Certificate: ${item.name}`}
                          width={130}
                          height={180}
                          className='h-auto w-auto min-w-full object-cover'
                        />
                      </div>
                      <div className='flex flex-1 items-center justify-center'>
                        <p className='text-center font-bold uppercase text-primary'>
                          {item.name}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-5 lg:gap-10 lg:pt-5'>
            <h3 className='relative text-center text-xl font-bold text-primary after:absolute after:inset-x-0 after:top-1/2 after:h-px after:-translate-y-1/2 after:bg-black/10'>
              <span className='relative z-10 bg-[#F2F2F2] px-5 uppercase'>
                Awards
              </span>
            </h3>

            <div className='max-w-full overflow-auto pb-5 lg:overflow-visible lg:pb-0'>
              <div className='flex min-w-[750px] justify-center gap-6 lg:min-w-0'>
                {awards.map((item, index) => (
                  <div
                    key={index}
                    className='flex w-52 shrink-0 items-center justify-center bg-white p-5 shadow-2'
                  >
                    <Image
                      src={`${item}`}
                      alt='Advika Award'
                      width={160}
                      height={160}
                      className='h-auto w-auto min-w-full object-cover'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='pt-10 lg:pt-16 2xl:pt-24'>
          <h2 className='text-center text-3xl font-bold capitalize text-primary lg:text-5xl'>
            We Partner with the best
          </h2>

          <div className='mt-8 flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-10 xl:mt-16'>
            <div className='flex flex-col gap-5 lg:gap-10 lg:pt-5'>
              <h3 className='relative text-left text-xl font-bold text-primary after:absolute after:inset-x-0 after:top-1/2 after:h-px after:-translate-y-1/2 after:bg-black/10'>
                <span className='relative z-10 -ml-px bg-[#F2F2F2] pr-5 uppercase'>
                  Technology Partners
                </span>
              </h3>

              <div className='max-w-full overflow-auto pb-5 lg:overflow-visible lg:pb-0'>
                <div className='flex min-w-[750px] gap-4 lg:min-w-0 lg:flex-wrap'>
                  {techPartners.map((item, index) => (
                    <div
                      key={index}
                      className='flex h-20 w-40 shrink-0 items-center justify-center bg-white p-5 shadow'
                    >
                      <Image
                        src={`${item}`}
                        alt={`${item}`}
                        width={100}
                        height={40}
                        className='h-auto w-full max-w-24 object-cover'
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-5 lg:gap-10 lg:pt-5'>
              <h3 className='relative text-left text-xl font-bold text-primary after:absolute after:inset-x-0 after:top-1/2 after:h-px after:-translate-y-1/2 after:bg-black/10'>
                <span className='relative z-10 -ml-px bg-[#F2F2F2] pr-5 uppercase'>
                  Internet Partners
                </span>
              </h3>

              <div className='max-w-full overflow-auto pb-5 lg:overflow-visible lg:pb-0'>
                <div className='flex min-w-[750px] gap-4 lg:min-w-0 lg:flex-wrap'>
                  {internetPartners.map((item, index) => (
                    <div
                      key={index}
                      className='flex h-20 w-40 shrink-0 items-center justify-center bg-white p-5 shadow'
                    >
                      <Image
                        src={`${item}`}
                        alt={`${item}`}
                        width={100}
                        height={40}
                        className='h-auto w-full max-w-24 object-cover'
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 pt-5 lg:gap-10 lg:pt-10'>
            <h3 className='relative text-left text-xl font-bold text-primary after:absolute after:inset-x-0 after:top-1/2 after:h-px after:-translate-y-1/2 after:bg-black/10 lg:text-center'>
              <span className='relative z-10 bg-[#F2F2F2] pr-5 uppercase lg:px-5'>
                Hardware Partners
              </span>
            </h3>
            <div className='max-w-full overflow-auto pb-5 lg:overflow-visible lg:pb-0'>
              <div className='flex min-w-[750px] justify-start gap-4 lg:min-w-0 lg:flex-wrap lg:justify-between'>
                {hardwarePartners.map((item, index) => (
                  <div
                    key={index}
                    className='flex h-20 w-40 shrink-0 items-center justify-center bg-white p-5 shadow lg:h-28 lg:w-52'
                  >
                    <Image
                      src={`${item}`}
                      alt={`${item}`}
                      width={100}
                      height={40}
                      className='h-auto max-h-16 w-full max-w-24 object-cover'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
