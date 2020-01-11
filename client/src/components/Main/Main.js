import React from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import Counter from "../counter/counter";

const divStyle = {
  color: "white",
  background: "light-blue",
  width: "250px",
  height: "250px",
  fontSize: "50px"
};

class Main extends React.Component {
  componentDidMount() {
    //axios or http call to '/' route in server to get user data
    //Save user data in state and pass it down to props or as data to elements as needed
    // const [name, setName]=useState("");
  }
  render() {
    const responseGoogle = response => {
      // localStorage.setItem("username", response.profileObj.name);
      console.log(response);
    };

    return (
      <>
        <GoogleLogin
          clientId="1041063470172-6gmdhalej085etcuqvfqic9mprf5veuq.apps.googleusercontent.com"
          render={renderProps => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Log in
            </button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />

        <GoogleLogout
          clientId="1041063470172-6gmdhalej085etcuqvfqic9mprf5veuq.apps.googleusercontent.com"
          render={renderProps => (
            <button onClick={renderProps.onClick}>Log out</button>
          )}
          buttonText="Logout"
          onLogoutSuccess={responseGoogle}
        ></GoogleLogout>

        <Counter></Counter>
        <div style={divStyle}>
          <img
            src={process.env.PUBLIC_URL + "/water1.jpg"}
            alt={"water"}
            className="img-responsive"
            height="200px"
            width="200px"
          />
          <br></br>
          <img
            src={process.env.PUBLIC_URL + "/water2.jpg"}
            alt={"water"}
            className="img-responsive"
            height="200px"
            width="200px"
          />
          <br></br>
          <img
            src={process.env.PUBLIC_URL + "/water3.jpg"}
            alt={"water"}
            className="img-responsive"
            height="200px"
            width="200px"
          />
          <br></br>
        </div>
      </>
    );
  }
}

export default Main;
