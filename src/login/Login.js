import React, { Component } from 'react'
import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { password, required, emailAndPhone } from '../util/validate';
import { reactLocalStorage } from "reactjs-localstorage";
import VarConf from '../VarConf';
import UserApi from '../api/UserApi';
import { Redirect } from 'react-router';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameInput: {
                value: "",
                error: ""
            },
            passwordInput: {
                value: "",
                error: ""
            },
            message: "",
            isClick: false,
            redirectSignUp: false,
            redirectHome: false,
        }
    }

    redirectSignUp = () => {
        this.setState({ redirectSignUp: true });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        var { usernameInput, passwordInput } = this.state;
        var user = null;

        var result = await UserApi.login({ 
            user_account_name: usernameInput.value, 
            user_account_password: passwordInput.value })
        if (result && result.message)
            this.setState({ message: result.message })
        else if (result && result.data) {
            user = result.data;
            reactLocalStorage.setObject("user.info", user);
        } else alert("Lỗi kết nối mạng")
        reactLocalStorage.set(VarConf.home.is_login, true);
        this.setState({
            redirectHome: true,
        })
    };

    onChangeUsername = (e) => {
        var value = e.target.value;
        var { usernameInput, passwordInput, isClick } = this.state;
        usernameInput.value = value
        usernameInput.error = required(value) || emailAndPhone(value);
        isClick = this.check({ usernameInput, passwordInput });
        this.setState({ usernameInput, passwordInput, isClick, message: "" })
    }

    onChangePassword = (e) => {
        var value = e.target.value;
        var { usernameInput, passwordInput, isClick } = this.state;
        passwordInput.value = value
        passwordInput.error = required(value) || password(value);
        isClick = this.check({ usernameInput, passwordInput });
        this.setState({ usernameInput, passwordInput, isClick, message: "" })
    }

    check = (state) => {
        if (!state || (!state.usernameInput) || (!state.passwordInput)) return false;
        if ((!state.usernameInput.value) || (state.usernameInput.value && state.usernameInput.error)) return false;
        if ((!state.passwordInput.value) || (state.passwordInput.value && state.passwordInput.error)) return false;
        return true
    }

    render() {
        if (this.state.redirectSignUp) {
            return <Redirect push to={"/sign_in"} />;
        }
        if (this.state.redirectHome) {
            return <Redirect push to={"/sign_in"} />;
        }
        var { message, isClick, usernameInput, passwordInput } = this.state;
        return (
            <div className="background-login">
                <div className="panel panel-primary ct con-login">
                    <div className="panel-heading">
                        <h3 classname="panel-title cen ">Đăng nhập</h3>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <div className="div-phone">
                                    <p>Email/Số điện thoại(*)</p>
                                    <input
                                        type="text"
                                        className=" i-phone"
                                        placeholder="Số điện thoại hoặc email"
                                        value={usernameInput.value}
                                        onChange={this.onChangeUsername}
                                    />
                                    {usernameInput.error ? usernameInput.error : null}
                                </div>
                                <br />
                                <div className="div-pass">
                                    <p>Mật khẩu</p>
                                    <input
                                        type="password"
                                        className=" i-pass"
                                        placeholder="Mật khẩu"
                                        value={passwordInput.value}
                                        onChange={this.onChangePassword}
                                    />
                                    {passwordInput.error ? passwordInput.error : null}
                                </div>
                            </div>
                            <br />
                            <div className="btn-login">
                                <button type="submit" className="blogin" onClick={this.handleSubmit.bind(this)}>Đăng nhập</button>
                            </div>
                            <div className="signin-log">
                                <p className="text1">Nếu bạn chưa là thành viên?</p>
                                <p className="text2" onClick={this.redirectSignUp}><a>Hãy đăng kí ngay!</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}