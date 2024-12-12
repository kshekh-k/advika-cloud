'use client'
import React, { ReactNode } from 'react'
import Footer from '../ui/footer'
import Header from '../ui/header'

function Layout({ children }: { children: ReactNode }) {
    return (
    <>
        <div className="flex flex-col">
            {/* Header */}
            <Header />
            {/* Main */}
            <main className='flex-1 flex flex-col'>
                {children}
            </main>
            {/* Footer */}
            <Footer />
        </div>
    </>
    )
}

export default Layout
