import React, { Component } from 'react';

import './App.css';
import './header/Header';
import Header from './header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
