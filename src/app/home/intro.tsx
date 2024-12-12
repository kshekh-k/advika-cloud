import { Button } from "@/components/ui/button"; 
import { Tringleicon } from "@/icons";
import Image from "next/image"; 

type Props = {
  onContactClick: () => void;
};
export default function HomeIntro({ onContactClick }: Props) {
  return (
    <>
      <section className="bg-primary text-white overflow-hidden flex-1 relative flex items-center lg:min-h-[calc(100vh-135px)]">

        {/* Intro */}
        <div className="flex justify-end items-center absolute inset-0">
          <div className="hidden lg:flex relative lg:-right-[10%] xl:-right-[17%] 2xl:-right-[10%]">
            <Image
              src={"/images/intro-bg-gradient.png"}
              alt="Gradient Circle"
              width={1200}
              height={1200}
              className="w-[700px] xl:size-[900px] 2xl:size-[1200px]"
            />
            <div className="absolute inset-0 flex justify-center items-center" >
              <Image
                src={"/images/cloud-servers.png"}
                alt="Cloud Server"
                width={593}
                height={748}
                className="w-[300px] xl:w-[400px] 2xl:w-[500px] h-auto"
              />
            </div>
          </div>
        </div>
        <div className="container py-16 relative ">
          <div className="lg:w-1/2 lg:max-w-[550px]">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight md:leading-tight tracking-tighter text-center lg:text-left">
              Elevate Business with <span className="text-secondary">Premium</span> Cloud Server Solutions!
            </h1>
            <p className="text-white/60 leading-loose mt-4 text-center lg:text-left">
              Our scalable services grow with your business, ensuring seamless support, robust security, and reliable backups. Discover our Cloud Server Solutions today!
            </p>
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-6">
              <Button
                variant={"white"}
                size={"lg"} onClick={onContactClick}
                className="uppercase font-semibold text-lg hover:text-white hover:bg-secondary ease-in-out duration-200"
              >
                Book A Call
              </Button>
              <button className="flex items-center gap-2">
                <span className="inline-flex size-14 rounded-full bg-secondary items-center justify-center shadow-1">
                  <Tringleicon className="size-4 text-white" />
                </span>
                <span className="text-secondary font-medium text-sm hidden md:inline">
                  How Advika cloud works?
                </span>
              </button>
            </div>
          </div>


        </div>
      </section>
    </>
  );
}
