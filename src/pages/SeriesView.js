import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { Card, Row, Col, Breadcrumb } from "react-bootstrap";

import "../css/Films.css";
import filmsList from "../globals/filmsList.js";
import { loadEpisodesThumbnails } from "../actions/index.js";
import NotFound from "./NotFound.js";
import Loader from "../components/Loader.js";

export default function(props) {
  const { seriesPath } = useParams();
  const dispatch = useDispatch();

  const series = filmsList.series.find(x => x.path === seriesPath);
  if (!series) return <NotFound />;

  const thumbnailsLoaded = useSelector(
    state => state.episodesLoaded[seriesPath]
  );
  const thumbnails = useSelector(state => state.episodesThumbnails[seriesPath]);
  const metadata = useSelector(state => state.episodesMetadata[seriesPath]);

  if (!thumbnailsLoaded)
    loadEpisodesThumbnails(dispatch, seriesPath, series.episodes);

  return (
    <>
      <Helmet>
        <title>{series.title} | Films | Peter Apps</title>
      </Helmet>
      <Breadcrumb>
        <Link to="/films/" className="breadcrumb-item">
          Films
        </Link>
        <Breadcrumb.Item active>{series.title}</Breadcrumb.Item>
      </Breadcrumb>
      <h1>{series.title}</h1>

      <p>{series.description}</p>
      <h3>{series.episodes.length} Episodes</h3>
      {!thumbnailsLoaded && <Loader />}
      {thumbnailsLoaded &&
        series.episodes.map((episode, index) => (
          <Card className="mb-3 film-episode-card" key={index}>
            <Row noGutters={true}>
              <Col md={3}>
                <Card.Link
                  as={Link}
                  to={"/films/" + seriesPath + "/" + episode.path}
                >
                  <Card.Img src={thumbnails && thumbnails[index]} />
                </Card.Link>
              </Col>
              <Col md={9}>
                <Card.Body>
                  <Card.Title>
                    <Card.Link
                      as={Link}
                      to={"/films/" + seriesPath + "/" + episode.path}
                    >
                      {episode.title}
                    </Card.Link>
                  </Card.Title>

                  <Card.Text className="episode-card-description">
                    {metadata && metadata[index] && metadata[index].description}
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      {metadata && metadata[index] && metadata[index].date}
                    </small>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
    </>
  );
}
