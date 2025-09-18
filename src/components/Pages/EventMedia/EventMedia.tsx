"use client"
import React from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
import Link from 'next/link'
import { useAllHighLightQuery } from '@/redux/features/HighLightApi'
import { IHighLight } from '@/app/api/highlights/HighLightsModel'
import { blurImg } from '@/lib/utils'
import ArtSkeleton from '../ArtGallery/ArtSkeleton'

function EventMedia() {

    const { isLoading, isError, isSuccess, data: highlights } = useAllHighLightQuery();

    const events = (highlights && isSuccess) ? highlights?.filter(i => i?.category == "Events") : [];
    const media = (highlights && isSuccess) ? highlights?.filter(i => i?.category == "Media") : [];
    const exhibition = (highlights && isSuccess) ? highlights?.filter(i => i?.category == "Exhibition") : [];
    const workshop = (highlights && isSuccess) ? highlights?.filter(i => i?.category == "Workshop") : [];

    type Roottype = {
        id: number,
        sectionName: string,
        sectionttile: string,
        datas: IHighLight[]
    }

    const data: Roottype[] = [
        {
            id: 1,
            sectionName: "Events",
            sectionttile: "Stay updated with every event happening here.",
            datas: events
        },

        {
            id: 2,
            sectionName: "Media",
            sectionttile: "Stay informed with latest news and media.",
            datas: media
        },

        {
            id: 3,
            sectionName: "Exhibition",
            sectionttile: "Discover the latest trends and creativity here.",
            datas: exhibition
        },

        {
            id: 4,
            sectionName: "Workshop",
            sectionttile: "Explore fresh ideas and hands-on experiences.",
            datas: workshop
        }
    ];

    if (isError) {
        return <></>
    }

    return (
        <div className='space-y-16 md:space-y-24 lg::space-y-28 py-12 md:py-16 lg:py-20'>
            {data?.map(i => {
                return <div key={i?.id} className='space-y-5 md:space-y-6 lg:space-y-8'>

                    <div className='flex flex-row items-center gap-x-5 relative'>
                        <p className='uppercase text-sm text-primary font-sans flex-shrink-0'>{i?.sectionName}</p>
                        <div className='w-full relative'>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%", transition: { duration: 0.4 } }}
                                viewport={{ once: true }}
                                className='h-0.5 bg-zinc-600 w-full'></motion.div>
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, transition: { delay: 0.4 } }}
                                viewport={{ once: true }}
                                className='absolute -top-[2px] right-0 h-1.5 w-1.5 bg-zinc-600 rounded-full'></motion.span>

                        </div>
                    </div>

                    <motion.h2
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1, transition: { duration: 0.4 } }}
                        viewport={{ once: true }}
                        className='text-2xl md:text-3xl lg:text-4xl text-white font-sans font-semibold max-w-md'>{i?.sectionttile}</motion.h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {isLoading ? <>
                            <ArtSkeleton />
                            <ArtSkeleton />
                        </> : i?.datas?.map((cardData, indx) => {
                            return <Card key={cardData?._id} data={cardData} indx={indx} />
                        })}
                    </div>

                </div>
            })}
        </div>
    )
}

export default EventMedia

const Card = ({ data, indx }: { data: IHighLight, indx: number }) => {
    return <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.2 * indx } }}
        viewport={{ once: true }}

        className='bg-white p-4 rounded-xl'>
        {data?.images?.length > 0 && <Image src={data?.images[0]} alt='image' className='w-full h-60 object-cover rounded-lg' placeholder='blur' blurDataURL={blurImg} height={1000} width={1000} />}
        <Link href={`/event-media-exhabition-workshop/${data?._id}`}>
            <div className='py-5 px-2 space-y-1.5'>
                <p className='text-zinc-500 text-sm font-poppins'>{data?.timeLine}</p>
                <h6 className='text-black text-xl font-poppins font-semibold'>{data?.title}</h6>
                {data?.subtitle && <p className='text-black text-base font-poppins font-normal'>{data?.subtitle}</p>}
                <p className='text-zinc-500 text-sm font-poppins line-clamp-1'>{data?.description}</p>
                <p className='text-primary font-poppins font-medium'>
                    Read more...
                </p>
            </div>
        </Link>
    </motion.div>

}