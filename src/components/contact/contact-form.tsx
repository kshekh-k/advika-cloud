import React from 'react'
import Formcontact from '../partials/form'

function Contactform() {
  return (
    <>
      <div className='relative flex flex-col bg-primary shadow-1 p-5 lg:p-10 w-full space-y-5'>
        <h2 className="text-3xl lg:text-5xl font-bold text-left leading-snug text-white">Fill the Form</h2>
        <Formcontact />
      </div>
    </>
  )
}

export default Contactform
