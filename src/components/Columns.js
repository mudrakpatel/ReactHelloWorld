import React from "react";

function Columns(){
  const items = [];
  return(
    <React.Fragment>
      <td>Name</td>
      <td>John</td>
    </React.Fragment>
    //The following syntax can be used
    //instead of React.Fragment
    //But Within the empty tags i.e. <></>
    //Attributes cannot be passed
    /*<>
      <td>Name</td>
      <td>John</td>
    </>*/
  )
}

export default Columns;
