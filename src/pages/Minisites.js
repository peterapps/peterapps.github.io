import React from "react";
import { Helmet } from "react-helmet";
import { Row, Col, ListGroup, Tab } from "react-bootstrap";

import "../css/Minisites.css";
import { gamesList, toolsList } from "../globals/minisitesList.js";

export default function(props) {
  const tabContainer = (name, path, list) => (
    <div className="minisite-tab-container">
      <h4>{name}</h4>
      <Tab.Container id="minisite-tab" defaultActiveKey={"#" + list[0].path}>
        <Row className="minisite-tab-row">
          <Col sm={4}>
            <ListGroup>
              {list.map(site => (
                <ListGroup.Item key={site.path} action href={"#" + site.path}>
                  {site.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              {list.map(site => (
                <Tab.Pane key={site.path} eventKey={"#" + site.path}>
                  <p>{site.description}</p>
                  <p>
                    <a href={"/minisites/" + path + "/" + site.path + "/"}>
                      Open {site.name}
                    </a>
                  </p>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Minisites | Peter Apps</title>
      </Helmet>
      <h1>Minisites</h1>
      <p>
        Long before this site existed, I had a variety of standalone web-based
        games and tools, listed below.
      </p>
      {tabContainer("Games", "games", gamesList)}
      {tabContainer("Tools", "tools", toolsList)}
    </>
  );
}
