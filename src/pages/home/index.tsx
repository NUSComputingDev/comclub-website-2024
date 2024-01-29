import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Home() {
  return (
    <div>
      {/* hero section */}
      <section>
        <div className='section-description'>
          <h2>NUS Students&#39;</h2>
          <h1>Computing Club</h1>
          <p>
            We aim to be the <span>voice</span> of the students, ensuring
            their <span>holistic</span> well-being, and <span>bridging </span>
            the gaps between them and the school.
          </p>
        </div>
        <img src='hero_graphic.svg' className='section-graphic'></img>
      </section>

      {/* events */}
      <section>
        <img src='events_graphic.svg' className='section-graphic'></img>
        <div className='section-description'>
          <h2>Wondering</h2>
          <h1>What&#39;s up?</h1>
          <p>
            There&#39;s always something <span>new</span> to look forward to.
            Keep an eye out for the latest Computing Club <span>events</span>!
          </p>
          <button>
            <Link to='./'>Events</Link>
          </button>
        </div>
      </section>

      {/* study planner */}
      {/* flex-col-reverse is used to render the graphic on top */}
      <section className='flex-col-reverse md:flex-row bg-slate-100'>
        <div className='section-description'>
          <h2>Stressed about</h2>
          <h1>Study plans?</h1>
          <p>
            Set yourself up for <span>academic success</span> with our
            <span> study planner</span>!
          </p>
          <button>
            <Link to='./'>Study Planner</Link>
          </button>
        </div>
        <img src='planner_graphic.svg' className='section-graphic'></img>
      </section>
    </div>
  );
}

export default Home;
