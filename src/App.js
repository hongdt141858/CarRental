import React, { Component } from 'react';
import Header from './header/Header';
import './App.css';
import Signin from './signin/Signin';
import HomePage from './homepage/HomePage';
import Guide from './guide/Guide';
import CarDetail from './car_detail/CarDetail';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Car_Item from './car_item/Car_Item';
import Footer from './footer/Footer';
import ScreenDetail from './screen_detail/ScreenDetail';

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
            <Route exact path="/car" component={() => <CarDetail />} />
            <Route exact path="/car_item" component={() => <Car_Item />} />
            <Route exact path="/footer" component={() => <Footer />} />
            <Route exact path="/screen_detail" component={() => <ScreenDetail/>} />
          </Switch>

        </div>
      </Router>

    );
  }
}

export default App;
