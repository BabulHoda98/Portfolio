import React, { useState } from 'react'
import { MdMenu} from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export default function Head() {
  const[toggle,setToggle]=useState(false);  
  return (
    <div className='bg-[#2699fb] p-4'>
      <div className='max-w-[1240px] mx-auto flex justify-between items-center py-[12px]'>
        <div className='text-3xl font-bold'>My PortFolio</div>
        {
          toggle ?
          <MdMenu onClick={()=>setToggle(!toggle)} className='text-white text-3xl md:hidden block'/>
          :
          <IoMdClose onClick={()=>setToggle(!toggle)} className='text-white text-3xl md:hidden block'/>
        }
          <ul className='hidden md:flex text-white gap-[10px]'>
            <li>Home</li>
            <li>Company</li>
            <li>Resources</li>
            <li>About</li>
          </ul>
          {/* Responsive menu  */}
          <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black  top-[92px]
            ${toggle? 'left-[0]': 'left-[-100%]'}
            `}>
            <li className='p-2'>Home</li>
            <li className='p-2'>Home</li>
            <li className='p-2'>Company</li>
            <li className='p-2'>Resources</li>
            <li className='p-2'>About</li>
          </ul>
      </div>
    </div>
  )
}
