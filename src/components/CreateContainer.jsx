import React,{useState} from 'react'
import { motion } from 'framer-motion'

const CreateContainer = () =>{
    const [title,setTitle] = useState("")
    const [calories,setCalories] = useState("")
    const [price,setPrice] = useState(null)
    const [category,setCategory] = useState(null)
    const [fields,setFields] = useState(true)
    const [alertStatus,setAlertStatus] = useState("danger")
    const [msg,setMsg] = useState(null)
    const [loading,setLoading] = useState(false)

    return(
        <div className="w-full min-h-screen flex items-center justify-center">
            <div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
                {
                    fields && (
                        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className={`w-full p-2 rounded-sm text-center text-lg font-semibold ${alertStatus === "danger" ? "bg-red-400 text-red-800" : "bg-emrald-400 text-emerald-800"}`}>{msg}</motion.p>
                    )
                }
            </div>
        </div>
    )
} 

export default CreateContainer