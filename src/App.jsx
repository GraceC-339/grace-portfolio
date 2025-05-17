import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects} from './components/sections/Projects';
import "./index.css";
import { Contact } from './components/sections/Contact';


function App() {
  // State to control the loading screen
  const [isLoaded, setIsLoaded] = useState(false);
  // State to check if the menu is open - this is for the hamburger menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    {/* Loading screen */}
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}

    {/* Main content */}
    {/* The main content of the app will be hidden until the loading screen is complete */}
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Projects />
      <Contact />

    </div>

    </>
  )
}

export default App;
