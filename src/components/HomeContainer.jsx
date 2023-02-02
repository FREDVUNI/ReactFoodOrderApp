import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import { heroData } from '../utils/data'

const HomeContainer = () =>{
    return(
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
                <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
                    <p className="text-base text-orange-500 font-semibold">Bike Delivery</p>
                    <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
                        <img src={Delivery} alt='delivery-mage' className="w-full h-full object-contain"/>
                    </div>
                </div>
                <p className="text-[3rem] lg:text-[3.5rem] font-bold tracking-wide text-headingColor">
                The Fastest Delivery in
                <span className="text-orange-600 text-[3rem] lg:text-[3rem]">
                    Your City
                </span>
                </p>
                <p className="text-base text-textColor md:text-left md:w-[80%]">
                    lorem ispsum lorem ispsum The Fastest Delivery In lorem ispsum lorem ispsum The Fastest Delivery In
                    lorem ispsum lorem ispsum The Fastest Delivery In lorem ispsum lorem ispsum The Fastest Delivery In
                </p>
                <button type="button" className="bg-gradient-to-br from-orange-400 to-orange-500 md:w-auto w-full px-4 py-2 hover:shadow-lg transition-all ease-in-out duration-100">Order Now</button>
            </div>
            <div className="py-2 flex-1 flex items-center relative">
                <img src={HeroBg} className="ml-auto h-420 w-full lg:w-auto lg:h-650" alt="hero-bg"/>
                <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap">
                { heroData && heroData.map((data) =>(
                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrapbackdrop-blur-md rounded-3xl w-100" key={data.id}>
                        <div className="basis-1/3 flex-1">
                        <img src={data.img} className="w-20 lg:w-40 -mt-10 lg:-mt-20" alt={data.name}/>
                            <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">{data.name}</p>
                            <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">{data.details}</p>
                            <p className="text-sm font-semibold text-headingColor">
                                <span className="text-xs text-red-600">$</span> {data.price}
                            </p>
                        </div>
                    </div>
                    // overflow-y-hidden
                    // <div className="lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg" key={data.id}>
                    //     <img src={data.img} className="w-40 -mt-20" alt={data.name}/>
                    //     <p className="text-xl font-semibold text-textColor mt-4">{data.name}</p>
                    //     <p className="text-sm text-lighttextGray font-semibold my-3">{data.details}</p>
                    //     <p className="text-sm font-semibold text-headingColor">
                    //         <span className="text-xs text-red-600">$</span> {data.price}
                    //     </p>
                    // </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default HomeContainer