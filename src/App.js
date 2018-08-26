import React, { Component } from 'react';
import './App.css';

import Header from './views/home/Header'
import Explore from './views/home/Explore'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Explore/>
      </div>
    );
  }
}

export default App;
