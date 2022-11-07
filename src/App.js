import react , {useState} from 'react';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Testomonials from "./components/Testomonials";

import ContactForm from './components/ContactForm';

function App() {
  return (
    <>

     <HeroSection/>
     <Projects/>
     <Testomonials/>
     <ContactForm/>
     <Navbar/>
    
    </>
  );
}

export default App;
