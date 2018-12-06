import React, {Component} from 'react';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class Footer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="footer">
                <div className="footer-main">
                    <div className="contact">
                        <p className="contact"><b>LIÊN HỆ</b></p>
                        <div className="email">
                            <img src="images/email1.png" className="email"/>
                            <p className="email">dotriduc26071996@gmail.com</p>
                        </div>
                        <div className="phone">
                            <img src="images/phone1.png" className="phone"/>
                            <p className="phone">0965143540</p>
                        </div>
                    </div>
                    <div className="introduce">
                        <p className="introduce"><b>GIỚI THIỆU</b></p>
                        <p className="text">Về chúng tôi</p>
                    </div>
                    <div className="policy">
                        <p className="policy"><b>CHÍNH SÁCH</b></p>
                        <p className="text">Chính sách bảo mật thông tin</p>
                        <p className="text">Quy chế hoạt động</p>
                    </div>
                    <div className="support">
                        <p className="support"><b>HƯỚNG DẪN</b></p>
                        <p className="text">Hướng dẫn thuê xe</p>
                        <p className="text">Hợp đồng thuê xe tự lái</p>
                        <p className="text">Cẩm nang thuê xe tự lái</p>
                        <p className="text">Câu hỏi thường gặp</p>
                    </div>
                </div>
                <div className="license">
                    <p className="license">Bản quyền © 2018 thuộc về OcChoOto.</p>
                </div>
            </div>
        )
    }
}