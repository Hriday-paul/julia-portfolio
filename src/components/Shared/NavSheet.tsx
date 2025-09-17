"use client"
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { motion } from "motion/react"
import { FaArrowLeftLong } from 'react-icons/fa6'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import Link from 'next/link'
import { X } from 'lucide-react'
import { GoArrowUpRight } from 'react-icons/go'

const MotionLink = motion.create(Link);

export const routs = [
    { name: "Home", rout: "/", id: 1 },
    { name: "Art Gallery", rout: "/art-gallery", id: 2 },
    { name: "Philosophy", rout: "/philosopy", id: 3 },
    { name: "Highlights", rout: "/event-media-exhabition-workshop", id: 4 },
    { name: "Contact", rout: "/contact", id: 5 },
]

function NavSheet() {


    return (
        <div>
            <Sheet>
                <SheetTrigger >
                    {/* <RiMenu3Fill className="text-2xl text-primary ml-5" /> */}
                    <HiOutlineMenuAlt3 className='size-8 text-white' />
                </SheetTrigger>
                <SheetContent side={'bottom'} className='bg-black'>
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription />

                        <div className='container min-h-screen overflow-y-auto flex flex-col w-full justify-center items-center space-y-10 sm:space-y-16'>

                            <motion.div
                                initial={{
                                    y: -50,
                                    opacity: 0
                                }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1,

                                    transition: {
                                        duration: 0.4,
                                        delay: 0.3
                                    },
                                }}
                                className='flex flex-row justify-center lg:justify-between items-center w-full'>

                                <h1 className="text-4xl font-playfair font-normal italic text-white select-none cursor-pointer text-left hidden lg:block">
                                    Julia Tong
                                </h1>

                                <SheetClose asChild>
                                    <button className='text-zinc-400 border border-zinc-700 rounded-full hover:bg-zinc-900 duration-200 p-3 group'>
                                        <X className='group-hover:rotate-90 duration-300' />
                                    </button>
                                </SheetClose>

                                {/* <Link href={"/contact"} className="group relative h-12 overflow-hidden overflow-x-hidden rounded-full border border-zinc-200 hover:border-white px-8 py-3 text-white hover:text-zinc-950 transition-all duration-500 font-poppins hidden lg:block">
                                    <span className="relative z-10 text-sm flex flex-row gap-x-1 items-center">
                                        Start project
                                        <GoArrowUpRight className='size-5' />
                                    </span>
                                    <span className="absolute inset-0 overflow-hidden rounded-md">
                                        <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                                    </span>
                                </Link> */}

                            </motion.div>

                            <ul>
                                {routs?.map((item, indx) => (
                                    <motion.li
                                        key={item?.id}
                                        initial="initial"
                                        whileHover="hover"
                                        variants={{
                                            initial: {},
                                            hover: {}
                                        }}
                                        transition={{ delay: 0.8 }}

                                        className="relative group overflow-hidden whitespace-nowrap"
                                    >
                                        <motion.div
                                            initial="initial"
                                            whileHover="hover"
                                            variants={{
                                                initial: { y: "100%" },
                                                hover: {}
                                            }}
                                            whileInView={{ y: 0, transition: { duration: 0.4, ease: "easeInOut", delay: 0.09 * (indx + 1), type: "spring", bounce: 0.1 } }}
                                            className='relative group my-1 lg:my-2 overflow-hidden whitespace-nowrap'>

                                            <MotionLink
                                                viewport={{ once: true }}
                                                variants={{
                                                    initial: { y: 0 },
                                                    hover: { y: "-100%" }
                                                }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                href={item?.rout}
                                                className="flex flex-row items-center group cursor-pointer"
                                            >
                                                <SheetTrigger className="w-full flex flex-row items-center justify-center">
                                                    <h6 className="text-white text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-instrument font-extrabold text-center uppercase leading-none">
                                                        {item?.name}
                                                    </h6>
                                                </SheetTrigger>
                                            </MotionLink>

                                            <MotionLink
                                                variants={{
                                                    initial: { y: "100%" },
                                                    hover: { y: 0 }
                                                }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                href={item?.rout}
                                                className="flex flex-row items-center group cursor-pointer absolute inset-0"
                                            >
                                                <SheetTrigger className="w-full flex flex-row items-center justify-center">
                                                    <h6 className="text-white text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-instrument font-extrabold text-center uppercase leading-none">
                                                        {item?.name}
                                                    </h6>
                                                </SheetTrigger>
                                            </MotionLink>

                                        </motion.div>


                                    </motion.li>
                                ))}
                            </ul>


                            <motion.div
                                initial={{
                                    y: 50,
                                    opacity: 0
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: 0.4,
                                        delay: 0.3
                                    },
                                }}
                                className='flex flex-col md:flex-row justify-between items-center w-full gap-y-5 md:gap-y-0'>
                                <p className='text-base sm:text-lg font-medium font-instrument text-white'>© {new Date()?.getFullYear()} ALL RIGHTS RESERVED</p>

                                <ul>
                                    <li>
                                        <MotionLink whileHover={"hover"} href={`/#`} className='flex flex-row gap-x-1 items-center text-white font-instrument font-medium uppercase text-base sm:text-lg group relative leading-none'>
                                            Instagram
                                            <GoArrowUpRight className='size-5' />
                                            <motion.span
                                                initial={{ width: 0 }}
                                                whileInView={{
                                                    width: "100%", transition: {
                                                        duration: 0.6,
                                                        delay: 0.3
                                                    },
                                                }} className='absolute -bottom-1 left-0 h-0.5 bg-white'></motion.span>

                                            <motion.span
                                                initial={{ width: 0 }}
                                                variants={{
                                                    hover: {
                                                        width: "100%", transition: {
                                                            duration: 0.5,
                                                        },
                                                    }
                                                }} className='absolute -bottom-1 left-0 h-0.5 bg-primary'></motion.span>
                                        </MotionLink>
                                    </li>
                                </ul>

                            </motion.div>

                        </div>

                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div >
    )
}

export default NavSheet