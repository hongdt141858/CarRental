import React, { Component } from 'react'
import './signin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { email, password, required, phone, confirmPassword } from '../util/validate';
import { reactLocalStorage } from "reactjs-localstorage";
import UserApi from '../api/UserApi';
import { Redirect } from 'react-router';


export default class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                user_acc_pass: {
                    value: "",
                    error: ""
                },
                user_acc_emai: {
                    value: "",
                    error: ""
                },
                user_acc_phon: {
                    value: "",
                    error: ""
                },
                user_acc_confirm: {
                    value: "",
                    error: ""
                },
                user_acc_fullname: {
                    value: "",
                }
            },
            message: "",
            isClick: false,
            redirectHome: false,
            is_back: false,
        }
    }

    handleBack = () => {
        this.setState({
            is_back : true,
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        var { userInfo } = this.state;
        var data = {
            user_account_full_name: userInfo.user_acc_fullname.value,
            user_account_phone: userInfo.user_acc_phon.value,
            user_account_email: userInfo.user_acc_emai.value,
            user_account_password: userInfo.user_acc_pass.value
        }
        var result = await UserApi.register(data);
        if (!result) alert("Lỗi kết nối mạng")
        if (result && result.code === "error") this.setState({ message: result.message })
        else if (result && result.data) {
            reactLocalStorage.setObject("user.info", result.data)
        }
        console.log(result.data);
        this.setState({
            redirectHome: true
        })
    };

    onChangeFullName = (e) => {
        var value = e.target.value
        var { userInfo, isClick } = this.state;
        userInfo.user_acc_fullname.value = value;
        isClick = this.check({ userInfo });
        this.setState({ userInfo, isClick, message: "" })
    }

    onChangeEmail = (e) => {
        var value = e.target.value
        var { userInfo, isClick } = this.state;
        userInfo.user_acc_emai.value = value;
        userInfo.user_acc_emai.error = required(value) || email(value);
        isClick = this.check({ userInfo });
        this.setState({ userInfo, isClick, message: "" })
    }

    onChangePhone = (e) => {
        var value = e.target.value
        var { userInfo, isClick } = this.state;
        userInfo.user_acc_phon.value = value;
        userInfo.user_acc_phon.error = required(value) || phone(value);
        isClick = this.check({ userInfo });
        this.setState({ userInfo, isClick, message: "" })
    }
    onChangePass = (e) => {
        var value = e.target.value
        var { userInfo, isClick } = this.state;
        userInfo.user_acc_pass.value = value;
        userInfo.user_acc_pass.error = required(value) || password(value);
        isClick = this.check({ userInfo });
        this.setState({ userInfo, isClick, message: "" })
    }
    onChangeConfirm = (e) => {
        var value = e.target.value
        var { userInfo, isClick } = this.state;
        userInfo.user_acc_confirm.value = value;
        userInfo.user_acc_confirm.error = required(value) || confirmPassword(value, userInfo.user_acc_pass.value);
        isClick = this.check({ userInfo });
        this.setState({ userInfo, isClick, message: "" })
    }

    check = (state) => {
        if (!state || (!state.userInfo) || (!state.userInfo.user_acc_emai) || (!state.userInfo.user_acc_phon) || (!state.userInfo.user_acc_pass) || (!state.userInfo.user_acc_confirm)) return false;
        if ((!state.userInfo.user_acc_emai.value) || (state.userInfo.user_acc_emai.value && state.userInfo.user_acc_emai.error)) return false
        if ((!state.userInfo.user_acc_phon.value) || (state.userInfo.user_acc_phon.value && state.userInfo.user_acc_phon.error)) return false
        if ((!state.userInfo.user_acc_pass.value) || (state.userInfo.user_acc_pass.value && state.userInfo.user_acc_pass.error)) return false
        if ((!state.userInfo.user_acc_confirm.value) || (state.userInfo.user_acc_confirm.value && state.userInfo.user_acc_confirm.error)) return false
        return true
    }

    render() {
    
        const { message, userInfo, isClick } = this.state;
        if (this.state.redirectHome && isClick) {
            return <Redirect push to={"/"} />;
        }
        if (this.state.redirectHome && !isClick) {
            alert("Vui lòng nhập đủ thông tin")
        }

        if (this.state.is_back) {
            return <Redirect push to={"/"} />;
        }

        return (
            <div className="signup-con">
                <div className="signup-form">
                    <h2>Đăng kí tài khoản</h2>
                    <form>
                        <div className="form-group">
                            <p>Số điện thoại(*)</p>
                            <input
                                className="form-control phone"
                                name="phone"
                                placeholder="Nhập số điện thoại"
                                type="number"
                                pattern="[0-9]*"
                                value={userInfo.user_acc_phon.value}
                                onChange={this.onChangePhone}
                            />
                            {userInfo.user_acc_phon.error ? userInfo.user_acc_phon.error : null}
                            <br />
                            <p>Email(*)</p>
                            <input
                                className="form-control name"
                                name="email"
                                placeholder="Nhập email"
                                type="email"
                                value={userInfo.user_acc_emai.value}
                                onChange={this.onChangeEmail}
                            />
                            {userInfo.user_acc_emai.error ? userInfo.user_acc_emai.error : null}
                            <br />
                            <p>Full name</p>
                            <input
                                className="form-control name"
                                placeholder="Nhập full name"
                                type="text"
                                value={userInfo.user_acc_fullname.value}
                                onChange={this.onChangeFullName}
                            />
                            <br />
                            <p>Mật khẩu(*)</p>
                            <input
                                type="password"
                                className="form-control name"
                                name="password"
                                placeholder="Mật khẩu"
                                value={userInfo.user_acc_pass.value}
                                onChange={this.onChangePass}
                            />
                            {userInfo.user_acc_pass.error ? userInfo.user_acc_pass.error : null}
                            <br />
                            <p>Nhập lại mật khẩu(*)</p>
                            <input
                                type="password"
                                className="form-control name"
                                name="newpassword"
                                placeholder="Xác nhận mật khẩu"
                                value={userInfo.user_acc_confirm.value}
                                onChange={this.onChangeConfirm}
                            />
                            {userInfo.user_acc_confirm.error ? userInfo.user_acc_confirm.error : null}
                        </div>
                        <br />
                    
                        <button type="button" className="btn btn-success btn-signin" onClick={this.handleSubmit.bind(this)}>Đăng ký</button>
                        <button type="button" className="btn btn-secondary btn-signin" style={{backgroundColor:"gray", marginTop: '20px'}} onClick={this.handleBack}>Quay lại</button>
                        <br />
                        <br />
                    </form>
                </div>
            </div>
        )
    }

}