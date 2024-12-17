import Accordion from '../ui/accordion';
import React from 'react';
const accordionItems = [
  {
    title: 'What is Web hosting? ',
    content:
      'Web hosting is the technology that puts your website online. It is one of the three essential components of establishing your Web presence: a domain name (Web address), a website and a Web host. Your domain name tells people where to find you, your website is viewed by your visitors, and web hosting makes your site part of the Internet. Quite simply, the definition of cloud Web hosting is an online storage service for any content displayed or accessed through your website.',
  },
  {
    title: 'Is Cloudminister good for small businesses?',
    content:
      'Web hosting is the technology that puts your website online. It is one of the three essential components of establishing your Web presence: a domain name (Web address), a website and a Web host. Your domain name tells people where to find you, your website is viewed by your visitors, and web hosting makes your site part of the Internet. Quite simply, the definition of cloud Web hosting is an online storage service for any content displayed or accessed through your website.',
  },
  {
    title: 'Why is Cloudminister a reliable cloud web hosting company?',
    content:
      'Web hosting is the technology that puts your website online. It is one of the three essential components of establishing your Web presence: a domain name (Web address), a website and a Web host. Your domain name tells people where to find you, your website is viewed by your visitors, and web hosting makes your site part of the Internet. Quite simply, the definition of cloud Web hosting is an online storage service for any content displayed or accessed through your website.',
  },
  {
    title: 'How do I buy a domain name on Cloudminister?',
    content:
      'Web hosting is the technology that puts your website online. It is one of the three essential components of establishing your Web presence: a domain name (Web address), a website and a Web host. Your domain name tells people where to find you, your website is viewed by your visitors, and web hosting makes your site part of the Internet. Quite simply, the definition of cloud Web hosting is an online storage service for any content displayed or accessed through your website.',
  },
  {
    title:
      'What features are offered in Cloudminister’s cheap cloud web hosting plan?',
    content:
      'Web hosting is the technology that puts your website online. It is one of the three essential components of establishing your Web presence: a domain name (Web address), a website and a Web host. Your domain name tells people where to find you, your website is viewed by your visitors, and web hosting makes your site part of the Internet. Quite simply, the definition of cloud Web hosting is an online storage service for any content displayed or accessed through your website.',
  },
];

export default function Faqs() {
  return (
    <div className='container'>
      {/* FAQs */}
      <h2 className='text-center text-3xl font-bold text-primary lg:text-5xl'>
        Frequently Asked Queries
      </h2>

      <div className='mx-auto mt-5 max-w-4xl xl:mt-16'>
        <Accordion items={accordionItems} />
      </div>
    </div>
  );
}
