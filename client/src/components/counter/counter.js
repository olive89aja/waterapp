import React from "react";
import Axios from "axios";


const counterStyle = {
  backgroundColor: "yellow",
  color: "blue",
  size: "large"
};

const buttonStyle = {
  backgroundColor: "light-blue",
  color: "blue",
  fontSize: "large",
  width: "200px",
  height: "200px"
};

class Counter extends React.Component {
  static defaultProps = {
    initialvalue: 0
  };

  state = {
    value: Number(this.props.initialvalue)
  };

  restartCounter() {
    this.setState({ value: [] });
  }

  handleIncrement = () => {
    console.log('are we handling this')
    this.setState(
      state => {
        return {
          value: parseInt(state.value + 1)
        };
      },
      res => {
        // Axios.post("/api/counter", { clicks: this.state.value }).then(data =>
        //   console.log(data)
        // );
        var author=localStorage.getItem("username");
        var clicks=localStorage.getItem("Clicks");

        Axios.post("/api/nick", {author, clicks}).then(data => console.log(data));

      }
    );
  };

  render() {
    localStorage.setItem("Clicks", this.state.value);

    return (
      <>
        <span style={counterStyle}>
          <strong>{this.state.value}</strong>
        </span>
        <div>
          <button
            id="Clicks"
            onClick={this.handleIncrement}
            style={buttonStyle}
          >
            I drank 8oz
          </button>
        </div>
        <button type="button" onClick={this.restartCounter.bind(this)}>
          <span>Initialize the counter</span>
        </button>

        <br></br>
        <br></br>
        {"8 clicks or more? Good job! Your body is well hydrated"}
      </>
    );
  }
}

export default Counter;
