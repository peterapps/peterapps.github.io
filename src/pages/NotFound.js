import React from "react";
import { Helmet } from "react-helmet";

export default function(props) {
  return (
    <>
      <Helmet>
        <title>Not found page</title>
      </Helmet>
      <p>404 not found</p>
    </>
  );
}
