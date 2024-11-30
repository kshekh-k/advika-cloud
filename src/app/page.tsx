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

export default function Home() {
  return (
    <div>
      <HomeIntro />
      <HomeFeatures />
      <AdvikaGlobalReach />
      <HomeFourSPhilosophy />
      <HomeWhyAdvika />
      <HomeAchievements />

      <ContactForm />

      {/* Testimonials & Faq */}
      <section className="bg-light pt-28 pb-36">
        <Testimonials />
        <div className="mt-28"></div>
        <Faqs />
      </section>

      <Footer />
    </div>
  );
}
