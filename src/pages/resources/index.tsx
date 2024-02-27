import React from 'react';
import WindowCard from '../../layout/WindowCard';
import { FaTelegramPlane } from 'react-icons/fa';
import { SiLinktree } from "react-icons/si";
import './index.css';
import ResourceLink from './ResourceLink';
import FolderLink from './FolderLink';

function Resources() {
  return (
    <div className='resources'>
      <h1>
        Resources
      </h1>

      <section className='md:items-start'>
        <div className='resource-window-container'>
          <WindowCard content={<div className='resource-window-content'>
            <img src='planner_icon.svg'></img>
            <div className='resource-window-text'>
              <h4>Study Planner</h4>
              <p>Chart out your academic journey.</p>
              <button disabled>Coming Soon!</button>
            </div>
          </div>}></WindowCard>

          <WindowCard content={<div className='resource-window-content'>
            <img src='sep_icon.svg'></img>
            <div className='resource-window-text'>
              <h4>SEP Points Tracker</h4>
              <p>Monitor your SEP points.</p>
              <button disabled>Coming Soon!</button>
            </div>
          </div>}></WindowCard>
        </div>

        <div className='resource-link-container'>
          <ResourceLink
            label='t.me/nuscomputingclub'
            link='https://t.me/nuscomputingclub'
            icon={FaTelegramPlane}
          ></ResourceLink>
          <ResourceLink
            label='t.me/nus_soc_printer_bot'
            link='https://t.me/nus_soc_printer_bot'
            icon={FaTelegramPlane}
          ></ResourceLink>
          <ResourceLink
            label='linktr.ee/nuscomputingclub'
            link='https://linktr.ee/nuscomputingclub'
            icon={SiLinktree}
          ></ResourceLink>

          <div className='flex flex-col'>
            <div className='flex flex-row justify-center'>
              <FolderLink
                label='Photos'
                link='https://www.flickr.com/photos/137141057@N04/albums/'
              ></FolderLink>
              <FolderLink
                label='Maps'
                link='https://www.comp.nus.edu.sg/maps/venues/'
              ></FolderLink>
            </div>
            <div className='flex flex-row justify-center'>
              <FolderLink
                label='Merch'
                link='https://nusfastpay.nus.edu.sg/ccmerch/menu'
              ></FolderLink>
              <FolderLink
                label='Others'
                link='/'
              ></FolderLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;
