import { SortAscIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import {
  TbBrandFacebook,
  TbBrandX,
  TbBrandBluesky,
  TbBrandYoutube,
  TbBrandWhatsapp,
} from 'react-icons/tb';
const socialicons = [
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
  type Social = {
    className?:string
  }
const Socialmedia:React.FC<Social> = ({className}) => {
  return (
  <>
     {socialicons.map((item, index)=>
    <Link key={index} href={`${item.url}`} title={item.name} className={`text-white hover:text-secondary ease-in-out duration-200 ${className}`}>
    {item.icon}
  </Link>
    )}
    </>
  );
}

export default Socialmedia;
