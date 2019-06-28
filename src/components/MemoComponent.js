import React from "react";

function MemoComponent({name}){
  console.log("Rendering Memo Component");
  return(
    <div>
      From MemoComponent {name}
    </div>
  )
}

export default React.memo(MemoComponent);
