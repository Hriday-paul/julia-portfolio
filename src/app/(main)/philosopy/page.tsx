import Philosopy from '@/components/Pages/Philosopy/Philosopy';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Philosophy | Juliatong",
    description: "Juliatong, Philosophy page",
};

function Philosop() {
    return (
        <div className=''>

            {/* -------------for conteent---------------- */}
            <div className='min-h-screen bg-[#151515]'>
                <div className='container pt-[78px]'>
                    <Philosopy />
                </div>
            </div>
        </div>
    )
}

export default Philosop;