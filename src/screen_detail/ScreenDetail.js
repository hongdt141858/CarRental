import React, { Component } from 'react';
import './screen_detail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Redirect } from 'react-router';
import MyUtil from '../util/MyUtil';
import VehicleApi from "../api/VehicleApi";
import VarConf from '../VarConf';
import { reactLocalStorage } from 'reactjs-localstorage';
import { getDayNum, getPrice, isPercent } from '../api/handlerBooking';

export default class ScreenDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectCustomer: false,
            vehicle: {},
            vehicle_name: MyUtil.getVehicleName(props.match.params.name),
            vehicle_id: props.match.params.id
        }
    }

    redirectCustomer = () => {
        this.setState({ redirectCustomer: true });
    }

    async componentDidMount() {
        window.scrollTo(0, 0);
        var id = this.state.vehicle_id, vhc;
        if (id) await VehicleApi.getVehicleById(id).then(
            vehicle => {
                if (vehicle && vehicle.code === "success") {
                    vhc = vehicle.data
                    reactLocalStorage.setObject("booking.vehicle", vehicle.data)
                    this.setState({ vehicle: vehicle.data })
                } else if (vehicle && vehicle.code === "error") {
                    alert(vehicle.message)
                }
            }
        ).catch(err => console.log(err));

        this.caculatePrice(vhc);

    }

    caculatePrice = (vehicle) => {
        var date_from = reactLocalStorage.get("home.date_from")
        var date_to = reactLocalStorage.get("home.date_to")

        if (date_from && date_to && vehicle) {
            console.log(vehicle)
            var dayNum = getDayNum(date_to, date_from);
            var price_total = getPrice(vehicle, dayNum, date_to, date_from)
            console.log(price_total)
            this.setState({ price_total: price_total["sumPrice"] })
        }
    }
    render() {

        const { vehicle } = this.state;
        var date_to = MyUtil.getDatetimeFormatEn(new Date(reactLocalStorage.get(VarConf.home.date_to)));
        var date_from = MyUtil.getDatetimeFormatEn(new Date(reactLocalStorage.get(VarConf.home.date_from)));
        if (this.state.redirectCustomer) {
            return <Redirect push to={"/customer"} />;
        }
        if (!vehicle["vehicle"])
            return <div></div>

        return (
            <div className="con-screenDetail">
                <div className="left-screen">
                    <img className="img-responsive _3Y67O" src="https://storage.googleapis.com/tripx-e955f.appspot.com/images%2Fbig_android_vehicle_15437984156662.jpeg?GoogleAccessId=firebase-adminsdk-tji53@tripx-e955f.iam.gserviceaccount.com&amp;Expires=16730323200&amp;Signature=onyjwfEtbyqEw7gFkCXn7au58bsXynfJbqcBQxwQGERTXb5cUGV2i9UiTr7CC0on4POzCOC0gmtcR4wEzb8vhSefukbPo1vOR4l36hxmNMfeBdtrGdbBykdxLQaIUmAbNOyIWbhdwPCkupuf4q5%2FMJfkFQcjoN5bI9h24JhGfMdbBOv%2FpMMw4np05IGyVslpWvHs0RaorBCFp6t8k1aeX0OEkb6Ovinguy5dv%2BX4F7leORMhFNdh6%2FIM2xMJwN8m1naPAeiz3w97Ta0O9diYHyf%2Fd8ScUXY8r%2BGcFVKTmHmNQJiAhnnSC6jVfxYhdrjXgCGNoQa75rQspAPGjZkRqQ%3D%3D&amp;rdt=1543798422456" alt="image" />
                    <div className="comment">
                        <p className="name-car"><b>{this.state.vehicle_name}</b></p>
                        <div className="vote">
                            <img src="images/star_yellow.png" />
                            <img src="images/star_yellow.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                            <img src="images/star.png" />
                        </div>
                    </div>
                    <div className="parameter">
                        <div className="paraleft">
                            <div className="paraleft1">
                                <img src="images/brand1.png" />
                                <p>{vehicle["vehicle"]["brand_name"]}</p>
                            </div>
                            <div className="paraleft2">
                                <img src="images/box.png" />
                                <p>{vehicle["vehicle"]["transmission_name"]}</p>
                            </div>
                            <div className="paraleft3">
                                <img src="images/seat.png" />
                                <p>{vehicle["vehicle"]["seat_number"]} chỗ</p>
                            </div>
                        </div>
                        <div className="paracenter">
                            <div className="paracenter1">
                                <img src="images/brand2.png" />
                                <p>{vehicle["vehicle"]["model_name"]}</p>
                            </div>
                            <div className="paracenter2">
                                <img src="images/fuel.png" />
                                <p>Động cơ {vehicle["vehicle"]["fuel_name"]}</p>
                            </div>
                            <div className="paracenter3">
                                <img src="images/seden.png" />
                                <p>{vehicle["vehicle"]["design_name"]}</p>
                            </div>
                        </div>
                        <div className="pararight">
                            <div className="pararight1">
                                <img src="images/year.png" />
                                <p>{vehicle["vehicle"]["fuel_consumption"]}</p>
                            </div>
                            <div className="pararight2">
                                <img src="images/lit.png" />
                                <p>{vehicle["vehicle"]["engin_number"]}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-screen">
                    <div className="price" style={{ textAlign: "center" }}>
                        <h1>{MyUtil.currencyFormat(vehicle["vehicle_partner_default_price"])} VND</h1>
                    </div>
                    <div className="date">
                        <div className="dateleft">
                            <div className="dateleft1">
                                <p>Nhận xe</p>
                            </div>
                            <div className="dateleft2">
                                <p>{date_to}</p>
                            </div>

                        </div>
                        <div className="centerDate">

                        </div>
                        <div className="dateright">
                            <div className="dateright1">
                                <p>Trả xe</p>
                            </div>
                            <div className="dateright2">
                                <p>{date_from}</p>
                            </div>

                        </div>
                    </div>
                    <div className="trip-detail">
                        <div className="trip-name">
                            <p>Chuyến đi 1 ngày</p>
                        </div>
                        <div className="price1">
                            <div className="price11">
                                <p className="price11">Giá ngày thường</p>
                            </div>
                            <div className="price12">
                                <p className="price12">{MyUtil.currencyFormat(vehicle["vehicle_partner_default_price"])}đ / ngày</p>
                            </div>
                        </div>
                        <div className="price2">
                            <div className="price21">
                                <p className="price21">Giá tăng thêm cuối tuần</p>
                            </div>
                            <div className="price22">
                                <p className="price22">{vehicle.partner.partner_weekdays.lenght > 0 ?
                                    (vehicle.partner.partner_weekdays.partner_extra_fee < 100 ? vehicle.partner.partner_weekdays.partner_extra_fee + " %" : MyUtil.currencyFormat(vehicle.partner.partner_weekdays.partner_extra_fee) + "VNĐ") : 0 + " VND"}</p>
                            </div>
                        </div>
                        <div className="price3">
                            <div className="price31">
                                <p className="price31">Tổng số tiền phải trả</p>
                            </div>
                            <div className="price32">
                                <p className="price32" >{this.state.price_total}</p>
                            </div>
                        </div>
                    </div>
                    <div className="paper">

                        <div className="papertitle">
                            <p>Xuất trình khi nhận xe</p>
                        </div>
                        <div className="paper1">
                            <img src="images/check.png" />
                            <p>CMND/CCCD</p>
                        </div>
                        <div className="paper2">
                            <img src="images/check.png" />
                            <p>Hộ khẩu/KT3</p>
                        </div>
                        <div className="paper3">
                            <img src="images/check.png" />
                            <p>Bằng lái xe B1, B2</p>
                        </div>
                    </div>
                    <div className="mortgage">

                        <div className="mortgagetitle">
                            <p>Chú ý</p>
                        </div>
                        {vehicle.partner.partner_procedures.map((item) => {
                            console.log(item.procedure_description)
                            if (item.procedure_description)
                                return (
                                    <div className="mortgage1">
                                        <p>{item.procedure_description}</p>
                                    </div>
                                );
                        })}
                        {/* <div className="mortgage1">
                            <img src="images/check.png" />
                            <p>Xe máy hoặc tiền mặt có trị giá trên 15 triệu đồng</p>
                        </div>
                        <div className="mortgage2">
                            <img src="images/check.png" />
                            <p>Hộ khẩu/KT3</p>
                        </div> */}
                    </div>
                    <div className="limit">
                        <div className="limittitle">
                            <p>Giới hạn quãng đường</p>
                        </div>
                        <div className="limit-value">
                            <p>{vehicle.partner.partner_limit_km ? vehicle.partner.partner_limit_km + " km" : "Không giới hạn"}
                                /{vehicle.partner.partner_over_km_fee ? MyUtil.currencyFormat(vehicle.partner.partner_over_km_fee) + " VND mỗi km" : ""}</p>
                        </div>

                    </div>
                    <div className="giaoxe">
                        <div className="giaoxetitle">
                            <p>Giao xe tận nơi</p>
                        </div>
                        <div className="giaoxe-value">
                            <p>Trong bán kính 10 km, phí {vehicle.partner["partner_delivery_over_km_fee"] ? vehicle.partner["partner_delivery_over_km_fee"] : " từ 5.000đ/km"}</p>
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