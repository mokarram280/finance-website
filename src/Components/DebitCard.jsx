import React from 'react';
import { Button } from '@nextui-org/react';
import { GoArrowRight } from "react-icons/go";

function DebitCard() {
  return (
    <section className='flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-12 py-8 md:py-16'>
        <div className='space-y-4'>
            <h3 className='text-xl md:text-3xl lg:text-4xl font-semibold'>Wern Debit Card</h3>
            <p className='text-md text-gray-300 max-w-md'>More than just a card, it&apos;s a bridge to a new financial experience. Embrace the simplicity and security of spending your Cardano with the Wern Card.</p>
            <div>
            <Button variant='solid' radius='full' color='primary' size='md' endContent={<GoArrowRight />}>Create New Card</Button>
            <p className='text-primary text-sm ml-3 mt-1'>Will be available soon</p>
            </div>
        </div>
        <div>
            <img src="/Group 16.svg" alt="" />
        </div>
    </section>
  )
}

export default DebitCard;