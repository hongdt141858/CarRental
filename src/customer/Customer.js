import React, {Component} from 'react';
import './customer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class Customer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="big-container">
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
                        <input type="text" placeholder="Nhập họ tên"/>
                    </div>
                </div>
                <div className="phone-cus">
                    <div className="left-title">
                        <p>Số điện thoại</p>
                    </div>
                    <div className="right-title">
                        <input type="number" placeholder="Nhập số điện thoại"/>
                    </div>
                </div>
                <div className="email-cus">
                    <div className="left-title">
                        <p>Email</p>
                    </div>
                    <div className="right-title">
                        <input type="text" placeholder="Nhập email"/>
                    </div>
                </div>
                <div className="credit-cus">
                    <div className="left-title">
                        <p>Hình thức thanh toán</p>
                    </div>
                    <div className="right-title">
                        <input type="text" placeholder="Chọn hình thức trả trước hoặc trả sau"/>
                    </div>
                </div>
                <div className="note-cus">
                    <div className="left-title">
                        <p>Lưu ý</p>
                    </div>
                    <div className="right-title">
                        <textarea type="text"/>
                    </div>
                </div>
                <div className="btn1">
                    <button>Xác nhận</button>
                </div>
                <div className="btn2">
                    <button>Quay lại</button>
                </div>
            </div>
                <div className="des-vehicle">
                    <div className="img-vehicle">
                        <img src="images/vehicle.png"/>
                    </div>
                    <div className="namecar">
                        <p>HYUNDAI I10 HATCHBACK 1.0 AT 2018</p>
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
                            <p className="value">20:30 13/12/2018 - 19:00 14/12/2018</p>
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
                            <p className="value12"><b>600.000 đ</b></p>
                        </div> 
                        <div className="value2">
                            <p className="value21">Ngày</p>
                            <p className="value22"><b>2 ngày</b></p>
                        </div>    
                    </div>
                    <div className="line-price">

                    </div>
                    <div className="sumprice">
                        <p className="price1">TỔNG</p>
                        <p className="price2">120.000 đ</p>
                    </div>
                </div>
                
            </div>
            
        )
    }
}