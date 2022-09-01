import "./App.css";
import React, { useState } from "react";
import Cards from "./components/crads";

function App() {
  const [cardNames, setCardNames] = useState([]); //forma de  hacer un estado.
  function click(event) {
    let names = prompt("");

    setCardNames([...cardNames, names]);

    event.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={click}>createCard</button>

        {cardNames?.map(function (value) {
          console.log(value);
          return <Cards name={value} />;
        })}
      </header>
    </div>
  );
}

export default App;
