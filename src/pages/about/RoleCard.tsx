import React from 'react';
import WindowCard from '../../layout/WindowCard';
import './RoleCard.css';

interface RoleCardProps {
  name: string;
  role: string;
  imgSrc: string;
}

function RoleCard(props: RoleCardProps) {
  const content = (
    <div className='role-card'>
      <img src={props.imgSrc}></img>
      <div className='role-label'>
        <h4>{props.name}</h4>
        <p>{props.role}</p>
      </div>
    </div>
  );

  return (
    <WindowCard content={content}></WindowCard>
  );
}

export default RoleCard;
