import React, {Component} from 'react';
import './change_password.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class Change_Password extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="con-pass">
                <div className="space">

                </div>
                <div className="title-pass">
                    <p><b>Đổi mật khẩu</b></p>
                </div>
                <div className="pass1">
                    <div className="im-pass">
                        <img src="/images/pass.png"/>
                    </div>
                    <div className="input-pass">
                        <input type="text" placeholder="Mật khẩu hiện tại"/>
                    </div>
                </div>
                <div className="pass2">
                    <div className="im-pass">
                        <img src="/images/pass.png"/>
                    </div>
                    <div className="input-pass">
                        <input type="text" placeholder="Mật khẩu mới"/>
                    </div>
                </div>
                <div className="pass3">
                    <div className="im-pass">
                        <img src="/images/pass.png"/>
                    </div>
                    <div className="input-pass">
                        <input type="text" placeholder="Xác nhận mật khẩu mới"/>
                    </div>
                </div>
                <div className="btn-change">
                    <button className="btn-update"><b>Cập nhật</b></button>
                </div>
            </div>
        )
    }
}