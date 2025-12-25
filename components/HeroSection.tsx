"use client";
import { Link } from 'lucide-react'
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";
import { Button } from "./ui/moving-border"; 

function HeroSection() {
  return (
    <div 
    className='text-white h-auto md:h-[40rem]  w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden
    mx-auto py-10 md:py-0'
    
    
    
    >



        <div className='p-4 relative z-10 w-full text-center'>
             <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
    <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the art of Music</h1>
    <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
        kshkdjkl ewiopdfiop ifcodipo fcipdop kehfkd
        jikedh ieoirow dui xzoisd eriwoirdewpo feufiref 
        ufiruifu reior ir0feiofii ireoiorpo fy3928- 9-9 fjoie
        e u9ir8u d9ufkljc vir09if04 ofcifoepi0 if04of-04o
    </p>
    <div className='mt-4'> 
        {/* <Link href={"/courses"}> */}
         <Button 
        borderRadius='2rem'
        className="bg-black dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800 "
        >Explopre courses</Button>
        {/* </Link> */}
    </div>
   

        </div>
        
    </div>
  )
}

export default HeroSection




