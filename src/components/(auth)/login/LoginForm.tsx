"use client";
import { useLoginAdminMutation } from "@/redux/features/api";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { ImSpinner3 } from "react-icons/im";
import { toast } from "react-toastify";

type FieldType = {
     password: string;
};

const LoginForm = () => {

     const [loginAdmin, { isLoading }] = useLoginAdminMutation();
     const navig = useRouter();

     const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
          try {
               await loginAdmin(values).unwrap();
               toast.success("Login successful");
               navig.push("/admin/dashboard")
          } catch (error: unknown) {
               if (
                    typeof error === "object" &&
                    error !== null &&
                    "data" in error &&
                    typeof (error as { data: { message: string } }).data?.message === "string"
               ) {
                    toast.error((error as { data: { message: string } }).data.message);
               } else {
                    toast.error("Something went wrong, try again");
               }
          }
     };

     return (
          <Form
               name="basic"
               initialValues={{ remember: true }}
               onFinish={onFinish}
               autoComplete="off"
               layout="vertical"
               style={{ width: "300px" }}>

               <Form.Item<FieldType>
                    name="password"
                    rules={[
                         {
                              required: true,
                              message: "Please input your password!",
                         },
                    ]}>
                    <Input.Password size="large" placeholder="Password" />
               </Form.Item>

               {/* <Form.Item<FieldType>>
                    <Flex justify="space-between" align="center">
                         <Link
                              href={"/admin/forgetPassword"}
                              >
                              <p className="font-semibold text-secondary">Forgot Password?</p>
                         </Link>
                    </Flex>
               </Form.Item> */}

               <Button
                    htmlType="submit"
                    size="large"
                    type="primary"
                    block
                    // style={{
                    //      backgroundColor: "#CD0335",
                    //      color: "#FFFFFF",
                    //      width: "100%",
                    //      border: "none",
                    // }}
                    icon={isLoading ? <ImSpinner3 className="animate-spin text-white" /> : <></>} disabled={isLoading} iconPosition="end">
                    Sign In
               </Button>
          </Form>
     );
};

export default LoginForm;
