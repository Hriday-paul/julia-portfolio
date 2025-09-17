"use client"
import { useAddArtTitleMutation } from '@/redux/features/Arttitles';
import { Button, Form, FormProps, Input, Modal, Spin, Upload } from 'antd';
import { CirclePlus } from 'lucide-react';
import React, { useState } from 'react';
import { ImSpinner3 } from 'react-icons/im';
import { RiCloseLargeLine } from 'react-icons/ri';
import { toast } from 'react-toastify';

type FieldType = {
    name: string,
}

const AddTitle = () => {

    const [open, setOpen] = useState(false);

    const [Addtitle, { isLoading }] = useAddArtTitleMutation();
    const [form] = Form.useForm();

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        try {
            const formData = new FormData();

            formData.append("name", values?.name)

            await Addtitle(formData).unwrap()
            toast.success("Art section added successfully.")
            form.resetFields();
        } catch (err: any) {
            toast.error(err?.data?.message || "Something went wrong, try again")
        }
    };

    return (
        <>
            <Button onClick={() => setOpen(true)} type='primary' size='large' className='mt-2' >Add</Button>

            {/* <Button size='large' type='primary' className='mt-2'>Add</Button> */}

            <Modal
                open={open}
                footer={null}
                centered={true}
                onCancel={() => setOpen(false)}
                closeIcon={false}>

                <div>

                    <div className="flex justify-end items-center">
                        <div
                            className="w-10 h-10 bg-primary  rounded-full flex justify-center items-center cursor-pointer"
                            onClick={() => setOpen(false)}
                        >
                            <RiCloseLargeLine size={18} color="#fff" className="" />
                        </div>
                    </div>

                    <h4 className="text-center text-xl font-medium text-black">{"Add Art Section"}</h4>


                    <Form
                        name="basic"
                        style={{ width: '100%' }}
                        initialValues={{}}
                        onFinish={onFinish}
                        autoComplete="off"
                        layout="vertical"
                        form={form}
                    >

                        <Form.Item<FieldType> name="name" label={"Section name"} rules={[{ required: true, message: "name is required" }]}>
                            <Input size="large" placeholder="Enter name" />
                        </Form.Item>

                        <Form.Item>
                            <Button htmlType="submit" type="primary" size="large" block disabled={isLoading} icon={isLoading ? <ImSpinner3 className="animate-spin size-5 text-main-color" /> : <></>} iconPosition="end">
                                Save
                            </Button>
                        </Form.Item>

                    </Form>
                </div>
            </Modal>
        </>
    );
};

export default AddTitle;