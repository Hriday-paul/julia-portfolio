"use client";
import type {FormProps} from "antd";
import {Button, Form, Input} from "antd";

type FieldType = {
     otp?: number;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
     console.log("Failed:", errorInfo);
};

const VerifyEmailForm = () => {

     //handle password change
     const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
          console.log(values);
     };

     return (
          <Form
               name="basic"
               initialValues={{remember: true}}
               onFinish={onFinish}
               onFinishFailed={onFinishFailed}
               autoComplete="off"
               layout="vertical">
               <Form.Item<FieldType> name="otp">
                    <Input.OTP size="large" />
               </Form.Item>

               <Button
                    htmlType="submit"
                    size="large"
                    style={{
                         backgroundColor: "#CD0335",
                         color: "#FFFFFF",
                         width: "100%",
                         border: "none",
                    }}>
                    Verify Email
               </Button>
          </Form>
     );
};

export default VerifyEmailForm;
