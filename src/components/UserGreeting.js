import React, {Component} from "react";

class UserGreeting extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: true
    }
  }

  render(){
    return(
      //using AND logic operator
      this.state.isLoggedIn && <div>Welcome User!</div>
    );

    //let message;
    //Using if-else shorthand
    //i.e. => Condition ? option1 : option2;
    // this.state.isLoggedIn === true ?
    //   message = <div>Welcome User!</div> :
    //   message = <div>Welcome Guest!</div>;
    //   return(
    //     <div>{message}</div>
    //   );
    // if(this.state.isLoggedIn === true){
    //   return(
    //     <div>
    //       Welcome User!
    //     </div>
    //   );
    // } else if(this.state.isLoggedIn === false){
    //   return(
    //     <div>
    //       Welcome Guest!
    //     </div>
    //   );
    // }
    // return(
    //   <div>
    //     <div>
    //       Welcome User!
    //     </div>
    //     <div>
    //       Welocme Guest!
    //     </div>
    //   </div>
    // );
  }
}

export default UserGreeting;
