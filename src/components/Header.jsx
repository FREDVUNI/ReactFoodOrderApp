import React from 'react'
import { MdShoppingCart } from 'react-icons/md'
import Logo from '../img/logo.png'
import Avatar from '../img/avatar.png'

const Header = () =>{
    return(
        <div className='fixed z-50 w-screen p-6 px-16'>
            {/* desktop & tablet */}
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <div className='flex items-center gap-2'>
                    <img src={Logo} alt="logo" className="w-10 object-cover"/>
                    <p className="text-headingColor text-xl font-bold"> City</p>
                </div>
                <div className="flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        <li className="text-base text-headingColor  hover:text-headingColor duration-100 transition-all ease cursor-pointer">Home</li>
                        <li className="text-base text-headingColor  hover:text-headingColor duration-100 transition-all ease cursor-pointer">Menu</li>
                        <li className="text-base text-headingColor  hover:text-headingColor duration-100 transition-all ease cursor-pointer">About us</li>
                        <li className="text-base text-headingColor  hover:text-headingColor duration-100 transition-all ease cursor-pointer">Services</li>
                    </ul>
                    <div className="relative flex justify-center items-center">
                        <MdShoppingCart className="text-textColor text-2x1 cursor-pointer"/>
                        <div className="absolute -top-4 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-xs text-white font-semi-bold">2</p>
                        </div>
                    </div>
                    <img src={Avatar} alt="profilePicture" className="w-10 min-w-[40px] h-10 min-h-[40px]drop-shadow-xl"/>
                </div>
            </div>

            {/* mobile */}
            <div className="flex md:hidden w-full h-full">

            </div>
        </div>
    )
}

export default Header