"use client"
import React from "react"
import Image from 'next/image'
import Star from '@/assets/star.png'
import Spring from '@/assets/spring.png'
import ArrowIcon from '@/assets/arrow-right.svg'

const CallToAction = () => {
  return (
    <section className='bg-gradient-to-b from-white to-[#D2DCFF] py-24 relative overflow-hidden'>
      <div className='container relative'>
        <h2 className='text-center relative font-bold tracking-tighter p-5 bg-gradient-to-b md:text-[54px] md:leading-[60px] from-black to-indigo-800 text-transparent bg-clip-text text-3xl max-w-[540px] mx-auto'>Sign Up today for free!</h2>
        <p className='text-center text-[22px] leading-[30px] tracking-tight mt-5'>
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts
        </p>
        <Image src={Star} alt='star' width={360} className='absolute left-[-250px] lg:left-[-150px] top-1/2 transform -translate-y-1/2 sm:left-[-290px]' />
        <Image src={Spring} alt='spring' width={360} className='absolute right-[-220px] top-3.5/5 transform -translate-y-1/2' />
      </div>
      <div className="flex gap-2 mt-10 justify-center">
        <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">Get for free</button>
        <button className="bg-transparent text-black px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center gap-2 tracking-tight">
          <span className="flex justify-center items-center gap-1">
            Learn More
            <ArrowIcon className="h-5 w-5" />
          </span>
        </button>
      </div>
    </section>
  )
}

export default CallToAction