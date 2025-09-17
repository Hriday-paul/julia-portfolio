"use client"
import { subType } from '@/app/(main)/event-media-exhabition-workshop/page'
import Image from 'next/image';
import Video from 'next-video';
import React from 'react'
import { motion } from "motion/react"

const MotionImg = motion.create(Image)

function Details({ matchedData }: { matchedData: subType }) {
  return (
    <div className='py-12 md:py-16 lg:py-20 space-y-5 md:space-y-6 lg:space-y-8'>

      <motion.h3 initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
        className='text-2xl font-poppins text-white font-semibold'>{matchedData?.title}</motion.h3>

      <div className='space-y-5'>
        {matchedData?.details?.map((i, indx) => {
          return <motion.p initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.4, delay : 0.1 } }} key={indx} className='text-zinc-300 text-base font-poppins'>{i}</motion.p>
        })}
      </div>

      <div className='flex flex-row flex-wrap gap-5 justify-center w-full'>
        {matchedData?.arts?.map(art => {
          return <MotionImg
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.15 * art?.id } }}
            key={art?.id} alt='art image' src={art?.img} placeholder='blur' className='w-full h-auto' />
        })}
      </div>

      {/* {
              matchedData?.video && <video width="800" height="240" className='w-full max-w-xl mx-auto h-60' controls={true} preload="none" autoPlay muted>
                <source src={matchedData?.video} type="video/mp4" />
              </video>
            } */}

      {
        matchedData?.video && <Video
          src={matchedData?.video}
          controls
          autoPlay
          loop
          muted
          className="w-full max-w-xl mx-auto h-auto"
        />
      }

    </div>
  )
}

export default Details