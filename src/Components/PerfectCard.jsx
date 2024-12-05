import React from 'react'
import { Button } from '@nextui-org/react';
function PerfectCard() {
  return (
    <section className='flex flex-col md:flex-row items-center justify-center gap-8 px-12 py-8 md:py-16'>
        <div>
            <img src="/Group 16 (2).svg" alt="" />
        </div>

        <div className='space-y-4'>
            <h3 className='text-xl md:text-3xl lg:text-4xl font-semibold'>Find the Perfect Card for You</h3>
            <p className='text-md text-gray-300 max-w-md'>Unlocking the Power of Crypto, Both Virtually and Physically
            Manage your crypto effortlessly and spend it seamlessly with Wern. Our virtual card allows for instant and secure online transactions, while the physical Wern Card empowers you to convert and spend your crypto at millions of merchants worldwide. Experience the flexibility and convenience of both options, all within the secure and user-friendly Wern ecosystem.</p>
            <div>
            <Button variant='solid' radius='full' color='primary' size='md'>Learn More</Button>
            </div>
        </div>       
    </section>
  )
}

export default PerfectCard;