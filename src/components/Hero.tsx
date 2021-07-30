/* eslint-disable react/jsx-no-undef */
import React from 'react'

function Hero() {
    let name = "< Märta Ballardini />"
    return (
        <header id="header">
          
            <h1 id="nameTitle"> {name} </h1>
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
