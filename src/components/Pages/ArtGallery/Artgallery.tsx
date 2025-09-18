"use client"
import React, { useState } from 'react'
import Image from 'next/image'

import { motion } from "motion/react"
import { useAllArtsQuery } from '@/redux/features/ArtApi'
import { IArt } from '@/app/api/arts/ArtModel'
import { blurImg } from '@/lib/utils'
import ArtSkeleton from './ArtSkeleton';
import {
    Lightbox
} from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

function Artgallery() {

    const { isLoading, isError, isSuccess, data } = useAllArtsQuery();

    if (isLoading) {
        return <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
            <ArtSkeleton />
            <ArtSkeleton />
            <ArtSkeleton />
            <ArtSkeleton />
            <ArtSkeleton />
        </div>
    }
    if (isError) {
        return <></>
    }

    return (
        <div className='mt-10'>
            {
                (data && isSuccess) && data?.map((project) => {
                    return <div key={project?.titleId} className='relative pb-14 md:pb-20 lg:pb-24 xl:pb-28 space-y-8'>
                        <div className='overflow-hidden whitespace-nowrap'>
                            <motion.h5
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0, transition: { duration: 0.4 } }}
                                viewport={{ once: true }}
                                className='font-poppins text-white font-semibold text-xl md:text-2xl lg:text-3xl text-center'>{project?.titleName}</motion.h5>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                project?.arts?.map((i, indx) => {
                                    return <ArtCard key={i?._id} art={i} indx={indx} arts={project?.arts} />
                                })
                            }
                        </div>

                    </div>
                })
            }

        </div>
    )
}

export default Artgallery;


const ArtCard = ({ art, indx }: {
    art: IArt,
    indx: number,
    arts : IArt[]
}) => {

    const [open, setOpen] = useState(false)

    const {
        _id,
        image,
        name,
        media,
        dimension
    } = art;

    return <motion.div initial={{ y: 10, opacity: 0 }}
        whileInView={{
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                delay: 0.1 * indx
            },
        }} viewport={{ once: true }} className='bg-slate-900/40 p-5 rounded-xl border border-zinc-700'>
        <Image onClick={() => setOpen(true)} src={image} alt='art image' className='w-full h-auto cursor-pointer' height={5000} width={5000} placeholder='blur' blurDataURL={blurImg} />

        <div className='space-y-1.5 mt-5'>
            <p className='text-primary font-poppins text-sm font-medium'>
                Name :
                <span className='text-white ml-1'>{name}</span>
            </p>
            <p className='text-primary font-poppins text-sm font-medium'>
                Media :
                <span className='text-white ml-1'>{media}</span>
            </p>
            <p className='text-primary font-poppins text-sm font-medium'>
                Dimensions :
                <span className='text-white ml-1'>{dimension}</span>
            </p>
        </div>

        <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={[{ src: image, height: 5000, width: 5000 }]}
            // render={{ slide: NextJsImage }}
            plugins={[Fullscreen, Zoom]}
            carousel={{ finite: true,  }}
            render={{
                buttonPrev: () => null,
                buttonNext: () => null,
            }}
        />

    </motion.div>
}