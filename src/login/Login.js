import React, {Component} from 'react'
import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class Login extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="background-login">
                <div className="panel panel-primary ct con-login">
			        <div className="panel-heading">
				        <h3 classname="panel-title cen ">Đăng nhập</h3>
			        </div>
			        <div className="panel-body">
				        <form>
					        <div className="form-group">
                                <div className="i-phone">
                                    <input type="text" className=" i-phone"  placeholder="Số điện thoại hoặc email"/>
                                </div>
						        <br/>
                                <div className="i-pass">
                                    <input type="password" className=" i-pass"  placeholder="Mật khẩu"/>
                                </div>
                                <div className="forget-pass">
                                    <p>Quên mật khẩu?</p>
                                </div>
					        </div>
                            <div className="btn-login">
                                <button type="submit" className="blogin">Đăng nhập</button>
                            </div>
                            <div className="signin-log">
                                <p className="text1">Nếu bạn chưa là thành viên?</p>
                                <p className="text2">Hãy đăng kí ngay!</p>
                            </div>
                        </form>
			        </div>
                </div>
	        </div>
        )
    }

}