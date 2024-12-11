import React from 'react'
import Image from "next/image";
import { Button } from "../ui/button";
import { TbMail, TbPhoneCall } from 'react-icons/tb';
import Link from 'next/link';
// import ReCAPTCHA from "react-google-recaptcha";
export default function ContactForm() {
  // const [captchaToken, setCaptchaToken] = React.useState<string | null>(null);
  // const handleCaptchaChange = (token: string | null) => {
  //   setCaptchaToken(token);
  // };
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!captchaToken) {
  //     alert("Please complete the CAPTCHA");
  //     return;
  //   }

  //   const response = await fetch("/api/verify-captcha", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ captchaToken }),
  //   });

  //   const result = await response.json();

  //   if (result.success) {
  //     alert("Form submitted successfully!");
  //   } else {
  //     alert("CAPTCHA verification failed!");
  //   }
  // };
  return (
    <section className="bg-primary text-white py-20 space-y-20">
      <div className="container">
        <h2 className="text-5xl font-bold text-center leading-snug">
          Do you have a query?

          <span className="block text-secondary">
            Book a Call
          </span>
        </h2>

        <div className="grid grid-cols-2 gap-24 mt-12">
          <div className="bg-white rounded-lg overflow-hidden">
            <Image
              src={"/images/sales-agent.png"}
              alt="Sales Agent"
              className="size-full object-cover"
              width={600}
              height={500}
            />
          </div>
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
            <div className="grid grid-cols-2 gap-5">
              <input
                type="tel"
                className="bg-white/10 p-5 rounded-md placeholder:text-white outline-none focus:bg-white/20 ease-in-out duration-200"
                placeholder="Phone Number"
              />
              <input
                type="url"
                className="bg-white/10 p-5 rounded-md placeholder:text-white outline-none focus:bg-white/20 ease-in-out duration-200"
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
              <Button variant={"white"} size={"lg"} className="uppercase !py-5 text-lg">
                Book Now
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-4xl font-semibold leading-loose">
            For further queries
          </h3>
          <p className="text-xl">
           Please get in touch with your dedicated account manager or reach out
            to us on
          </p>
          <div className="flex items-center gap-10 mt-5 text-xl">
            <Link href="tel:+919950249491" className="flex tracking-wider items-center gap-2 hover:text-white/70 ease-in-out duration-200">
            <TbPhoneCall className='size-6' />
            +91-99502-49491
            </Link>
            <span className="h-6 bg-white/20 w-px"></span>
            <Link href="mailto:eb.sales@advika.cloud" className="flex  tracking-wider items-center gap-2 hover:text-white/70 ease-in-out duration-200">
            <TbMail className='size-6'/>
              eb.sales@advika.cloud
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
