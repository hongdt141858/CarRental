import React, { Component } from 'react';

import './App.css';
import Signin from './signin/Signin';
import HomePage from './homepage/HomePage';
import Guide from './guide/Guide';
import CarDetail from './car_detail/CarDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Signin/>
        <Guide/> */}
        <CarDetail/>
      </div>
    );
  }
}

export default App;
