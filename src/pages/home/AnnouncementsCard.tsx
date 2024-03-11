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

export default function AnnouncementsCard(props: AnnouncementsCardProps) {
  const content = (
    <div className='container'>
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
  );

  return (
    <WindowCard content={content}></WindowCard>
  );
}
