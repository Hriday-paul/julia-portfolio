"use client"
import { useArtTitlesQuery } from '@/redux/features/Arttitles'
import { Button, Form, FormProps, Input, Select, Upload, UploadFile } from 'antd'
import { CloudDownload } from 'lucide-react'
import React from 'react'
import { toast } from 'react-toastify'
import { ImSpinner3 } from 'react-icons/im'
import { useAddHighlightMutation } from '@/redux/features/HighLightApi'

type FieldType = {
  title: string,
  subtitle?: string,
  description: string,
  timeLine: string,
  category: string,
  images: UploadFile[],
  videos: UploadFile[],
}

function AddHighlights() {

  const [addHighLight, { isLoading: addLoading }] = useAddHighlightMutation();

  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      const formData = new FormData();

      if (values?.images?.length > 0) {
        for (let img of values?.images) {
          formData.append("images", img?.originFileObj as File)
        }
      }
      if (values?.videos?.length > 0) {
        for (let video of values?.videos) {
          formData.append("videos", video?.originFileObj as File)
        }
      }

      formData.append("timeLine", values?.timeLine);
      formData.append("title", values?.title);
      formData.append("category", values?.category);
      formData.append("description", values?.description);
      values?.subtitle && formData.append("subtitle", values?.subtitle);

      await addHighLight(formData).unwrap();

      toast.success("New highlight added successfully.")
      form.resetFields();

    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong, try again")
    }
  }

  return (
    <div className='max-w-xl mx-auto bg-zinc-200 border border-primary p-8 rounded-xl font-poppins'>
      <h4 className='text-center text-lg font-semibold mb-5'>Upload A New HighLight</h4>
      <Form
        name="basic"
        style={{ width: '100%' }}
        initialValues={{ weight: 0 }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        form={form}>

        <Form.Item<FieldType>
          name="images"
          label="Art Images"
          valuePropName="fileList"
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) {
              return e;
            }
            return e?.fileList;
          }}
          rules={[{ required: true, message: "Minimum 1 image is required" }]}
        >
          <Upload
            name="files"
            // maxCount={1}
            beforeUpload={() => false} // prevents automatic upload
            accept="image/*"
            listType="picture-card"
            multiple
            onPreview={() => { }}
            showUploadList={{
              showPreviewIcon: false,
              showRemoveIcon: true,
            }}
          >
            <p className="ant-upload-drag-icon mx-auto flex justify-center">
              <CloudDownload size={30} />
            </p>
          </Upload>
        </Form.Item>

        <Form.Item<FieldType> name="category" label={"Category"} rules={[{ required: true, message: "category is required" }]} className='w-full'>
          <Select
            // defaultValue="lucy"
            // style={{ width: 120 }}
            // onChange={handleChange}
            size="large"
            placeholder="Select section"
            className='!w-full'
            options={[
              {
                label: "Events",
                value: "Events"
              },
              {
                label: "Media",
                value: "Media"
              },
              {
                label: "Exhibition",
                value: "Exhibition"
              },
              {
                label: "Workshop",
                value: "Workshop"
              }
            ]}
          />
        </Form.Item>

        <Form.Item<FieldType> name="title" label={"Title"} rules={[{ required: true, message: "Title is required" }]}>
          <Input size="large" placeholder="Enter title" />
        </Form.Item>

        <Form.Item<FieldType> name="subtitle" label={"Subtitle"}>
          <Input size="large" placeholder="Enter subtitle" />
        </Form.Item>

        <Form.Item<FieldType> name="timeLine" label={"Timeline"} rules={[{ required: true, message: "timeline is required" }]}>
          <Input size="large" placeholder="Enter timeline" />
        </Form.Item>

        <Form.Item<FieldType> name="description" label={"Description"} rules={[{ required: true, message: "description is required" }]}>
          <Input.TextArea rows={5} placeholder="write description" />
        </Form.Item>

        <Form.Item<FieldType>
          name="videos"
          label="Videos"
          valuePropName="fileList"
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) {
              return e;
            }
            return e?.fileList;
          }}
        // rules={[{ required: true, message: "Art image is required" }]}
        >
          <Upload.Dragger
            name="files"
            multiple
            // maxCount={1}
            beforeUpload={() => false} // prevents automatic upload
            accept="video/*"
            listType="picture"
          >
            <p className="ant-upload-drag-icon mx-auto flex justify-center">
              <CloudDownload size={40} />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Only video can accept</p>
          </Upload.Dragger>
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

export default AddHighlights