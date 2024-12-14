import React from 'react';
import Image from 'next/image';
import { TbMail, TbPhoneCall } from 'react-icons/tb';
import Link from 'next/link';
import Formcontact from './form';
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
    <section className='bg-primary py-10 text-white lg:py-16 2xl:py-24'>
      <div className='container'>
        <h2 className='text-center text-3xl font-bold leading-snug lg:text-5xl'>
          Do you have a query?
          <span className='block text-secondary'>Book a Call</span>
        </h2>

        <div className='mt-5 flex flex-col gap-10 md:grid md:grid-cols-2 lg:mt-10 xl:gap-24'>
          <div className='mx-auto max-w-sm overflow-hidden rounded-lg bg-white md:max-w-full'>
            <Image
              src={'/images/sales-agent.png'}
              alt='Sales Agent'
              className='size-full object-cover'
              width={600}
              height={500}
            />
          </div>
          <Formcontact />
        </div>

        <div className='pt-5 lg:pt-14'>
          <h3 className='text-3xl font-semibold leading-loose lg:text-4xl'>
            For further queries
          </h3>
          <p className='text-lg font-light lg:text-xl lg:font-normal'>
            Please get in touch with your dedicated account manager or reach out
            to us on
          </p>
          <div className='mt-5 flex flex-wrap items-center gap-x-10 gap-y-2 text-lg md:flex-nowrap lg:text-xl'>
            <Link
              href='tel:+919950249491'
              className='flex items-center gap-2 tracking-wider duration-200 ease-in-out hover:text-white/70'
            >
              <TbPhoneCall className='size-6' />
              +91-99502-49491
            </Link>
            <span className='hidden h-6 w-px bg-white/20 md:inline'></span>
            <Link
              href='mailto:eb.sales@advika.cloud'
              className='flex items-center gap-2 tracking-wider duration-200 ease-in-out hover:text-white/70'
            >
              <TbMail className='size-6' />
              eb.sales@advika.cloud
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
