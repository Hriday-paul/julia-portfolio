"use client"
import React from 'react'
import { motion } from "motion/react"
import img1 from "../../../../public/philosopy/img1.jpg"
import img2 from "../../../../public/philosopy/img2.jpg"
import img3 from "../../../../public/philosopy/img3.jpg"
import Image from 'next/image'

import p1 from "../../../../public/philosopy/phylosopy1.jpeg"
import p2 from "../../../../public/philosopy/pylosopy2.jpeg"
import p3 from "../../../../public/philosopy/pylosopy3.jpeg"
import p4 from "../../../../public/philosopy/pylosopy4.jpeg"
import p5 from "../../../../public/philosopy/pylosopy5.jpeg"
import p6 from "../../../../public/philosopy/pylosopy6.jpeg"
import p7 from "../../../../public/philosopy/pylosopy7.jpeg"
import p8 from "../../../../public/philosopy/pylosopy8.jpeg"
import p9 from "../../../../public/philosopy/pylosopy9.jpeg"

const data = [
    {
        id: 1,
        title: "Abstract",
        details: ["My philosophy is rooted in Daoist thought, where art is not fixed but a continuous circulation of energy, a rhythm of yin and yang. Each painting is both offering and dialogue: I release memory and vision into the world, and viewers reshape that energy into new narratives. As an artist-historian, I regard memory as architecture within our minds — solid yet alive in the movement of time. My style fuses neo-baroque drama and impressionistic atmosphere with Eastern and Western fantasy, producing a dreamy intensity that invites empathy. The personal becomes seed, the universal its inevitable bloom."],
        image: p7
    },
    {
        id: 2,
        title: "Core beliefs",
        details: ["My philosophy begins with Daoist thought: the belief that art embodies the continuous movement of energy, a rhythm of yin and yang flowing into one another. In my practice, painting is an act of giving energy — I release emotion, memory, and vision into the world. Viewers receive that energy, respond with their own feelings and interpretations, and in turn pass this transformed energy onward. Like the Daoist cycles of balance, art is never static — it is a living exchange, a give-and-take of experience that continually generates new blooms of meaning.", "As both an artist and a historian, my work serves as a means to preserve meaningful moments and honor the way time carries them forward. I regard memories not as fragile traces, but as solid structures, deeply stored within our minds. Each painting I create is both a record and a dramatization — transforming a lived instant into an image that speaks beyond itself. Through this practice, I give visual form to love, empathy, and the passage of time.", "Art is a mirror for memory and a vessel for time, participating in what I call a visual historiography. Just as historians construct different narratives from the same set of events, viewers build diverse interpretations from the same work of art. Each perspective refracts the artwork differently, producing not a single truth but a layered dialogue of meaning. For me, this is where the power of art lies: in preserving moments while inviting others to reimagine them. My philosophy holds that art is ultimately universal — capable of tugging at the heartstrings of people I may never meet, people who nonetheless find their own lives reflected in its forms.", "Finally, while art often begins in the personal, its purpose is universal. The details of my work may come from my own life — a friend’s quiet moment, a cat’s regal gaze, a goat’s serenity, a plate of dumplings, or a car moving through the seasons — but these details are only the entry points. What matters is the shared space they create: a space of empathy, connection, and recognition. For me, the personal is the seed, but the universal is the bloom. That is the philosophy that guides both my practice and my purpose as an artist."],
        image: p2
    },
    {
        id: 1,
        title: "Style & Voice",
        details: ["I describe my art as neo-baroque and impressionistic, a fusion that allows me to balance dramatic energy with a dreamy atmosphere. My love for Eastern and Western fantasy, as well as anime, deeply informs my visual language, infusing my work with heightened imagination, luminous color, and moments that feel both intimate and otherworldly.", "What makes my work visually and conceptually distinct is the warm energy it conveys — a radiance that draws viewers in and stimulates deep emotional resonance. Each piece is painted as an offering of empathy, meant to reach beyond surface beauty and stir something lasting in those who encounter it.", "Recurring themes in my practice include love, animals, empowerment, time, philosophy, and history. These motifs serve as bridges between personal memory and universal experience, allowing me to explore how art functions as both record and transformation, intimate gesture and shared language.", "My work is distinct for its fusion of neo-baroque drama and impressionistic atmosphere with influences from Eastern and Western fantasy. Each painting carries a warm emotional energy that transforms personal memories into shared experiences, inviting viewers to see their own lives reflected in mine. Rooted in my dual practice as an artist and historian, my paintings function as a kind of visual historiography — preserving moments, narrating time, and opening them to universal interpretation."],
        image: p8
    },
]

