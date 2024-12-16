'use client';
import Link from 'next/link';
import React from 'react';
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
        smlink: 'our-services/cloud-server',
      },
      {
        smname: 'EDGE Data Center',
        smlink: 'our-services/edge-data-denter',
      },
      {
        smname: 'Dedicated Server',
        smlink: 'our-services/dedicated-server',
      },
      {
        smname: 'Colocation',
        smlink: 'our-services/colocation',
      },
      {
        smname: 'Customized Server',
        smlink: 'our-services/customized-server',
      },
    ],
  },
  {
    name: 'Contact us',
    link: '/contact',
    dropdown: false,
  },
];
function Menu() {
  const [isSidePanelOpen, setSidePanelOpen] = React.useState(false);
  const [isDropdown, setDropdown] = React.useState(false);
  const pathname = usePathname();
  const isActive = pathname;

  const dropdown_handle = () => setDropdown(!isDropdown);

  const openSidePanel = () => setSidePanelOpen(true);
  const closeSidePanel = () => setSidePanelOpen(false);

  React.useEffect(() => {
    const bodyClass = 'overflow-hidden';

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
      <div className='items-strech flex flex-1 justify-end pr-3 lg:justify-center lg:pr-0'>
        <ul className='hidden gap-5 font-medium lg:flex xl:gap-12'>
          {mainmenu.map((item, index) => (
            <li
              key={index}
              className={`relative flex h-full items-center after:absolute after:inset-x-0 after:top-0 after:h-1 after:bg-secondary ${isActive === item.link ? 'after:opacity-100' : 'after:opacity-0'} ${item.dropdown && 'group'}`}
            >
              <Link
                href={item.link}
                className={`flex cursor-pointer items-center text-lg uppercase duration-200 ease-in-out hover:text-primary group-hover:text-primary ${isActive === item.link ? 'text-primary' : 'text-black/60'}`}
              >
                {item.name}{' '}
                {item.dropdown && (
                  <TbChevronDown className='size-5' strokeWidth={2.5} />
                )}
              </Link>
              {item.dropdown && (
                <>
                  <div className='absolute left-0 top-full hidden w-52 pt-2 before:absolute before:left-2 before:top-0.5 before:size-3 before:rotate-45 before:bg-white group-hover:block'>
                    <ul className='relative divide-y divide-black/10 rounded bg-white px-3 py-1 text-base shadow-1'>
                      {item.submenu?.map((smitem, smi) => (
                        <li key={smi}>
                          <Link
                            href={smitem.smlink}
                            className='block py-3 text-black/60 duration-200 ease-in-out hover:text-primary'
                          >
                            {smitem.smname}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
        <button className='px-3 lg:hidden' onClick={openSidePanel}>
          <TbMenu2 className='size-5' strokeWidth={2} />
        </button>
        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-50 flex flex-col transition-transform duration-300 ${isSidePanelOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className='fixed inset-0 bg-black/60' onClick={closeSidePanel} />
          <div className='relative ml-auto flex max-h-screen w-72 max-w-full flex-1 flex-col bg-primary pt-14'>
            <button
              className='absolute right-3 top-3 rounded p-2 text-white'
              onClick={closeSidePanel}
            >
              <TbX className='size-5' />
            </button>
            <nav className='flex flex-1 justify-center overflow-auto'>
              <ul className='flex flex-1 flex-col items-start justify-start divide-y divide-white/10 px-5'>
                {mainmenu.map((item, index) => (
                  <li
                    key={index}
                    className={`flex w-full flex-wrap justify-center py-3 ${
                      isActive === item.link
                        ? 'border-white'
                        : 'border-transparent hover:border-white'
                    }`}
                  >
                    {item.dropdown ? (
                      <button
                        type='button'
                        onClick={dropdown_handle}
                        className='relative inline-flex flex-1 justify-between py-2 text-sm font-medium uppercase text-white duration-200 ease-in-out xl:text-base'
                      >
                        {' '}
                        <span>{item.name}</span>{' '}
                        <TbChevronDown
                          className={`size-5 duration-200 ease-in-out ${isDropdown && 'rotate-180'}`}
                          strokeWidth={2}
                        />
                      </button>
                    ) : (
                      <Link
                        className={`relative inline-flex flex-1 justify-between py-2 text-sm font-medium uppercase duration-200 ease-in-out xl:text-base ${isActive === item.link ? 'text-white' : 'text-white/70 hover:text-secondary'}`}
                        href={item.link}
                      >
                        <span>{item.name}</span>
                      </Link>
                    )}
                    {item.dropdown && isDropdown && (
                      <div className={`w-full pt-2`}>
                        <ul className='relative divide-y divide-white/10 pl-5 text-base'>
                          {item.submenu?.map((smitem, smi) => (
                            <li key={smi}>
                              <Link
                                href={smitem.smlink}
                                className='block py-3 text-sm text-white duration-200 ease-in-out hover:text-secondary'
                              >
                                {smitem.smname}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className='flex justify-between gap-2 bg-white/5 p-5'>
              <Socialmedia />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
