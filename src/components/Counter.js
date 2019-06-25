import React, {Component} from "react";

class Counter extends Component{

  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  increment(){
    // this.setState({
    //   count: this.state.count + 1
    // }, () => {
    //   console.log("Count value with callback: " + this.state.count)
    // });
    // console.log("Count value without callback: " + this.state.count);
    this.setState((previousState, props) => ({
      count: previousState.count + 1
    }), () => {
      console.log("Count value from callback: " + this.state.count)
    });
  }

  incrementFive(){
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render(){
    return(
      <div>
        <div>
          Count - {this.state.count}
        </div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter;
