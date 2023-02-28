import React,{ useState } from 'react'
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
    const [isMenu,setIsMenu] = useState(false)
    const firebaseAuth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const [{user,showCart,cartItems},dispatch] = useStateValue()

    const login = async () =>{
        if(!user){
            const {user:{refreshToken,providerData}} = await signInWithPopup(firebaseAuth,provider)
            dispatch({
                type:actionType.SET_USER,
                user: providerData[0]
            })
            localStorage.setItem("user-profile",JSON.stringify(providerData[0]))
        }else{
            setIsMenu(!isMenu)
        }
    }

    const logout = () =>{
        setIsMenu(false)
        localStorage.clear()

        dispatch({
            type: actionType.SET_USER,
            user: null
        })
    }

    const toggleCart = () =>{
        dispatch({
            type:actionType.SET_SHOW_CART,
            showCart: !showCart
        })
    }

    return(
        <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-white'>
            {/* desktop & tablet */}
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <Link to="/" className='flex items-center gap-2' onClick={() => setIsMenu(false)}>
                    <img src={Logo} alt="logo" className="w-10 object-cover"/>
                    <p className="text-headingColor text-xl font-bold"> City</p>
                </Link>
                <div className="flex items-center gap-8">
                    <motion.ul 
                        initial={{ opacity:0,x:200 }}
                        animate={{ opacity:1,x:0 }}
                        exit={{ opacity:0,x:200 }}
                        className="flex items-center gap-8">
                        <li className="text-base text-headingColor  hover:text-headingColor duration-100 transition-all ease cursor-pointer" onClick={() => setIsMenu(false)}>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="text-base text-headingColor  hover:text-headingColor duration-100 transition-all ease cursor-pointer" onClick={() => setIsMenu(false)}>
                        <Link to='/menu'>Menu</Link>
                        </li>
                        <li className="text-base text-headingColor  hover:text-headingColor duration-100 transition-all ease cursor-pointer" onClick={() => setIsMenu(false)}>
                        <Link to='/about-us'>About us</Link>
                        </li>
                        <li className="text-base text-headingColor  hover:text-headingColor duration-100 transition-all ease cursor-pointer" onClick={() => setIsMenu(false)}>
                        <Link to='/services'>Services</Link>
                        </li>
                    </motion.ul>
                    <div className="relative flex justify-center items-center" onClick={toggleCart}>
                        <MdShoppingCart className="text-textColor text-2x1 cursor-pointer"/>
                        {cartItems && cartItems.length > 0 &&(
                            <div className="absolute -top-4 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                                <p className="text-xs text-white font-semi-bold">{cartItems.length}</p>
                            </div>
                        )}
                    </div>
                    <div className="relative">
                        < motion.img src={ user ? user.photoURL : Avatar} whileTap={{ scale:0.6 }} alt="profilePicture" className="w-10 min-w-[40px] h-10 min-h-[40px]drop-shadow-xl hover:cursor-pointer rounded-full" onClick={ login }/>
                        { isMenu &&(
                        <motion.div 
                            initial={{ opacity:0, scale:0.6 }}
                            animate={{ opacity:1, scale:1 }}
                            exit={{ opacity:0, scale:0.6 }}
                            className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute px-2 py-2 top-12 right-0">
                            { user && user.email === 'fredvuni809@gmail.com' &&(
                                <Link to={'/create'}>
                                    <p className="flex items-center gap-3 cursor-pointer hover:color-slate-100 transition-all duration-100 ease-in-out text-textColor text-base" onClick={() => setIsMenu(false)}>
                                        <MdAdd/> New Item 
                                    </p>
                                </Link>
                            )}
                            <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:color-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                                <MdLogout/> Logout 
                            </p>
                        </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className="flex items-center justify-between md:hidden w-full h-full">
                <div className="relative flex justify-center items-center" onClick={toggleCart}>
                    <MdShoppingCart className="text-textColor text-2x1 cursor-pointer"/>
                    {cartItems && cartItems.length > 0 &&(
                        <div className="absolute -top-4 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-xs text-white font-semi-bold">{cartItems.length}</p>
                        </div>
                    )}
                </div>
                <Link to="/" className='flex items-center gap-2'>
                    <img src={Logo} alt="logo" className="w-10 object-cover"/>
                    <p className="text-headingColor text-xl font-bold"> City</p>
                </Link>
                <div className="relative">
                    <motion.img src={ user ? user.photoURL : Avatar} whileTap={{ scale:0.6 }} alt="profilePicture" className="w-10 min-w-[40px] h-10 min-h-[40px]drop-shadow-xl hover:cursor-pointer rounded-full" onClick={ login }/>
                    { isMenu &&(
                    <motion.div 
                        initial={{ opacity:0, scale:0.6 }}
                        animate={{ opacity:1, scale:1 }}
                        exit={{ opacity:0, scale:0.6 }}
                        className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute px-2 py-2 top-12 right-0">
                        <ul className="flex flex-col px-2 py-1 gap-3">
                            <li className="text-base text-headingColor  hover:text-headingColor duration-100 transition-all ease cursor-pointer">Home</li>
                            <li className="text-base text-headingColor  hover:text-headingColor duration-100 transition-all ease cursor-pointer">Menu</li>
                            <li className="text-base text-headingColor  hover:text-headingColor duration-100 transition-all ease cursor-pointer">About us</li>
                            <li className="text-base text-headingColor  hover:text-headingColor duration-100 transition-all ease cursor-pointer">Services</li>
                        </ul>
                        { user && user.email === 'fredvuni809@gmail.com' &&(
                            <Link to={'/create'}>
                                <hr className="mt-2"/>
                                <p className="px-2 py-1 flex items-center gap-3 cursor-pointer hover:color-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                                    <MdAdd/> New Item 
                                </p>
                            </Link>
                        )}
                        <p className="px-2 py-1 shadow-md flex items-center gap-3 cursor-pointer hover:color-slate-100 hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base bg-gray-200">
                            <MdLogout onClick={ logout }/> Logout 
                        </p>
                    </motion.div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header