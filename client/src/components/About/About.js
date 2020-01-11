import React from "react";
import Animation from "../animation/index";

class About extends React.Component {
  render() {
    return (
      <container>
        <img src={process.env.PUBLIC_URL + "/water1.jpg"} />;
        <Animation></Animation>
        <p>
          This app measures your water intake.<br></br>It has been conceived by
          Abdul Shaikh, Stefan Vukasin and Olivier Auberger.<br></br>
          The github repository is accessible{" "}
          <a href="https://github.com/olive89aja/waterapp">here</a>
        </p>
        <p>
          HOW TO USE THIS APP? After you confirmed your identity through Google,
          <br></br>
          use the Homepage button everytime you drink the equivalent of an 8
          ounces<br></br> glass of water. If you do this 8 times a day, you are
          well hydrated!
        </p>
      </container>
    );
  }
}
export default About;
