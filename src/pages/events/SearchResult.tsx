import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResult.css';

interface SearchResultProps {
  title: string;
  link: string;
  snippet: string;
}

function SearchResult(props: SearchResultProps) {
  return (
    <div className='search-result'>
      <Link to={props.link}>
        <h4>{props.title}</h4>
      </Link>
      <h5>{`https://nuscomputing.com${props.link}`}</h5>
      <p>{props.snippet}</p>
    </div>
  );
}

export default SearchResult;
