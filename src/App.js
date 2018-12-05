import React, { Component } from 'react';
import Header from './header/Header';
import './App.css';
import Signin from './signin/Signin';
import HomePage from './homepage/HomePage';
import Guide from './guide/Guide';
<<<<<<< HEAD
import CarDetail from './car_detail/CarDetail';
=======
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

>>>>>>> 178df31d8192b6bc2281c7e83630d6b0d0e38d9c

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        {/* <Signin/>
        <Guide/> */}
        <CarDetail/>
      </div>
=======
      // <div className="App">
      //   {/* <Signin/> */}
      //   <Guide/>
      // </div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={() => <Header />} />
            <Route exact path="/guide" component={() => <Guide />} />
            <Route exact path="/sign_in" component={() => <Signin />} />
          </Switch>

        </div>
      </Router>
>>>>>>> 178df31d8192b6bc2281c7e83630d6b0d0e38d9c
    );
  }
}

export default App;
