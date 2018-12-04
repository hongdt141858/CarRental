import React, { Component } from 'react';

import './header.css';

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
            <div className="header">
                <div className="container">
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
                </div>
            </div>
        );
    }
}

export default Header;
