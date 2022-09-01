import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';
import  Cards from "./components/crads"

function App() {
  const [name,setName] = useState();
  const [lol,lolset] = useState([]);//forma de  hacer un estado.
  function click(event){
    setName(prompt(""));
    event.preventDefault();  
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={click}>
          createCard
        </button>
        <h1>{name}</h1>
        <Cards name={name}></Cards>
      </header>
    </div>
  );
}




export default App;
