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
import Profile from './profile/Profile';
import Change_Password from './change_password/Change_Password';
import ListCar from './list_car/ListCar';
import Customer from './customer/Customer';
import Login from './login/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={() => <HomePage />} />
            <Route exact path="/guide" component={() => <Guide />} />
            <Route exact path="/sign_in" component={() => <Signin />} />
            <Route exact path="/car" component={() => <CarDetail />} />
            <Route exact path="/car_item" component={() => <Car_Item />} />
            <Route exact path="/footer" component={() => <Footer />} />
            <Route exact path="/screen_detail" component={() => <ScreenDetail/>} />
            <Route exact path="/profile" component={() => <Profile/>} />
            <Route exact path="/change_password" component={() => <Change_Password/>} />
            <Route exact path="/customer" component={() => <Customer/>} />
            <Route exact path="/login" component={() => <Login />} />
            <Route path='/home/car_list/:city_id/:datetime_to/:datetime_from' component={ListCar} />
          </Switch>

        </div>
      </Router>

    );
  }
}

export default App;
