import React from 'react'
import { heroData } from '../utils/data'

const BannerConatiner = ({text}) => {
  return (
    <section className='w-full py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-[3rem] lg:text-[3.5rem] font-bold tracking-wide text-headingColor'>{text}</p>
            </div>
            <div className='flex'>
            {heroData && heroData.map((data) =>(
                <img key={data.id} src={data.img} alt={data.name} className="w-20 lg:w-40 -mt-10"/>
            ))}
            </div>
        </div>
    </section>
  )
}

export default BannerConatiner