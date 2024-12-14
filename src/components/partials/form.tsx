import React from 'react';
import { Button } from '../ui/button';

function Formcontact() {
  return (
    <div className='relative'>
      <form>
        <div className='flex flex-col gap-5'>
          <input
            type='text'
            className='rounded-md bg-white/10 p-5 outline-none duration-200 ease-in-out placeholder:text-white focus:bg-white/20'
            placeholder='Full Name'
          />
          <input
            type='email'
            className='rounded-md bg-white/10 p-5 outline-none duration-200 ease-in-out placeholder:text-white focus:bg-white/20'
            placeholder='Email Address'
          />
          <div className='flex flex-col gap-5 sm:grid sm:grid-cols-2'>
            <input
              type='tel'
              className='w-full rounded-md bg-white/10 p-5 outline-none duration-200 ease-in-out placeholder:text-white focus:bg-white/20'
              placeholder='Phone Number'
            />
            <input
              type='url'
              className='w-full rounded-md bg-white/10 p-5 outline-none duration-200 ease-in-out placeholder:text-white focus:bg-white/20'
              placeholder='Website'
            />
          </div>
          <textarea
            className='rounded-md bg-white/10 p-5 outline-none duration-200 ease-in-out placeholder:text-white focus:bg-white/20'
            rows={10}
            placeholder='Your message'
          ></textarea>
          <div className='flex justify-end'>
            {/* <ReCAPTCHA
        sitekey="YOUR_SITE_KEY"
        onChange={handleCaptchaChange}
      /> */}
            <Button
              variant={'white'}
              size={'lg'}
              className='!py-5 text-lg font-semibold uppercase duration-200 ease-in-out hover:bg-secondary hover:text-white'
            >
              Book Now
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Formcontact;
