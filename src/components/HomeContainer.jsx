import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import IceCream from '../img/i1.png'

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
                <p className="text-[2rem] lg:text-[3rem] font-bold tracking-wide text-headingColor">
                    The fastest delivery in <span className="text-orange-600 text-[2rem] lg:text-[3rem]">Your City</span>
                </p>
                <p className="text-base text-textColor md:text-left md:w-[80%]">
                    lorem ispsum lorem ispsum The Fastest Delivery In lorem ispsum lorem ispsum The Fastest Delivery In
                    lorem ispsum lorem ispsum The Fastest Delivery In lorem ispsum lorem ispsum The Fastest Delivery In
                </p>
                <button type="button" className="bg-gradient-to-br from-orange-400 to-orange-500 md:w-auto w-full px-4 py-2 hover:shadow-lg transition-all ease-in-out duration-100">Order Now</button>
            </div>
            <div className="py-2 flex-1 flex items-center relative">
                <img src={HeroBg} className="ml-auto h-420 w-full lg:w-auto lg:h-650" alt="hero-bg"/>
                <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center px-32 py-4">
                    <div className="w-190 p-2 bg-cardOverlay backdrop-blur-md rounded-md flex flex-col items-center justify-center">
                        <img src={IceCream} className="w-40 -mt-20" alt="ice-cream"/>
                        <p className="text-base font-semibold text-textColor mt-4">Ice cream</p>
                        <p className="text-xl text-lighttextGray font-semibold my-3">Chocolate & vanilla flavor</p>
                        <p className="text-sm font-semibold text-headingColor">
                            <span className="text-sm text-red-600">$</span> 5.45
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeContainer