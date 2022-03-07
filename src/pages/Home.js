import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Carousel, Button } from "react-bootstrap";

import imgFilms from "../img/carousel-films.jpg";
import imgSites from "../img/carousel-sites.jpg";
import imgAbout from "../img/carousel-about.jpg";

import "../css/Home.css";

export default function(props) {
  return (
    <>
      <Helmet>
        <title>Home | Peter Apps</title>
      </Helmet>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 home-carousel"
            src={imgFilms}
            alt="Films"
          />
          <Carousel.Caption className="text-left">
            <h1>Films</h1>
            <p>
              For the past 10 years, one of my most entertaining off-and-on
              hobbies has been filmmaking. I really should do it more. I've made
              films for fun, for school, with friends, and even with enemies,
              but it's (almost) always a good time.
            </p>
            <p>
              <Link to="/films/">
                <Button variant="primary" size="lg">
                  Explore films
                </Button>
              </Link>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home-carousel"
            src={imgSites}
            alt="Games and Tools"
          />
          <Carousel.Caption className="text-left">
            <h1>Games and Tools</h1>
            <p>
              I've been making random minisites since my freshman year of high
              school, working towards a collection of miscellaneous games and
              tools. Some of them are fun. Others are... math, I guess.
            </p>
            <p>
              <Link to="/minisites/">
                <Button variant="primary" size="lg">
                  Explore minisites
                </Button>
              </Link>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home-carousel"
            src={imgAbout}
            alt="About"
          />
          <Carousel.Caption className="text-left">
            <h1>About</h1>
            <p>See a brief bio about me, Peter.</p>
            <p>
              <Link to="/about/">
                <Button variant="primary" size="lg">
                  About Me
                </Button>
              </Link>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}