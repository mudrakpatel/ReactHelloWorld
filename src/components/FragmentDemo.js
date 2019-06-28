import React from "react";

function FragmentDemo(){
  return(
    //Always wrap sibling JSX elements in a parent tag
    //If not done so, the application breaks
    //So the code below would not work without
    //the enclosing div tag
    /*<div>
      <h1>
        Fragment Demo
      </h1>
      <p>This describes the Fragment Demo Component</p>
    </div>*/
    <React.Fragment>
      <h1>Fragment Demo</h1>
      <p>This describes the Fragment Demo Component</p>
    </React.Fragment>
  )
}

export default FragmentDemo;
