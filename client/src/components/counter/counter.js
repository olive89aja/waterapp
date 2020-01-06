import React from 'react';
import PropTypes from 'prop-types';


const counterStyle = {
  /* styles skipped for brevity */
};

class Counter extends React.Component {
  static defaultProps = {
    initialvalue: 0,
  };

  state = {
    value: Number(this.props.initialvalue),
  };

  handleIncrement = () => {
    this.setState(state => {
      return {
        value: state.value + 1,
      };
    });
  };
  // handleDecrement = () => {
  //   this.setState(state => {
  //     return {
  //       value: state.value - 1,
  //     }
  //   })
  // }

  render() {
    return (
      <span style={counterStyle}>
        <strong style={{ flex: `1` }}>{this.state.value}</strong>
        {/* <button onClick={this.handleDecrement}>Decrement</button> */}
        <button id="Clicks" onClick={this.handleIncrement}>
          I drank 17oz
        </button>
        {/* <button disabled={!this.state.value}>You drank enough</button> */}
      </span>
    );
  }
}

export default Counter;