"use client";
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
const mainmenu = [
    {
        name: 'Home',
        link: '/',
        dropdown: false,
    },
    {
        name: 'About',
        link: '/about',
        dropdown: false,
    },
    {
        name: 'Our Services',
        link: '#',
        dropdown: true,
        submenu: [
            {
                smname: 'Cloud Server',
                smlink: 'our-services/cloud-server'
            },
            {
                smname: 'EDGE Data Center',
                smlink: 'our-services/edge-data-denter'
            },
            {
                smname: 'Dedicated Server',
                smlink: 'our-services/dedicated-server'
            },
            {
                smname: 'Colocation',
                smlink: 'our-services/colocation'
            },
            {
                smname: 'Customized Server',
                smlink: 'our-services/customized-server'
            },
        ]
    },
    {
        name: 'Contact us',
        link: '/contact',
        dropdown: false,
    },
]
function Menu() {
    const pathname = usePathname();
    const isActive = pathname;
    return (
        <ul className="flex gap-12 font-medium ">
            {mainmenu.map((item, index) =>
                <li key={index} className={`h-full flex items-center relative after:absolute after:h-1 after:inset-x-0 after:top-0 after:bg-secondary group ${isActive === item.link ? 'after:opacity-100' : 'after:opacity-0'}`}>
                    <Link href={item.link} className={`flex items-center cursor-pointer uppercase text-lg hover:text-primary ease-in-out duration-200 ${isActive === item.link ? 'text-primary' : 'text-black/60'}`}>
                        {item.name}
                    </Link>
                    {item.dropdown && (
                        <div className='absolute hidden group-hover:block w-52 pt-2 left-0 top-full before:absolute before:top-0.5 before:left-2 before:bg-white before:size-3 before:rotate-45'>
                            <ul className='relative bg-white rounded px-3 py-1 text-base divide-y divide-black/10 shadow-1'>
                                {item.submenu?.map((smitem, smi)=>
                                <li key={smi}>
                                    <Link href={smitem.smlink} className='text-black/60 py-3 block hover:text-primary ease-in-out duration-200'>
                                    {smitem.smname}
                                    </Link>
                                </li>
                                )}
                            </ul>
                        </div>
                    )}
                </li>
            )}
        </ul>
    )
}

export default Menu
