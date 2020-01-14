import React from "react";
import Axios from "axios";

const counterStyle = {
  color: "white",
  size: "xx-large",
  position: "absolute",
  top: "60%",
  left: "0%",
  width: "100%",
  height: "20%",
  borderRadius: "100% 100% 100% 100%"
  // margin: 0px;
};

const buttonStyle = {
  position: "absolute",
  border: "0%",
  top: "39%",
  left: "45%",
  width: "10%",
  height: "17%",
  borderRadius: "100% 100% 100% 100%",
  margin: "1px",
  background: "deepskyblue",
  border: "deepskyblue",
  outline: "none"
};
const restartStyle = {
  borderRadius: "50% 50% 50% 50%",
  position: "absolute",
  top: "70%",
  left: "48%",
  color: "deepskyblue",
  background: "blue",
  border: "3px blue",
  marginTop: "20px",
  width: "70px",
  height: "70px",
  outline: "none"
};
const restartText = {
  // transform: "rotate(30deg)"
  color: "white"
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
    console.log("are we handling this");
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
        var author = localStorage.getItem("username");
        var clicks = localStorage.getItem("Clicks");

        Axios.post("/api/nick", { author, clicks }).then(data =>
          console.log(data)
        );
      }
    );
  };

  render() {
    localStorage.setItem("Clicks", this.state.value);

    return (
      <>
        {/* <span style={counterStyle}>
          <strong>{this.state.value}</strong>
        </span> */}

        <div>
          <button
            id="Clicks"
            onClick={this.handleIncrement}
            style={buttonStyle}
          >
            <span style={counterStyle}>
              <strong>{this.state.value}</strong>
            </span>
          </button>
        </div>
        <button
          type="button"
          onClick={this.restartCounter.bind(this)}
          style={restartStyle}
        >
          <span style={restartText}>Restart</span>
        </button>

        <br></br>
        <br></br>

        <p
          style={{
            color: "white",
            position: "relative",
            textAlign: "center",
            top: "100%"
          }}
        >
          "8 clicks or more? Good job! You are well hydrated"
        </p>
      </>
    );
  }
}

export default Counter;
