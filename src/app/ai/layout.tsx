"use client"
import { assets } from "@/assets/assets"
import Sidebar from "@/components/Sidebar"
import { useUser, SignIn } from "@clerk/nextjs"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Layout = ({children}: {children: React.ReactNode}) => {
  const navigate = useRouter();
  const [sidebar, setSidebar] = useState(false)
  const {user} = useUser();

  return user ? (
    <div className="flex flex-col items-start justify-start h-screen">
        <nav className="w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200">
          <Image src={assets.logo} alt="Logo" 
            onClick={() => navigate.push("/")}
            className="cursor-pointer w-32 sm:w-44"/>
            {
              sidebar ? 
              <X
                onClick={() => setSidebar(false)} 
                className="w-6 h-6 text-gray-600 sm:hidden cursor-pointer"/> 
              : <Menu 
                onClick={() => setSidebar(true)}
                className="w-6 h-6 text-gray-600 sm:hidden cursor-pointer"/> 
            }
        </nav>
        <div className="flex-1 w-full flex h-[calc(100vh-64px)]">
            <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
          <div className="flex-1 bg-[#F4F7FB]">
            {children}
          </div>
        </div>
    </div>
  ) :
  (
    <div className="flex items-center justify-center h-screen">
      <SignIn/>
    </div>
  )
}

export default Layout
