import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CharacterCard } from './Character/characterCard'

function App() {
  return (
    <div className="Initiative Tracker">
      <header className="App-header">
        Initiative tracker
      </header>
      <div className="App-body">
        <div className="App-body-cards">
        <CharacterCard/>
        </div>
      </div>
    </div>
  );
}

export default App;
