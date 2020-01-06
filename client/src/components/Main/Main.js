import React from "react";



class Main extends React.Component {
  render() {
    
    return <><br></br>
<a href = "http://localhost:3000/Counter" target="blank">Check your water intake</a><br></br><br></br>
    <img src={process.env.PUBLIC_URL + "/water1.jpg"} alt={"water"} className="img-responsive" height="200px" width="200px"/><br></br>
    <img src={process.env.PUBLIC_URL + "/water2.jpg"} alt={"water"} className="img-responsive" height="200px" width="200px"/><br></br>
    <img src={process.env.PUBLIC_URL + "/water3.jpg"} alt={"water"} className="img-responsive" height="200px" width="200px"/><br></br>
  </>
  }
}
 

export default Main;
