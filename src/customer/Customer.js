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
        )
    }
}