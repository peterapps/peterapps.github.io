import React from "react";
import { Switch, Route } from "react-router-dom";
import "./css/App.css";

import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";

import Films from "./pages/Films.js";
import Minisites from "./pages/Minisites.js";
import Work from "./pages/Work.js";
import EpisodeView from "./pages/EpisodeView.js";
import SeriesView from "./pages/SeriesView.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Page">
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/films" component={Films} />
          <Route
            exact
            path="/films/:seriesPath/:episodePath"
            component={EpisodeView}
          />
          <Route exact path="/films/:seriesPath/" component={SeriesView} />
          <Route exact path="/minisites" component={Minisites} />
          <Route exact path="/work" component={Work} />

          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
