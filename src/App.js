import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/navbar';
import Footer from './component/Footer/footer';
import About from './component/Pages/about';
import Projects from './component/Pages/projects';
import Skills from './component/Pages/skills';
import Contact from './component/Pages/contact';
import IntroAnimation from './component/Pages/introAnimation';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        {/* Default landing page with animation */}
        <Route path="/" element={<IntroAnimation />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
