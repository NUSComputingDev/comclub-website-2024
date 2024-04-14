import React from 'react';
import WindowCard from '../../layout/WindowCard';
import './AnnouncementsCard.css';
import { Link } from 'react-router-dom';

interface AnnouncementsCardProps {
  title: string;
  desc: string;
  date: string;
  imgSrc: string;
  link: string;
}

function AnnouncementsCard(props: AnnouncementsCardProps) {
  return (
    <WindowCard content={
      // TODO: flip flex dir if small
      <div className='announcement-container'>
        <img src={props.imgSrc}></img>
        <div className='text-container'>
          <h2>{props.title}</h2>
          <h3>{props.date}</h3>
          <p>{props.desc}</p>
          <h4>
            <Link to={props.link}>Read More</Link>
          </h4>
        </div>
      </div>
    }></WindowCard>
  );
}

export default AnnouncementsCard;
