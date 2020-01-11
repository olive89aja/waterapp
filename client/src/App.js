import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About/About.js";
import Main from "./components/Main/Main.js";
import Counter from "./components/counter/counter";
// import Navbar from "../src/components/Nav/index";
import { Link } from "react-router-dom";
// import { Nav, Navbar, NavItem } from "react-bootstrap";
// import Routes from "./Routes";

function App(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Counter" component={Counter} />
      </Switch>
    </div>
  );
}

export default App;
