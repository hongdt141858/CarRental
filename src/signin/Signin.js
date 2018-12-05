import React, { Component } from 'react'
import './signin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailPhone: "",
            username: "",
            password: "",
            newpassword: "",
            cmt:"",
            date:"",
            address:"",
        }
    }

    handChange = (event) => {
        console.log(event.target.name, event.target.value)
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className="signup-con">
                <div className="signup-form">
                    <h2>Đăng kí tài khoản</h2>
                    <br />
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control phone" name="emailPhone" placeholder="Điện thoại hoặc email" onChange={this.handChange} />
                            <br />
                            <input type="text" className="form-control name" name="username" placeholder="Tên hiển thị" onChange={this.handChange} />
                            <br />
                            <input type="password" className="form-control" id="password" name="password" placeholder="Mật khẩu" onChange={this.handChange} />
                        <input type="password" className="form-control" id="repassword" name="newpassword" placeholder="Xác nhận mật khẩu" onChange={this.handChange} />
                        <br />
                        <br />
                        <br />
                        <input type="text" className="form-control" id="cmt" name="cmt" placeholder="Số CMND" onChange={this.handChange} />
                        <br />
                        <input type="text" className="form-control" id="date" name="date" placeholder="Ngày cấp" onChange={this.handChange} />
                        <input type="text" className="form-control" id="address" name="address" placeholder="Nơi cấp" onChange={this.handChange}/>
                        </div>
                        <br />
                        <br />
                        <div className="checkbox">
                            <label className="policy">
                                <input type="checkbox" value="" />
                                Tôi đã đọc và đồng ý với chính sách của công ty.
							</label>
                        </div>
                        <br />
                        <button type="button" className="btn btn-success btn-signin">Đăng ký</button>
                        <hr />
                        <label className="label1">Hoặc đăng nhập bằng tài khoản</label>
                        <br />
                        <button type="button" className="btn btn-primary btn-facebook">Facebook</button>
                        <button type="button" className="btn btn-danger btn-google">Google</button>
                    </form>
                </div>
            </div>
        )
    }

}