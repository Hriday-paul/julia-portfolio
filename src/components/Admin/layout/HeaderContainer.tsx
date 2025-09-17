import AdminNav from "@/components/Shared/AdminNav";
import { Header } from "antd/es/layout/layout";

type TheaderProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

const HeaderContainer = ({ collapsed, setCollapsed }: TheaderProps) => {
  return (
    <Header
      style={{
        padding: 0,
        backgroundColor: "var(--color-secondary)",
        height: "80px",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        paddingInline: "0",
      }}
    >
      <AdminNav collapsed={collapsed} setCollapsed={setCollapsed}></AdminNav>
    </Header>
  );
};

export default HeaderContainer;
