import React, {Component} from "react";

class Message extends Component{

constructor(){
  super();
  this.state = {
    message: "Welcome from Message Class Component. This message is stored in the class state."
  }
}

changeMessage(){
  this.setState({
    message: "Thank you for subscribing!"
  });
}

  render(){
    return(
      <div>
        <h1>
          {this.state.message}
        </h1>
        <button onClick={()=>this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default Message;
