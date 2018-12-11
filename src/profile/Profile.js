import React, {Component} from 'react';
import './profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class Profile extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="con-profile">
                <div className="image-br">
                    <img src="images/profile.png" />
                </div>
                <div className="name-detail">
                    <div className="username">
                        <div className="text-username">
                            <p><b>Đỗ Trí Đức</b></p>
                        </div>
                        <div className="edit-username">
                            <img src="images/edit.png"/>
                        </div>
                    </div>
                    <div className="datetime">
                        <div className="time1">
                            <p>Tham gia: 03/12/2018</p>
                        </div>
                        <div className="linetime">

                        </div>
                        <div className="number-trip">
                            <p>Chưa có chuyến nào</p>
                        </div>
                    </div>
                    <div className="birthday-gender">
                        <div className="birthday">
                            <div className="text-birthday">
                                <p><b>Ngày sinh</b></p>
                            </div>
                            <div className="num-birthday">
                                <p>26/07/1996</p>
                            </div>
                        </div>
                        <div className="gender">
                            <div className="text-gender">
                                <p><b>Giới tính</b></p>
                            </div>
                            <div className="value-gender">
                                <p>Nam</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-info">
                    <div className="info-phone">
                        <div className="text-phone">
                            <p><b>Điện thoại</b></p>
                        </div>
                        <div className="value-phone">
                            <p>0965143540</p>
                        </div>
                    </div>
                    <div className="info-email">
                        <div className="text-email">
                            <p><b>Email</b></p>
                        </div>
                        <div className="value-email">
                            <p>dotriduc26071996@gmail.com</p>
                        </div>
                    </div>
                    <div className="info-facebook">
                        <div className="text-facebook">
                            <p><b>Facebook</b></p>
                        </div>
                        <div className="value-facebook">
                            <p>Đỗ Trí Đức</p>
                        </div>
                    </div>
                    <div className="info-google">
                        <div className="text-google">
                            <p><b>Google</b></p>
                        </div>
                        <div className="value-google">
                            <p>dotriduc26071996@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}