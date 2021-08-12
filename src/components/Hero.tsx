/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Typing from 'react-typing-animation';

function Hero() {
    let name = "< Märta Ballardini />"
    return (
        <header id="header">
         
            <Typing speed={100}> 
                <h1 id="nameTitle">{name}</h1> 
            </Typing>
            <ul id="headingNav">
                <li><a className="link" href="#who-am-i">Who am i ?</a></li>
                <li><a className="link" href="#portfolio">Portfolio.</a></li>
                <li><a className="link" href="#CV">CV.</a></li>
                <li><a className="link" href="#contact">Contact.</a></li>
            </ul>
        </header>
    )
}

export default Hero
