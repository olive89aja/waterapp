import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import Glogin from 'components/Glogin';
// import Glogout from 'react-google-login';
// import Animation from 'components/animation';
// import Counter from 'components/counter';

ReactDOM.render(<App />, document.getElementById("root"));
// const Index = ({ data }) => (
//   <Glogin
//     clientId="539150265253-mhuq4ueo94s5kvbt9bjf1d64gdq0c6m7.apps.googleusercontent.com"
//     render={renderProps => (
//       <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
//         Log in
//       </button>
//     )}
//     buttonText="Login"
//     cookiePolicy={"single_host_origin"}
//   />
// );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
