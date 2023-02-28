import React,{ useState,useEffect } from 'react'
import BannerConatiner from '../components/BannerConatiner'
import { motion } from 'framer-motion'
import { MdChevronLeft,MdChevronRight } from 'react-icons/md'
import { RowContainer } from '../components'
import { useStateValue } from '../context/StateProvider'
import CartContainer from '../components/CartContainer'
import MenuContainer from '../components/MainContainer'

const Menu = () => {
  const [{foodItems,showCart},dispatch] = useStateValue()

  const [scrollValue,setScrollValue] = useState(0)

  useEffect(() =>{},[scrollValue,showCart])

  return (
    <div>
      <BannerConatiner text={'Exciting Menu'}/>
        <section className='w-full my-6'>
          <div className='w-full flex items-center justify-between'>
              <p className='text-3x1 font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600'>
                  Our fresh & healthy fruits
              </p>
              <div className='hidden md:flex gap-3 items-center'>
                  <motion.div 
                      whileTap={{ scale:0.75 }}
                      className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center'
                      onClick={ () => setScrollValue(-200) }
                      >
                          <MdChevronLeft className='text-lg text-white'/>
                  </motion.div>
                  <motion.div 
                      whileTap={{ scale:0.75 }}
                      className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center'
                      onClick={ ()=> setScrollValue(200)  }>
                          <MdChevronRight className='text-lg text-white'/>
                  </motion.div>
              </div>
          </div>
          <RowContainer flag={true} scrollValue={scrollValue} data={foodItems?.filter((item) => item.category === 'Fruits' )}/>

          <div className='w-full flex items-center justify-between'>
              <p className='text-3x1 font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600'>
                  Chicken
              </p>
              <div className='hidden md:flex gap-3 items-center'>
                  <motion.div 
                      whileTap={{ scale:0.75 }}
                      className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center'
                      onClick={ () => setScrollValue(-200) }
                      >
                          <MdChevronLeft className='text-lg text-white'/>
                  </motion.div>
                  <motion.div 
                      whileTap={{ scale:0.75 }}
                      className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center'
                      onClick={ ()=> setScrollValue(200)  }>
                          <MdChevronRight className='text-lg text-white'/>
                  </motion.div>
              </div>
          </div>
          <RowContainer flag={true} scrollValue={scrollValue} data={foodItems?.filter((item) => item.category === 'Chicken' )}/>

          <div className='w-full flex items-center justify-between'>
              <p className='text-3x1 font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600'>
                Soft Drinks
              </p>
              <div className='hidden md:flex gap-3 items-center'>
                  <motion.div 
                      whileTap={{ scale:0.75 }}
                      className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center'
                      onClick={ () => setScrollValue(-200) }
                      >
                          <MdChevronLeft className='text-lg text-white'/>
                  </motion.div>
                  <motion.div 
                      whileTap={{ scale:0.75 }}
                      className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center'
                      onClick={ ()=> setScrollValue(200)  }>
                          <MdChevronRight className='text-lg text-white'/>
                  </motion.div>
              </div>
          </div>
          <RowContainer flag={true} scrollValue={scrollValue} data={foodItems?.filter((item) => item.category === 'soft drinks' )}/>
          
          <div className='w-full flex items-center justify-between'>
              <p className='text-3x1 font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600'>
                  Ice Cream
              </p>
              <div className='hidden md:flex gap-3 items-center'>
                  <motion.div 
                      whileTap={{ scale:0.75 }}
                      className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center'
                      onClick={ () => setScrollValue(-200) }
                      >
                          <MdChevronLeft className='text-lg text-white'/>
                  </motion.div>
                  <motion.div 
                      whileTap={{ scale:0.75 }}
                      className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center'
                      onClick={ ()=> setScrollValue(200)  }>
                          <MdChevronRight className='text-lg text-white'/>
                  </motion.div>
              </div>
          </div>
          <RowContainer flag={true} scrollValue={scrollValue} data={foodItems?.filter((item) => item.category === 'Ice cream' )}/>

        </section>
          {
              showCart && (<CartContainer/>)
          }
    </div>
  )
}

export default Menu