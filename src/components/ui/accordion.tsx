'use client'
import { Minus, Plus } from 'lucide-react';
import React from 'react'
interface AccordionItem {
    title: string;
    content: string;
  }
  
  interface AccordionProps {
    items: AccordionItem[];
  }
const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const toggleAccordion = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <div className=" ">
      {items.map((item, index) => (
        <div key={index} className={`lg:pl-10 p-5 ${openIndex === index ? 'rounded-md bg-white shadow-2 mb-10' : 'border-b border-black/10'}`}>
          <button
            className="flex-1 w-full flex focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center text-left flex-1 gap-2 text-black/60">
              <span className="font-semibold lg:text-xl">{item.title}</span>
              <span>{openIndex === index ? 
              <Minus strokeWidth={3} className='text-gray-600' />
              : 
              <Plus strokeWidth={3} className='text-gray-600' />
              }</span>
            </div>
          </button>
          {openIndex === index && (
            <div className="pt-2 lg:pt-5">
              <p className='text-black/50 leading-loose'>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion
