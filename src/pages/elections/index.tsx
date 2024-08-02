import React from 'react';
import Faq from './Faq';
import Timeline from './Timeline';

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
      <div className='flex flex-col justify-center items-center my-12 gap-8'>
        <h1
          className='mx-8
    md:mx-64
    text-[40px]
    font-bold
    text-center
    text-primary'
        >
          Ignite Change.{' '}
          <span className='text-yellow-500'>Redefine Tomorrow.</span>
        </h1>
        <button className='relative inline-flex h-12 w-full md:w-60 md:mt-4 overflow-hidden rounded-lg p-[1px] focus:outline-none'>
          <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e58e26_0%,#eab308_50%,#e58e26_100%)]'></span>
          <span
            className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-white px-7 text-lg font-bold text-yellow-500 backdrop-blur-3xl gap-2 undefined'
          >
            Cast your Vote
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 512 512'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z'></path>
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}

export default Elections;
