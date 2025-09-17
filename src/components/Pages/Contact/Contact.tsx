"use client"
import React from 'react'
import { motion } from "motion/react"
import { SlLocationPin } from "react-icons/sl";
import { MdPhoneInTalk } from 'react-icons/md';
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from 'react-icons/fa6';
import ContactForm from './ContactForm';

function Contact() {
    const contacts = [
        // {
        //     id: 1,
        //     title: "Our Location",
        //     value: "Aqua Tower, Mohakhali, Dhaka",
        //     icon: <SlLocationPin className='size-5 text-white' />
        // },
        // {
        //     id: 2,
        //     title: "Phone Number",
        //     value: "+8801892814892",
        //     icon: <MdPhoneInTalk className='size-5 text-white' />
        // },
        {
            id: 3,
            title: "Drop Email",
            value: "juliagtong@gmail.com",
            icon: <TfiEmail className='size-5 text-white' />
        },
        {
            id: 4,
            title: "Instagram",
            value: "https://www.instagram.com/pinkjulietart",
            icon: <FaInstagram className='size-5 text-white' />
        },
    ]

    return (
        <div className='py-10 md:py-14 lg:py-16 xl:py-20 overflow-hidden'>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
                viewport={{ once: true }}
                className='text-white text-center font-sans text-2xl '>Contact Me</motion.p>

            <motion.div
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, transition: { duration: 0.4 } }}
                viewport={{ once: true }}
                className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 md:mt-20 lg:mt-24 xl:mt-28'>
                <div className='space-y-6'>
                    {/* <h3 className='text-4xl font-instrument font-extrabold text-white'>Drop your <span className='text-primary'>requirements</span> <br /> through this way</h3>
                    <p className='text-zinc-400 font-sans'>Lorem Ipsum is simply dummy text the printing and typesetting industry. Ipsum has been dummy text ever since the 1500.</p> */}
                    <div className='space-y-5 pt-5'>
                        {contacts?.map(contact => {
                            return <div key={contact?.id} className='flex flex-row gap-x-3'>
                                <div>
                                    <div className='bg-primary rounded-xl p-3'>
                                        {contact?.icon}
                                    </div>
                                </div>
                                <div className='space-y-0.5'>
                                    <h6 className='text-base font-normal text-primary font-poppins'>{contact?.title}</h6>
                                    <p className='text-zinc-400 font-poppins text-xs'>{contact?.value}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 0.4 } }}
                    viewport={{ once: true }}
                >
                    <ContactForm />
                </motion.div>
            </motion.div>

        </div>
    )
}

export default Contact