"use client";
import { Avatar, Badge, Flex } from "antd";
import { FaBars } from "react-icons/fa6";
import avatarImg from "@/assets/image/profile.png";

import Link from "next/link";
import { Bell } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

type TNavbarProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

const AdminNav = ({ collapsed, setCollapsed }: TNavbarProps) => {

  return (
    <div className="flex items-center justify-between w-[97%] font-poppins pl-3">
      {/* Header left side */}
      <Flex align="center" gap={20}>
        <button
          onClick={() => setCollapsed(collapsed ? false : true)}
          className="cursor-pointer hover:bg-gray-200 rounded p-1 duration-500 text-text-color"
        >
          <FaBars size={28} />
        </button>
        <p className="text-xl text-white font-medium">Juliya tong</p>
      </Flex>

    </div>
  );
};

export default AdminNav;
