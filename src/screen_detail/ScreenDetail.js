import React, {Component} from 'react';
import './screen_detail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Redirect } from 'react-router';

export default class ScreenDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirectCustomer: false,
        }
    }

    redirectCustomer = () => {
        this.setState({ redirectCustomer: true });
    }
    
    render(){

        if (this.state.redirectCustomer) {
            return <Redirect push to={"/customer" } />;
        }

        return(
            <div className="con-screenDetail">
                <div className="left-screen">
                <img class="img-responsive _3Y67O" src="https://storage.googleapis.com/tripx-e955f.appspot.com/images%2Fbig_android_vehicle_15437984156662.jpeg?GoogleAccessId=firebase-adminsdk-tji53@tripx-e955f.iam.gserviceaccount.com&amp;Expires=16730323200&amp;Signature=onyjwfEtbyqEw7gFkCXn7au58bsXynfJbqcBQxwQGERTXb5cUGV2i9UiTr7CC0on4POzCOC0gmtcR4wEzb8vhSefukbPo1vOR4l36hxmNMfeBdtrGdbBykdxLQaIUmAbNOyIWbhdwPCkupuf4q5%2FMJfkFQcjoN5bI9h24JhGfMdbBOv%2FpMMw4np05IGyVslpWvHs0RaorBCFp6t8k1aeX0OEkb6Ovinguy5dv%2BX4F7leORMhFNdh6%2FIM2xMJwN8m1naPAeiz3w97Ta0O9diYHyf%2Fd8ScUXY8r%2BGcFVKTmHmNQJiAhnnSC6jVfxYhdrjXgCGNoQa75rQspAPGjZkRqQ%3D%3D&amp;rdt=1543798422456" alt="image"/>
                <div className="comment">
                    <p className="name-car"><b>2017 Madza Madza 3</b></p>
                    <div className="vote">
                        <img src="images/star_yellow.png"/>
                        <img src="images/star_yellow.png"/>
                        <img src="images/star.png"/>
                        <img src="images/star.png"/>
                        <img src="images/star.png"/>
                    </div>
                </div>
                <div className="parameter">
                    <div className="paraleft">
                        <div className="paraleft1">
                            <img src="images/brand1.png"/>
                            <p>Madza</p>
                        </div>
                        <div className="paraleft2">
                            <img src="images/box.png"/>
                            <p>Số tự động</p>
                        </div>
                        <div className="paraleft3">
                            <img src="images/seat.png"/>
                            <p>5 chỗ</p>
                        </div>
                    </div>
                    <div className="paracenter">
                    <div className="paracenter1">
                            <img src="images/brand2.png"/>
                            <p>Madza 3</p>
                        </div>
                        <div className="paracenter2">
                            <img src="images/fuel.png"/>
                            <p>Động cơ xăng</p>
                        </div>
                        <div className="paracenter3">
                            <img src="images/seden.png"/>
                            <p>Sedan</p>
                        </div>
                    </div>
                    <div className="pararight">
                    <div className="pararight1">
                            <img src="images/year.png"/>
                            <p>Động cơ xăng</p>
                        </div>
                        <div className="pararight2">
                            <img src="images/lit.png"/>
                            <p>Sedan</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="right-screen">
                    <div className="price">
                        <p><b>900.000 đ/ngày</b></p>
                    </div>
                    <div className="date">
                        <div className="dateleft">
                            <div className="dateleft1">
                                <p>Nhận xe</p>
                            </div>
                            <div className="dateleft2">
                                <p>11/12  21:00</p>
                            </div>
                            
                        </div>
                        <div className="centerDate">

                        </div>
                        <div className="dateright">
                            <div className="dateright1">
                                <p>Trả xe</p>
                            </div>
                            <div className="dateright2">
                                <p>12/12  20:00</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="trip-detail">
                        <div className="trip-name">
                            <p>Chuyến đi 1 ngày</p>
                        </div>
                        <div className="price1">
                            <div className="price11">
                                <p className="price11">Giá ngày thường x1</p>
                            </div>
                            <div className="price12">
                                <p className="price12">900.000đ</p>
                            </div>
                        </div>
                        <div className="price2">
                            <div className="price21">
                                <p className="price21">Giá cuối tuần x0</p>
                            </div>
                            <div className="price22">
                                <p className="price22">0đ</p>
                            </div>
                        </div>
                        <div className="price3">
                            <div className="price31">
                                <p className="price31">Tổng số tiền phải trả</p>
                            </div>
                            <div className="price32">
                                <p className="price32">900.000đ</p>
                            </div>
                        </div>
                    </div>
                    <div className="paper">
                        <div className="papertitle">
                            <p>Xuất trình khi nhận xe</p>
                        </div>
                        <div className="paper1">
                            <img src="images/check.png"/>
                            <p>CMND/CCCD</p>
                        </div>
                        <div className="paper2">
                            <img src="images/check.png"/>
                            <p>Hộ khẩu/KT3</p>
                        </div>
                        <div className="paper3">
                            <img src="images/check.png"/>
                            <p>Bằng lái xe B1, B2</p>
                        </div>
                    </div>
                    <div className="mortgage">
                        <div className="mortgagetitle">
                            <p>Thế chấp khi nhận xe</p>
                        </div>
                        <div className="mortgage1">
                            <img src="images/check.png"/>
                            <p>Xe máy hoặc tiền mặt có trị giá trên 15 triệu đồng</p>
                        </div>
                        <div className="mortgage2">
                            <img src="images/check.png"/>
                            <p>Hộ khẩu/KT3</p>
                        </div>
                    </div>
                    <div className="limit">
                        <div className="limittitle">
                            <p>Giới hạn quãng đường</p>
                        </div>
                        <div className="limit-value">
                            <p>500 km/ngày, phí vượt 10.000đ/km</p>
                        </div>
                        
                    </div>
                    <div className="giaoxe">
                        <div className="giaoxetitle">
                            <p>Giao xe tận nơi</p>
                        </div>
                        <div className="giaoxe-value">
                            <p>Trong bán kính 10km, phí đ10000/km</p>
                        </div>
                        
                    </div>
                    <div className="btn">
                        <button className="btn-primary" onClick={this.redirectCustomer}>Gửi yêu cầu thuê xe</button>
                    </div>
                </div>
            </div>
        )
    }
}