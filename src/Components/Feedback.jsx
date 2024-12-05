import React from 'react'

function Feedback() {
    const reviews = [
        {
            icon:'Frame.svg',
            image:'Ellipse.png',
            review:"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
            name:'Hadid Khan',
            status:'UIUX Designer'
        },
        {
            icon:'Frame.svg',
            image:'Ellipse (1).png',
            review:"It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment.",
            name:'Wade Warren',
            status:'Web Designer'
        },
        {
            icon:'Frame.svg',
            image:'Ellipse (2).png',
            review:"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking.",
            name:'Jenny Wilson',
            status:'Trust Administrator'
        }
    ]
  return (
    <section className='py-8 md:py-10 lg:py-12 px-8 md:px-12 lg:px-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                reviews.map((item,index)=>(
                    <div key={index} className='bg-[#27322F3D] md:backdrop-blur-sm space-y-4 md:space-y-8 lg:space-y-12 py-8 px-4 rounded-2xl'>
                        <div>
                            <img src={item.icon} alt="" />
                        </div>
                            <p className='text-lg md:text-xl font-light text-white'>&quot;{item.review}&quot;</p>
                        <div className='flex items-center justify-start gap-2'>
                            <img src={item.image} alt="" />
                        
                        <div className='mb-3'>
                            <h5 className='text-lg text-white'>{item.name}</h5>
                            <p className='text-xs text-[#ADB2B1]'>{item.status}</p>
                        </div>
                     </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Feedback;