import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contacts';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white font-sans">
      <Hero />
      <div className="relative z-10">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gray-900 to-transparent"></div>
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
