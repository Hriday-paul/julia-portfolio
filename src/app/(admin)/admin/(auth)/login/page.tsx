import { Metadata } from "next";
import Image from "next/image";
// import logo from "../../../../../../public/home/logo.png"
import LoginForm from "@/components/(auth)/login/LoginForm";


export const metadata: Metadata = {
  title: "Admin Login",
  description: "Admin login for Tact VIP"
};

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="flex justify-center items-center mx-auto border border-zinc-500 px-11 md:px-12  py-10 rounded-md bg-[#20202b] w-96">
        <div>
          <div className="mb-6 flex flex-col justify-center items-center gap-y-4">
            {/* <div>
            <Image src={logo} alt="logImage"></Image>
            </div> */}
            <h2 className="text-2xl text-secondary font-bold font-poppins ">
              Admin Login
            </h2>
          </div>
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
