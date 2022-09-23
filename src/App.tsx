import React from 'react';

import './App.css';
import { Counter } from './component/counter';
import { Todos } from './component/todo';


function App() {
  return (
    <div className="App">
      <Counter/>
      <Todos/>
    </div>
  );
}

export default App;
