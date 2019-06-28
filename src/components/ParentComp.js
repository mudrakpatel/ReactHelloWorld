import React, { PureComponent, Component } from 'react';
import PureComp from './PureComponent';
import RegularComp from './RegularComponent';

class ParentComp extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
       name: "John"
    };
  }

  componentDidMount() {
    setInterval(() => {
        this.setState({
          name: "John"
        });
      }, 2000);
  }

  render() {
    console.log("ParentComp render");
    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
      </div>
    );
  }

}

export default ParentComp;
