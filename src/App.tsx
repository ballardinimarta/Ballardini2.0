import React, { useState } from 'react';
import Hero from './components/Hero';
import OmMig from './components/OmMig';
import Portfolio from './components/Portfolio';
import CV from './components/CV';
import Kontakt from './components/Kontakt';
import './scss/main.scss'
function App() {
  const [toggle, setToggle] = useState(false);
  const [bgcolor, setbgcolor] = useState('#bebdee')
  
  function scrollChangeColor() {
    let aboutme = document.querySelector('#about-me-section').getBoundingClientRect();
    let portfolio = document.querySelector('#portfolio-section').getBoundingClientRect();
    let work = document.querySelector('#work-section').getBoundingClientRect();
    let contact = document.querySelector('#contact-section').getBoundingClientRect();

    if (aboutme.top < 0 && portfolio.top > 0) {
          setbgcolor("#cdf0c5");
        } else if (portfolio.top < 0 && work.top > 0){
          setbgcolor("#5fcc8d");
        } else if (work.top < 0 && contact.top > 0) {
          setbgcolor("#e0aade");
        } else if (contact.top < 0) {
          setbgcolor("#63B4D1");
        } else {
          setbgcolor("#bebdee");
        }
  }

  window.addEventListener('scroll', scrollChangeColor, true);


  return (
   < >
        {toggle && 
            <div id="sidebar" className="sidebar" style = {{backgroundColor: bgcolor}}>
            <a className="link" href="#header">Start.</a>
            <a className="link" href="#who-am-i">Who am i ?</a>
            <a className="link" href="#portfolio">Portfolio.</a>
            <a className="link" href="#CV">CV.</a>
            <a className="link" href="#contact">Contact.</a>
          </div>
        }
      
        <div id="navDiv">
          {toggle && <button id="navButton" onClick={() => {setToggle(!toggle)}}><i id="times" className="fas fa-times"></i></button>}
          {!toggle && <button id="navButton" onClick={() => {setToggle(!toggle)}}> <i id="bars" className="fas fa-bars"></i></button>}
        </div>
      <Hero></Hero>
      <OmMig></OmMig>
      <Portfolio></Portfolio>
      <CV></CV>
      <Kontakt></Kontakt>
   </>
  );
}

export default App;