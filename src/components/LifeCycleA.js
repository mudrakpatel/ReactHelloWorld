import React, {Component} from "react";
import LifeCycleB from "./LifeCycleB";

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

  shouldComponentUpdate(){
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(previousProps, previousState){
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(){
    console.log("LifeCycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Name property changed to Batman!"
    });
  }

  render(){
    console.log("LifeCycleA render");
    return(
      <div>
        LifeCycle A
        <div>
          <button onClick={this.changeState}>Change state</button>
        </div>
        <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA;
