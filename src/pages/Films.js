import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardColumns } from "react-bootstrap";

import "../css/Films.css";
import filmsList from "../globals/filmsList.js";
import { loadSeriesThumbnails } from "../actions/index.js";

export default function(props) {
  const dispatch = useDispatch();

  const thumbnailsLoaded = useSelector(state => state.seriesLoaded);
  const thumbnails = useSelector(state => state.seriesThumbnails);

  if (!thumbnailsLoaded) loadSeriesThumbnails(dispatch, filmsList.series);

  return (
    <>
      <Helmet>
        <title>Films | Peter Apps</title>
      </Helmet>
      <h1>Films</h1>
      <p>
        One hobby that I particularly enjoy, though I don't do it enough, is
        filming. Here you can browse through some hand-picked films I've been
        involved with in a variety of roles, including producer, director,
        editor, writer, and actor.
      </p>
      <h3>Series</h3>
      <CardColumns>
        {filmsList.series.map((series, index) => (
          <Card key={series.path} className="film-series-card">
            <Card.Link as={Link} to={"/films/" + series.path + "/"}>
              <Card.Img variant="top" src={thumbnails[index]} />
            </Card.Link>
            <Card.Body>
              <Card.Title>{series.title}</Card.Title>
              <Card.Text>{series.description}</Card.Text>
              <Card.Link as={Link} to={"/films/" + series.path + "/"}>
                View {series.episodes.length} episodes
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </>
  );
}
