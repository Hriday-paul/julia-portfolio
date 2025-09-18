"use client"
import Image from 'next/image';
import Video from 'next-video';
import React, { useState } from 'react'
import { motion } from "motion/react"
import {
  Lightbox
} from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { useHighLightDetailsQuery } from '@/redux/features/HighLightApi';
import { toast } from 'react-toastify';
import { notFound } from 'next/navigation';
import { blurImg } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

const MotionImg = motion.create(Image)

function Details({ id }: { id: string }) {

  const { isLoading, data: matchedData, isError, isSuccess } = useHighLightDetailsQuery({ id });
  const [open, setOpen] = useState(false)

  if (isError) {
    notFound();
  }


  return (
    <div className='py-12 md:py-16 lg:py-20 space-y-5 md:space-y-6 lg:space-y-8'>

      {isLoading ? <div className='space-y-5'>
        <Skeleton className="h-5 w-1/4 bg-gray-700" />
        <div className='space-y-2'>
          <Skeleton className="h-3 w-full bg-gray-700" />
          <Skeleton className="h-3 w-full bg-gray-700" />
          <Skeleton className="h-3 w-full bg-gray-700" />
          <Skeleton className="h-3 w-full bg-gray-700" />
          <Skeleton className="h-3 w-full bg-gray-700" />
          <Skeleton className="h-3 w-full bg-gray-700" />
          <Skeleton className="h-3 w-2/4 bg-gray-700" />
        </div>
        <Skeleton className="h-64 w-full lg:w-1/2 bg-gray-700" />
      </div> :

        <>

          <motion.h3 initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
            className='text-2xl font-poppins text-white font-semibold'>{matchedData?.title}</motion.h3>

          <div className='space-y-5'>
            {/* {matchedData?.details?.map((i, indx) => {
            return <motion.p initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.1 } }} key={indx} className='text-zinc-300 text-base font-poppins'>{i}</motion.p>
          })} */}


            <motion.p initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.1 } }} className='text-zinc-300 text-base font-poppins'>{matchedData?.description}</motion.p>

          </div>

          <div className='flex flex-row flex-wrap gap-5 justify-center w-full'>
            {matchedData?.images?.map((art, indx) => {
              return <MotionImg
                initial={{ y: 30, opacity: 0 }}
                onClick={() => setOpen(true)}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.15 * indx } }}
                key={art} alt='art image' src={art} placeholder='blur' height={2000} width={2000} blurDataURL={blurImg} className='w-full h-auto cursor-pointer' />
            })}
          </div>

          {
            matchedData?.videos?.map(video => <Video
              src={video}
              controls
              autoPlay
              loop
              muted
              className="w-full max-w-xl mx-auto h-auto"
            />)
          }

          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={matchedData?.images ? matchedData?.images?.map(i => ({ src: i })) : []}
            plugins={[Fullscreen, Zoom]}
            carousel={{ finite: true, }}
            render={{
              buttonPrev: () => null,
              buttonNext: () => null,
            }}
          />

        </>}

    </div>
  )
}

export default Details