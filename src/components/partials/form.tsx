import React from 'react'
import { Button } from '../ui/button'

function Formcontact() {
  return (
    <div className='relative'>
        <form>
    <div className="flex flex-col gap-5">
    <input
      type="text"
      className="bg-white/10 p-5 rounded-md placeholder:text-white outline-none focus:bg-white/20 ease-in-out duration-200"
      placeholder="Full Name"
    />
    <input
      type="email"
      className="bg-white/10 p-5 rounded-md placeholder:text-white outline-none focus:bg-white/20 ease-in-out duration-200"
      placeholder="Email Address"
    />
    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-5">
      <input
        type="tel"
        className="w-full bg-white/10 p-5 rounded-md placeholder:text-white outline-none focus:bg-white/20 ease-in-out duration-200"
        placeholder="Phone Number"
      />
      <input
        type="url"
        className="w-full bg-white/10 p-5 rounded-md placeholder:text-white outline-none focus:bg-white/20 ease-in-out duration-200"
        placeholder="Website"
      />
    </div>
    <textarea
      className="bg-white/10 p-5 rounded-md placeholder:text-white outline-none focus:bg-white/20 ease-in-out duration-200"
      rows={10}
      placeholder="Your message"
    ></textarea>
    <div className="flex justify-end">
      {/* <ReCAPTCHA
        sitekey="YOUR_SITE_KEY"
        onChange={handleCaptchaChange}
      /> */}
      <Button variant={"white"} size={"lg"} className="uppercase !py-5 font-semibold text-lg hover:text-white hover:bg-secondary ease-in-out duration-200">
        Book Now
      </Button>
    </div>
  </div>
  </form>
  </div>
  )
}

export default Formcontact
