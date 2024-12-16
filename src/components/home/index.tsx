import React from 'react'
import HomeIntro from './intro';
import HomeFeatures from './features';
import AdvikaGlobalReach from './advika-global-reach';
import HomeFourSPhilosophy from './fours-philosophy';
import HomeWhyAdvika from './why-advika';
import HomeAchievements from './achievements';
import ContactForm from '@/components/partials/contact-form';
import Testimonials from '@/components/partials/testimonials';
import Faqs from '@/components/partials/faqs'; 
import DialogCustom from '@/components/ui/dialog-custom';
import Formcontact from '@/components/partials/form';
import Layout from '@/components/layout';

function HomeComponent() {
  const [openDialog, setOpenDialog] = React.useState(false);

  const openContactDialog = () => {
    setOpenDialog(true);
  };

  const onDialogOpenChange = (open: boolean) => {
    setOpenDialog(open);
  };
  return (
    <>
      <Layout>
        <div className='flex flex-col flex-1 w-full'>
          <HomeIntro onContactClick={openContactDialog} />
          <HomeFeatures />
          <AdvikaGlobalReach />
          <HomeFourSPhilosophy />
          <HomeWhyAdvika onContactClick={openContactDialog} />
          <HomeAchievements />
          <ContactForm />
          {/* Testimonials & Faq */}
          <section className="bg-light py-10 lg:py-16 2xl:py-24 space-y-10 lg:space-y-16 2xl:space-y-24">
            <Testimonials />             
            <Faqs />
          </section>
        </div>
      </Layout>


      {/* Contact Dialog */}
      <DialogCustom open={openDialog} onOpenChange={onDialogOpenChange} className="max-w-3xl bg-primary p-5" title="fill your details">


        <Formcontact />


      </DialogCustom>

    </>
  )
}

export default HomeComponent
