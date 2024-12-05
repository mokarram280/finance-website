import React from 'react';

const listA =['Investors','Features','Book a demo','Security '];
const listB =['Credits Cards','Gift Cards','Savings accounts','NFT'];
const listC =['Free rewards','Documentation','Affiliate program'];
const listD =['Changelog','License','Site Maps','News'];

const linkList = (title, list) =>(
    <div className='space-y-4 min-w-fit'>
        <h6 className='font-bold'>{title}</h6>
        <ul className='space-y-2'>
            {
                list.map((item,index)=>(
                    <li key={index} className='text-gray-500'>
                        {item}
                    </li>
            ))}
        </ul>
    </div>
)

function Footer() {
  return (
    <footer className='bg-[#2928343D] md:backdrop-blur-sm mt-8 md:mt-16 lg:mt-32'>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-5 gap-x-2.5 lg:gap-8 py-12 px-8 md:px-16 lg:px-20 max-w-[1400px] mx-auto w-full'>
            <div className='space-y-2 col-span-2 mb-8 md:mb-0'>
                <img src="/logo (1).svg" alt="" />
                <p className='text-gray-500 text-sm max-w-60'>Discover the power of our secure and rewarding credit cards</p>
            </div>
            {linkList('About us', listA)}
            {linkList('Products', listB)}
            {linkList('Useful Links', listC)}
            {linkList('Social', listD)}
        </div>
    </footer>
  )
}

export default Footer;