import React from 'react'
import { Button } from '../ui/button'

function Contactform() {
  return (
    <>
      <div className='relative flex flex-col bg-white shadow-1 p-5 lg:p-10 w-full space-y-5'>
        <h2 className="text-3xl lg:text-5xl font-bold text-left leading-snug text-primary">Fill the Form</h2>
        <form>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              className="bg-black/5 px-5 py-4 rounded-md placeholder:text-black/50 outline-none focus:bg-black/10 ease-in-out duration-200"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="bg-black/5 px-5 py-4 rounded-md placeholder:text-black/50 outline-none focus:bg-black/10 ease-in-out duration-200"
              placeholder="Email Address"
            />
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-5">
              <input
                type="tel"
                className="w-full bg-black/5 px-5 py-4 rounded-md placeholder:text-black/50 outline-none focus:bg-black/10 ease-in-out duration-200"
                placeholder="Phone Number"
              />
              <input
                type="url"
                className="w-full bg-black/5 px-5 py-4 rounded-md placeholder:text-black/50 outline-none focus:bg-black/10 ease-in-out duration-200"
                placeholder="Website"
              />
            </div>
            <textarea
              className="bg-black/5 px-5 py-4 rounded-md placeholder:text-black/50 outline-none focus:bg-black/10 ease-in-out duration-200"
              rows={5}
              placeholder="Your message"
            ></textarea>
            <div className="flex justify-end">
              {/* <ReCAPTCHA
        sitekey="YOUR_SITE_KEY"
        onChange={handleCaptchaChange}
      /> */}
              <Button size={"lg"} className="uppercase !py-5 font-semibold text-lg hover:text-white hover:bg-secondary ease-in-out duration-200">
                Book Now
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contactform
