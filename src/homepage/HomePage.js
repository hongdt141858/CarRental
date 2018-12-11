import React, { Component } from 'react';
import { Redirect } from 'react-router'
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


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectListCar: false,
            dateStart: new Date(),
            dateEnd: new Date(),
            city: ["Hà Nội", "Bắc Ninh", "Hải Dương", "Thái Bình", "Thanh Hóa"],
        }
    }

    redirectListCar = () => {
        this.setState({ redirectListCar: true });
    }

    onChangeStartDate = dateStart => this.setState({ dateStart });

    onChangeEndDate = dateEnd => this.setState({ dateEnd });

    onChangeCity = (value) => {
        console.log("111  " + value)
        
    }

    render() {
        if (this.state.redirectListCar) {
            return <Redirect push to="/car_item" />;
        }

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };

        const listcity = this.state.city.map((city) =>
            <option>{city}</option>
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
                            <div className="start_date" style={{ float: "left", marginLeft: "20px" }}>
                                <span>Ngày nhận: </span>
                                <DateTimePicker
                                    onChange={this.onChangeStartDate}
                                    value={this.state.dateStart}
                                />
                            </div>
                            <div className="end_date" style={{ float: "left", marginLeft: "20px" }}>
                                <span>Ngày trả: </span>
                                <DateTimePicker
                                    onChange={this.onChangeEndDate}
                                    value={this.state.dateEnd}
                                />
                            </div>
                            <i className="zmdi zmdi-search" style={{ fontSize: "38px", float:"left", marginLeft: "20px"}} onClick={this.redirectListCar}></i>
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
                <div className="famous-place" style={{ textAlign: 'center' }}>
                    <h1 style={{ marginBottom: '20px', marginTop: '20px' }}>Xe nổi bật </h1>
                    <Slider {...settings} >
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
                        </div>
                        <div className="slide" >
                            <CarDetail />
                        </div>
                    </Slider>
                </div>
                <Footer />
            </div>
        );
    }
}

export default HomePage;
