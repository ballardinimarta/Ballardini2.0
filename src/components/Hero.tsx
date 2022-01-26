import React from "react";
import Typing from "react-typing-animation";

function Hero() {
  let name = "< Märta Ballardini />";
  return (
    <header id="header">
      <Typing speed={100}>
        <h1 id="nameTitle">{name}</h1>
      </Typing>
      <h2>A Front End Developer with an interest in design</h2>
      <button
        onClick={() => {
          window.location.href = "#who-am-i";
        }}
      >
        Get to know me better <i className="fas fa-arrow-down"></i>
      </button>
    </header>
  );
}

export default Hero;
