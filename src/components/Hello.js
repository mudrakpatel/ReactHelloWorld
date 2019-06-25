import React from "react";

const Hello = () => {
  // return (
  //   <div id="hello" className="dummyClass">
  //     <h1>Hello world from Hello.js Component.</h1>
  //   </div>
  // );

  //non-JSX method
  return React.createElement("div", {id: "hello", className: "dummyClass"},
         React.createElement("h1", null, "Hello world from Hello.js Component."));
}

export default Hello;
