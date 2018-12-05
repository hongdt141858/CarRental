import React, { Component } from 'react';

import './App.css';
import Signin from './signin/Signin';
import HomePage from './homepage/HomePage';
import Guide from './guide/Guide';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Signin/> */}
        <Guide/>
      </div>
    );
  }
}

export default App;
