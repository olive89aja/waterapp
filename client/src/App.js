import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About/About.js";
import Main from "./components/Main/Main.js";
import Nav from "./components/Nav";
import Animation from "../src/components/animation/index";
function App(props) {
  return (
    <Router>
      <div>
        <Animation></Animation>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/About" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
