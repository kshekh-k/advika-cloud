import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import { Tringleicon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

type Props = {
  onContactClick: () => void;
};
export default function HomeIntro({ onContactClick }: Props) {
  return (
    <>
    <div className="h-screen flex flex-col">
    <Header />
    <section className="bg-primary text-white overflow-hidden flex-1 relative flex items-center">    

      {/* Intro */}
      <div className="flex justify-end items-center absolute inset-0">
        <div className="relative translate-x-1/5">
            <Image
              src={"/images/intro-bg-gradient.png"}
              alt="Gradient Circle"             
              width={1200}
              height={1200}
            />
            <div className="absolute inset-0 flex justify-center items-center" >
            <Image
              src={"/images/cloud-servers.png"}
              alt="Cloud Server"
              width={593}
              height={748}
              className="w-[500px] h-auto"
            />
            </div></div>
          </div>
      <div className="container py-16 relative ">        
          <div className="w-1/2 max-w-[550px]">
            <h1 className="text-5xl font-semibold leading-tight tracking-tighter">
            Elevate Business with <span className="text-secondary">Premium</span> Cloud Server Solutions!
            </h1>
            <p className="text-white/60 leading-loose mt-4">
            Our scalable services grow with your business, ensuring seamless support, robust security, and reliable backups. Discover our Cloud Server Solutions today!
            </p>
            <div className="mt-8 flex items-center gap-6">
              <Button
                variant={"white"}
                size={"lg"}
                className="uppercase font-semibold text-lg hover:text-white hover:bg-secondary ease-in-out duration-200"
              >
                Book A Call
              </Button>
              <button className="flex items-center gap-2">
                <span className="inline-flex size-14 rounded-full bg-secondary items-center justify-center shadow-1">
                  <Tringleicon className="size-4 text-white" />
                </span>
                <span className="text-secondary font-medium text-sm">
                  How Advika cloud works?
                </span>
              </button>
            </div>
          </div>       
         
       
      </div>
    </section>
    </div>
    </>
  );
}
