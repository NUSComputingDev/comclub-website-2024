import React from 'react';
import Faq from './Faq';
import Timeline from './Timeline';
import Regulations from './Regulations';
import Footer from './Footer';
import Officer from './Officer';
import Roles from './Roles';

function Elections() {
  return (
    <section className='elections h-full gap-4'>
      <h1 className='title'>Elections</h1>
      <p className='text-neutral-500 text-xl'>
        Find out how <span className='text-[#e58e26] font-semibold'>you</span>{' '}
        can play a part in the NUS Students&apos; Computing Club Elections
        today!
      </p>
      <Timeline />
      <Faq />
      <Roles />
      <Regulations />
      <Officer />
      <Footer />
    </section>
  );
}

export default Elections;
