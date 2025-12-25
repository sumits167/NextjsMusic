"use client"
import { Meteors } from "@/components/ui/meteors";
import React, { useState } from "react";
 
function page() {

    const [inputValue,setInputValue]=useState("");
    const [textArea,setTextArea]=useState('')

    const handleSubmit=()=>{
        console.log("Email=",inputValue);
        console.log("UserMeassage=",textArea);
    }

  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900 py-12 pt-36 relative">
         <Meteors number={40} />
         <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Contact us</h1>
        <p className="text-gray-400 text-center">We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey. </p>
        <input
         placeholder="Your email address"
         type="email"
         className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 mt-10 text-white"
         onChange={(e)=>setInputValue(e.target.value)}
        required
       ></input>

        <textarea 
        placeholder="Your message"
        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 mt-5 text-white"
        onChange={(e)=>setTextArea(e.target.value)}
        required
      ></textarea>
        
        <button  
        className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 mt-5"
        onClick={()=>handleSubmit()}
        >Send message</button>
    </div>
    </div>
  )
}

export default page