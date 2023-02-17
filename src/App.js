import React,{useEffect} from 'react'
import { Header,MainContainer,CreateContainer } from './components'
import { Routes,Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useStateValue } from './context/StateProvider'
import { getFoodItems } from './utils/fireBaseFunctions'
import { actionType } from './context/reducer'
import Footer from './components/Footer'

function App() {
  const [{foodItems},dispatch] = useStateValue()

  const fetchData = async() =>{
      await getFoodItems()
      .then((data) =>{
        dispatch({
          type: actionType.SET_FOOD_ITEMS,
          foodItems: data
        })
      })
  }

  useEffect(() =>{
    fetchData()
  },[])

  return (
    <AnimatePresence mode='wait'>
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header/>
      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer/>}/>
            <Route path="/create" element={<CreateContainer/>}/>
          </Routes>
      </main>
    </div>
    <Footer/>
    </AnimatePresence>
  );
}

export default App;
