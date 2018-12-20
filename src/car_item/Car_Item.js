import React, {Component} from 'react';
import './car_item.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Redirect } from 'react-router';
import MyUtil from '../util/MyUtil'

export default class Car_Item extends Component{
    constructor(props){
        super(props);
        this.state = {
            vehicle : props.vehicle,
            redirectScreenDetail: false,
            redirectCustomer: false,
            price_total: 0
        }
    }

    async componentDidMount(){
        var vehicle = this.props.vehicle
        if(vehicle){
            
        }
    }

    redirectScreenDetail = () => {
        this.setState({ redirectScreenDetail: true });
    }

    redirectCustomer = () => {
        this.setState({ redirectCustomer: true });
    }

    render(){

        var vehicle = this.state.vehicle;
        console.log("hfhsdf  "  + this.state.vehicle)
        if (this.state.redirectScreenDetail && vehicle) {
            return <Redirect push to={{
                pathname: "/chi-tiet-xe/" + vehicle.vehicle_partner_id + "/" + MyUtil.formatVehicleName(vehicle.vehicle_partner_name),
                state: { vehicle: vehicle }
            }} />
        }

        if (this.state.redirectCustomer) {
            return <Redirect push to={"/customer" } />;
        }
        // console.log(vehicle.vehicle.vehicle_images + "!11111111111111");

        return(
            <div className="car_item" onClick={this.redirectScreenDetail} key={vehicle.vehicle_partner_id}>
                <div className="img-car">
                    <img src={vehicle.vehicle.vehicle_images[0].image_link}/>
                </div>
                <div className="desc-car">
                    <div className="rating">
                        <span className="star">
                            <div className="star-rating">
                                <img src="/images/star_yellow.png"/>&nbsp;
                                <img src="/images/star_yellow.png"/>&nbsp;
                                <img src="/images/star.png"/>&nbsp;
                                <img src="/images/star.png"/>&nbsp;
                                <img src="/images/star.png"/>&nbsp;
                            </div>
                            <p><b>{MyUtil.currencyFormat(vehicle.vehicle_partner_default_price)} VND</b></p>
                        </span>
                    </div>
                    <div className="name-car">
                        <h2>{vehicle.vehicle_partner_name}</h2>
                    </div>
                    <div className="trip-distance">
                        <div className="num-trip">
                                <img src ="images/trip.png"/>
                                <p>{vehicle.vehicle.seat_number} chỗ</p>
                        </div>
                        <div className="num-distance">
                                <img src="/images/distance.png"/>
                                <p>{vehicle.vehicle.transmission_name}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}