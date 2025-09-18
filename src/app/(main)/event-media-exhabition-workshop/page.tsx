import EventMedia from '@/components/Pages/EventMedia/EventMedia'
import React from 'react'


function EventMediapage() {

    return (
        <div className='relative'>
            {/* ------------------for navbar------------- */}
            <div className='bg-[#151515] absolute top-0 left-0 w-full h-[78px]'>
            </div>
            {/* -------------for conteent---------------- */}
            <div className='min-h-screen bg-[#191B1B]'>
                <div className='container pt-[78px]'>
                    <EventMedia />
                </div>
            </div>
        </div>
    )
}

export default EventMediapage