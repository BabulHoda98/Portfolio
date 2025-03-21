import React from 'react'

export default function NewsLetter() {
  return (
    <div className='bg-[#2699fb] p-4'>
      <div className='max-w-[1240px] md:flex justify-between py-[50px]'>
        <div className='m-2'>
          <h1 className='text-white font-bold text-[20] md:text-[40px]'>Want to learn latest I.T skills?</h1>
          <span className='text-white'>Sign up to our newsletter and stay up to date</span>
        </div>
        <div className="m-2">
          <input type="text" className="sm:w-ful mb-2 p-3 mr-2 text-slate-600 " placeholder='Email'/>
          <button className='bg-black align-middle text-white p-3 rounded-md'>Get Started</button>
          <p className='text-white'>We care bout the protection of your data.Read our<br/><a className='text-black' href='#'>Privacy Policy</a></p>
        </div>
      </div>
    </div>
  )
}