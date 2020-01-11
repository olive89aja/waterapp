import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";


const responseGoogle = (response) => {
  console.log(response);
}

ReactDOM.render(
  <GoogleLogin
      clientId="1041063470172-h5bppvahvqi8827mmcnrbo5u9di5k8hf.apps.googleusercontent.com"
      render={renderProps => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
          Log in
        </button>
      )}
      buttonText="Login"
      cookiePolicy={'single_host_origin'}
    />

    <GoogleLogout
      clientId="1041063470172-h5bppvahvqi8827mmcnrbo5u9di5k8hf.apps.googleusercontent.com"
      render={renderProps => (
        <button onClick={renderProps.onClick}>Log out</button>
      )}
      buttonText="Logout"
    ></GoogleLogout>

);