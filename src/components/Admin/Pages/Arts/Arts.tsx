"use client"
import { useAllArtsQuery, useDeleteArtMutation } from '@/redux/features/ArtApi'
import { Button, Table, TableColumnsType } from 'antd'
import Link from 'next/link'
import React from 'react'
import { IART } from "@/redux/features/Types"
import Image from 'next/image'
import { IArt } from '@/app/api/arts/ArtModel'
import { AiOutlineDelete } from 'react-icons/ai'
import { toast } from 'react-toastify'

function Arts() {
    return (
        <div className='space-y-5'>
            <Link href={`/admin/dashboard/add-art`}>
                <Button type='primary' size='large' >
                    Add New Art
                </Button>
            </Link>
            <div>
                <AllArts />
            </div>
        </div>
    )
}

export default Arts;

const AllArts = () => {

    const { isLoading, data, isSuccess } = useAllArtsQuery();
    const [deleteArt] = useDeleteArtMutation();

    const handleDeleteArt = async (id: string) => {
        const loader = toast.loading("loading...")
        try {
            const formdata = new FormData();
            formdata.append("id", id)
            await deleteArt(formdata).unwrap();
            toast.success("Art deleted successfully")
        } catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong, try again')
        } finally {
            toast.dismiss(loader);
        }
    }

    const expandedColumns: TableColumnsType<IArt> = [
        {
            title: "#SL",
            dataIndex: "serial",
            render: (_, __, indx) => indx + 1
        },
        {
            title: "Art image",
            dataIndex: "image",
            render: (value, record) => (
                <div className="flex items-center gap-x-1">
                    <Image
                        src={value || "/empty-user.png"}
                        alt="art image"
                        width={1000}
                        height={1000}
                        className="h-20 w-auto rounded-md"
                    ></Image>
                </div>
            ),
        },
        {
            title: "Name",
            dataIndex: "name",
        },

        {
            title: "Media",
            dataIndex: "media",

        },
        {
            title: "Dimension",
            dataIndex: "dimension",
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (_, record) => (
                <Button type='dashed' size='small' onClick={() => handleDeleteArt(record?._id)}>
                    <AiOutlineDelete />
                </Button>
            ),
        }
    ];

    const columns: TableColumnsType<IART> = [
        {
            title: "#SL",
            dataIndex: "serial",
            render: (_, __, indx) => indx + 1
        },
        {
            title: "Sections",
            dataIndex: "titleName",
            // render: (value) => indx + 1
        }
    ]

    const expandedRowRender = (record: IART) => (
        <Table<IArt>
            columns={expandedColumns}
            dataSource={record.arts}
            pagination={false}
            rowKey={(art) => art._id}
        />
    );

    return (
        <Table<IART>
            columns={columns}
            dataSource={isSuccess ? data : []}
            loading={isLoading}
            pagination={false}
            rowKey={(record) => record?.titleId}
            expandable={{ expandedRowRender, defaultExpandedRowKeys: [] }}
            scroll={{ x: "max-content" }}
        ></Table>
    )
}