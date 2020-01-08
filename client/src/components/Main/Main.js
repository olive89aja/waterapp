import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import GoogleLogout from "react-google-login";

const divStyle = {
    color: 'white',
    background:'light-blue',
    width:'250px',
    height:'250px',
    fontSize:'50px'
}

const responseGoogle = (response) => {
  console.log(response);
}

class Main extends React.Component {

  componentDidMount() {
    //axios or http call to '/' route in server to get user data
    //Save user data in state and pass it down to props or as data to elements as needed
  }
  render() {
    
    return <><br></br>
    <GoogleLogin
      clientId="1041063470172-h5bppvahvqi8827mmcnrbo5u9di5k8hf.apps.googleusercontent.com"
      render={renderProps => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
          Log in
        </button>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />

    <GoogleLogout
      clientId="1041063470172-h5bppvahvqi8827mmcnrbo5u9di5k8hf.apps.googleusercontent.com"
      render={renderProps => (
        <button onClick={renderProps.onClick}>Log out</button>
      )}
      buttonText="Logout"
      onLogoutSuccess={logout}
    ></GoogleLogout> 

    <div style={divStyle}>
<a href = "http://localhost:3000/Counter" target="blank">Check your water intake</a><br></br><br></br>
</div>
    <img src={process.env.PUBLIC_URL + "/water1.jpg"} alt={"water"} className="img-responsive" height="200px" width="200px"/><br></br>
    <img src={process.env.PUBLIC_URL + "/water2.jpg"} alt={"water"} className="img-responsive" height="200px" width="200px"/><br></br>
    <img src={process.env.PUBLIC_URL + "/water3.jpg"} alt={"water"} className="img-responsive" height="200px" width="200px"/><br></br>
 
      
  </>
  }
}





export default Main;
