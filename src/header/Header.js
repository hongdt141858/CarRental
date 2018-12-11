import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { reactLocalStorage } from 'reactjs-localstorage';
import Slider from "react-slick";
import Footer from "../footer/Footer";
import './header.css';
import im_step1 from '../images/step1.png';
import im_step2 from '../images/step2.png';
import im_step3 from '../images/step3.png';
import im_step4 from '../images/step4.png';
import CarDetail from '../car_detail/CarDetail';
import DateTimePicker from 'react-datetime-picker';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hoverSupport: false,
            hoverLogin: false,
            hoverSignIn: false,
            redirectGuide: false,
            redirectSignIn: false,
            dateStart: new Date(),
            dateEnd: new Date(),
            city: ["Hà Nội", "Bắc Ninh", "Hải Dương", "Thái Bình", "Thanh Hóa"],
        }
    }

    handleSupportHoverOn = () => {
        this.setState({
            hoverSupport: true
        })
    };

    handleSupportHoverOff = () => {
        this.setState({
            hoverSupport: false
        })
    };

    handleLoginHoverOn = () => {
        this.setState({
            hoverLogin: true
        })
    };

    handleLoginHoverOff = () => {
        this.setState({
            hoverLogin: false
        })
    };

    handleSignInHoverOn = () => {
        this.setState({
            hoverSignIn: true
        })
    };

    handleSignInHoverOff = () => {
        this.setState({
            hoverSignIn: false
        })
    };

    redirectGuide = () => {
        this.setState({ redirectGuide: true });
    }

    redirectSignIn = () => {
        this.setState({ redirectSignIn: true });
    }

    onChangeStartDate = dateStart => this.setState({ dateStart });

    onChangeEndDate = dateEnd => this.setState({ dateEnd });

    onChangeCity = (value) => {
        console.log("111  " + value)
        
    }

    render() {
        if (this.state.redirectGuide) {
            return <Redirect push to="/guide" />;
        }
        if (this.state.redirectSignIn) {
            return <Redirect push to="/sign_in" />;
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
                <header id="header">
                    <nav className="navbar navbar-dark bg-primary header occho">
                        <div className="nav-ul">
                            <label className="nav-a">LOGO</label>
                            <span className="nav-a"><i className="zmdi zmdi-phone"></i> 0965143540</span>
                            <span className="nav-a"><i className="zmdi zmdi-email"></i>ducdt@gmail.com</span>
                            <span className="nav-a"><i className="zmdi zmdi-facebook"></i> Facebook</span>
                            <span className="nav-a"
                                style={{ color: (this.state.hoverSupport ? "#fff" : "#000") }}
                                onMouseEnter={this.handleSupportHoverOn}
                                onMouseLeave={this.handleSupportHoverOff}
                                onClick={this.redirectGuide} >
                                <i className="zmdi zmdi-info-outline">
                                </i> Hướng dẫn
                            </span>
                            <span className="nav-a"
                                style={{ color: (this.state.hoverLogin ? "#fff" : "#000") }}
                                onMouseEnter={this.handleLoginHoverOn} onMouseLeave={this.handleLoginHoverOff}>Đăng nhập
                                </span>
                            <span className="nav-a nav-dangky"
                                style={{ color: (this.state.hoverSignIn ? "#fff" : "#000") }}
                                onMouseEnter={this.handleSignInHoverOn}
                                onMouseLeave={this.handleSignInHoverOff}
                                onClick={this.redirectSignIn}>Đăng ký</span>
                        </div>
                    </nav>
                </header>
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
                            <i className="zmdi zmdi-search" style={{ fontSize: "40px", float:"left", marginLeft: "30px"}}></i>
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

export default Header;
