import React from 'react'
import { ReactTyped } from "react-typed";
import Hoda from "../assets/Hoda.jpeg"


export default function Banner2() {
  return (
    <div className='max-[1240px] max-auto h-auto my-10 mx-10 md:grid grid-cols-2'>
        <div className='col-span-1 md:w-[90%]' >

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
            </div>

            <div className='col-span-1 flex flex-col justify-center border border-black'>
                {/* <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPORTS</h1>
                <p className='my-2 text-justify'>Answer If the person asking "What's your name?" but is specifically looking for your last name, you can respond by providing your last name only. This response directly addresses their inquiry while pro</p>
                <button className='bg-black align-middle text-white p-3 rounded-md w-[30%]'>Get Started</button> */}

                <div className='absolute border border-black h-[450px] w-[450px] ml-20 rounded-xl'>
                <img src={Hoda} alt=" " className='inline h-[450px] ml-20'/>
                    <div id='b' className='left'>

                    </div>
                    {/* <div style="position: absolute; left: calc(50% - 31.5px); top: calc(50% - 31.5px); transform: rotate(0deg) translateX(225px) rotate(0deg); animation: 12s linear 0s infinite normal none running counter-rotate-12; --start-angle: 0deg;"> */}
                        {/* <div style="width: 63px;"> */}
                            {/* <img src="/accssets/images/coding/tech-logos/mongo.webp" alt="Icon 1" style="width: 63px; height: 63px;"/> */}
                        {/* <div class="text-center text-sm mt-1 text-gray-800 dark:text-gray-200">MongoDB</div> */}
                    {/* </div> */}
                </div>

            </div>

        
    </div>



    
  )
}
