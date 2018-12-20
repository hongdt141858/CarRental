import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './customer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { reactLocalStorage } from 'reactjs-localstorage';
import { email, required, phone } from '../api/validate';
import Header from '../header/Header';
import BookingApi from '../api/BookingApi';
import MyUtil from "../util/MyUtil";
import VarConf from '../VarConf';

export default class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectComplete: false,

            userInfo: {
                fullname: {
                    value: reactLocalStorage.get("customer_info.fullname", ""),
                    error: ""
                },
                email: {
                    value: reactLocalStorage.get("customer_info.email", ""),
                    error: ""
                },
                phone: {
                    value: reactLocalStorage.get("customer_info.phone", ""),
                    error: ""
                },
                note: reactLocalStorage.get("customer_info.note", ""),
            },
            paymentId: reactLocalStorage.get("customer_info.payment", ""),
            isClick: false,

        }
        this.vehicle = reactLocalStorage.getObject("booking.vehicle", null);
    }

    redirectComplete = () => {
        this.setState({
            redirectComplete: true
        })
    }

    handleChangeFullname = (e) => {
        var value = e.target.value;
        var { userInfo, isClick, paymentId } = this.state;
        userInfo.fullname.value = value;
        userInfo.fullname.error = required(value)
        isClick = this.check({ userInfo, paymentId })
        this.setState({ userInfo, isClick });
    }

    handleChangePhone = (e) => {
        var value = e.target.value;
        var { userInfo, isClick, paymentId } = this.state;
        userInfo.phone.value = value;
        userInfo.phone.error = required(value) || phone(value)
        isClick = this.check({ userInfo, paymentId })
        this.setState({ userInfo, isClick });
    }

    handleChangeEmail = (e) => {
        var value = e.target.value;
        var { userInfo, isClick, paymentId } = this.state;
        userInfo.email.value = value;
        userInfo.email.error = required(value) || email(value)
        isClick = this.check({ userInfo, paymentId })
        this.setState({ userInfo, isClick });
    }

    handleChangeNote = (e) => {
        var value = e.target.value;
        var { userInfo, isClick, paymentId } = this.state;
        userInfo.note = value;
        isClick = this.check({ userInfo, paymentId })
        this.setState({ userInfo, isClick });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.save();
        let booking;
        var check = false;
        this.setState({ isSending: 1, redirectComplete:true })
        await BookingApi.createBooking()
            .then(result => {
                if (result && result.code === "success") {
                    booking = result.data
                    reactLocalStorage.setObject("booking.object", result.data)
                    check = true;
                } else if (result.code === "error") {
                    alert(result.message)
                }
            })
            .catch(err => console.log(err));
        if (check) {
            // await this.sendFeedback(booking)
            // await this.sendEmailCustomer(booking)
        };
    };

    save = () => {
        var { userInfo } = this.state;
        console.log(this.state)
        reactLocalStorage.set("customer_info.fullname", userInfo.fullname.value)
        reactLocalStorage.set("customer_info.email", userInfo.email.value)
        reactLocalStorage.set("customer_info.phone", userInfo.phone.value)
        reactLocalStorage.set("customer_info.note", userInfo.note)
    }

    check = (state) => {
        var { userInfo } = state;
        if (!userInfo) return false;
        if ((!userInfo.email) || (userInfo.email && (!userInfo.email.value)) || (userInfo.email && userInfo.email.value && userInfo.email.error)) return false
        if ((!userInfo.fullname) || (userInfo.fullname && (!userInfo.fullname.value)) || (userInfo.fullname && userInfo.fullname.value && userInfo.fullname.error)) return false
        if ((!userInfo.phone) || (userInfo.phone && (!userInfo.phone.value)) || (userInfo.phone && userInfo.phone.value && userInfo.phone.error)) return false
        return true
    }

    render() {
        const { userInfo, paymentId, isClick } = this.state
        const vehicle = reactLocalStorage.getObject("booking.vehicle", null);
        var date_to = MyUtil.getDatetimeFormatEn( new Date(reactLocalStorage.get(VarConf.home.date_to)));
        var date_from = MyUtil.getDatetimeFormatEn( new Date(reactLocalStorage.get(VarConf.home.date_from)));
        var day_total = reactLocalStorage.get(VarConf.booking.total_day);
        var total_price = reactLocalStorage.get(VarConf.booking.total_price);

        console.log("dshad" + this.state.userInfo.fullname.value);
        if (this.state.redirectComplete) {
            return <Redirect push to={"/complete"} />;
        }
        return (

            <div className="big-container">
                <Header />
                <div className="customer-container">
                    <div className="title-cus">
                        <h3><b>THÔNG TIN KHÁCH HÀNG</b></h3>
                        <p>Nhập thông tin cá nhân để tiến hành đặt</p>
                    </div>
                    <div className="name-cus">
                        <div className="left-title">
                            <p>Họ và tên</p>
                        </div>
                        <div className="right-title">
                            <input
                                type="text"
                                placeholder="Nhập họ tên"
                                name="fullname"
                                onChange={this.handleChangeFullname}
                                value={userInfo.fullname.value}
                            />
                            {userInfo.fullname.error ? userInfo.fullname.error : null}
                        </div>
                    </div>
                    <div className="phone-cus">
                        <div className="left-title">
                            <p>Số điện thoại</p>
                        </div>
                        <div className="right-title">
                            <input
                                type="number"
                                placeholder="Nhập số điện thoại"
                                name="phone"
                                pattern="[0-9]*"
                                onChange={this.handleChangePhone}
                                value={userInfo.phone.value}
                            />
                            {userInfo.phone.error ? userInfo.phone.error : null}
                        </div>
                    </div>
                    <div className="email-cus">
                        <div className="left-title">
                            <p>Email</p>
                        </div>
                        <div className="right-title">
                            <input placeholder="Nhập email"
                                type="email"
                                name="email"
                                onChange={this.handleChangeEmail}
                                value={userInfo.email.value}
                            />
                            {userInfo.email.error ? userInfo.email.error : null}
                        </div>
                    </div>
                    <div className="note-cus">
                        <div className="left-title">
                            <p>Lưu ý</p>
                        </div>
                        <div className="right-title">
                            <textarea
                                type="text"
                                onChange={this.handleChangeNote}
                                value={userInfo.note}
                                style={{ height: "100px !important" }}
                            />
                        </div>
                    </div>
                    <div className="btn1">
                        <button onClick={this.handleSubmit}>Xác nhận</button>
                    </div>
                    <div className="btn2">
                        <button>Quay lại</button>
                    </div>
                </div>
                <div className="des-vehicle">
                    <div className="img-vehicle">
                        <img src="/images/vehicle.png" />
                    </div>
                    <div className="namecar">
                        <p>{vehicle.vehicle_partner_name}</p>
                    </div>
                    <div className="pickup">
                        <div className="title">
                            <p className="title">HÌNH THỨC NHẬN XE</p>
                        </div>
                        <div className="value">
                            <p className="value">Nhận xe tại đại lý</p>
                        </div>
                    </div>
                    <div className="timer">
                        <div className="title">
                            <p className="title">THỜI GIAN</p>
                        </div>
                        <div className="value">
                            <p className="value">{date_to} - {date_from}</p>
                        </div>
                    </div>
                    <div className="limittrip">
                        <div className="title">
                            <p className="title">GIỚI HẠN QUÃNG ĐƯỜNG</p>
                        </div>
                        <div className="value">
                            <p className="value">Tối đa 250km/ngày, phụ trội 3.000 đ/km</p>
                        </div>
                    </div>
                    <div className="price">
                        <div className="title-price">
                            <p className="ti-price">CHI TIẾT GIÁ</p>
                        </div>
                        <div className="value1">
                            <p className="value11">Đơn giá ngày</p>
                            <p className="value12"><b>{vehicle.vehicle_partner_default_price} đ</b></p>
                        </div>
                        <div className="value2">
                            <p className="value21">Ngày</p>
                            <p className="value22"><b>{day_total}</b></p>
                        </div>
                    </div>
                    <div className="line-price">

                    </div>
                    <div className="sumprice">
                        <p className="price1">TỔNG</p>
                        <p className="price2">{total_price} đ</p>
                    </div>
                </div>

            </div>

        )
    }
}