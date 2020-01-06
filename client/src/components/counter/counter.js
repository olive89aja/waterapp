import React from 'react';

const counterStyle = {
backgroundColor: "yellow",
color:'blue',
size:'large'
};

const buttonStyle = {
backgroundColor: "light-blue",
color:'blue',
fontSize: 'large',
width:'200px',
height:'200px'
};

class Counter extends React.Component {
  static defaultProps = {
    initialvalue: 0,
  };

  state = {
    value: Number(this.props.initialvalue),
  };

  restartCounter() {
    this.setState({ value: [] });
  }

  handleIncrement = () => {
    this.setState(state => {
      return {
        value: parseInt(state.value + 1),
      };

    });
  };

  render() {
    return <>
       <span style={counterStyle}>
        <strong style={{ flex: `1` }}>{this.state.value}</strong>
        </span>
        <div>
            <button id="Clicks" onClick={this.handleIncrement} style={buttonStyle}> 
          I drank 8oz
        </button></div>
        <button type="button" onClick={ this.restartCounter.bind(this) }>
  <span>Initialize the counter</span>
</button>
      
        <br></br><br></br>
       {('8 clicks or more? Good job! Your body is well hydrated')}

        </>
    
  }
}

export default Counter;