import React from 'react'
import {Button} from '@nextui-org/react'
import { GoArrowRight } from "react-icons/go";
function Hero() {
  return (
         <section className='w-full'>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-8 py-4 md:py-12'>
               <div className='w-full md:w-1/2 space-y-8 md:mb-12 px-16'>
                 <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-xl'>Spend your Cardano anywhere, anytime.</h1>
                 <p className='text-md md:text-lg text-gray-400 max-w-xl'>Our user-friendly platform enables businesses and individuals to seamlessly convert and spend their crypto for everyday purchases.</p>

                 <div className='flex gap-4 items-center'>
                 <Button variant='solid' color='primary' radius='full' size='md' endContent={<GoArrowRight />}>
                  Get Started                  
                 </Button>
                 </div>
               </div>
               <div className='w-full md:w-1/2 mt-16 flex-1'>
                <img src="/Group 21.svg" alt="" />
               </div>
            </div>
         </section>
  )
}

export default Hero;