"use client";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { RiBubbleChartLine } from "react-icons/ri";
import Link from "next/link";
import { IoMdLogOut } from "react-icons/io";
import { GoFileMedia } from "react-icons/go";
import { RemoveCookie } from "@/utils/AuthAcrion";

export const navLinks = [
  {
    key: "admin/dashboard",
    icon: <GoFileMedia size={18} />,
    label: <Link href={"/admin/dashboard"}>Arts</Link>,
  },
  {
    key: "admin/dashboard/highlights",
    icon: <RiBubbleChartLine size={18} />,
    label: <Link href={"/admin/dashboard/highlights"}>High Lights</Link>,
  },
  {
    key: "logOut",
    icon: <IoMdLogOut size={18} />,
    label: <Link href={"/login"}>Logout</Link>,
  },
];

const SidebarContainer = ({ collapsed }: { collapsed: boolean }) => {

  const router = useRouter();

  const onClick = async (e: { key: string }) => {
    if (e.key === "logOut") {
      await RemoveCookie()
      router.push("/admin/login");
    }
  };

  const currentPathname = usePathname()?.replace("/", "")?.split(" ")[0];

  return (
    <Sider
      width={300}
      theme="light"
      collapsible
      collapsed={collapsed}
      trigger={null}
      style={{
        paddingInline: `${collapsed ? "5px" : "10px"}`,
        backgroundColor: "var(--color-secondary)",
        maxHeight: "100vh",
        overflow: "auto",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)"
        // borderRight: "1px solid #E2E8F0",
      }}
    >
      <div className="demo-logo-vertical" />
      {/* logo  */}
      <div className="my-10 flex flex-col justify-center items-center gap-y-5">
        {/* <Link href={"/"}>
          <Image
            src={logo}
            alt="logo_Image"
            className={` ${collapsed ? "size-16" : "size-32"}`}
          />
        </Link> */}
        <h1
          className={`${collapsed ? "text-base" : "text-4xl"
            }   font-extrabold text-zinc-200 font-poppins`}
        >Juliya</h1>
      </div>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={["dashboard"]}
        selectedKeys={[currentPathname]}
        mode="inline"
        className="text-lg space-y-4 !border-none"
        items={navLinks}
      />

    </Sider>
  );
};

export default SidebarContainer;
