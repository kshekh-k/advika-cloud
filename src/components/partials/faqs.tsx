import Accordion from "../ui/accordion";
import React from 'react'
const accordionItems = [
  {
    title: " 01. What is Web hosting? ",
    content: "Web hosting is the technology that puts your website online. It is one of the three essential components of establishing your Web presence: a domain name (Web address), a website and a Web host. Your domain name tells people where to find you, your website is viewed by your visitors, and web hosting makes your site part of the Internet. Quite simply, the definition of cloud Web hosting is an online storage service for any content displayed or accessed through your website.",
  },
  {
    title: "02. Is Cloudminister good for small businesses?",
    content: "Web hosting is the technology that puts your website online. It is one of the three essential components of establishing your Web presence: a domain name (Web address), a website and a Web host. Your domain name tells people where to find you, your website is viewed by your visitors, and web hosting makes your site part of the Internet. Quite simply, the definition of cloud Web hosting is an online storage service for any content displayed or accessed through your website.",
  },
  {
    title: "03. Why is Cloudminister a reliable cloud web hosting company?",
    content: "Web hosting is the technology that puts your website online. It is one of the three essential components of establishing your Web presence: a domain name (Web address), a website and a Web host. Your domain name tells people where to find you, your website is viewed by your visitors, and web hosting makes your site part of the Internet. Quite simply, the definition of cloud Web hosting is an online storage service for any content displayed or accessed through your website.",
  },
  {
    title: "04. How do I buy a domain name on Cloudminister?",
    content: "Web hosting is the technology that puts your website online. It is one of the three essential components of establishing your Web presence: a domain name (Web address), a website and a Web host. Your domain name tells people where to find you, your website is viewed by your visitors, and web hosting makes your site part of the Internet. Quite simply, the definition of cloud Web hosting is an online storage service for any content displayed or accessed through your website.",
  },
  {
    title: "05. What features are offered in Cloudminister’s cheap cloud web hosting plan?",
    content: "Web hosting is the technology that puts your website online. It is one of the three essential components of establishing your Web presence: a domain name (Web address), a website and a Web host. Your domain name tells people where to find you, your website is viewed by your visitors, and web hosting makes your site part of the Internet. Quite simply, the definition of cloud Web hosting is an online storage service for any content displayed or accessed through your website.",
  },
];

export default function Faqs() {
  return (
    <div className="container">
      {/* FAQs */}
      <h2 className="text-3xl lg:text-5xl font-bold text-primary text-center">
        Frequently Asked Queries
      </h2>

      <div className="mt-5 xl:mt-16 max-w-4xl mx-auto">


<Accordion  items={accordionItems} />
 
      </div>
    </div>
  );
}
