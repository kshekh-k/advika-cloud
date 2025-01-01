import Accordion from '../ui/accordion';
import React from 'react';
import { FAQS } from '@/data/faqs';
export default function Faqs() {
  return (
    <div className='container' id='faq'>
      {/* FAQs */}
      <h2 className='text-center text-3xl font-bold text-primary lg:text-5xl'>
        Frequently Asked Queries
      </h2>

      <div className='mx-auto mt-5 max-w-4xl xl:mt-16'>
        <Accordion items={FAQS} />
      </div>
    </div>
  );
}
