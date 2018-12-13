import React, { Component } from 'react'
import { Redirect } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Car_Item from '../car_item/Car_Item';
import './listCar.css';

export default class ListCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    
    render() {
       
        return (
            <div >
                <div style={{ margin: "5px", float: "left" }}>
                    <Car_Item />
                </div>
                <div style={{ margin: "5px", float: "left" }}>
                    <Car_Item />
                </div><div style={{ margin: "5px", float: "left" }}>
                    <Car_Item />
                </div>
                <div style={{ margin: "5px", float: "left" }}>
                    <Car_Item />
                </div>
                <div style={{ margin: "5px", float: "left" }}>
                    <Car_Item />
                </div><div style={{ margin: "5px", float: "left" }}>
                    <Car_Item />
                </div>
                <div style={{ margin: "5px", float: "left" }}>
                    <Car_Item />
                </div>
            </div>
        )
    }
}