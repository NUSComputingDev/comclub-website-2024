import React from 'react';
import WindowCard from '../../layout/WindowCard';
import './AnnouncementsCard.css';
import { Link } from 'react-router-dom';

interface AnnouncementsCardProps {
  title: string;
  desc: string;
  start_date: string;
  end_date: string;
  imgSrc: string;
  link: string;
}

export default function AnnouncementsCard(props: AnnouncementsCardProps) {
  let date: string;

  if (props.start_date === props.end_date || props.end_date === null || props.end_date === undefined) {
    date = props.start_date.split('T')[0];
  } else {
    date = props.start_date.split('T')[0] + " to " + props.end_date.split('T')[0];
  }


  const content = (
    <div className='container'>
      <img src={props.imgSrc}></img>
      <div className='text-container'>
        <h2>{props.title}</h2>
        <h3>{date}</h3>
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
