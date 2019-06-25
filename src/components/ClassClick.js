import React, {Component} from "react";

class ClassClick extends Component{

  constructor(props){
    super(props);
    this.state = {
      buttonText: "Click me"
    }
  }

  clickHandler(){
      console.log("Clicked the button from the Class component.");
  }

  render(){
    return(
      <div>
        <button onClick={this.clickHandler}>{this.state.buttonText}</button>
      </div>
    )
  }
}

export default ClassClick;
