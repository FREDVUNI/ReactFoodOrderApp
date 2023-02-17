import React, { useState,useEffect } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { RiRefreshFill } from 'react-icons/ri'
import { motion } from 'framer-motion'
import NotFound from '../img/NotFound.svg'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'
import CartItem from './CartItem'

const CartContainer = () => {
    const [{showCart,cartItems,user},dispatch] = useStateValue()
    const [flag, setFlag] = useState(1);
    const [totalAmount,setTotalAmount] = useState(0)
    let deliveryCharge = 2.5
    // let cart = localStorage.getItem("cartItems")

    const toggleCart = () =>{
        dispatch({
            type:actionType.SET_SHOW_CART,
            showCart: !showCart
        })
    }

    const clearCart = ()  =>{
        dispatch({
            type:actionType.SET_CART,
            cartItems: []
        })

        localStorage.setItem("cartItems",JSON.stringify([]))
    }

    useEffect(() =>{
        let amount = cartItems.reduce((acc,item) =>{
            return acc + item.price * item.qty
        },0)
        setTotalAmount(amount)
    },[totalAmount,flag])

    useEffect(() =>{},[showCart])
  return ( 
    <motion.div 
        initial={{ opacity:0,x:200 }}
        animate={{ opacity:1,x:0 }}
        exit={{ opacity:0,x:200 }}
         className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]">
        <div className="w-full flex items-center justify-between p-4 cursor-pointer">
            <motion.div whileTap={{ scale:0.75 }} onClick={toggleCart}>
                <MdOutlineKeyboardBackspace className='text-textColor text-3x1'/>
            </motion.div>
            <p className="text-textColor text-lg font-semibold">cart</p>
            <motion.p whileTap={{ scale:0.75 }} className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md duration-100 ease-in-out transition-all cursor-pointer text-textColor text-base" onClick={() => clearCart()}>
                clear  <RiRefreshFill/> {" "}
            </motion.p>
        </div>
        {cartItems && cartItems.length > 0 ?(
        <div className='w-full h-full bg-gray-100 rounded-t-[2rem] flex flex-col'>
            <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
                {cartItems && cartItems.map((item) =>(
                    <CartItem key={item.id} item={item} flag={flag} setFlag={setFlag}/>
                ))}
            </div>
            <div className='w-full flex-1 bg-cartTotal rounded-t-[1rem] flex flex-col items-center justify-evenly px-8 py-2'>
                    <div className="w-full flex items-center justify-between">
                        <div className="text-gray-400 text-lg">Sub Total</div>
                        <div className="text-gray-400 text-lg">$ {totalAmount}</div>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <div className="text-gray-400 text-lg">Delivery</div>
                        <div className="text-gray-400 text-lg">$ {deliveryCharge}</div>
                    </div>
                    <div className="w-full border-b border-gray-600 my-2"></div>
                    <div className="w-full flex items-center justify-between">
                        <div className="text-gray-400 text-lg">Total</div>
                        <div className="text-gray-400 text-lg">$ {totalAmount + deliveryCharge}</div>
                    </div>

                    {
                        user ? (
                            <motion.button
                                whileTap={{ scale:0.8 }}
                                type="button"
                                className='w-full p-2 rounded-sm bg-orange-500 text-gray-50 text-lg my-2 hover:shadow-lg'
                            >
                                Check Out
                            </motion.button>
                        ):(
                            <motion.button
                                whileTap={{ scale:0.8 }}
                                type="button"
                                className='w-full p-2 rounded-sm bg-orange-500 text-gray-50 text-lg my-2 hover:shadow-lg'
                            >
                                Login
                            </motion.button>
                        )
                    }
                    
                </div>
        </div>
        ):(
        <div className='w-full flex flex-col items-center justify-center'>
            <img src={NotFound}  className="w-300" alt='notFound'/>
            <p className='text-lg text-headingColor font-semibold my-2'>Your cart is currently empty.</p>
        </div>
        )
        }
    </motion.div>
  )
}

export default CartContainer