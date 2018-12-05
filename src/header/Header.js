import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { reactLocalStorage } from 'reactjs-localstorage';

import './header.css';
import im_step1 from '../images/step1.png';
import im_step2 from '../images/step2.png';
import im_step3 from '../images/step3.png';
import im_step4 from '../images/step4.png';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hoverSupport: false,
            hoverLogin: false,
            hoverSignIn: false,
            redirectGuide: false,
            redirectSignIn: false,
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

    render() {
        if (this.state.redirectGuide) {
            return <Redirect push to="/guide" />;
        }
        if (this.state.redirectSignIn) {
            return <Redirect push to="/sign_in" />;
        }
        return (
            <div>
                <header id="header">
                    <nav className="navbar navbar-dark bg-primary header">
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
                        <label className="text-search"> Thuê xe tự lái - Tải ngay OcChoOTo</label>
                        <div className="input-search">
                            <input type="text" className="" id="address" placeholder="Nhập địa chỉ ..." />
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
                <div className="famous-place">
                    <div className="slide">
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
