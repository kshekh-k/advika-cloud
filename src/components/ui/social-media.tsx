import Link from 'next/link';
import React from 'react';
import {
  TbBrandFacebook,
  TbBrandX,
  TbBrandWhatsapp,
  TbBrandLinkedin,
  TbBrandInstagram,
} from 'react-icons/tb';
const socialicons = [
  {
    icon: <TbBrandFacebook className='size-5' />,
    name: 'facebook',
    url: 'https://www.facebook.com/profile.php?id=100068878247058',
  },
  {
    icon: <TbBrandInstagram className='size-5' />,
    name: 'Instagram',
    url: 'https://www.instagram.com/advikaindia/',
  },
  {
    icon: <TbBrandLinkedin className='size-5' />,
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/sharad-k-rathi-1536a912/',
  },
  {
    icon: <TbBrandX className='size-5' />,
    name: 'X.cpm',
    url: 'https://twitter.com/advikaindia',
  },
  // {
  //   icon: <TbBrandBluesky className="size-5" />,
  //   name: 'bluesky',
  //   url: '#',
  // },
  {
    icon: <TbBrandWhatsapp className='size-5' />,
    name: 'whatsapp',
    url: 'tel:+919829714343',
  },
];

type Social = {
  className?: string;
};
const Socialmedia: React.FC<Social> = ({ className }) => {
  return (
    <>
      {socialicons.map((item, index) => (
        <Link
          key={index}
          href={`${item.url}`}
          title={item.name}
          className={`text-white duration-200 ease-in-out hover:text-secondary ${className}`}
        >
          {item.icon}
        </Link>
      ))}
    </>
  );
};

export default Socialmedia;
