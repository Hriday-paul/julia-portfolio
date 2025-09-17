import AdminLayout from '@/utils/Adminlayout';
import React from 'react';
// import NextJsTopLoader from '@/components/Shared/NextJsTopLoader';


const layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div >
            {/* <NextJsTopLoader /> */}
            <AdminLayout >
                <div className='py-5'>
                    {children}
                </div>
            </AdminLayout>
        </div>
    );
};

export default layout;