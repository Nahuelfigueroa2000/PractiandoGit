import "./App.css";
import React, { useState } from "react";
import Cards from "./components/crads";

function App() {
  const [cardNames, setCardNames] = useState([]); //forma de  hacer un estado.
  function click(event) {
    let names = prompt("Set card name");

    setCardNames([...cardNames, names]);

    event.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <button id="createNewCard" onClick={click}>Create a new card</button>
        <div className="cardList">
          {cardNames?.map(function (value) {
            console.log(value);
            return <Cards name={value} />;
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
