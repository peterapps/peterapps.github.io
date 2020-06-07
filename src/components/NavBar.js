import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { SocialMediaIconsReact } from "social-media-icons-react";

import "../css/NavBar.css";

export default function NavBar(props) {
  const backgroundColor = "#e3f2fd";

  return (
    <Navbar expand="lg" style={{ backgroundColor: backgroundColor }}>
      <Navbar.Brand href="/#/">Linder</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/work">Work</Nav.Link>
          <Nav.Link href="/films">Films</Nav.Link>
          <Nav.Link href="/tools">Tools</Nav.Link>
          <Nav.Link href="/games">Games</Nav.Link>
        </Nav>
        <Nav className="ml-auto navbar-social-media">
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
