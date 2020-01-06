import React from "react";
import injectSheet from "react-jss";

class Main extends React.Component {
  render() {
    
    return <>
   
    <img src={process.env.PUBLIC_URL + "/water1.jpg"} alt="water" className="img-responsive" height="200px" width="200px"/><br></br>
    <img src={process.env.PUBLIC_URL + "/water2.jpg"} alt="water" className="img-responsive" height="200px" width="200px"/><br></br>
    <img src={process.env.PUBLIC_URL + "/water3.jpg"} alt="water" className="img-responsive" height="200px" width="200px"/><br></br>
  </>
  }
}


export default Main;
