"use client"
import { useArtTitlesQuery } from '@/redux/features/Arttitles'
import { Button, Form, FormProps, Input, Select, Upload, UploadFile } from 'antd'
import { CloudDownload } from 'lucide-react'
import React from 'react'
import AddTitle from './AddTitle'
import { toast } from 'react-toastify'
import { useAddNewArtMutation } from '@/redux/features/ArtApi'
import { ImSpinner3 } from 'react-icons/im'

type FieldType = {
  name: string,
  title: string,
  media: string,
  dimension: string,
  image: UploadFile[],
}

function AddArtForm() {

  const [addArt, { isLoading: addLoading }] = useAddNewArtMutation();

  const { isLoading, isSuccess, data } = useArtTitlesQuery();

  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      const formData = new FormData();

      if (values?.image?.length > 0 && values?.image?.[0]?.originFileObj) {
        formData.append("image", values?.image?.[0]?.originFileObj as File)
      }

      formData.append("name", values?.name);
      formData.append("title", values?.title);
      formData.append("media", values?.media);
      formData.append("dimension", values?.dimension);

      await addArt(formData).unwrap();

      toast.success("New art added successfully.")
      form.resetFields();

    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong, try again")
    }
  }

  return (
    <div className='max-w-xl mx-auto bg-zinc-200 border border-primary p-8 rounded-xl font-poppins'>
      <h4 className='text-center text-lg font-semibold mb-5'>Upload A New Art</h4>
      <Form
        name="basic"
        style={{ width: '100%' }}
        initialValues={{ weight: 0 }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        form={form}>

        <Form.Item
          name="image"
          label="Art Image"
          valuePropName="fileList"
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) {
              return e;
            }
            return e?.fileList;
          }}
          rules={[{ required: true, message: "Art image is required" }]}
        >
          <Upload.Dragger
            name="files"
            maxCount={1}
            beforeUpload={() => false} // prevents automatic upload
            accept="image/*"
            listType="picture"
          >
            <p className="ant-upload-drag-icon mx-auto flex justify-center">
              <CloudDownload size={40} />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Only image can accept</p>
          </Upload.Dragger>
        </Form.Item>

        <div className='flex flex-row gap-x-5 items-center'>
          <Form.Item<FieldType> name="title" label={"Art Section"} rules={[{ required: true, message: "Art section is required" }]} className='w-full'>
            <Select
              // defaultValue="lucy"
              // style={{ width: 120 }}
              // onChange={handleChange}
              size="large"
              placeholder="Select section"
              className='!w-full'
              loading={isLoading}
              options={isSuccess ? data?.map(i => ({ label: i?.name, value: i?._id })) : []}
            />
          </Form.Item>
          <AddTitle />
        </div>

        <Form.Item<FieldType> name="name" label={"Art Title"} rules={[{ required: true, message: "Art title is required" }]}>
          <Input size="large" placeholder="Enter Art Name" />
        </Form.Item>
        <Form.Item<FieldType> name="media" label={"Media"} rules={[{ required: true, message: "Art Media is required" }]}>
          <Input size="large" placeholder="Enter Art Media" />
        </Form.Item>
        <Form.Item<FieldType> name="dimension" label={"Dimension"} rules={[{ required: true, message: "Art dimension is required" }]}>
          <Input size="large" placeholder="Enter Art dimension" />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type="primary" size="large" block disabled={addLoading} icon={addLoading ? <ImSpinner3 className="animate-spin size-5 text-main-color" /> : <></>} iconPosition="end">
            Save
          </Button>
        </Form.Item>

      </Form>
    </div>
  )
}

export default AddArtForm