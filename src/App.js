import React, { Component } from 'react';
import Header from './header/Header';
import './App.css';
import Signin from './signin/Signin';
import HomePage from './homepage/HomePage';
import Guide from './guide/Guide';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
