"use client"
import { IHighLight } from '@/app/api/highlights/HighLightsModel';
import { useAllHighLightQuery, useDeleteHighlightMutation } from '@/redux/features/HighLightApi'
import { Button, Table, TableColumnsType } from 'antd';
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';

function Highlights() {

  const { isLoading, data, isSuccess } = useAllHighLightQuery();
  const [deleteHighLight] = useDeleteHighlightMutation();

  const handleDeleteArt = async (id: string) => {
    const loader = toast.loading("loading...")
    try {
      const formdata = new FormData();
      formdata.append("id", id)
      await deleteHighLight(formdata).unwrap();
      toast.success("Art deleted successfully")
    } catch (err: any) {
      toast.error(err?.data?.message || 'Something went wrong, try again')
    } finally {
      toast.dismiss(loader);
    }
  }

  const columns: TableColumnsType<IHighLight> = [
    {
      title: "#SL",
      dataIndex: "serial",
      render: (_, __, indx) => indx + 1
    },
    {
      title: "Title",
      dataIndex: "title",
    },

    {
      title: "Category",
      dataIndex: "category",

    },
    {
      title: "Timeline",
      dataIndex: "timeLine",
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

  return (
    <Table<IHighLight>
      columns={columns}
      dataSource={isSuccess ? data : []}
      loading={isLoading}
      pagination={false}
      rowKey={(record) => record?._id}
      scroll={{ x: "max-content" }}
    ></Table>
  )
}

export default Highlights