import React from 'react';
import './index.css';
import { regulationsData } from './constants';

function Regulations() {
  return (
    <div className='w-full mx-auto px-5 py-4 bg-white h-full' id='regulations-section'>
      <div className='flex flex-col items-center regulations'>
        <h1>Regulations</h1>
        <p className='text-neutral-500 text-xl mt-3 text-center'>
          Last updated as of 2 August, 2024.
        </p>
      </div>
      <div className='grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8'>
        {regulationsData.map((regulation, index) => (
          <div key={index} className='py-5 flex items-center'>
            <div className='mr-4'>
              <i className='fa-solid fa-link' style={{ color: regulation.color }}></i>
            </div>
            <p className='pt-text'>
              <a href={regulation.link} className='text-black no-underline
                hover:underline' target='_blank' rel='noopener noreferrer'>
                {regulation.title}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Regulations;
