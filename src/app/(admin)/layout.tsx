import React from 'react';
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import antTheme from '@/theme/antTheme';


const layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div >
            <AntdRegistry>
                <ConfigProvider theme={antTheme}>
                    {children}
                </ConfigProvider>
            </AntdRegistry>
        </div>
    );
};

export default layout;