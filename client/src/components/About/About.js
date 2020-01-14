import React from "react";
import { text } from "body-parser";
// import style from "./About.css";

const textStyle = {
  color: "white",
  padding: "30%",
  paddingTop: "7%",
  textAlign: "center",
  position: "relative",
  fontSize: "12.9px"
};
class About extends React.Component {
  render() {
    return (
      <container>
        <div style={textStyle}>
          {/* <img src={process.env.PUBLIC_URL + "/water1.jpg"} />; */}
          <p>
            Struggling to stay hydrated? Here's an app for you! This is an app
            that will help you log your water intake.<br></br>Developed by:
            <br></br> Abdul Shaikh, Stefan Vukasin and Olivier Auberger.
            <br></br>
            The github repository is accessible{" "}
            <a href="https://github.com/olive89aja/waterapp">here</a>
          </p>
          <p>
            HOW TO USE THIS APP? After you log in through Google,
            <br></br>
            Record everytime you drink the equivalent of an 8 ounces<br></br>{" "}
            glass of water by clicking the button. If you do this 8 times a day,
            you are well hydrated!
          </p>
        </div>
      </container>
    );
  }
}
export default About;
