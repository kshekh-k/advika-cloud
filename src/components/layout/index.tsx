'use client';
import React, { ReactNode } from 'react';
import Footer from '../ui/footer';
import Header from '../ui/header';

function Layout({ children }: { children: ReactNode }) {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/585899e8e7588f121246162f/default";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <div className='flex flex-col'>
        {/* Header */}
        <Header />
        {/* Main */}
        <main className='flex flex-1 flex-col'>{children}</main>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
