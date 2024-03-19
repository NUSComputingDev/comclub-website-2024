import React from 'react';
import RoleCard from './RoleCard';
import roles from './roles.json' with {type: 'json'};
import './RolesSection.css';

function RolesSection() {
  return (
    <>
      {
        Object.entries(roles).map((value) => {
          const [wing, members] = value;
          return (
            <div className='wing' key={wing}>
              <h1>{wing}</h1>
              <div className='member-container'>
                {
                  members.map((member) => {
                    const imgSrc: string =
                      `/members/${member.name.replace(/\s/g, '')}.jpg`;
                    return <RoleCard
                      name={member.name}
                      role={member.role}
                      imgSrc={imgSrc}
                      key={member.name}
                    ></RoleCard>;
                  })
                }
              </div>
            </div>
          );
        })
      }
    </>
  );
}

export default RolesSection;
