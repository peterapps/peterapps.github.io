import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";

import "../css/Films.css";
import filmsList from "../globals/filmsList.js";
import { loadEpisodesThumbnails } from "../actions/index.js";
import NotFound from "./NotFound.js";

export default function(props) {
  const { seriesPath, episodeNum } = useParams();
  const episodeIndex = parseInt(episodeNum);
  const dispatch = useDispatch();

  const series = filmsList.series.find(x => x.path === seriesPath);
  if (!series || episodeIndex < 0 || episodeIndex >= series.episodes.length)
    return <NotFound />;
  const episode = series.episodes[episodeIndex] || { title: "" };

  const thumbnailsLoaded = useSelector(
    state => state.episodesLoaded[seriesPath]
  );
  const thumbnails = useSelector(state => state.episodesThumbnails[seriesPath]);

  if (!thumbnailsLoaded)
    loadEpisodesThumbnails(dispatch, seriesPath, series.episodes);

  return (
    <>
      <Helmet>
        <title>
          {episode.title} | {series.title} | Films | Peter Apps
        </title>
      </Helmet>
      <h1>
        <Link to="/films">Films</Link> &gt;{" "}
        <Link to={"/films/" + seriesPath + "/"}>{series.title}</Link> &gt;{" "}
        {episode.title}
      </h1>
      <Row className="episode-row">
        <Col md="6">
          <ReactPlayer url={episode.url} width="100%" controls={true} />
        </Col>
        <Col md="3">
          {episodeIndex > 0 && thumbnails ? (
            <Card className="card-preview-video">
              <Card.Img variant="top" src={thumbnails[episodeIndex - 1]} />
              <Card.Body>
                <Card.Title>
                  {series.episodes[episodeIndex - 1].title}
                </Card.Title>
                <Link to={"/films/" + seriesPath + "/" + (episodeIndex - 1)}>
                  Go to previous episode
                </Link>
              </Card.Body>
            </Card>
          ) : (
            thumbnails && (
              <Card className="card-preview-video no-video">
                <Card.Img
                  variant="top"
                  src={thumbnails[episodeIndex]}
                  style={{ filter: "brightness(0.4)" }}
                />
                <Card.Body>
                  <Card.Title>No previous episode</Card.Title>
                  <span>&nbsp;</span>
                </Card.Body>
              </Card>
            )
          )}
        </Col>
        <Col md="3">
          {episodeIndex < series.episodes.length - 1 && thumbnails ? (
            <Card className="card-preview-video">
              <Card.Img variant="top" src={thumbnails[episodeIndex + 1]} />
              <Card.Body>
                <Card.Title>
                  {series.episodes[episodeIndex + 1].title}
                </Card.Title>
                <Link to={"/films/" + seriesPath + "/" + (episodeIndex + 1)}>
                  Go to next episode
                </Link>
              </Card.Body>
            </Card>
          ) : (
            thumbnails && (
              <Card className="card-preview-video no-video">
                <Card.Img
                  variant="top"
                  src={thumbnails[episodeIndex]}
                  style={{ filter: "brightness(0.4)" }}
                />
                <Card.Body>
                  <Card.Title>No next episode</Card.Title>
                  <span>&nbsp;</span>
                </Card.Body>
              </Card>
            )
          )}
        </Col>
      </Row>
      <p>Published: {episode.date}</p>
      <p>Description: {episode.description}</p>
    </>
  );
}
