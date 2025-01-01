'use client';
import React from 'react';
import { Button } from '../ui/button';
import ReCAPTCHA from 'react-google-recaptcha';
import { FormSubmit } from '@/app/api/forms/route';
import { toast } from 'react-toastify';
import { Countries } from '@/data/countries';
function Formcontact() {
  const [loading, setLoading] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [website, setWebsite] = React.useState('');
  const [country, setCountry] = React.useState<string>('IN');
  const [message, setMessage] = React.useState('');
  const [captchaToken, setCaptchaToken] = React.useState<string | null>(null);
  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaToken) {
      alert('Please complete the CAPTCHA');
      return;
    }

    const captcha = await fetch('/api/captcha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: captchaToken }),
    });

    const result = await captcha.json();

    if (result.success) {
      alert('Form submitted successfully!');
    } else {
      alert('CAPTCHA verification failed!');
    }

    setLoading(true);
    const data: FormSubmit = {
      name,
      email,
      contact: `${contact}`,
      website,
      country,
      message,
    };

    const res = await fetch('/api/forms', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    });

    setLoading(false);
    const response = await res.json();

    if (!res.ok || response.error) {
      toast.error('Failed to send');
      return;
    }

    toast.success(
      'Thank you for your information. We shall contact you shortly.'
    );
    setName('');
    setEmail('');
    setContact('');
    setWebsite('');
    setCountry('');
    setMessage('');
  };

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value); // Error here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const contact = e.target.value;

    // Allow only digits (0-9)
    if (/^\d*$/.test(contact)) {
      setContact(contact);
    }
  };

  return (
    <div className='relative'>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <input
            type='text'
            className='rounded-md bg-white/10 p-5 text-white outline-none duration-200 ease-in-out placeholder:text-white focus:bg-white/20'
            placeholder='Full Name'
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <div className='flex flex-col gap-5 sm:grid sm:grid-cols-2'>
            <input
              type='email'
              className='rounded-md bg-white/10 p-5 text-white outline-none duration-200 ease-in-out placeholder:text-white focus:bg-white/20'
              placeholder='Email Address'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <input
              type='tel'
              className='w-full rounded-md bg-white/10 p-5 text-white outline-none duration-200 ease-in-out placeholder:text-white focus:bg-white/20'
              placeholder='Phone Number'
              required
              onChange={handleChange}
              value={contact}
            />
          </div>
          <div className='flex flex-col gap-5 sm:grid sm:grid-cols-2'>
            <input
              type='tel'
              className='w-full rounded-md bg-white/10 p-5 text-white outline-none duration-200 ease-in-out placeholder:text-white focus:bg-white/20'
              placeholder='Website'
              required
              onChange={(e) => setWebsite(e.target.value)}
              value={website}
            />
            <select
              className='w-full rounded-md bg-white/10 p-5 text-white outline-none duration-200 ease-in-out placeholder:text-white focus:bg-white/20'
              onChange={selectChange}
              value={country}
            >
              <option value='' disabled>
                Select a country
              </option>
              {Countries.map((country, index) => (
                <option
                  key={index + country.code}
                  value={country.code}
                  className='text-black/70'
                >
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <textarea
            className='rounded-md bg-white/10 p-5 text-white outline-none duration-200 ease-in-out placeholder:text-white focus:bg-white/20'
            rows={10}
            placeholder='Your message'
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
          <div className='flex flex-wrap items-stretch justify-between gap-5'>
            <ReCAPTCHA
              sitekey={`${process.env.NEXt_PUBLIC_CAPTCHA_SITE_KEY}` || ''}
              onChange={handleCaptchaChange}
            />
            <Button
              type='submit'
              variant={'white'}
              size={'lg'}
              className='h-full w-60 !py-5 text-lg font-semibold uppercase duration-200 ease-in-out hover:bg-secondary hover:text-white'
            >
              {loading ? 'Loading...' : 'Book Now'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Formcontact;
