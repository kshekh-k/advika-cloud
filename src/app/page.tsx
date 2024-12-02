"use client";
import Footer from "@/components/partials/footer";
import HomeIntro from "./home/intro";
import HomeFeatures from "./home/features";
import HomeFourSPhilosophy from "./home/fours-philosophy";
import HomeWhyAdvika from "./home/why-advika";
import HomeAchievements from "./home/achievements";
import ContactForm from "@/components/partials/contact-form";
import Testimonials from "@/components/partials/testimonials";
import Faqs from "@/components/partials/faqs";
import AdvikaGlobalReach from "./home/advika-global-reach";
import React from "react";
import DialogCustom from "@/components/ui/dialog-custom";
import Image from "next/image";

export default function Home() {
  const [openDialog, setOpenDialog] = React.useState(false);

  const openContactDialog = () => {
    setOpenDialog(true);
  };

  const onDialogOpenChange = (open: boolean) => {
    setOpenDialog(open);
  };

  return (
    <div>
      <HomeIntro onContactClick={openContactDialog} />
      <HomeFeatures />
      <AdvikaGlobalReach />
      <HomeFourSPhilosophy />
      <HomeWhyAdvika onContactClick={openContactDialog} />
      <HomeAchievements />

      <section className="bg-primary text-white py-20">
        <div className="container">
          <h2 className="text-6xl font-semibold text-center leading-snug capitalize">
            Do you have a query?
          </h2>
          <h2 className="text-6xl font-semibold text-center leading-snug text-secondary">
            Book a Call
          </h2>
          <ContactForm />
          <div className="mt-24">
            <h3 className="text-4xl font-semibold leading-loose">
              For further queries
            </h3>
            <p className="text-2xl font-semibold">
              please get in touch with your dedicated account manager or reach
              out to us on
            </p>
            <div className="flex items-center gap-5 font-medium mt-7 text-2xl">
              <span className="flex items-center gap-2">
                <Image
                  src={"/svg/phone.svg"}
                  alt="Advika Facebook"
                  className="size-6"
                  width={40}
                  height={40}
                />
                +91-98283-68878
              </span>
              <span className="h-6 bg-white w-px"></span>
              <span className="flex items-center gap-2">
                <Image
                  src={"/svg/mail.svg"}
                  alt="Advika Facebook"
                  className="size-6"
                  width={40}
                  height={40}
                />
                sales@advika.cloud
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Faq */}
      <section className="bg-light pt-28 pb-36">
        <Testimonials />
        <div className="mt-28"></div>
        <Faqs />
      </section>

      <Footer />

      {/* Contact Dialog */}
      <DialogCustom open={openDialog} onOpenChange={onDialogOpenChange}>
        <div className="bg-primary p-8">
          <h2 className="text-4xl font-semibold text-center text-white">
            Do you have a Query?
          </h2>
          <ContactForm />
          <hr className="mt-4 border-white/20" />
          <div className="flex items-center justify-center gap-5 font-medium mt-7 text-lg text-white">
            <span className="flex items-center gap-2">
              <Image
                src={"/svg/phone.svg"}
                alt="Advika Facebook"
                className="size-6"
                width={40}
                height={40}
              />
              +91-98283-68878
            </span>
            <span className="h-6 bg-white w-px"></span>
            <span className="flex items-center gap-2">
              <Image
                src={"/svg/mail.svg"}
                alt="Advika Facebook"
                className="size-6"
                width={40}
                height={40}
              />
              sales@advika.cloud
            </span>
          </div>
        </div>
      </DialogCustom>
    </div>
  );
}
