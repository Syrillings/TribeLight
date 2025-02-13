"use client"
import React from 'react'
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import {twMerge} from 'tailwind-merge';
import Image from 'next/image';

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Tribe Light instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "David Omowunmi",
    username: "@david_o",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  }
];

const FirstColumn = testimonials.slice(0,3);
const SecondColumn = testimonials.slice(3,6);
const ThirdColumn = testimonials.slice(6,9);

const TestimonialColumns = (props: {className?: string; testimonials: typeof testimonials}) => (
  <div className={twMerge("flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]", props.className)}>
    {props.testimonials.map(({ text, imageSrc, name, username }, index) => (
      <div key={index} className="p-10 border max-w-xs w-full border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA]">
        <div>{text}</div>
        <div className='flex items-center gap-2 mt-5'>
          <Image src={imageSrc} 
            alt={name} 
            width={40} 
            height={40} 
            className="rounded-full"/>
        </div>
        <div className="flex flex-col">
          <div className="font-medium tracking-tight leading-5 mt-2">{name}</div>
          <div className="font-medium tracking-tight leading-5 mt-2">{username}</div>
        </div>
      </div>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-white py-0 px-0">
      <div className="container">
        <div>
          <h2 className='text-center font-bold tracking-tighter bg-gradient-to-b md:text-[54px] md:leading-[60px] from-black to-indigo-800 text-transparent bg-clip-text text-3xl pt-20 mb-5 max-w-[540px] mx-auto'>
            What our Users Have to Say
          </h2>
          <div>
            <p className='text-center text-[22px] leading-[30px] tracking-tight'>
              From intuitive designs to powerful features, our app has<br/> become an essential tool for users around the world
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-6">
          <TestimonialColumns testimonials={FirstColumn} />
          <TestimonialColumns testimonials={SecondColumn} className='hidden md:flex'/>
          <TestimonialColumns testimonials={ThirdColumn} className='hidden lg:flex'/>
        </div>
      </div>
    </section>
  );
};
testimonials
export default Testimonials;
