"use client"
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import s1_1 from "../../../../public/arts/serries1/img1.jpg"
import s1_2 from "../../../../public/arts/serries1/img2.jpeg"
import s1_3 from "../../../../public/arts/serries1/img3.jpeg"
import s1_4 from "../../../../public/arts/serries1/img4.jpeg"
import s1_5 from "../../../../public/arts/serries1/img5.jpeg"


import s2_1 from "../../../../public/arts/serries2/img1.jpeg"
import s2_2 from "../../../../public/arts/serries2/img2.jpeg"

import s8_1 from "../../../../public/arts/serries8/img1.jpeg"

import s9_1 from "../../../../public/arts/serries9/img1.jpeg"
import s9_2 from "../../../../public/arts/serries9/img2.png"

import s13_1 from "../../../../public/arts/serries13/img1.jpeg"

import s4_1 from "../../../../public/arts/serries4/img1.jpeg"
import s4_2 from "../../../../public/arts/serries4/img2.jpeg"

import s5_6 from "../../../../public/arts/serries5/img6.jpeg"

import chaos from "../../../../public/arts/chaos.png"

import s6_3 from "../../../../public/arts/serries6/img3.jpeg"
import s6_1 from "../../../../public/arts/serries6/img1.jpeg"
import s6_2 from "../../../../public/arts/serries6/img2.jpeg"
import s6_4 from "../../../../public/arts/serries6/img4.jpeg"

import s3_4 from "../../../../public/arts/serries3/img4.jpeg"
import s3_2 from "../../../../public/arts/serries3/img2.jpeg"
import s3_3 from "../../../../public/arts/serries3/img3.jpeg"
import s3_1 from "../../../../public/arts/serries3/img1.jpeg"

import s10_3 from "../../../../public/arts/serries10/img3.jpeg"
import s10_1 from "../../../../public/arts/serries10/img1.jpeg"
import s10_2 from "../../../../public/arts/serries10/img2.jpeg"

import s11_1 from "../../../../public/arts/serries11/img1.jpeg"
import s11_3 from "../../../../public/arts/serries11/img3.jpeg"
import s11_4 from "../../../../public/arts/serries11/img4.jpeg"
import s11_2 from "../../../../public/arts/serries11/img2.jpeg"

import s5_2 from "../../../../public/arts/serries5/img2.jpeg"
import s5_1 from "../../../../public/arts/serries5/img1.jpeg"

import s7_2 from "../../../../public/arts/serries7/img2.png"
import s7_3 from "../../../../public/arts/serries7/img3.jpeg"
import s7_5 from "../../../../public/arts/serries7/img5.png"
import s7_6 from "../../../../public/arts/serries7/img6.jpeg"
import s7_1 from "../../../../public/arts/serries7/img1.png"
import s7_4 from "../../../../public/arts/serries7/img4.jpeg"

import s12_2 from "../../../../public/arts/serries12/img2.png"
import s12_4 from "../../../../public/arts/serries12/img4.png"
import s12_1 from "../../../../public/arts/serries12/img1.png"
import s12_3 from "../../../../public/arts/serries12/img3.png"

import s14_1 from "../../../../public/arts/serries14/img1.jpeg"

import { motion } from "motion/react"
import { useAllArtsQuery } from '@/redux/features/ArtApi'
import { IArt } from '@/app/api/arts/ArtModel'
import { blurImg } from '@/lib/utils'
import ArtSkeleton from './ArtSkeleton';


import {
    isImageFitCover,
    isImageSlide,
    useLightboxProps,
    useLightboxState,
    Lightbox,
    SlideImage
} from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";



