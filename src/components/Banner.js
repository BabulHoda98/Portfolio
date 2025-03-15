import React from 'react'
import { ReactTyped } from "react-typed";

export default function Banner() {
  return (
    <div className='bg-[#64aae7] w-full py-[160px]'>
        <div className='max-w-[1200px] mx-auto text-center font-bold'>
            <div className='text-xl md:text-3xl'>Learn with us</div>
            <h1 className='text-5xl md:text-[80px] text-white'>Grow with us.</h1>
            <div className='text-[20px] md:text-[50px] text-white'>Learn 
            <ReactTyped className='pl-3'
             strings={["Web Development","Frotend Developer"]}
             typeSpeed={100}
             loop
             backSpeed={120}
              />
            </div>
        <button className='bg-black align-middle text-white p-3 rounded-md'>Get Started</button>

        </div>
    </div>

    
  )
}
