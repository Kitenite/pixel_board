import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './DrawingTool.css';
import BoardManager from './components/BoardManager.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Draw</p>
          <BoardManager></BoardManager>
        </header>
      </div>
    );
  }
}

export default App;
