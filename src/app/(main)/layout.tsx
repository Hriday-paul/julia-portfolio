import Cursor from '@/components/Shared/Cursor';
import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';
import React from 'react'

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Cursor />
            {/* <SmoothScroll > */}
            <Navbar />
            {children}
            <Footer />
            {/* </SmoothScroll> */}
        </div>
    )
}

export default layout