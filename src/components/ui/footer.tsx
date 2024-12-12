import Image from "next/image";
import Link from "next/link";
import {TbMail, TbMapPin, TbPhoneCall } from "react-icons/tb";
import Socialmedia from "./social-media";
const AboutCompany = [
  {
    label:'Home',
    link:'/'
  },
  {
    label:'About Us',
    link:'/'
  },
  {
    label:'Services',
    link:'/'
  },
  {
    label:'Contact Us',
    link:'/'
  },
  {
    label:'Book a Call',
    link:'/'
  },
]
const HelpSupport = [
  {
    label:'FAQs',
    link:'/'
  },
  {
    label:'Sitemap',
    link:'/'
  },
  {
    label:'Contact us',
    link:'/'
  },
  {
    label:'Career',
    link:'/'
  },
  {
    label:'Terms of Services',
    link:'/'
  },
]
 
export default function Footer() {
  const currentyear = new Date().getFullYear()
  return (
    <footer className="bg-primary text-white pt-10 xl:pt-20">
      <div className="container">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-5 lg:gap-12">
          <div className="space-y-2 col-span-3">
            <Image
              src={"/svg/advika-cloud-white-logo.svg"}
              alt="Advika Cloud"
              width={254}
              height={45}
            />
            <p className="text-white/50 leading-normal pt-3 md:pt-5 text-sm">
            Advika cloud Data Center Services provides complete solutions for businesses seeking secure and reliable hosting.
            </p>
          </div>
          <div className="col-span-6 flex justify-center">
            <div className="flex-1 grid grid-cols-2 gap-12 max-w-lg">
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm md:text-xl">About Company</h4>
            <ul className="flex flex-col gap-4 text-sm">
            {AboutCompany.map((item, i)=>
              <li key={i}>
                <Link href={item.link} className="text-white/70 hover:text-secondary ease-in-out duration-200">{item.label}</Link>
              </li>
              )}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm md:text-xl">Help & Support</h4>
            <ul className="flex flex-col gap-4 text-sm">
            {HelpSupport.map((item, i)=>
              <li key={i}>
                <Link href={item.link} className="text-white/70 hover:text-secondary ease-in-out duration-200">{item.label}</Link>
              </li>
              )}
            </ul>
          </div>
         </div>
         </div>
          <div className="flex flex-col gap-4 col-span-3">
            <h4 className="font-semibold text-sm md:text-xl">Contacts</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex gap-2 items-start">
              <TbMapPin className="size-5 shrink-0" />
                <span className="text-white/70">
                  Advika Data Center Services Pvt. Ltd. AltF, Plot no 21 & 21A,
                  Sector 142 Noida - 201305 (UP) India
                </span>
              </li>
              <li>
              <Link href="tel:+919950249491" className="flex gap-2 items-center text-white/70 hover:text-secondary ease-in-out duration-200" >
              <TbPhoneCall className='size-5 shrink-0' />
                <span>+91-99502-49491</span>
                </Link>  
              </li>
              <li >
                <Link href="mailto:eb.sales@advika.cloud" className="flex gap-2 items-center text-white/70 hover:text-secondary ease-in-out duration-200">
              <TbMail className='size-5 shrink-0'/>
                <span>eb.sales@advika.cloud</span>
                </Link>
              </li>
            </ul>
          </div>
          
        </div>

        <hr className="border-white/10 mt-10 " />
        <div className=" flex justify-center md:justify-between flex-wrap gap-3 py-5">
          <p className="text-white/70 text-sm text-center md:text-left">Copyright &copy; {currentyear} Advika.cloud | All Right Reserved</p>
          <div className="flex gap-5 items-center justify-center md:justify-end ">
          <Socialmedia />
          </div>
        </div>
      </div>
    </footer>
  );
}
