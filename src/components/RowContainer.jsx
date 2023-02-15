import React, { useEffect,useRef,useState } from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { motion } from 'framer-motion'
import NotFound from '../img/NotFound.svg'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

const RowContainer = ({flag,data,scrollValue}) => {
    const rowContainer = useRef()
    const [{cartItems},dispatch] = useStateValue()
    const [items,setItems] = useState([])
        
    let cart = JSON.parse(localStorage.getItem("cartItems"))

    const addToCart = () =>{
        dispatch({
            type: actionType.SET_CART,
            cartItems:items
        })
        localStorage.setItem("cartItems",JSON.stringify(items))
    }

    useEffect(() =>{
        rowContainer.current.scrollLeft += scrollValue
    },[scrollValue])

    useEffect(() =>{
        addToCart()
    },[items])

  return (
    <div className={`w-full flex items-center gap-3 my-12 scroll-smooth ${flag ? 'overflow-x-scroll scrollbar-none':'overflow-hidden flex-wrap justify-center'}`} ref={rowContainer}>
        {
          data && data.length ? (data.map((item) =>(
            <div key={item?.id} className='w-275 min-w-[300px] md:w-340 md:min-w[340px] h-[250px] bg-cardOverlay rounded-lg p-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-between'>
            <div className='w-full flex items-center justify-between'>
                <motion.div whileHover={{ scale:1.2 }} className='w-40 h-40 -mt-8 drop-shadow-2x1'>
                    <img
                        src={item?.imageURL} alt="categories" className='w-full h-full object-contain'
                    />
                </motion.div>
                <motion.div 
                    whileTap={{ scale:0.75 }}
                    className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'
                    onClick={() => setItems([...cartItems,item])
                    }
                >
                    <MdShoppingCart className='text-white'/>
                </motion.div>
            </div>
            <div className="w-full flex flex-col items-end justify-end">
                <p className="text-textColor font-semibold text-base md:text-lg">
                    {item?.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">{item?.calories} calories</p>
                <div className="flex items-center gap-8">
                    <p className="text-lg text-headingColor font-semibold">
                        <span className="text-sm text-red-500">{item.price ? `$`: ''}</span> {item?.price}
                    </p>
                </div>
            </div>
        </div>
          ))
          ):(
            <div className='w-full flex flex-col items-center justify-center'>
                <img src={NotFound} className="h-340" alt='notFound'/>
                <p className='text-xl text-headingColor font-semibold my-2'>There are no items available.</p>
            </div>
          )  
        }
    </div>
  )
}

export default RowContainer