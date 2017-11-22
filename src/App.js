import React, { Component } from 'react';
import './App.css';
import NewBullet from './components/bullets/NewBullet';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <NewBullet/>
      </div>
      
    );
  }
}

export default App;
