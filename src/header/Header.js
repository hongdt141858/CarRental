import React, { Component } from 'react';

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

    render() {
        return (
            <div>
                {/* <div className="container">
                    <div className="logo"> logo</div>
                    <div className="navigation">
                        <div className="button">

                        </div>
                        <div className="main-menu">
                            <ul>
                                <li>
                                    <a>
                                        <div className="item_menu" style={{ color: (this.state.hoverSupport ? "#006400" : "#fff") }} onMouseEnter={this.handleSupportHoverOn} onMouseLeave={this.handleSupportHoverOff}>Hỗ trợ</div>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <div className="item_menu" style={{ color: (this.state.hoverLogin ? "#006400" : "#fff") }} onMouseEnter={this.handleLoginHoverOn} onMouseLeave={this.handleLoginHoverOff}>Đăng nhập</div>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <div className="item_menu" style={{ color: (this.state.hoverSignIn ? "#006400" : "#fff") }} onMouseEnter={this.handleSignInHoverOn} onMouseLeave={this.handleSignInHoverOff}>Đăng ký</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
                <header id="header">
                    <nav className="navbar navbar-dark bg-primary header">
                        <div className="nav-ul">
                            <label className="nav-a">LOGO</label>
                            <a className="nav-a"><i className="zmdi zmdi-phone"></i> 0965143540</a>
                            <a className="nav-a"><i className="zmdi zmdi-email"></i>ducdt@gmail.com</a>
                            <a className="nav-a"><i className="zmdi zmdi-facebook"></i> Facebook</a>
                            <a className="nav-a"><i className="zmdi zmdi-info-outline"></i> Hướng dẫn</a>
                            <a className="nav-a">Đăng nhập</a>
                            <a className="nav-a nav-dangky">Đăng ký</a>
                        </div>

                    </nav>
                </header>
                <div className="con-search">
                    <div className="search">
                        <label className="text-search"> Thuê xe tự lái</label>
                        <div className="input-search">
                             <input type="text" className="" id="address" placeholder="Nhập địa chỉ ..."/>
                        </div>
                    </div>
                </div>
                <div className="guide">
                    <h1>Hướng dẫn thuê xe </h1>
                    <div className="con-guide">
                        <div className="step1">
                            <img src={im_step1} />
                            <h3>Đặt xe</h3>
                        </div>
                        <div className="step2">
                            <img src={im_step2} />
                            <h3>Nhận xe hoặc giao tận nơi</h3>
                        </div>
                        <div className="step3">
                            <img src={im_step3}/>
                            <h3>Trải nghiệm chuyến đi</h3>
                        </div>
                        <div className="step4">
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
