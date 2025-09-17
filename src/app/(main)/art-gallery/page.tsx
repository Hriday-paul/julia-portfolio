import Artgallery from '@/components/Pages/ArtGallery/Artgallery'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Art Gallery | Juliatong",
    description: "Juliatong, art gallery page",
};

function ArtGalleryPaege() {
    return (
        <div className='relative'>
            {/* ------------------for navbar------------- */}
            <div className='bg-[#151515] absolute top-0 left-0 w-full h-[78px]'>
            </div>
            {/* -------------for conteent---------------- */}
            <div className='min-h-screen bg-[#191B1B]'>
                <div className='container pt-[78px]'>
                    <Artgallery />
                </div>
            </div>
        </div>
    )
}

export default ArtGalleryPaege