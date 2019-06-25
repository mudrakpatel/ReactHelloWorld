import React from "react";

function Person({person, key}){
  return(
    <div>
      <h2>
        I am {person.name}. My age is {person.age} and I am {person.heroName}!
      </h2>
    </div>
  )
}

export default Person;
