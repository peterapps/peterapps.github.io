import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SocialMediaIconsReact } from "social-media-icons-react";

import "../css/NavBar.css";

export default function NavBar(props) {
  return (
    <Navbar expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/">
        <img
          alt=""
          src="/logo192.png"
          width="30"
          height="30"
          className="d-inline-block align-top navbar-logo"
        />{" "}
        Peter Apps
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/work">
            Work
          </Nav.Link>
          <Nav.Link as={Link} to="/films">
            Films
          </Nav.Link>
          <Nav.Link as={Link} to="/minisites">
            Minisites
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto navbar-social-media">
          <Nav.Item>
            <MySocialMedia
              icon="linkedin"
              url="https://www.linkedin.com/in/peter-linder-aa648b181/"
            />
            <MySocialMedia icon="github" url="http://github.com/peterapps/" />
            <MySocialMedia
              icon="youtube-play"
              url="https://www.youtube.com/channel/UCMZRd32HnEHTn6YHyyjQ8nQ"
            />
            <MySocialMedia icon="vimeo" url="https://vimeo.com/peterlinder" />
            <MySocialMedia
              icon="facebook"
              url="https://www.facebook.com/peterlinder66"
            />
            <MySocialMedia
              icon="instagram"
              url="https://www.instagram.com/grayroof66/"
            />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function MySocialMedia(props) {
  const icon = props.icon;
  const url = props.url;

  return (
    <SocialMediaIconsReact
      icon={icon}
      iconSize="5"
      roundness="20%"
      url={url}
      size="32"
    />
  );
}
