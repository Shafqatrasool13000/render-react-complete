import './App.css';
import React from 'react'
import Parent from './components/context/Parent';
import ChildA from './components/context/Child';


function App() {
  return (
    <div className="App">
      <Parent>
        <ChildA/>
      </Parent>
    </div>
  );
}

export default App;
