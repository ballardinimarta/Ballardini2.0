import React, { useState } from 'react';
import Hero from './components/Hero';
import OmMig from './components/OmMig';
import Portfolio from './components/Portfolio';
import Kontakt from './components/Kontakt';
import './scss/main.scss'
import Skills from './components/Skills';
function App() {
  const [toggle, setToggle] = useState(false);
  const [bgcolor, setbgcolor] = useState('#4787ff')
  
  function scrollChangeColor() {
    let aboutme = document.querySelector('#about-me-section').getBoundingClientRect();
    let portfolio = document.querySelector('#portfolio-section').getBoundingClientRect();
    let work = document.querySelector('#skills-section').getBoundingClientRect();
    let contact = document.querySelector('#contact-section').getBoundingClientRect();

    if (aboutme.top <= 0 && portfolio.top > 0) {
          setbgcolor("#ff5160");
        } else if (portfolio.top <= 0 && work.top > 0){
          setbgcolor("#5fcc8d");
        } else if (work.top <= 0 && contact.top > 0) {
          setbgcolor("#e0aade");
        } else if (contact.top <= 0) {
          setbgcolor("#63B4D1");
        } else {
          setbgcolor("#4787ff");
        }
  }

  window.addEventListener('scroll', scrollChangeColor, true);


  return (
   < >
        {toggle && 
            <div id="sidebar" className="sidebar" style = {{backgroundColor: bgcolor}}>
            <a onClick={scrollChangeColor} className="link" href="#header">Start</a>
            <a onClick={scrollChangeColor} className="link" href="#who-am-i">Who am i ?</a>
            <a onClick={scrollChangeColor} className="link" href="#portfolio">Portfolio</a>
            <a onClick={scrollChangeColor} className="link" href="#skills">Skills</a>
            <a onClick={scrollChangeColor} className="link" href="#contact">Contact</a>
          </div>
        }
      
        <div id="navDiv">
          {toggle && <button id="navButton"  onClick={() => {setToggle(!toggle)}}><i id="times" className="fas fa-times"></i></button>}
          {!toggle && <button id="navButton" style = {{backgroundColor: bgcolor}} onClick={() => {setToggle(!toggle)}}> <i id="bars" className="fas fa-bars"></i></button>}
        </div>
      <Hero></Hero>
      <OmMig></OmMig>
      <Portfolio></Portfolio>
      <Skills></Skills>
      <Kontakt></Kontakt>
   </>
  );
}

export default App;
