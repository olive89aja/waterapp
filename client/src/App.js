import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About/About.js";
import Main from "./components/Main/Main.js";
import Home from "./components/Home/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/About" component={About} />
        </Switch>
      </div>
    </Router>
  );
}
//
//Add components animation, box, google login, counter, gallery
// export default class Glogin extends React.Component {
//   render() {
//     return (

//     );
//   }
// }
export default App;
