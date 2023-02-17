import React, { useEffect, useState } from 'react'
import { BiMinus,BiPlus } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

const CartItem = ({item,setFlag,flag}) => {
    const [qty,setQty] = useState(item.qty)
    let items = []
    const [{cartItems},dispatch] = useStateValue()

    const cartDispatch = () =>{
        localStorage.setItem("cartItems",JSON.stringify(items))
        dispatch({
            type:actionType.SET_CART,
            cartItems:items
        })
    }

    const updateCart = (action,id) =>{
        if(action == "add"){
            setQty(qty + 1)

            cartItems.map((item) =>{
                if(item.id === id){
                    item.qty += 1
                    setFlag(flag + 1)
                }
            })
            cartDispatch()
        }else{
            if(qty === 1){
                items = cartItems.filter((item) => item.id !== id);
                cartDispatch()
            }else{
                setQty(qty -1)

                cartItems && cartItems.map((item) =>{
                    if(item.id == id){
                        item.qty -= 1
                        setFlag(flag + 1)
                    }
                })
                cartDispatch()
            }
        }
    }

    useEffect(() => {
        items = cartItems;
    }, [qty, items]);

  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
        <img src={item?.imageURL} alt='cart' className='w-20 h-20 max-w-[60px] rounded-full object-contain'/>
        <div className="flex flex-col gap-2">
            <p className="text-base text-gray-50">{item?.title}</p>
            <p className="text-sm block text-gray-300 font-semibold">${parseFloat(item?.price) * qty}</p>
        </div>
        <div className="group flex items-center gap-2 ml-auto cursor-pointer">
            <motion.div whileTap={{ scale:0.75 }}  onClick={() => updateCart("remove",item?.id) }>
                <BiMinus className='text-gray-50' />
            </motion.div>
            <p className="w-5 h-5 rounded-sm bgCartBg text-gray-50 flex items-center justify-center">
                {qty}
            </p>
            <motion.div whileTap={{ scale:0.75 }} onClick={() => updateCart("add",item?.id) }>
                <BiPlus className='text-gray-50'/>
            </motion.div>
        </div>
    </div>
  )
}

export default CartItem