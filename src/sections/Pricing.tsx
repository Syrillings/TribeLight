"use client"
import React from 'react'
import {twMerge} from 'tailwind-merge'
import CheckIcon from'@/assets/check.svg'

const Pricing = () => {
  const pricingTiers = [
    {
      title: "Free",
      monthlyPrice: 0,
      buttonText: "Get started for free",
      popular: false,
      inverse: false,
      features: [
        "Up to 5 project members",
        "Unlimited tasks and projects",
        "2GB storage",
        "Integrations",
        "Basic support",
      ],
    },
    {
      title: "Pro",
      monthlyPrice: 3000,
      buttonText: "Sign up now",
      popular: true,
      inverse: true,
      features: [
        "Up to 50 project members",
        "Unlimited tasks and projects",
        "50GB storage",
        "Integrations",
        "Priority support",
        "Advanced support",
        "Export support",
      ],
    },
    {
      title: "Business",
      monthlyPrice: 10000,
      buttonText: "Sign up now",
      popular: false,
      inverse: false,
      features: [
        "Up to 5 project members",
        "Unlimited tasks and projects",
        "200GB storage",
        "Integrations",
        "Dedicated account manager",
        "Custom fields",
        "Advanced analytics",
        "Export capabilities",
        "API access",
        "Advanced security features",
      ],
    },
  ];
  return (
    <section>
<div className="bg-white">
      <h2 className='text-center font-bold tracking-tighter p-5 bg-gradient-to-b md:text-[54px] md:leading-[60px] from-black to-indigo-800 text-transparent bg-clip-text text-3xl max-w-[540px] mx-auto'>Pricing</h2>
      <p  className='text-center text-[22px] leading-[30px] tracking-tight mt-5'>Free forever. Upgrade for unlimited tasks, better 
        security and exclusive features</p>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row  lg:justify-center ">
          {pricingTiers.map(
            ({ title, monthlyPrice, buttonText, popular, inverse, features})=>(

 <div className={twMerge("p-10 border max-w-xs w-full border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA]", inverse === true && 'border-black bg-black text-white')}>
<div className="flex justify-between">
  <h3 className={twMerge("text-lg text-black/50", inverse===true && "text-white/60")}>{title}</h3>
  
   
 </div>
 <div className="flex iems-baseline gap-1 mt-[30px]">
   <span className='text-4xl font-bold tracking-tighter leading-none'>₦{monthlyPrice}</span>
   <span className={twMerge("tracking-tight font-bold text-black/50 mt-[10px]", inverse===true && "text-white/60")}>/month</span>
   </div>
   <button className={twMerge("bg-black text-white w-full px-4 mt-[30px] py-2 p-6 rounded-lg font-medium inline-flex align-items justify-center tracking-tight", inverse===true && "text-black bg-white")}>{buttonText}</button>
   <ul className="flex flex-col mt-8 gap-5">
    {features.map(feature => (
      <li className = "text-sm flex items-center gap-4">
        <CheckIcon className="h-6 w-6"/>
     <span>{feature}</span>
      </li>
    ))}
   </ul>
</div>

          ))}
           
      </div>
      </div>
        </section>
  )  
}

export default Pricing

