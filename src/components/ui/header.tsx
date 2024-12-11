import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './button'
import Menu from './menu'
import { TbBrandFacebook, TbBrandX, TbBrandBluesky, TbBrandYoutube, TbBrandWhatsapp, TbPhoneCall, TbMail } from "react-icons/tb";
const social = [
  {
    icon: <TbBrandFacebook className="size-5" />,
    name: 'facebook',
    url: '#',
  },
  {
    icon: <TbBrandX className="size-5" />,
    name: 'x',
    url: '#',
  },
  {
    icon: <TbBrandBluesky className="size-5" />,
    name: 'bluesky',
    url: '#',
  },
  {
    icon: <TbBrandYoutube className="size-5" />,
    name: 'youtube',
    url: '#',
  },
  {
    icon: <TbBrandWhatsapp className="size-5" />,
    name: 'whatsapp',
    url: '#',
  },
]



function Header() {
  return (
    <header className="relative z-10 bg-primary">
      <div className="container flex items-center justify-between py-2.5">
        <div className="flex items-center gap-5 divide-x divide-white/50">
          <Link href={'tel:+919950249491'} className="flex items-center gap-2 text-white text-sm">
            <TbPhoneCall className='size-4' />
            +91-99502-49491
          </Link>
          <Link href={'mailto:eb.sales@advika.cloud'} className="flex items-center gap-2 text-white text-sm pl-3">
            <TbMail className='size-4' />
            eb.sales@advika.cloud
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          {social.map((item, index) =>
            <Link key={index} href={`${item.url}`} title={item.name} className={'text-white '}>
              {item.icon}
            </Link>
          )}

        </div>
      </div>
      <div className="bg-white text-primary">
        <nav className="container">
          <div className="flex justify-between">
            <div className="py-4">
              <Image
                src={"/svg/advika-logo.svg"}
                alt="Advika Cloud"
                width={254}
                height={45}
                className='w-auto h-auto'
              />
            </div>
            <Menu />
            <Button className="uppercase self-center px-10 hover:bg-secondary ease-in-out duration-200">Book A Call</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
