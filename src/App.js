import React, { Component } from 'react';
import Header from './header/Header';
import './App.css';
import Signin from './signin/Signin';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Signin /> */}
        <Header />
      </div>
    );
  }
}

export default App;
