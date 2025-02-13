"use client"
import React from 'react'
import Image from 'next/image'
import acmeLogo from '@/assets/logo-acme.png'
import pulseLogo from '@/assets/logo-pulse.png'
import quantumLogo from '@/assets/logo-quantum.png'
import echoLogo from '@/assets/logo-echo.png'
import CelestialLogo from '@/assets/logo-celestial.png'
//import apexLogo from '@/asets/logo-apex.png';

const LogoTicker = () => {
  return (
    <div className="py-8 bg-white md:py-12">
      <div className="container">
        <div className="flex overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black, transparent)' }}>
          <div className="flex gap-14 flex-none animate-scroll">
            <Image src={acmeLogo} alt="Acme" className="logo-ticker-image" />
            <Image src={quantumLogo} alt="Quantum" className="logo-ticker-image" />
            <Image src={echoLogo} alt="Echo" className="logo-ticker-image" />
            <Image src={CelestialLogo} alt="Celestial" className="logo-ticker-image" />
            <Image src={pulseLogo} alt="Pulse" className="logo-ticker-image" />
            <Image src={acmeLogo} alt="Acme" className="logo-ticker-image" />
            <Image src={quantumLogo} alt="Quantum" className="logo-ticker-image" />
            <Image src={echoLogo} alt="Echo" className="logo-ticker-image" />
            <Image src={CelestialLogo} alt="Celestial" className="logo-ticker-image" />
            <Image src={pulseLogo} alt="Pulse" className="logo-ticker-image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoTicker