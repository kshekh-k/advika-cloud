import Layout from '@/components/layout';
import Innerintro from '@/components/partials/inner-intro';
import Link from 'next/link';

import React from 'react';

function Backpolicy() {
  return (
    <Layout>
      <Innerintro
        headingUpline='Backup Policy'
        heading='Advika Cloud'
        descp="Here you will know about Advika Cloud's Backup Policies"
        thumb='/images/advika-backup.jpg'
        thumbAlt='terms-service'
        dataAlt="<a href='https://www.freepik.com/free-photo/cloud-backup-download-network_17431530.htm#fromView=search&page=1&position=0&uuid=86f5cf90-9831-4012-a3a6-f173b89ebbc2&new_detail=true'>www.freepik.com</a>"
      />

      <div className='mx-auto max-w-5xl px-5 py-10'>

        <p className='mt-3 text-left font-semibold leading-relaxed text-black/60 xl:text-lg xl:leading-relaxed'>
          Effective Date: December 30, 2024
        </p>
        <p className='mt-3 text-left font-medium leading-relaxed text-black/50 xl:text-lg xl:leading-relaxed flex gap-1'>
          <strong className='w-8 shrink-0 inline-flex'>1.</strong><span>Your use of the Services is at your sole risk. The Company does not
            maintain backups of dedicated accounts or the Services purchased by
            you. You should not rely on the Company for backup. It is solely your
            responsibility to maintain backups. The Company is not responsible for
            files and/or data residing on your account. You agree to take full
            responsibility for all files and data transferred and to maintain all
            appropriate backup of files and data stored on the Company&apos;s
            servers.</span>
        </p>
        <p className='mt-3 text-left font-medium leading-relaxed text-black/50 xl:text-lg xl:leading-relaxed flex gap-1'>
          <strong className='w-8 shrink-0 inline-flex'>2.</strong><span>It is the responsibility of the customer for maintaining his/her own
            backups on other computers or safe place.</span>
        </p>
        <p className='mt-3 text-left font-medium leading-relaxed text-black/50 xl:text-lg xl:leading-relaxed flex gap-1'>
          <strong className='w-8 shrink-0 inline-flex'>3.</strong><span>The Advika Data Center Services Pvt Ltd does not or will not provide
            any sort of compensation for lost, inaccurate, incomplete or outdated
            data in the event that Advika Data Center Services Pvt Ltd backups do
            not function properly, regardless of the reason for any such
            malfunction, even if the malfunction was due to the fault or
            negligence of the Advika Data Center Services Pvt Ltd or any of its
            employee and agent, the Advika Data Center Services Pvt Ltd had been
            informed of the possibility of such malfunction, any fault or
            negligence, which might cause to it.</span>
        </p>

        <h3 className='py-3 pt-7 text-left text-xl font-bold text-black/80 lg:text-3xl'>
          Contact Information
        </h3>
        <p className='mt-3 text-left font-medium leading-relaxed text-black/50 xl:text-lg xl:leading-relaxed'>
          For questions or concerns about these Terms, please contact us:
        </p>
        <h3 className='py-3 pt-7 text-left text-xl font-bold text-black/80 lg:text-3xl'>
          Advika Data Center Services Pvt. Ltd.
        </h3>
        <p className='mt-3 text-left font-medium leading-relaxed text-black/50 xl:text-lg xl:leading-relaxed'>
          <strong>Website:</strong> <Link href="https://www.advika.cloud" className='hover:text-primary ease-in-out duration-200'>www.advika.cloud</Link>
        </p>
        <p className='mt-3 text-left font-medium leading-relaxed text-black/50 xl:text-lg xl:leading-relaxed'>
          <strong>Email:</strong> <Link href="mailto:support@advika.cloud" className='hover:text-primary ease-in-out duration-200'>support@advika.cloud</Link>
        </p>
      </div>
    </Layout>
  );
}

export default Backpolicy;
