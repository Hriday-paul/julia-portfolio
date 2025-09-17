"use client";
import type {FormProps} from "antd";
import {Button, Form, Input} from "antd";

type FieldType = {
     email?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
     console.log("Failed:", errorInfo);
};

const ForgetPassForm = () => {
     const isLoading = false
     //handle password change
     const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
          console.log("Success:", values);
     };

     return (
          <Form
               name="basic"
               initialValues={{remember: true}}
               onFinish={onFinish}
               onFinishFailed={onFinishFailed}
               autoComplete="off"
               layout="vertical">
               <Form.Item<FieldType>
                    name="email"
                    rules={[
                         {required: true, message: "Please input your email!"},
                         {
                              type: "email",
                              message: "Please enter a valid email address!",
                         },
                    ]}>
                    <Input size="large" placeholder="Email" />
               </Form.Item>

               <Button
                    htmlType="submit"
                    size="large"
                    loading={isLoading}
                    style={{
                         backgroundColor: "#CD0335",
                         color: "#FFFFFF",
                         width: "100%",
                         border: "none",
                    }}>
                    {isLoading ? "Sending..." : "Send OTP"}
               </Button>
          </Form>
     );
};

export default ForgetPassForm;
