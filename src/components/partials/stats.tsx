
import React from 'react'
import { stats } from '@/data/stats';
function Stats() {
  return (

    <div className='container'>
      <div className='max-w-full overflow-auto py-5 xl:overflow-visible xl:py-0'>
        <div className='flex justify-between min-w-[1200px] xl:min-w-0 xl:grid xl:grid-cols-6 gap-3 xl:py-10'>
          {stats.map(({ id, icon: Icon, value, tagline }) => (
            <div id={`item-${id}`} key={`item-${id}`}
              className={`flex flex-col bg-black/5 w-60 xl:w-auto px-3 py-5 shrink-0 items-center justify-center gap-5 `}
            >
              <div className='flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-white xl:size-11'>
                <Icon className='size-7' />
              </div>
              <div className='space-y-1.5 text-center'>
                <h3 className='text-xl font-bold leading-none text-primary text-center'>
                  {value}
                </h3>
                <p className='text-sm font-semibold text-black/65 uppercase leading-none tracking-wider'>
                  {tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


  )
}

export default Stats
