"use client";

import { ReactNode, useState } from "react";
import {  Layout, theme } from "antd";
import { useEffect } from "react";
import SidebarContainer from "@/components/Admin/layout/SidebarContainer";
import HeaderContainer from "@/components/Admin/layout/HeaderContainer";

const { Content } = Layout;

const AdminLayout = ({ children }: { children: ReactNode }) => {

    const [collapsed, setCollapsed] = useState(false);
  

  return (

      <Layout style={{ height: "100vh", overflow: "auto" }} hasSider>
        <SidebarContainer collapsed={collapsed}></SidebarContainer>
        <Layout>
          <HeaderContainer
            collapsed={collapsed}
            setCollapsed={setCollapsed}
          ></HeaderContainer>
          <Content
            style={{
              padding: 27,
              paddingTop : 0,
              minHeight: 280,
              background: "var(--color-main-bg)",
              // borderRadius: borderRadiusLG,
              height: "80vh",
              overflow: "auto",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    
  );
};

export default AdminLayout;
