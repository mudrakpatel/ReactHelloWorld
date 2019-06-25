import React, {Component} from "react";

class Welcome extends Component {
  render(){
    const {name, heroName} = this.props;
    //Use the above mentioned method to
    //destructure state also. Example below
    //const {state1, state2, ...} = this.state;
    return <h1>Class Component welcomes {name} a.k.a {heroName}.</h1>;
  }
}

export default Welcome;
