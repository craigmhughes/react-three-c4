import React from 'react';
import logo from './logo.svg';
import './App.css';

import GameCanvas from './components/game.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GameCanvas/>
      </header>
    </div>
  );
}

export default App;
