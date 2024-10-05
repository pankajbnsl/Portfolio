import './App.css';
import About from './components/About/About';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Hero/>
      <Skills/>
      <WorkExperience/>
      <Projects/>
      <About/>
      <ContactMe/>
    </div>
    <Footer/>
    
    </>
  );
}

export default App;
