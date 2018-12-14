import React, { Component } from 'react';
import { Redirect } from 'react-router';
import VarConf from '../VarConf';
import { reactLocalStorage } from 'reactjs-localstorage';
import Slider from "react-slick";
import Footer from "../footer/Footer";
import './homePage.css';
import im_step1 from '../images/step1.png';
import im_step2 from '../images/step2.png';
import im_step3 from '../images/step3.png';
import im_step4 from '../images/step4.png';
import CarDetail from '../car_detail/CarDetail';
import DateTimePicker from 'react-datetime-picker';
import Header from '../header/Header';
import MyUtil from '../util/MyUtil';
import VehicleApi from '../api/VehicleApi';
import CityApi from '../api/CityApi';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectListCar: false,
            dateTo: new Date(reactLocalStorage.get(VarConf.home.date_to)),
            dateFrom: new Date(reactLocalStorage.get(VarConf.home.date_from)),
            cities: [],
            city: reactLocalStorage.get(VarConf.home.city),
            vehicles: [],
        }
    }

    async componentWillMount() {
        this.mounted = true;
        await CityApi.getAll().then(data => {
            reactLocalStorage.setObject("home.cities", data);
            if (this.mounted) this.setState({ cities: data });

        })
        reactLocalStorage.set(VarConf.home.city, 1);
        reactLocalStorage.set(VarConf.home.date_to, new Date());
        reactLocalStorage.set(VarConf.home.date_from, new Date());
    }

    async componentDidMount() {
        window.scrollTo(0, 0);
        reactLocalStorage.set("home.brand", 0)

        let value = await VehicleApi.getVehicles();

        this.setState({ vehicles: value ? value.data : [] })
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    redirectListCar = () => {
        this.setState({ redirectListCar: true });
    }

    onChangeStartDate = date => {
        reactLocalStorage.set(VarConf.home.date_to, new Date(date));
        this.setState({
            dateTo: new Date(date)
        });
    }

    onChangeEndDate = date => {
        reactLocalStorage.set(VarConf.home.date_from, new Date(date));
        this.setState({
            dateFrom: new Date(date)
        });
    }

    onChangeCity = (event) => {
        this.setState({
            city: event.target.value,

        });
        reactLocalStorage.set(VarConf.home.city, event.target.value);
    }

    render() {
        if (this.state.redirectListCar) {
            var data = this.state.city;
            data += '/' + MyUtil.getDatetimeFormatEn(this.state.dateTo);
            data += '/' + MyUtil.getDatetimeFormatEn(this.state.dateFrom);
            return <Redirect push to={"/home/car_list/" + data + ""} />;
        }

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };

        var city = this.state.cities ? this.state.cities : []
        const listcity = this.state.cities.map((item) =>
            <option value={item.city_id}>{item.city_name}</option>
        );

        return (
            <div>
                <Header />
                <div className="con-search">
                    <div className="search">
                        <label className="text-search"> Thuê xe tự lái - OcChoOTo</label>
                        <div className="input-search">
                            <div className="city" style={{ float: "left" }}>
                                <span> Địa chỉ: </span>
                                <select style={{ width: "200px", height: "27px" }} onChange={this.onChangeCity}>
                                    {listcity}
                                </select>
                            </div>
                            <div className="start_date" style={{ float: "left" }}>
                                <span>Ngày nhận: </span>
                                <DateTimePicker
                                    onChange={this.onChangeStartDate}
                                    value={this.state.dateTo}
                                />
                            </div>
                            <div className="end_date" style={{ float: "left", marginLeft: "40px" }}>
                                <span>Ngày trả: </span>
                                <DateTimePicker
                                    onChange={this.onChangeEndDate}
                                    value={this.state.dateFrom}
                                />
                            </div>
                            <i className="zmdi zmdi-search" style={{ fontSize: "38px", float: "left", marginLeft: "60px" }} onClick={this.redirectListCar}></i>
                        </div>
                    </div>
                </div>
                <div className="guide">
                    <h1>Hướng dẫn thuê xe </h1>
                    <div className="con-guide">
                        <div className="step1" onClick={this.redirectGuide}>
                            <img src={im_step1} />
                            <h3>Đặt xe</h3>
                        </div>
                        <div className="step2" onClick={this.redirectGuide}>
                            <img src={im_step2} />
                            <h3>Nhận xe hoặc giao tận nơi</h3>
                        </div>
                        <div className="step3" onClick={this.redirectGuide}>
                            <img src={im_step3} />
                            <h3>Trải nghiệm chuyến đi</h3>
                        </div>
                        <div className="step4" onClick={this.redirectGuide}>
                            <img src={im_step4} />
                            <h3>Kết thúc giao dịch</h3>
                        </div>
                    </div>
                    <div>
                        <p className="continue">
                            <b>Xem thêm >></b>
                        </p>
                    </div>
                </div>
                <div className="famous-car" >
                    <h1>Xe nổi bật </h1>
                    <Slider {...settings} >
                        {/* <div className="slide" >
                            <CarDetail />
                        </div>
                        <div className="slide" >
                            <CarDetail />
                        </div>
                        <div className="slide" >
                            <CarDetail />
                        </div>
                        <div className="slide" >
                            <CarDetail />
                        </div>
                        <div className="slide" >
                            <CarDetail />
                        </div> */}
                        {this.state.vehicles && this.state.vehicles.map(vehicle =>
                            <div  className="slide">
                                <CarDetail vehicle={vehicle}/>
                            </div>
                        )}
                    </Slider>
                </div>
                <Footer />
            </div>
        );
    }
}

export default HomePage;
