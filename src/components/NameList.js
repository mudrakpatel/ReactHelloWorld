import React from "react";
import Person from "./Person";

function NameList(){
  const names = ["Bruce", "Clark", "Kent", "Bruce"];
  const personsArray = [
    {
      id: 0,
      name: "Bruce",
      age: 30,
      heroName: "Batman"
    },
    {
      id: 1,
      name: "Clark",
      age: 30,
      heroName: "Superman"
    },
    {
      id: 2,
      name: "Kent",
      age: 35,
      heroName: "Dr. Fate"
    }
  ];
  //namesList to be used in 2nd method
  //const personsList = personsArray.map(person => <Person key={person.id} person={person}/>);
  const namesList = names.map((name, index) =>
                    <h2 key={index}>Hero at index {index} is {name}.</h2>);
  return(
    // <div>
    // // //1st method of list rendering in React
    // //   {
    // //     namesArray.map(name => <h2>{name}</h2>)
    // //     //Note: DONOT use semicolon after
    // //     //statement completion in the curly
    // //     //syntax in jsx. The program FAILS
    // //     //to compile if semicolons are used.
    // //   }
    // // //End of the 1st method
    // </div>
    //2nd method of list rendering in React
    <div>
      {namesList}
    </div>
    //End of 2nd method
  )
}

export default NameList;
