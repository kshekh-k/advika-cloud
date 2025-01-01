import React from 'react';
import { stats } from '@/data/stats';
function Stats() {
  return (
    <div className='container'>
      <div className='max-w-full overflow-auto py-5 xl:overflow-visible xl:py-0'>
        <div className='flex min-w-[1200px] justify-between gap-3 xl:grid xl:min-w-0 xl:grid-cols-6 xl:py-10'>
          {stats.map(({ id, icon: Icon, value, tagline }) => (
            <div
              id={`item-${id}`}
              key={`item-${id}`}
              className={`flex w-60 shrink-0 flex-col items-center justify-center gap-5 bg-black/5 px-3 py-5 xl:w-auto`}
            >
              <div className='flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-white xl:size-11'>
                <Icon className='size-7' />
              </div>
              <div className='space-y-1.5 text-center'>
                <h3 className='text-center text-xl font-bold leading-none text-primary'>
                  {value}
                </h3>
                <p className='text-sm font-semibold uppercase leading-none tracking-wider text-black/65'>
                  {tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;
