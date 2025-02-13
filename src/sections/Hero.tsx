"use client"
import React from 'react'
import ArrowIcon from '@/assets/arrow-right.svg'
import cogImage from '@/assets/cog.png'
import Image from 'next/image'
import CylinderImage from '@/assets/cylinder.png'
import Noodle from '@/assets/noodle.png'
import {motion} from 'framer-motion'


const Hero = () => {
  return (
    <div>
      <section className='pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] overflow-x-clip'>
      <div className="container px-6 md:px-12">
  <div className="md:flex md:flex-row md:justify-between items-center">
 
    <div className="md:w-1/2">
      <div className="text-sm inline-flex border border-black/10 px-3 py-1 rounded-lg tracking-tight">
        Version 2.0 is here
      </div>
      <h1 className="text-5xl md:text-6xl mt-5 font-bold tracking-tighter bg-gradient-to-b from-black to-indigo-800 text-transparent bg-clip-text">
        Pathway to Productivity
      </h1>
      <p className="text-xl text-blue-900 tracking-tight mt-6">
        Celebrate the joy of accomplishment with an app designed to track your
        progress, motivate your efforts, and celebrate your successes.
      </p>
      <div className="flex gap-4 items-center mt-8">
        <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-gray-800">
          Get for Free
        </button>
        <button className="bg-transparent text-black px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center gap-2 tracking-tight">
          <span className="flex justify-center items-center gap-1">
            Learn More
            <ArrowIcon className="h-5 w-5" />
          </span>
        </button>
      </div>
    </div>

    <div className="mt-10 md:mt-0 md:w-1/2h-[648px] md:flex-1 justify-center">
      
    <Image src ={CylinderImage} 
      alt="Cylinder" width={190} 
      height={190}
      className='hidden md:block -top-8 -left-32'
      />

     <Image
        src={Noodle}
        alt="Noodle"
        width={190} 
        height={190}
        className="hidden rotate-30 lg:block absolute top-[424px] right-[-5px]"
      />


      <motion.img
        src={cogImage.src}
        alt="CogWheel"
        className="w-full max-w-md h-auto "
        animate={{
          translateY: [-30, 30]
        }}
        transition={{
          repeat:Infinity,
          repeatType: "mirror",
          duration: 5,
          ease: "easeInOut"
        }}
      />
      
    </div>
  </div>
</div>

      </section>
    </div>
  )
}

export default Hero
