import { Routes, Route } from 'react-router-dom';
import { Home, Privacy } from './pages';
import NavigationBar from './layout/NavigationBar';
import Footer from './layout/Footer';
import './App.css';

function App() {
  return (
    <>
      <NavigationBar />

      {/* Main content */}
      <main className='w-full min-h-[100vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/privacy' element={<Privacy />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
