import React, {Component} from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component{

  constructor(){
    super();
    this.state = {
      parentName: "Parent"
    }
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName){
    //Using template literals
    //to put value in the string
    //instead of concatnating
    //+ operator
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  render(){
    return(
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }

}

export default ParentComponent;
