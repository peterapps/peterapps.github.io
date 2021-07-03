import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faSoundcloud,
  faInstagram,
  faGithub,
  faLinkedin,
  faVimeo
} from "@fortawesome/free-brands-svg-icons";

import "../css/Footer.css";

export default function Footer(props) {
  return (
    <footer className="footer mt-auto py-3">
      <p>Peter Linder. 2021.</p>
      <div className="social-container">
        <MySocialMedia
          title="linkedin"
          icon={faLinkedin}
          url="https://www.linkedin.com/in/peter-a-linder/"
        />
        <MySocialMedia
          title="github"
          icon={faGithub}
          url="https://github.com/peterapps/"
        />
        <MySocialMedia
          title="youtube"
          icon={faYoutube}
          url="https://www.youtube.com/c/PeterLinder66"
        />
        <MySocialMedia
          title="vimeo"
          icon={faVimeo}
          url="https://vimeo.com/peterlinder"
        />
        <MySocialMedia
          title="soundcloud"
          icon={faSoundcloud}
          url="http://soundcloud.com/peterlinder"
        />
        <MySocialMedia
          title="facebook"
          icon={faFacebook}
          url="https://www.facebook.com/peterlinder66"
        />
        <MySocialMedia
          title="instagram"
          icon={faInstagram}
          url="https://www.instagram.com/grayroof66/"
        />
      </div>
    </footer>
  );
}

function MySocialMedia(props) {
  const icon = props.icon;
  const url = props.url;
  const title = props.title;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={"social " + title}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
    </a>
  );
}
