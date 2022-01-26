import React from "react";
import Slider from "react-slick";
import "./../scss/main.scss";
import besattbutiker from "./../assets/besatt-butiker.png";
import besattstart from "./../assets/besatt-start.png";
import besattpren from "./../assets/besatt-pren.png";
import besattmeny from "./../assets/besatt-meny.png";

import wsstart from "./../assets/ws-start.png";
import wsprodukter from "./../assets/ws-produkter.png";
import wssök from "./../assets/ws-sök.png";
import wsadmin from "./../assets/ws-admin.png";
import wscart from "./../assets/ws-cart.png";

import nodestart from "./../assets/todolistauth.png";
import nodelogin from "./../assets/login.png";
import noderegister from "./../assets/register.png";
import nodereset from "./../assets/resetpass.png";

import slfirst from "./../assets/sl-first.png";
import slsec from "./../assets/sl-sec.png";
import slthird from "./../assets/sl-third.png";

interface IWork {
  images: string[];
  title: string;
  description: string;
  demolink: string;
  gitlink: string;
}
function Portfolio() {
  let portfolio: IWork[] = [
    {
      images: [besattstart, besattbutiker, besattpren, besattmeny],
      title: "Besatt Magazine",
      description:
        "A website for besatt magazine. Besatt is a analog paper magazine made by my friends. They needed a website to spread information about where you can buy the magazine and how you can order it from them. Made with React.",
      demolink: "https://besatt.org/",
      gitlink: "https://github.com/ballardinimarta/BESATT3.0",
    },
    {
      images: [slfirst, slsec, slthird],
      title: "React SL Application",
      description:
        "Project for fun, I wanted to test SLs open data api to make a application that finds your nearest stations and lets you see the next departures from that station, works with buses, trams, and metros. Had to make my own api to use theirs, so the backend is Node and Express and the frontend is React.",
      demolink: "https://sl-hitta-avgang.herokuapp.com/",
      gitlink: "https://github.com/ballardinimarta/sl",
    },
    {
      images: [nodestart, nodelogin, noderegister, nodereset],
      title: "Todolist NodeJS",
      description:
        "Assignment for school. A todolist with authentication, you need to sign in to use the list. You can register users, login as a register user and reset your password via an email link if you forget it. You can also edit, delete and make new todos.",
      demolink: "https://nodejsauthtodo.herokuapp.com/",
      gitlink: "https://github.com/ballardinimarta/nodejstodoAuth",
    },
    {
      images: [wsstart, wssök, wsprodukter, wsadmin, wscart],
      title: "Angular Webshop",
      description:
        "Assignment for school. A fake webshop that sells movies, made with angular. You can add movies in to your cart and change the amount of movies, there is also a admin page where you can see all the orders registered. The products and orders are from an API.",
      demolink: "https://distracted-darwin-caade7.netlify.app/",
      gitlink: "https://github.com/ballardinimarta/Angular-webshop",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  let porthtml = portfolio.map((p, i) => {
    return (
      <div className="projektcontainer" key={p.title}>
        <Slider {...settings}>
          {p.images.map((img, i) => {
            return (
              <div>
                <img src={img} alt="" />
              </div>
            );
          })}
        </Slider>
        <p className="projekttitle">{p.title}</p>
        <p className="projektdescription">{p.description}</p>
        <a
          href={p.gitlink}
          target="_blank"
          className="projektlink"
          rel="noreferrer"
        >
          github repo
        </a>
        <a
          href={p.demolink}
          target="_blank"
          className="projektlink"
          rel="noreferrer"
        >
          Demo
        </a>
      </div>
    );
  });

  return (
    <section id="portfolio-section">
      <h2 id="portfolio" className="title-main">
        Portfolio
      </h2>
      <div id="portfoliowrapper">{porthtml}</div>
    </section>
  );
}

export default Portfolio;
