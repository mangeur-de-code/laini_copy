import React from 'react'

const Contact = () => {

  return (
    <div className='w-full h-fit bg-[#ffe2f3] rounded-md flex flex-col items-center justify-center mb-20 p-20 px-3  lg:p-10'  id='contact'>
      <h2 className='text-2xl lg:text-3xl font-bold text-center px-3 lg:px-0'>Let's discuss your personal goals</h2>
      <div className='flex flex-col lg:flex-row items-center justify-between p-3 lg:p-10 w-full lg:w-full gap-2'>
        <form action="https://formspree.io/f/myyreppd" method='POST' className='flex flex-col lg:flex-col w-full lg:w-2/3 mx-auto items-center gap-5 lg:gap-4'>
        <input type="email" name='email' className='w-full lg:w-3/4 h-14 rounded-md px-4 outline-none' placeholder='Enter your email address' />
        <textarea name="message" className='w-full lg:w-3/4 rounded-md p-4 outline-none h-28' placeholder='Enter your message here'></textarea>
        <button type='submit' className='w-full lg:w-1/2 h-14 rounded-md font-semibold text-white bg-[#f364b8]'>Contact Me</button>
        </form>
      </div>
    </div>
  )
}

export default Contact