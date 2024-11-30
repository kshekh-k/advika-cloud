import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-8">
      <div className="container">
        <div className="grid grid-cols-4 gap-12">
          <div>
            <Image
              src={"/svg/advika-cloud-white-logo.svg"}
              alt="Advika Cloud"
              width={254}
              height={45}
            />
            <p className="text-white/70 leading-loose mt-5">
              Advika cloud Data Center Services provides complete solutions for
              businesses seeking secure and reliable hosting.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">About Company</h3>
            <ul className="mt-7 grid gap-4 text-white/70">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Book a Call</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Help and Support</h3>
            <ul className="mt-7 grid gap-4 text-white/70">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Terms of Services</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Contacts</h3>
            <ul className="mt-7 grid gap-4 text-white/70 leading-loose">
              <li>
                <span>
                  Advika Data Center Services Pvt. Ltd. AltF, Plot no 21 & 21A,
                  Sector 142 Noida - 201305 (uP) India
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <Image
                  src={"/svg/phone.svg"}
                  alt="Advika Facebook"
                  className="size-4"
                  width={15}
                  height={15}
                />
                <span>+91 99502-49491</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src={"/svg/mail.svg"}
                  alt="Advika Facebook"
                  className="size-4"
                  width={15}
                  height={15}
                />
                <span>eb.sales@advika.cloud</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/10 mt-10 mb-9" />
        <div className="text-white/70 flex justify-between">
          <p>Copyright &copy; 2024 Advika.cloud | All Right Reserved</p>
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
      </div>
    </footer>
  );
}
