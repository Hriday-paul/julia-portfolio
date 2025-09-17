"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go';
import NavSheet from './NavSheet';

export const routs = [
    { name: "Home", rout: "/", id : 1 },
    { name: "Artworks Gallery", rout: "/art-gallery", id : 2 },
    { name: "Philosophy", rout: "/philosopy", id : 3 },
    { name: "Highlights", rout: "/event-media-exhabition-workshop", id : 4 },
    { name: "Contact", rout: "/contact", id : 5 },
]

function Navbar() {
    const pathName = usePathname();

    return (
        <div className='absolute top-0 left-0 bg-transparent w-full z-50'>
            <div className='container flex flex-row justify-between items-center py-4'>
                
                    <ul className={`hidden lg:flex flex-row w-auto gap-x-5 items-center border border-[#ffffff40] px-5 py-2.5 rounded-full font-abeezee text-base bg-white/20`}>
                        {
                            routs?.map((rout, indx) => {
                                return <li key={indx} className={`${pathName === rout?.rout ? "text-primary" : "text-white"}`}>
                                    <Link href={rout?.rout}>
                                        {rout?.name}
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
              
                <div className='flex flex-row justify-between lg:justify-end gap-x-5 items-center w-full lg:w-auto'>

                    {/* <Link href={"/contact"} className="group relative h-9 overflow-hidden overflow-x-hidden rounded-full bg-white px-4 py-2 text-black hover:text-white transition-all duration-500 font-poppins">
                        <span className="relative z-10 text-sm flex flex-row gap-x-1 items-center">
                            Start project
                            <GoArrowUpRight className='size-5' />
                        </span>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                            <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-primary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                        </span>
                    </Link> */}

                    <NavSheet />

                </div>
            </div>
        </div>
    )
}

export default Navbar
