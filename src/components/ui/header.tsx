import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './button'
import Menu from './menu'
import { TbPhoneCall, TbMail } from "react-icons/tb";
import DialogCustom from './dialog-custom'
import Formcontact from '../partials/form'
import Socialmedia from './social-media'

 

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
    <header className="relative z-10 bg-primary">
      <div className="container flex items-center justify-between py-2.5">
        <div className="flex justify-between sm:justify-start flex-wrap items-center gap-y-2 gap-x-5 sm:divide-x sm:divide-white/50 flex-1 sm:flex-auto">
          <Link href={'tel:+919950249491'} className="flex items-center sm:gap-2 text-white text-[10px] sm:text-sm">
            <TbPhoneCall className='size-4 hidden sm:inline-block ' />
            +91-99502-49491
          </Link>
          <Link href={'mailto:eb.sales@advika.cloud'} className="flex items-center sm:gap-2 text-white text-[10px] sm:text-sm sm:pl-3">
            <TbMail className='size-4 hidden sm:inline-block ' />
            eb.sales@advika.cloud
          </Link>
        </div>
        <div className="hidden sm:flex gap-5 items-center">
         <Socialmedia />

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
                className='w-20 sm:w-32 lg:w-40 xl:w-auto h-auto'
              />
            </div>
            <Menu />
            <Button onClick={openContactDialog} className="uppercase self-center text-sm sm:text-base !h-8 sm:!h-12 px-3 sm:px-5 lg:px-7 xl:px-10 hover:bg-secondary ease-in-out duration-200">Book A Call</Button>
          </div>
        </nav>
      </div>
    </header>
    
    {/* Contact Dialog */}
    <DialogCustom open={openDialog} onOpenChange={onDialogOpenChange} className="max-w-3xl bg-primary p-3 md:p-5" title="fill your details">


<Formcontact />


</DialogCustom>

    </>
  )
}

export default Header
