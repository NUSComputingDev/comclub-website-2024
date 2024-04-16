import React from 'react';
import Calendar from 'react-calendar';
import { toast } from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';
import articles from './articles.json' with {type: 'json'};
import SearchResult from './SearchResult';
import WindowCard from '../../layout/WindowCard';
import './index.css';
import 'react-calendar/dist/Calendar.css';

function Events() {
  return (
    <div className='events'>
      <h1>
        Events
      </h1>

      <section className='md:items-start'>
        <div>
          {/* <div className='searchbar'>
            <input type='text'></input>
            <FaSearch />
          </div> */}

          <div className='search-result-container'>
            {
              Object.values(articles).map((article) => {
                let snippet: string = article['snippet'];
                // no easy css for multiline ellipsis, so create manually
                if (snippet === undefined) {
                  snippet = '';
                  for (const word of article.body.split(' ')) {
                    if (snippet.length < 120) {
                      snippet = snippet + word + ' ';
                    } else {
                      break;
                    }
                  }
                  snippet += '...';
                }

                return (
                  <SearchResult
                    title={article.title}
                    link={`/events/${article.link}`}
                    snippet={snippet}
                    key={article.title}
                  ></SearchResult>
                );
              })
            }

            {/* TODO: handle this */}
            <button className='' onClick={() => toast.error('More coming soon!')}>
              More Results
            </button>
          </div>
        </div>

        {/* TODO: implement functionality */}
        {/* <div className='calendar-container'>
          <WindowCard content={<div className='flex justify-center p-4'>
            <Calendar className='border-transparent'></Calendar>
          </div>}></WindowCard>
        </div> */}
      </section>
    </div>
  );
}

export default Events;
