import React from 'react'
import  ArrowRight from '@/assets/arrow-right.svg'
import Logo from "@/assets/logosaas.png"
import Image from "next/image"
import MenuIcon from "@/assets/menu.svg"

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-10">
    <div className='flex justify-center items-center py-3 bg-black text-white text-sm'>
     <p className="text-white/60 hidden md:block pr-3">
      Streamline Your Workflow and Boost Your Productivity   
       </p>
     <div className="inline-flex gap-1 items-center">
      <p>
          Get Started For Free
        <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"/>
      </p>
          </div>
          </div>

          <div className="py-3 ">
          <div className="container">
            <div className="flex items-center justify-between">
                    <Image src={Logo} alt="Tribe Light" height={40} width={40}  />
                    <MenuIcon className="h-8 w-8 md:hidden"/>
                    <nav className="hidden md:flex gap-6 text-black/60 items-center" >
                      <a href='#'>About</a>
                      <a href='#'>Features</a>
                      <a href='#'>Customers</a>
                      <a href='#'>Updates</a>
                      <a href='#'>Help</a>
                      <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-itmes justify-center tracking-tight">Get for Free</button>
                    </nav>
                    </div>
          </div>
          </div>
          </header>
  )
}

export default Header
