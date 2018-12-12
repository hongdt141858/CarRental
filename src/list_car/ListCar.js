import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../header/Header';
import Car_Item from '../car_item/Car_Item'

import ListCar from '../list_car/ListCar';
export default class Guide extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Header />
                <Car_Item />

            </div>
        )
    }
}