/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @stylistic/max-len */
import React from 'react';
import './index.css';
import { FAQ } from './constants';

function Faq() {
  return (
    <div
      className='w-full mx-auto px-5 py-4 bg-white h-full'
      id='faq-section'
    >
      <div className='flex flex-col items-center faq'>
        <h1>FAQ</h1>
        <p className='text-neutral-500 text-xl mt-3'>
          Frequently asked questions
        </p>
      </div>
      <div className='grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8'>
        {FAQ.map((faq, index) => (
          <div key={index} className='py-5'>
            <details className='group'>
              <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                <span>{faq.question}</span>
                <span className='transition group-open:rotate-180'>
                  <svg
                    fill='none'
                    height='24'
                    shapeRendering='geometricPrecision'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    viewBox='0 0 24 24'
                    width='24'
                  >
                    <path d='M6 9l6 6 6-6'></path>
                  </svg>
                </span>
              </summary>
              <p className='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                {faq.answer}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
