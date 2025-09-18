"use client"
import Image from 'next/image'
import React from 'react'
import heroImg from "../../../../../public/hero-bg.png"
import heroImg1 from "../../../../../public/media/international artists exhibition 2024_metro arts centennial arts center_julia tong.jpg"
import Its_me from './Its_me'
import { motion } from "motion/react"
import Marquee from 'react-fast-marquee'

function Section1() {
    return (
        <div>
            <div className="relative">
                <Image src={heroImg1} alt="Juliyatong hero-image" placeholder='blur' className='w-full h-80 md:h-[450px] lg:h-screen object-cover' />

                {/* w-full h-72 md:h-[450px] lg:h-[600px] xl:max-h-[800px] 2xl:max-h-[850px] object-cover */}

                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/40 to-black/0 z-10 h-full">
                    <div className='relative h-full w-full container'>

                        <div className='flex flex-row gap-y-5 justify-between absolute left-0 top-1/2 w-full -mt-5 md:-mt-14 lg:-mt-24 xl:-mt-32 items-center container'>

                            <Its_me text="it's me" className="text-4xl md:text-5xl lg:text-7xl xl:text-9xl leading-none" delay={0.1} speed={0.06} />

                            <motion.p initial={{y : 25, opacity : 0}} animate={{y : 0, opacity : 1, transition : {duration : 0.5, delay : 0.7}}} className='text-white font-poppins max-w-60 text-sm md:text-base hidden md:block'>passionate and creative artist with lots of years of experience</motion.p>
                        </div>

                    </div>

                    <div className='flex w-full absolute left-0 -bottom-5 md:-bottom-6 lg:-bottom-10 xl:-bottom-[68px]'>

                        <Marquee className='overflow-hidden' direction='left' autoFill={true} loop={0}
                            // gradient={true} gradientColor='#232323'
                            speed={80}>
                            <h1 className="text-8xl md:text-9xl lg:text-[200px] xl:text-[340px] leading-none font-engula text-white uppercase pr-6 md:pr-10 lg:pr-14 xl:pr-16">
                                Julia Tong Artist
                            </h1>
                        </Marquee>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Section1