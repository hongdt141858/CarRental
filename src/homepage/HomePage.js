import React, { Component } from 'react'
import './homePage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class HomePage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="con-search">
                    <div className="search">
                        <label className="text-search"> Thuê xe tự lái</label>
                        <div className="input-search">
                            <input type="text" className="" id="address" placeholder="Nhập địa chỉ ..."/>
                        </div>
                    </div>
                </div>
                <div className="guide">
                    <h1>Hướng dẫn thuê xe </h1>
                    <div className="con-guide">
                        <div className="step1">
                            <img src="images/step1.png"/>
                                <h3>Đặt xe</h3>
                        </div>
                        <div className="step2">
                            <img src="images/step2.png"/>
                            <h3>Nhận xe hoặc giao tận nơi</h3>
                        </div>
                        <div className="step3">
                            <img src="images/step3.png"/>
                            <h3>Trải nghiệm chuyến đi</h3>
                        </div>
                        <div className="step4">
                            <img src="images/step4.png"/>
                            <h3>Kết thúc giao dịch</h3>
                        </div>
                    </div>
                    <div>
                        <p className="continue">
                            <b>Xem thêm >></b>
                        </p>
                    </div>
                </div>
                <div className="famous-place">
                    <div className="slide">
                    </div>
                </div>
             </div>
        )
    }
}