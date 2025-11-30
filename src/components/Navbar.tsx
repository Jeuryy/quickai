"use client"
import { useRouter } from 'next/navigation';
import {assets} from '../assets/assets'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';

const Navbar = () => {
    const navigate = useRouter();
    const {user} = useUser();
  return (
    <div className="fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center
    py-3 px-4 sm:px-20 xl:px-32">
        <Image src={assets.logo} 
            alt='Logo' 
            className='w-32 sm:w-44 cursor-pointer'
            onClick={() => navigate.push('/')}/>
        {
        user ? 
        <UserButton/> : (
        <SignInButton mode='modal'>
            <button
                className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'
            >
                Get started 
                <ArrowRight className='w-4 h-4'/>
            </button>
        </SignInButton>

        )}
    </div>
  )
}

export default Navbar