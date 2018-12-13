import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Car_Item from '../car_item/Car_Item';
import InfoCar from './InfoCar';
import VehicelGrid from './VehicelGrid';
import './listCar.css';
import VarConf from '../VarConf';
import { reactLocalStorage } from 'reactjs-localstorage';
import VehicleApi from '../api/VehicleApi';
import MyUtil from '../util/MyUtil';

export default class ListCar extends Component {
    constructor(props) {
        super(props);
        this.state={
            vehicles: [],
            cityId: props.match.params.city_id,
            rentalDate: props.match.params.datetime_to,
            returnDate: props.match.params.datetime_from
        }
    }

    async componentDidMount() {
        window.scrollTo(0, 0);
        reactLocalStorage.set("home.brand", 0)

        var link =window.location.href;
        var index = link.indexOf("car_list");
        var res = link.substring(index + 8, link.lengh);

        var arr = res.split("/")

        reactLocalStorage.set("home.city", arr[1])

        let value = await VehicleApi.getVehicles();

        this.setState({ vehicles: value ? value.data:[] })

    }

    onChangeListVehicle = async () => {
        let value = await VehicleApi.getVehicles()
        let vehicles = value.data

        this.setState({ vehicles: vehicles ? vehicles : [], start: true })
        this.props.history.replace({ pathname: "/home/car_list/" + reactLocalStorage.get("home.city") + "/" 
        + reactLocalStorage.get("home.date_to") + "/" + reactLocalStorage.get("home.date_from") })
    }

    render() {
        return (
            <div >
                <Header />
                <div className="body_screen">
                    <div className="filter">
                        <InfoCar onChangeListVehicle={this.onChangeListVehicle} />
                    </div>
                    <div className="list">
                        <VehicelGrid vehicles={this.state.vehicles} />
                    </div>
                </div>
            </div>
        )
    }
}