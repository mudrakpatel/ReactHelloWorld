import React, { Component } from 'react';

class ClickCounter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState(previousState => {
      return{
        count: previousState.count + 1
      }
    });
  }

  render() {
    const {count} = this.state;
    return (
      <div>
        <button onClick={this.incrementCount}>Clicked {count} times</button>
      </div>
    );
  }

}

export default ClickCounter;
