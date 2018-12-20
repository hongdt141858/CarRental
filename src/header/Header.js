import React, { Component } from 'react';
import { Redirect } from 'react-router'
import './header.css';
import { reactLocalStorage } from "reactjs-localstorage";
import VarConf from '../VarConf';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hoverSupport: false,
            hoverLogin: false,
            hoverSignIn: false,
            redirectGuide: false,
            redirectSignIn: false,
            redirectHome: false,
            redirectLogin: false,
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

    redirectHome = () => {
        this.setState({ redirectHome: true });
    }

    redirectLogin = () => {
        this.setState({ redirectLogin: true });
    }

    componentWillMount() {
        reactLocalStorage.set(VarConf.home.is_login, false);
    }


    render() {
        console.log("111111111111   " + reactLocalStorage.get(VarConf.home.is_login))
        var userInfo = reactLocalStorage.getObject("user.info", null);
        var user_name = userInfo ? userInfo.user_account_name : "";
        var is_login = reactLocalStorage.get(VarConf.home.is_login);

        if (this.state.redirectGuide) {
            return <Redirect push to="/guide" />;
        }
        if (this.state.redirectSignIn) {
            return <Redirect push to="/sign_in" />;
        }
        if (this.state.redirectHome) {
            return <Redirect push to="/" />;
        }
        if (this.state.redirectLogin) {
            return <Redirect push to="/login" />;
        }

        return (
            <div>
                <header id="header">
                    <nav className="navbar navbar-dark bg-primary header occho">
                        <div className="nav-ul">
                            <img className="nav-a" onClick={this.redirectHome} src="images/logo3.png" />
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
                            {
                                (is_login == "true")
                                    ?
                                    <span><i class="zmdi zmdi-account-circle"></i>{user_name}</span>
                                    :
                                    <span>
                                        <span className="nav-a"
                                            style={{ color: (this.state.hoverLogin ? "#fff" : "#000") }}
                                            onMouseEnter={this.handleLoginHoverOn}
                                            onMouseLeave={this.handleLoginHoverOff}
                                            onClick={this.redirectLogin}
                                        >Đăng nhập
                                        </span>
                                        <span className="nav-a nav-dangky"
                                            style={{ color: (this.state.hoverSignIn ? "#fff" : "#000") }}
                                            onMouseEnter={this.handleSignInHoverOn}
                                            onMouseLeave={this.handleSignInHoverOff}
                                            onClick={this.redirectSignIn}>Đăng ký</span>
                                    </span>
                            }

                        </div>
                    </nav>
                </header>

            </div>
        );
    }
}

export default Header;
