import { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import menu from '/menu.svg';
import close from '/close.svg';
import { Home } from './pages';

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* Header */}
      <header>
        {/* Navigation bar */}
        <div className='w-full flex justify-between items-center'>
          {/* Logo */}
          <div className='text-white font-bold text-2xl'>
            <Link to='/'>
              <h1>NUSComputing</h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className={`
            relativez-20
            text-white
            md:flex
            hidden
            list-none
            flex-row
            justify-between
            items-center
            flex-initial
            text-xl
          `}>
            <Link to='' className='mx-6 hover:scale-[1.1]'>
              Foo
            </Link>
            <Link to='' className='mx-6 hover:scale-[1.1]'>
              Foo
            </Link>
            <Link to='' className='mx-6 hover:scale-[1.1]'>
              Bar
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className='md:hidden flex flex-1 items-end justify-end'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={() => setToggle(!toggle)}
            />
            <div className={`
                ${!toggle ? 'hidden' : 'flex'}
                p-6 mx-4 my-2 top-20 right-0 absolute z-20 rounded-xl`
            }>
              <div className={`
                flex
                justify-end
                items-centerflex-1
                flex-col
                gap-4
                text-white
              `}>
                <Link to='' className='mx-6 hover:scale-[1.1]'>
                  Foo
                </Link>
                <Link to='' className='mx-6 hover:scale-[1.1]'>
                  Foo
                </Link>
                <Link to='' className='mx-6 hover:scale-[1.1]'>
                  Bar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className='w-full min-h-[100vh] overflow-hidden'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer>NUSComputing</footer>
    </>
  );
}

export default App;
