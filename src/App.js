import React from "react";
import { Switch, Route } from "react-router-dom";
import "./css/App.css";

import NavBar from "./components/NavBar.js";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";

import About from "./pages/About.js";
import Films from "./pages/Films.js";
import Games from "./pages/Games.js";
import Tools from "./pages/Tools.js";
import Work from "./pages/Work.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Page">
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/about" component={About} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/films" component={Films} />
          <Route exact path="/tools" component={Tools} />
          <Route exact path="/work" component={Work} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
