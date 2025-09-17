import Highlights from '@/components/Admin/Pages/Highlights/Highlights'
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

function HighLights() {
    return (
        <div>
            <div className='space-y-5'>
                <Link href={`/admin/dashboard/add-highlight`}>
                    <Button type='primary' size='large' >
                        Add New
                    </Button>
                </Link>
                <div>
                    <Highlights />
                </div>
            </div>
        </div>
    )
}

export default HighLights