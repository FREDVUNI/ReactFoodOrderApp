import React from 'react'
import { MdShoppingCart,MdAdd,MdLogout } from 'react-icons/md'
import Logo from '../img/logo.png'
import Avatar from '../img/avatar.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config"
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

const Header = () =>{
    const firebaseAuth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const [{user},dispatch] = useStateValue()

    const login = async () =>{
        if(!user){
            const {user:{refreshToken,providerData}} = await signInWithPopup(firebaseAuth,provider)
            dispatch({
                type:actionType.SET_USER,
                user: providerData[0]
            })
            localStorage.setItem("user-profile",JSON.stringify(providerData[0]))
        }
    }

    return(
        <div className='fixed z-50 w-screen p-6 px-16'>
            {/* desktop & tablet */}
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <Link to="/" className='flex items-center gap-2'>
                    <img src={Logo} alt="logo" className="w-10 object-cover"/>
                    <p className="text-headingColor text-xl font-bold"> City</p>
                </Link>
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
                    <div className="relative">
                        < motion.img src={ user ? user.photoURL : Avatar} whileTap={{ scale:0.6 }} alt="profilePicture" className="w-10 min-w-[40px] h-10 min-h-[40px]drop-shadow-xl hover:cursor-pointer rounded-full" onClick={ login }/>
                        <div className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute px-2 py-2 top-12 right-0">
                            <p className="flex items-center gap-3 cursor-pointer hover:color-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                                <MdAdd/> New Item 
                            </p>
                            <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:color-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                                <MdLogout/> Logout 
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className="flex md:hidden w-full h-full">

            </div>
        </div>
    )
}

export default Header