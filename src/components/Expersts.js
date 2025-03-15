import React from 'react'
import laptop from "../assets/laptop.jpg"

export default function Expersts() {
  return (
    <div className='max-[1240px] max-auto h-auto my-10 mx-10 md:grid grid-cols-2'>
        <div className='col-span-1 md:w-[80%]' >
            <img src={laptop} alt=" " className='inline'/>
        </div>
        <div className='col-span-1 flex flex-col justify-center'>
            <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPORTS</h1>
            <p className='my-2 text-justify'>Answer If the person asking "What's your name?" but is specifically looking for your last name, you can respond by providing your last name only. This response directly addresses their inquiry while pro</p>
        <button className='bg-black align-middle text-white p-3 rounded-md w-[30%]'>Get Started</button>
        </div>
    </div>
  )
}
