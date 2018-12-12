import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../header/Header';
import Car_Item from '../car_item/Car_Item';
import InfoCar from './InfoCar';
import './listCar.css';

export default class ListCar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div >
                <Header />
                <div className="body_screen">
                    <div className="filter">
                        <InfoCar />
                    </div>
                    <div className="list">
                        <div style={{ margin: "5px", float: "left" }}>
                            <Car_Item />
                        </div>
                        <div style={{ margin: "5px", float: "left" }}>
                            <Car_Item />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}