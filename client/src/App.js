import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About/About.js";
import Main from "./components/Main/Main.js";
import Counter from "./components/counter/counter";
import Nav from "./components/Nav";
import GoogleLogin from "react-google-login";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Counter" component={Counter} />
          <Route exact path="/Glogin" component={GoogleLogin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
