import React from "react";
import { Spinner } from "react-bootstrap";

import "../css/Loader.css";

export default function(props) {
  return (
    <div className="loader-div">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      <span>Loading...</span>
    </div>
  );
}
