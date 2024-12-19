'use client'
// import LottieReact from '@lottielab/lottie-player/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TbArrowNarrowLeft } from 'react-icons/tb'
import dynamic from 'next/dynamic';
import Advika404 from './advika-404.json';
const LottieReact = dynamic(() => import('lottie-react'), { ssr: false });
function Page404() {
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
      setIsClient(true); // Ensures this runs only on the client
    }, []);
  
    if (!isClient) return null; // Prevents rendering on the server
    
    return (
        <div className="w-full bg-primary h-screen flex flex-col  items-center justify-center ">
            <div className='relative opacity-5'>
                <Image className='w-full h-auto' alt="cloud-top" width={1920} height={100} src="/images/cloud-top.svg" />
            </div>
            <div className="w-full flex-1  flex justify-center items-center text-center px-5 relative z-10">
                <div className='max-w-xl flex flex-col items-center justify-center'>
                    {/* <LottieReact src="/images/advika-404.json" autoplay /> */}
                    <LottieReact animationData={Advika404} />
                    <div className=''>
                        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white uppercase border-y border-white/10 mt-10 py-5">
                            Page <span className='text-secondary'>Not</span> Found
                        </p>
                        <p className="text-lg md:text-xl text-white/60 py-3">
                            Sorry, the page you are looking for could not be found.
                        </p>
                        <div className='flex justify-center items-center pt-5'>
                            <Link
                                href="/"
                                className="flex items-center space-x-2 bg-white hover:bg-secondary text-primary px-10 py-4 rounded transition duration-150"
                                title="Return Home"
                            >
                                <TbArrowNarrowLeft className='size-5' strokeWidth={2} />
                                <span>Return Home</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative opacity-5'>
                <Image className='w-full h-auto' alt="cloud-top" width={1920} height={100} src="/images/cloud-bottom.svg" />
            </div>
        </div>
    )
}

export default Page404
