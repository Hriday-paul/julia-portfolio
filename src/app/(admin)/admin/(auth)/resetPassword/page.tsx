import { Metadata } from "next";
import Image from "next/image";
// import logo from "../../../../../../public/home/logo.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import ResetPassowrdForm from "@/components/(auth)/ResetPassowrdForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Forget Password",
};

const ResetPassword = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black ">
      <div className="flex justify-center items-center w-[441px]   mx-auto border-2  md:px-12 px-11 py-10 bg-[#20202b] rounded-md ">
        <div>
          <div className="mb-6  flex flex-col justify-center items-center gap-y-4">
            {/* <div>
              <Image src={logo} alt="logImage"></Image>
            </div> */}
            <div className="text-center space-y-4 mb-4">
              <div className="text-2xl  font-bold  text-center ">
                <h2 className="flex justify-center items-center text-secondary">
                  <Link href={"/admin/verifyEmail"}>
                    <IoIosArrowRoundBack size={40} />
                  </Link>
                  Reset Password
                </h2>
              </div>
              <p className=" text-secondary">Your password must be 8-10 character long.</p>
            </div>
          </div>
          <ResetPassowrdForm></ResetPassowrdForm>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
