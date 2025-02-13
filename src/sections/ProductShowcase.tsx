"use client"
import React from 'react'
import ProductImage from '@/assets/product-image.png'
import Pyramid from'@/assets/pyramid.png'
import Tube from'@/assets/tube.png'
import Image from 'next/image'

const ProductShowcase = () => {
  return (
    <section className="overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to [#D2DCFF] py-24">
    <div className="container">
      <div className="max-w-[540px] mx-auto">
      <div className="flex justify-center">
      <div className="text-sm inline-flex border border-black/10 px-3 py-1 rounded-lg tracking-tight">Boost Your Productivity
      </div>
      </div>
    <h2  className='text-center font-bold tracking-tighter bg-gradient-to-b md:text-[54px] md:leading-[60px] from-black to-indigo-800 text-transparent bg-clip-text text-3xl'>A more effective way to track progress</h2>
   <div>
    <p className='text-center text-[22px] leading-[30px] tracking-tight mt-5'>Effortlessly turn your ideas into a SAAS webite in just minutes with this template</p>
    </div>
    </div>
   
    <div className='relative'>
    <Image src={Pyramid} alt="Pyramid" className="md:block absolute hidden -right-36 -top-[60px]" height={262} width={262}/>
    <Image src={Tube} alt="Pyramid" className="md:block absolute hidden -left-36 top-60" height={262} width={262}/>
    <Image src={ProductImage} alt="Product Showcase" className="mt-10"/>
    </div>
    </div>
    </section>
  )
}

export default ProductShowcase

