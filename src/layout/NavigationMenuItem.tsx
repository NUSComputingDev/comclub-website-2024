import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationMenuItem.css';

interface NavigationMenuItemProps {
  link: string;
  label: string;
  dropdown: boolean;
}

function NavigationMenuItem(props: NavigationMenuItemProps) {
  return (
    <Link
      to={props.link}
      className={`
        navigation-menu-item
        ${props.dropdown ? 'p-4 hover:rounded-md hover:bg-gray-100' : ''}
      `}
    >
      {props.label}
    </Link>
  );
}

export default NavigationMenuItem;
