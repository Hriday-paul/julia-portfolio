"use client"
import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { motion } from "motion/react"
import Carousel from './Carousel'
import Link from 'next/link'

const MotionLink = motion(Link)

function Section3() {
  return (
    <div className=' bg-primary/5 overflow-hidden'>
      <div className='container py-10 md:py-14 lg:py-16 xl:py-20 '>

        {/* ------------titles section----------- */}
        <div className='flex flex-row justify-between items-center'>
          <motion.h3
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5, type: "spring", stiffness: 150, damping: 16 } }}
            viewport={{ once: true }}
            className='text-3xl md:text-4xl lg:text-5xl space-x-1'>
            <span className='font-sans font-normal'>Featured</span>
            <span className='font-playfair font-normal italic text-primary'>Works</span>
          </motion.h3>

          <MotionLink
            href={"/art-gallery"}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, type: "spring", stiffness: 180, damping: 20 },
            }}
            viewport={{ once: true }}

            className="group relative overflow-hidden rounded-full border border-zinc-300 px-4 md:px-5 lg:px-7 py-2 md:py-2.5 lg:py-3 text-zinc-700 hover:border-primary hover:text-white transition-colors duration-500 font-poppins"
          >
            <span className="relative z-10 text-xs md:text-sm flex flex-row gap-x-1 items-center">
              See All Art's
              <MdOutlineKeyboardArrowRight className='size-5' />
            </span>
            <span className="absolute inset-0 overflow-hidden rounded-md">
              <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-primary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
            </span>

          </MotionLink>
        </div>

        {/* --------------carousel----------- */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
          viewport={{ once: true }}
          className='pt-6 md:pt-8 xl:pt-10'>
          <Carousel />
        </motion.div>

      </div>
    </div>
  )
}

export default Section3