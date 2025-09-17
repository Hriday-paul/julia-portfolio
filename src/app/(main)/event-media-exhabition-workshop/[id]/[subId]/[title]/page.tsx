import React from 'react'
import { data } from '../../../page';
import { notFound } from 'next/navigation';
import Details from '@/components/Pages/EventMedia/Details';

async function page({ params }: { params: Promise<{ id: string, title: string, subId: string }> }) {
  const { id, title, subId } = await params;

  const decodedTitle = decodeURIComponent(title)

  const matchedData = data
    .find(section => section.id.toString() === id)
    ?.datas.find(item => (item.title === decodedTitle && item?.id.toString() == subId));

  if (!matchedData) {
    notFound();
  }


  return (
    <div className='relative'>
      {/* ------------------for navbar------------- */}
      <div className='bg-[#151515] absolute top-0 left-0 w-full h-[78px]'>
      </div>
      {/* -------------for conteent---------------- */}
      <div className='min-h-screen bg-[#191B1B]'>
        <div className='container pt-[78px]'>
          <Details matchedData={matchedData}/>
        </div>
      </div>
    </div>
  )
}

export default page