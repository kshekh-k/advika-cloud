"use client";
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import { TbChevronDown, TbMenu2, TbX } from 'react-icons/tb';
import Socialmedia from './social-media';
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
    const [isSidePanelOpen, setSidePanelOpen] = React.useState(false);
    const [isDropdown, setDropdown] = React.useState(false);
    const pathname = usePathname();
    const isActive = pathname;

    const dropdown_handle = () => setDropdown(!isDropdown);

    const openSidePanel = () => setSidePanelOpen(true);
    const closeSidePanel = () => setSidePanelOpen(false);

    React.useEffect(() => {
        const bodyClass = "overflow-hidden";

        if (isSidePanelOpen) {
            document.body.classList.add(bodyClass);
        } else {
            document.body.classList.remove(bodyClass);
        }

        // Optional cleanup to ensure no class is left behind if the component unmounts
        return () => {
            document.body.classList.remove(bodyClass);
        };
    }, [isSidePanelOpen]);
    return (
        <>
            <div className='flex-1 flex justify-end lg:justify-center pr-3 lg:pr-0 items-strech'>
                <ul className="hidden lg:flex xl:gap-12 gap-5 font-medium ">
                    {mainmenu.map((item, index) =>
                        <li key={index} className={`h-full flex items-center relative after:absolute after:h-1 after:inset-x-0 after:top-0 after:bg-secondary  ${isActive === item.link ? 'after:opacity-100' : 'after:opacity-0'} ${item.dropdown && 'group'}`}>
                            <Link href={item.link} className={`flex items-center cursor-pointer uppercase text-lg hover:text-primary group-hover:text-primary ease-in-out duration-200 ${isActive === item.link ? 'text-primary' : 'text-black/60'}`}>
                                {item.name} {item.dropdown && <TbChevronDown className="size-5" strokeWidth={2.5} />}
                            </Link>
                            {item.dropdown && (
                                <>
                                    <div className='absolute hidden group-hover:block w-52 pt-2 left-0 top-full before:absolute before:top-0.5 before:left-2 before:bg-white before:size-3 before:rotate-45'>
                                        <ul className='relative bg-white rounded px-3 py-1 text-base divide-y divide-black/10 shadow-1'>
                                            {item.submenu?.map((smitem, smi) =>
                                                <li key={smi}>
                                                    <Link href={smitem.smlink} className='text-black/60 py-3 block hover:text-primary ease-in-out duration-200'>
                                                        {smitem.smname}
                                                    </Link>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </>
                            )}
                        </li>
                    )}
                </ul>
                <button className='px-3 lg:hidden' onClick={openSidePanel}><TbMenu2 className='size-5' strokeWidth={2} /></button>
                {/* Mobile Menu */}
                <div className={`fixed flex flex-col inset-0 z-50 transition-transform duration-300 ${isSidePanelOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='bg-black/60 fixed inset-0' onClick={closeSidePanel} />
                    <div className='max-w-full w-72 bg-primary flex-1 relative ml-auto flex flex-col max-h-screen pt-14'>
                        <button className='absolute top-3 right-3 text-white p-2 rounded' onClick={closeSidePanel}>
                            <TbX className="size-5" />
                        </button>
                        <nav className="flex justify-center flex-1  overflow-auto">
                            <ul className="flex flex-col justify-start items-start flex-1 divide-y divide-white/10 px-5 ">
                                {mainmenu.map((item, index) =>
                                    <li
                                        key={index}
                                        className={`flex justify-center flex-wrap w-full py-3  ${isActive === item.link
                                            ? "border-white"
                                            : "border-transparent hover:border-white "
                                            }`}
                                    >
                                        {item.dropdown ?
                                            <button type='button' onClick={dropdown_handle} className='py-2 flex-1 text-white text-sm xl:text-base font-medium inline-flex justify-between uppercase ease-in-out duration-200 relative'> <span>{item.name}</span> <TbChevronDown className={`size-5 ease-in-out duration-200 ${isDropdown && 'rotate-180'}`} strokeWidth={2} /></button>
                                            :
                                            <Link
                                                className={`py-2 flex-1 text-sm xl:text-base font-medium inline-flex justify-between uppercase ease-in-out duration-200 relative  ${isActive === item.link ? 'text-white' : 'text-white/70 hover:text-secondary'}`}
                                                href={item.link}
                                            >
                                                <span>{item.name}</span>
                                            </Link>
                                        }
                                        {item.dropdown && isDropdown && (
                                            <div className={`pt-2 w-full `}>
                                                <ul className='relative text-base divide-y divide-white/10 pl-5 '>
                                                    {item.submenu?.map((smitem, smi) =>
                                                        <li key={smi}>
                                                            <Link href={smitem.smlink} className='block text-white py-3 hover:text-secondary text-sm ease-in-out duration-200'>
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
                        </nav>



                        <div className='flex justify-between gap-2 p-5  bg-white/5'>
                            <Socialmedia />
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
