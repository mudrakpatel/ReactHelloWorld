import React, {Component} from "react";

class LifeCycleA extends Component{

  constructor(props){
    super(props);
    this.state = {
      name: "Bruce"
    }
    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state){
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount(){
    console.log("LifeCycleA componentDidMount");
  }

  render(){
    console.log("LifeCycleA render");
    return(
      <div>
        LifeCycle A
      </div>
    )
  }
}

export default LifeCycleA;
