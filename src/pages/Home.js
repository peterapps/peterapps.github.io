import React from "react";
import { Helmet } from "react-helmet";
import { Alert } from "react-bootstrap";

import "../css/Home.css";

export default function(props) {
  return (
    <>
      <Helmet>
        <title>Home | Peter Apps</title>
      </Helmet>
      <Alert variant="primary">
        <Alert.Heading>Peter Apps</Alert.Heading>
        <p>
          Yeah, so, I'm Peter. This site just contains a variety of things
          involving me. Check it out.
        </p>
      </Alert>
    </>
  );
}
