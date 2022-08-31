import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';

function App() {
  const [name,setName] = useState();

  function click(event){
    
  }


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={click}>
          createCard
        </button>
      </header>
    </div>
  );
}




export default App;
