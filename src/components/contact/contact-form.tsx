import React from 'react';
import Formcontact from '../partials/form';

function Contactform() {
  return (
    <>
      <div className='relative flex w-full flex-col space-y-5 bg-primary p-5 shadow-1 lg:p-10'>
        <h2 className='text-left text-3xl font-bold leading-snug text-white lg:text-5xl'>
          Fill the Form
        </h2>
        <Formcontact />
      </div>
    </>
  );
}

export default Contactform;
