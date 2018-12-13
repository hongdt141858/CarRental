import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './infoCar.css';
import VarConf from '../VarConf';
import { reactLocalStorage } from 'reactjs-localstorage';
import DateTimePicker from 'react-datetime-picker';
import MyUtil from '../util/MyUtil';
import CityApi from '../api/CityApi';
import BrandApi from '../api/BrandApi';
import SeatApi from '../api/SeatApi';
import TransmissionApi from '../api/TransmissionApi';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const Range = Slider.Range;

let brandGlobal = { "brand_id": 0, "brand_name": "Tất cả" }
let seatGlobal = { "seat_id": 0, "seat_number": "Tất cả" }
let tmsGlobal = { "transmission_id": 0, "transmission_name": "Tất cả" }

export default class InfoCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: reactLocalStorage.get(VarConf.home.city),
            cities: reactLocalStorage.getObject("home.cities", []) ? reactLocalStorage.getObject("home.cities", []) : [],
            date_to: reactLocalStorage.get(VarConf.home.date_to),
            date_from: reactLocalStorage.get(VarConf.home.date_from),
            brandId: null,
            seatId: null,
            tmsId: null,
            brandName: "",
            seatNum: "",
            tmsName: "",
            seats: [],
            tmss: [],
            brands: [],
            price: MyUtil.rangePrice(0, 1500000),
            price_from: 0,
            price_to: 1500000
        }
    }

    componentDidMount = async () => {
        await CityApi.getAll().then(data => {
            reactLocalStorage.setObject("config.cities", data);
            this.setState({ cities: data })
        })

        await this.handleData();
        reactLocalStorage.set("vehicles.price_from", 0)
        reactLocalStorage.set("vehicles.price_to", 3000000)
    }

    handleData = async () => {
        let arrBrandCar, arrSeats, arrTranmissionCar;
        arrBrandCar = await BrandApi.getBrandByType()


        arrBrandCar.unshift(brandGlobal)

        this.setState({
            brands: arrBrandCar,
            brandId: "",
            brandName: "",
        })

        reactLocalStorage.set("booking.brand", "")

        arrSeats = await SeatApi.getAllSeat()
        arrSeats.unshift(seatGlobal)
        this.setState({
            seats: arrSeats ? arrSeats : [],
            seatId: "",
            seatNum: ""

        })

        reactLocalStorage.set("booking.seat_filter", "")

        arrTranmissionCar = await TransmissionApi.getAllTransmisssion()
        arrTranmissionCar.unshift(tmsGlobal)

        this.setState({
            tmss: arrTranmissionCar,
            tmsId: "",
            tmsName: "",
            arrTranmissionCar: arrTranmissionCar,

        })
        reactLocalStorage.set("booking.tms_filter", "")
    }

    handleSelectCity = async (e) => {
        reactLocalStorage.set("home.city", e.target.value)
        this.setState({ city: e.target.value })
        await this.props.onChangeListVehicle();
    }

    onChangeBrand = async (event) => {

        var value = this.state.brands.filter(function (item) {
            return item["brand_name"] == event.target.value
        })

        this.setState({ brandId: value[0]["brand_id"], brandName: value[0]["brand_name"] })

        reactLocalStorage.set("booking.brand", value[0]["brand_id"])
        await this.props.onChangeListVehicle();
    }

    onChangeSeat = async (event) => {

        var value = this.state.seats.filter(function (item) {
            return item["seat_number"] == event.target.value
        })

        if (value[0])
            this.setState({ seatId: value[0]["seat_id"], seatNum: value[0]["seat_number"] })
        reactLocalStorage.set("booking.seat_filter", value[0]["seat_id"])
        await this.props.onChangeListVehicle();
    }

    onChangeTransmission = async (event) => {

        var value = this.state.tmss.filter(function (item) {
            return item["transmission_name"] == event.target.value
        })

        this.setState({ tmsId: value[0]["transmission_id"], tmsName: value[0]["transmission_name"] })
        reactLocalStorage.set("booking.tms_filter", value[0]["transmission_id"])
        await this.props.onChangeListVehicle();
    }

    onChangePrice = async (value) => {
        var price_from = value[0] * 15000;
        var price_to = value[1] * 15000;

        this.setState({ price: MyUtil.rangePrice(price_from, price_to) })
        reactLocalStorage.set("vehicles.price_from", price_from)
        reactLocalStorage.set("vehicles.price_to", price_to)

    }

    onAfterChange = async () => {
        reactLocalStorage.get()
        await this.props.onChangeListVehicle()
    }


    render() {
        var cities = this.state.cities;
        return (
            <div style={{ marginTop: "30px" }}>
                <div className="col-lg-12">
                    <div className="input-form select-box">
                        <br />
                        <p>Thành phố</p>
                        <select className="form-control" value={this.state.city} onChange={this.handleSelectCity.bind(this)}>
                            {this.state.cities && cities.map(city => (
                                <option key={city.city_id} value={city.city_id}>{city.city_name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input-form select-box">
                        <br />
                        <p>Ngày nhận xe</p>
                        <div className="date_fix">
                            <DateTimePicker
                                className="form-control"
                                onChange={this.onChangeStartDate}
                                value={new Date(this.state.date_to)}
                            />
                        </div>

                    </div>
                    <div className="input-form select-box">
                        <br />
                        <p>Ngày trả xe</p>
                        <div className="date_fix">
                            <DateTimePicker
                                className="form-control"
                                onChange={this.onChangeStartDate}
                                value={new Date(this.state.date_from)}
                            />
                        </div>
                    </div>
                    <div className="input-form select-box">
                        <br />
                        <p>Số chỗ</p>
                        <select className="form-control" onChange={this.onChangeSeat} required value={this.state.seatNum}>
                            <option value="" hidden>Chọn số chỗ </option>
                            {this.state.seats && this.state.seats.map(seat =>
                                <option value={seat.seat_number} key={seat.seat_id}>{seat.seat_number} {seat.seat_id ? "chỗ" : ""}</option>
                            )}
                        </select>
                    </div>
                    <div className="input-form select-box">
                        <br />
                        <p>Động cơ</p>
                        <select className="form-control" onChange={this.onChangeTransmission} required value={this.state.tmsName}>
                            <option value="" hidden>Chọn loại động cơ</option>
                            {this.state.tmss && this.state.tmss.map(tms =>
                                <option value={tms.transmission_name} key={tms.transmission_id}>{tms.transmission_name}</option>
                            )}
                        </select>
                    </div>
                    <div className="input-form select-box">
                        <br />
                        <p>Hãng</p>
                        <select className="form-control" required onChange={this.onChangeBrand} value={this.state.brandName}>
                            <option value="" hidden>Chọn hãng xe </option>
                            {this.state.brands && this.state.brands.map(br =>
                                            <option value={br.brand_name} key={br.brand_id}>{br.brand_name}</option>
                                        )}
                        </select>
                    </div>
                    <div className="shadow p-md pr-xlg" style={{    marginTop: "30px",backgroundColor: "#fff",borderRadius: "4px",padding: "10px"}}>
                        <div className="widget-sidebar widget-price">
                            <div className="widget-content">
                                
                                <p>Giá</p>
                                <form action="#" method="get" acceptCharset="utf-8">
                                    <div className="price search-filter-input">
                                        <Range allowCross={false} defaultValue={[0, 3000000]} onChange={this.onChangePrice} onAfterChange={this.onAfterChange} />
                                        <p className="title_price_range">{this.state.price} </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}