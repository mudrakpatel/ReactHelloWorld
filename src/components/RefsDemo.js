import React, { Component } from 'react';

class RefsDemo extends Component {

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.callBackRef = null;
    this.callSetBackRef = (element) => {
      this.callBackRef = element;
    }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  }

  componentDidMount() {
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
    if(this.callBackRef){
      this.callBackRef.focus();
    }
  }

  render() {
    return (
      <div>
          <input type="text" ref={this.inputRef}/>
          <input type="text" ref={this.callSetBackRef}/>
          <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }

}

export default RefsDemo;
