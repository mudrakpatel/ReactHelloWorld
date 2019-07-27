import React, { Component } from 'react';
import ComponentF from './ComponentF';
import UserContext from './userContext';

class ComponentE extends Component {

  static contextType = UserContext;

  render() {
    return (
      <React.Fragment>
        ComponentE context: {this.context}
        <ComponentF/>
      </React.Fragment>
    );
  }

}

export default ComponentE;
