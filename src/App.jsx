import { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { About, Events, Home, Privacy, Resources } from './pages';
import NavigationBar from './layout/NavigationBar';
import Footer from './layout/Footer';
import './App.css';

function App() {
  return (
    <>
      <NavigationBar />

      {/* Main content */}
      <ScrollToTop />
      <main className='w-full'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/privacy' element={<Privacy />} />
        </Routes>
        <Routes>
          <Route path='/about' element={<About />} />
        </Routes>
        <Routes>
          <Route path='/events' element={<Events />} />
        </Routes>
        <Routes>
          <Route path='/resources' element={<Resources />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

// this is needed so that the page automaticall scrolls to the top
// when the route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


export default App;
