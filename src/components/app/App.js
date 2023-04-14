import logo from '../../logo.svg';
import Header from '../header/Header';
import Home from '../home/Home';
import Projects from '../projects/Projects';
import About from '../about/About';
import Resume from '../resume/Resume';
import Footer from '../footer/Footer';
import Particle from "../particle/Particle";

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Particle />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