const Motionimg = motion.create(Image)

const images = [
    {
        id: 1,
        img: p4
    },

    {
        id: 2,
        img: p1
    },
    {
        id: 3,
        img: p5
    },
    {
        id: 4,
        img: p6
    },
    {
        id: 5,
        img: p3
    },
    {
        id: 6,
        img: p9
    }
]

function Philosopy() {
    return (
        <div className='py-10 md:py-14 lg:py-16 xl:py-20 overflow-hidden'>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
                viewport={{ once: true }}
                className='text-white text-center font-sans text-base'>Philosophy & Background</motion.p>

            {/* ------------------for medum device------------- */}
            <h6 className='text-white font-instrument font-semibold text-4xl lg:text-5xl space-y-2 text-center py-5 hidden md:block'>
                <div className='overflow-hidden whitespace-nowrap '>
                    <motion.h2
                        initial={{ y: "100%" }}
                        whileInView={{ y: -2, transition: { duration: 0.4 } }}
                        viewport={{ once: true }}
                    >The vision, values, and story that shape </motion.h2>
                </div>
                <div className='overflow-hidden whitespace-nowrap'>
                    <motion.h2
                        initial={{ y: "100%" }}
                        viewport={{ once: true }}
                        whileInView={{ y: -2, transition: { duration: 0.4, delay: 0.1 } }}
                    >my journey.</motion.h2>
                </div>
            </h6>

            {/* ------------------for small device ------------- */}
            <h6 className='text-white font-instrument font-semibold text-4xl lg:text-5xl space-y-2 text-center py-5 md:hidden'>
                <div className='overflow-hidden whitespace-nowrap '>
                    <motion.h2
                        initial={{ y: "100%" }}
                        whileInView={{ y: -2, transition: { duration: 0.4 } }}
                        viewport={{ once: true }}
                    >The vision, values, </motion.h2>
                </div>
                <div className='overflow-hidden whitespace-nowrap'>
                    <motion.h2
                        initial={{ y: "100%" }}
                        viewport={{ once: true }}
                        whileInView={{ y: -2, transition: { duration: 0.4, delay: 0.1 } }}
                    >and story that shape</motion.h2>
                </div>
                <div className='overflow-hidden whitespace-nowrap'>
                    <motion.h2
                        initial={{ y: "100%" }}
                        viewport={{ once: true }}
                        whileInView={{ y: -2, transition: { duration: 0.4, delay: 0.2 } }}
                    >my journey.</motion.h2>
                </div>
            </h6>

            {/* -------------philosopy cards---------------- */}
            <div className='space-y-16 md:space-y-24 lg:space-y-32 xl:space-y-40 mt-16 md:mt-20 lg:mt-24 xl:mt-28'>
                {data?.map((i, indx) => {
                    const isEven = indx % 2 === 1

                    return <motion.div key={i?.id}
                        initial={{ x: -60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1, transition: { duration: 0.4 } }}
                        viewport={{ once: true }}
                        className='grid grid-cols-1 lg:grid-cols-2 gap-8 '>
                        <div className={`space-y-5 lg:space-y-8 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                            <h3 className='text-4xl font-medium text-primary font-sans'>{i?.title}</h3>
                            <div className='space-y-8'>
                                {
                                    i?.details?.map((details, ind) => {
                                        return <p key={ind} className='text-zinc-200 text-base font-poppins'>{details}</p>
                                    })
                                }
                            </div>
                        </div>

                        <motion.div
                            initial={{ x: 120, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.4 } }}
                            viewport={{ once: true }}
                            className={`${isEven ? "lg:order-1" : "lg:order-2"}`}
                        >
                            <Image
                                src={i?.image} className={`h-auto w-full object-cover rounded-xl`} alt='Juliyatong phylosopy image' placeholder='blur' />
                        </motion.div>

                    </motion.div>
                })}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:mt-12 lg:mt-16 xl:mt-20 overflow-hidden'>
                {
                    images?.map(i => {
                        return <Motionimg initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.4, delay: 0.2 * i?.id } }} src={i?.img} className='w-full h-auto rounded-lg' alt='juliya image' />
                    })
                }
            </div>

        </div>
    )
}

export default Philosopy