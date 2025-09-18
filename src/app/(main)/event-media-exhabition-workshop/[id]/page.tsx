import React from 'react'
import Details from '@/components/Pages/EventMedia/Details';

async function page({ params }: { params: Promise<{ id: string}> }) {
  const { id} = await params;


  return (
    <div className='relative'>
      {/* ------------------for navbar------------- */}
      <div className='bg-[#151515] absolute top-0 left-0 w-full h-[78px]'>
      </div>
      {/* -------------for conteent---------------- */}
      <div className='min-h-screen bg-[#191B1B]'>
        <div className='container pt-[78px]'>
          <Details id={id}/>
        </div>
      </div>
    </div>
  )
}

export default page