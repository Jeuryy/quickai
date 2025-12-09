"use client"
import { Button } from "@/components/ui/button"
import {assets} from "../assets/assets"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ArrowBigLeft, ArrowBigLeftIcon, ArrowDownLeft, CornerDownLeft, SkipBack, StepBack } from "lucide-react"

const NotFound = () => {
  const navigate = useRouter();

  return (
    <div className='flex justify-center flex-col items-center h-screen bg-[url(/gradientBackground.png)]'>
{      /*<div className="m-5">
          <Image src={assets.logo}
          className="cursor-pointer" 
          alt='Logo' 
          onClick={() => navigate.push('/')}/>
      </div>*/}
      <div className=' flex flex-col items-center bg-white p-5 rounded-3xl shadow-2xl'>
        <Image src={assets.logo}
          className="cursor-pointer mb-10" 
          alt='Logo' 
          onClick={() => navigate.push('/')}/>
          <p className="text-gray-600"> 
            <span className="font-semibold">404 </span>
            | This page could not be found.
          </p>
          <p 
            className="flex text-primary hover:font-semibold cursor-pointer items-center mt-1" 
            onClick={() => navigate.push('/')}> 
            <CornerDownLeft className="w-4 h-4"/>
             <span className=" ">
               &nbsp;Home
             </span>
          </p>
      </div>
    </div>
  )
}

export default NotFound
