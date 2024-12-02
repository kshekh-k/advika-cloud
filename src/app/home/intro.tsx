import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type Props = {
  onContactClick: () => void;
};
export default function HomeIntro({ onContactClick }: Props) {
  return (
    <section className="bg-primary text-white overflow-hidden">
      <header className="relative z-10">
        <div className="container flex items-center justify-between py-2.5">
          <div className="flex items-center gap-5 font-medium">
            <span className="flex items-center gap-2">
              <Image
                src={"/svg/phone.svg"}
                alt="Advika Facebook"
                className="size-4"
                width={15}
                height={15}
              />
              +91-98283-68878
            </span>
            <span className="h-6 bg-white w-px"></span>
            <span className="flex items-center gap-2">
              <Image
                src={"/svg/mail.svg"}
                alt="Advika Facebook"
                className="size-4"
                width={15}
                height={15}
              />
              sales@advika.cloud
            </span>
          </div>
          <div className="flex gap-5 items-center">
            <Link href="">
              <Image
                src={"/svg/facebook.svg"}
                alt="Advika Facebook"
                className="size-4"
                width={15}
                height={15}
              />
            </Link>
            <Link href="">
              <Image
                src={"/svg/twitter-x.svg"}
                alt="Advika Facebook"
                width={15}
                height={15}
              />
            </Link>
            <Link href="">
              <Image
                src={"/svg/butterfly.svg"}
                alt="Advika Facebook"
                width={15}
                height={15}
              />
            </Link>
            <Link href="">
              <Image
                src={"/svg/youtube.svg"}
                alt="Advika Facebook"
                width={15}
                height={15}
              />
            </Link>
            <Link href="">
              <Image
                src={"/svg/whatsapp.svg"}
                alt="Advika Facebook"
                width={15}
                height={15}
              />
            </Link>
          </div>
        </div>
        <div className="bg-white text-primary">
          <nav className="container">
            <div className="flex justify-between">
              <div className="py-4">
                <Image
                  src={"/svg/advika-logo.svg"}
                  alt="Advika Cloud"
                  width={193}
                  height={63}
                />
              </div>
              <ul className="flex items-center gap-12 text-xl font-medium uppercase">
                <li className="border-t-4 border-secondary h-full flex items-center cursor-pointer">
                  <a href="#" className="text-primary">
                    Home
                  </a>
                </li>
                <li className="border-t-4 border-transparent text-black/70 hover:border-secondary hover:text-primary duration-300 ease-in-out h-full flex items-center cursor-pointer">
                  <a href="#">About</a>
                </li>
                <li className="border-t-4 border-transparent text-black/70 hover:border-secondary hover:text-primary duration-300 ease-in-out h-full flex items-center cursor-pointer">
                  <a href="#">Services</a>
                </li>
                <li className="border-t-4 border-transparent text-black/70 hover:border-secondary hover:text-primary duration-300 ease-in-out h-full flex items-center cursor-pointer">
                  <a href="#">Contact</a>
                </li>
              </ul>
              <Button className="uppercase self-center">Book A Call</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Intro */}
      <div className="container py-16">
        <div className="grid grid-cols-2 items-center">
          <div>
            <h1 className="text-6xl font-semibold leading-normal capitalize">
              Supercharge Business with the best Cloud server Solutions!
            </h1>
            <p className="text-white/70 leading-loose mt-4">
              Experience unparalleled speed, reliability, and security with our
              cloud hosting platform designed to meet your business needs.
              Whether you&apos;re a startup or an enterprise, our services are
              built to scale as you grow.
            </p>
            <div className="mt-8 flex items-center gap-10">
              <Button
                variant={"white"}
                size={"lg"}
                className="uppercase font-medium"
                onClick={onContactClick}
              >
                Book A Call
              </Button>
              <button className="flex items-center gap-5">
                <Image
                  src={"/svg/play-btn-secondary.svg"}
                  alt="Play Button"
                  className="size-14"
                  width={66}
                  height={66}
                />
                <span className="text-secondary font-medium">
                  Look How It Works
                </span>
              </button>
            </div>
          </div>
          <div className="flex justify-end items-center relative">
            <Image
              src={"/images/intro-bg-gradient.png"}
              alt="Gradient Circle"
              className="absolute max-w-none left-1/2 transform -translate-x-1/2"
              width={1200}
              height={1200}
            />
            <Image
              src={"/images/cloud-servers.png"}
              alt="Cloud Server"
              width={593}
              height={748}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
