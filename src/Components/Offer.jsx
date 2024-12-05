import React from 'react'

function Offer() {
    const OurOffer =[
        {
            title:'Cardano Debit-Cards',
            description:'Cardano, simplified. The debit card that makes crypto spending easy.',
            linkImg:'security.svg'
        },
        {
            title:'On & Off Ramp',
            description:'Fiat meets crypto, effortlessly buy, sell, and manage.',
            linkImg:'Group 23.svg'
        },
        {
            title:'Solutions for business',
            description:'Empowering businesses with effortless crypto payments and seamless fiat solutions.',
            linkImg:'analytics.svg'
        }
    ]
  return (
    <section className='space-y-12 px-12 md:py-24 py-8'>
        <h3 className='text-2xl md:text-3xl lg:text-4xl leading-tight font-bold text-center mt-4 md:mt-16 lg:mt-24'>What do we offer?</h3>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
         {
            OurOffer.map((item,index)=>(
                <div key={index} className='flex gap-4'>
                    <div className='bg-[#3D3F54] flex items-center justify-center max-h-12 max-w-12 rounded-2xl w-4/5'>
                       <img className='h-6 w-6' src={item.linkImg} alt="" />
                    </div>
                    <div>                     
                        <h3 className='text-xl font-bold'>{item.title}</h3>
                        <p className='text-sm text-gray-400 max-w-64'>{item.description}</p>
                    </div>
                </div>
            ))
        }
         </div>
    </section>
  )
}

export default Offer;