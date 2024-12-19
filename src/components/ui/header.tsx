import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './button';
import Menu from './menu';
import { TbPhoneCall, TbMail } from 'react-icons/tb';
import DialogCustom from './dialog-custom';
import Formcontact from '../partials/form';
import Socialmedia from './social-media';

function Header() {
  const [openDialog, setOpenDialog] = React.useState(false);

  const openContactDialog = () => {
    setOpenDialog(true);
  };

  const onDialogOpenChange = (open: boolean) => {
    setOpenDialog(open);
  };
  return (
    <>
      <header className='relative z-10 bg-primary'>
        <div className='container flex items-center justify-between py-2.5'>
          <div className='flex flex-1 flex-wrap items-center justify-between gap-x-5 gap-y-2 sm:flex-auto sm:justify-start sm:divide-x sm:divide-white/50'>
            <Link
              href={'tel:+919950249491'}
              className='flex items-center text-[10px] text-white sm:gap-2 sm:text-sm'
            >
              <TbPhoneCall className='hidden size-4 sm:inline-block' />
              +91-99502-49491
            </Link>
            <Link
              href={'mailto:eb.sales@advika.cloud'}
              className='flex items-center text-[10px] text-white sm:gap-2 sm:pl-3 sm:text-sm'
            >
              <TbMail className='hidden size-4 sm:inline-block' />
              eb.sales@advika.cloud
            </Link>
          </div>
          <div className='hidden items-center gap-5 sm:flex'>
            <Socialmedia />
          </div>
        </div>
        <div className='bg-white text-primary'>
          <nav className='container'>
            <div className='flex justify-between'>
              <Link href="/" className='py-4'>
                <Image
                  src={'/svg/advika-logo.svg'}
                  alt='Advika Cloud'
                  width={254}
                  height={45}
                  className='h-auto w-20 sm:w-32 lg:w-40 xl:w-auto'
                />
              </Link>
              <Menu />
              <Button
                onClick={openContactDialog}
                className='!h-8 self-center px-3 text-sm uppercase duration-200 ease-in-out hover:bg-secondary sm:!h-12 sm:px-5 sm:text-base lg:px-7 xl:px-10'
              >
                Book A Call
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Contact Dialog */}
      <DialogCustom
        open={openDialog}
        onOpenChange={onDialogOpenChange}
        className='max-w-3xl bg-primary p-3 md:p-5'
        title='fill your details'
      >
        <Formcontact />
      </DialogCustom>
    </>
  );
}

export default Header;