export const projects = [
    {
        id: 1,
        title: "Animals at the Nashville Fair, 2025.",
        arts: [
            {
                id: 1,
                img: s1_1,
                name: "Anise the Cow.",
                media: "Acrylic gouache on canvas.",
                Dimensions: "18” x 24”"
            },
            {
                id: 2,
                img: s1_2,
                name: "Reason the Cow",
                media: "Acrylic gouache on canvas.",
                Dimensions: "18” x 24”"
            },
            {
                id: 3,
                img: s1_3,
                name: "Saxophone the Goat.",
                media: "Acrylic gouache on canvas.",
                Dimensions: "18” x 24”"
            },
            {
                id: 4,
                img: s1_4,
                name: "Loki the Pig.",
                media: "Acrylic gouache on canvas.",
                Dimensions: "18” x 24”"
            },
            {
                id: 4,
                img: s1_5,
                name: "The bunnies, Oak and River.",
                media: " Acrylic gouache on canvas.",
                Dimensions: "18” x 24”"
            },
        ],
    },
    {
        id: 2,
        title: "Moments of Self, 2025.",
        arts: [
            {
                id: 1,
                img: s2_1,
                name: "Shared Sovereignty.",
                media: " Acrylic gouache on canvas.",
                Dimensions: " 24”x 36”"
            },
            {
                id: 2,
                img: s2_2,
                name: " Photo Taken by J at C’s.",
                media: "Acrylic gouache on canvas.",
                Dimensions: "18” x 24”"
            },
        ],
    },
    {
        id: 3,
        title: "This Fairy is Allergic to the Sun, 2024.",
        arts: [
            {
                id: 1,
                img: s8_1,
                name: "This Fairy is Allergic to the Sun",
                media: "Gouache on canvas sheet.",
                Dimensions: "16” x 20”"
            },
        ],
    },
    {
        id: 4,
        title: "A Homey Moment (Chinese American), 2025.",
        arts: [
            {
                id: 1,
                img: s9_1,
                name: "A Homey Moment (Dumplings)",
                media: "Acrylic gouache on round canvas.",
                Dimensions: "20” in diameter"
            },
            {
                id: 2,
                img: s9_2,
                name: "A Homey Moment (Pancakes, Biscuits, and Eggs).",
                media: "Acrylic gouache on round canvas.",
                Dimensions: "20” in diameter."
            },
        ],
    },
    {
        id: 5,
        title: "Pink Faith, 2025.",
        arts: [
            {
                id: 1,
                img: s13_1,
                name: "Tân Định Church in Vietnam",
                media: "Acrylic gouache on round canvas.",
                Dimensions: "20” in diameter"
            },
        ],
    },
    {
        id: 6,
        title: "Seasons, 2024",
        arts: [
            {
                id: 1,
                img: s4_1,
                name: "Winter is Around the Corner.",
                media: " Oil paint on canvas.",
                Dimensions: "24” x 36”"
            },
            {
                id: 2,
                img: s4_2,
                name: "Spring is On the Way",
                media: "Oil paint on canvas.",
                Dimensions: "24” x 36”"
            },
        ],
    },
    {
        id: 7,
        title: "The Sun Forest Dragon, 2024",
        arts: [
            {
                id: 1,
                img: s5_6,
                name: "Winter is Around the Corner.",
                media: " Oil paint on canvas.",
                Dimensions: "24” x 36”"
            },
        ],
    },
    {
        id: 8,
        title: "Chaos of Life, 2025.",
        arts: [
            {
                id: 1,
                img: chaos,
                name: "Life is a Chaotic Lasagna",
                media: "Oil paint on canvas.",
                Dimensions: "24” x 36”"
            },
        ],
    },
    {
        id: 9,
        title: "Animal Portraits, 2025.",
        arts: [
            {
                id: 1,
                img: s6_3,
                name: "Song Song the Miniature Poodle.",
                media: " Acrylic gouache on round canvas.",
                Dimensions: "20” in diameter."
            },
            {
                id: 2,
                img: s6_1,
                name: "My Sweet Queen, Sesame",
                media: "Acrylic gouache on round canvas.",
                Dimensions: "20” in diameter."
            },
            {
                id: 3,
                img: s6_2,
                name: "Link the Corgi",
                media: "Acrylic gouache on round canvas.",
                Dimensions: "8” x 10”"
            },
            {
                id: 4,
                img: s6_4,
                name: "Kristoff the Goat",
                media: "Acrylic gouache on round canvas.",
                Dimensions: "36” x 48”"
            },
        ],
    },
    {
        id: 10,
        title: "Grief. 2022-2023.",
        arts: [
            {
                id: 1,
                img: s3_4,
                name: "A Day of Grief Made Better by a Friend",
                media: "Oil paint on canvas",
                Dimensions: "16” x 20”"
            },
            {
                id: 2,
                img: s3_2,
                name: "The Beginning of Clarity",
                media: "Oil paint on canvas",
                Dimensions: "16” x 20”"
            },
            {
                id: 3,
                img: s3_3,
                name: "Lillies",
                media: "Oil paint on canvas",
                Dimensions: "24” x 30”"
            },
            {
                id: 4,
                img: s3_1,
                name: "The Sun is Still Coming Tomorrow",
                media: "Oil paint on canvas",
                Dimensions: "12” x 36”"
            },
        ],
    },
    {
        id: 11,
        title: "Trauma Recovery, 2025.",
        arts: [
            {
                id: 1,
                img: s10_3,
                name: "Phase 1",
                media: "Oil paint on a round canvas glued to a digitally printed canvas",
                Dimensions: "16” x 16”"
            },
            {
                id: 2,
                img: s10_1,
                name: "Phase 2",
                media: "Oil paint on a round canvas glued to a digitally printed canvas",
                Dimensions: "16” x 16”"
            },
            {
                id: 3,
                img: s10_2,
                name: "Phase 3",
                media: "Oil paint on a round canvas glued to a digitally printed canvas",
                Dimensions: "16” x 16”"
            },
        ],
    },
    {
        id: 12,
        title: "New Patterns Breaking Bad Habits, 2025.",
        arts: [
            {
                id: 1,
                img: s11_1,
                name: "Silent Treatment",
                media: "Gouache on paper",
                Dimensions: "12” x 12”"
            },
            {
                id: 2,
                img: s11_3,
                name: "Codependency",
                media: "Gouache on paper",
                Dimensions: "12” x 12”"
            },
            {
                id: 3,
                img: s11_4,
                name: "Judgement on Others",
                media: "Gouache on paper",
                Dimensions: "12” x 12”"
            },
            {
                id: 4,
                img: s11_2,
                name: "Judgement on Self",
                media: "Gouache on paper",
                Dimensions: "12” x 12”"
            },
        ],
    },
    {
        id: 12,
        title: "The Smokies",
        arts: [
            {
                id: 1,
                img: s5_2,
                name: "The Smokies, 1",
                media: "Oil paint on canvas",
                Dimensions: "12” x 36”"
            },
            {
                id: 2,
                img: s5_1,
                name: "The Smokies 2",
                media: "Oil paint on canvas.",
                Dimensions: "12” x 36”"
            }
        ],
    },
    {
        id: 13,
        title: "Mini Pieces, 2023-2024.",
        arts: [
            {
                id: 1,
                img: s7_2,
                name: "Strawberry Shortcake",
                media: "Gouache on canvas.",
                Dimensions: "3” x 9” (outer pink frame not included in dimensions)"
            },
            {
                id: 2,
                img: s7_3,
                name: "Strawberry Shortcake",
                media: "Gouache on canvas.",
                Dimensions: "4” x 4”"
            },
            {
                id: 3,
                img: s7_5,
                name: "My Room if I Were Van Gogh",
                media: "Gouache on canvas.",
                Dimensions: " 6” x 6” (outer pink frame not included in dimensions)"
            },
            {
                id: 4,
                img: s7_6,
                name: "Cactus Fields",
                media: "Gouache on canvas.",
                Dimensions: "6” x 8”"
            },
            {
                id: 5,
                img: s7_1,
                name: "Roses",
                media: "Gouache on canvas.",
                Dimensions: "3” x 9” (outer pink frame not included in dimensions)"
            },
            {
                id: 6,
                img: s7_4,
                name: "Photo Taken by J At C’s (small)",
                media: "Gouache on canvas.",
                Dimensions: "3” x 5”"
            },
        ],
    },
    {
        id: 14,
        title: "Soho House Art Crawl Commission, 2024-2025",
        arts: [
            {
                id: 1,
                img: s12_2,
                name: "Weho Art Crawl 2024, Front.",
                media: "Digital illustration",
                Dimensions: ""
            },
            {
                id: 2,
                img: s12_4,
                name: "Weho Art Crawl 2024, Back.",
                media: "Digital illustration",
                Dimensions: ""
            },
            {
                id: 3,
                img: s12_1,
                name: "Weho Art Crawl 2025, Front.",
                media: "Digital illustration",
                Dimensions: ""
            },
            {
                id: 4,
                img: s12_3,
                name: "Weho Art Crawl 2025, Back.",
                media: "Digital illustration",
                Dimensions: ""
            },
        ],
    },
    {
        id: 15,
        title: "Recovery, 2023",
        arts: [
            {
                id: 1,
                img: s14_1,
                name: "Recovery",
                media: "Oil paint on canvas.",
                Dimensions: "36” x 48”"
            },

        ],
    },
];

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
                data && data?.map((project, indx) => {
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