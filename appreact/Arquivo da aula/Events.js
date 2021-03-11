import React from "react";

function handleClick(event){
  console.log(event)
}

const App = () => {
  return (
    <button onClick={handleClick}>Clique</button>
  )
};
