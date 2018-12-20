import React, {Component} from 'react'
import './car_detail.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Redirect } from 'react-router';
import MyUtil from "../util/MyUtil";

export default class CarDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            vehicle: props.vehicle,
            redirectScreenDetail: false,
        }
    }

    redirectScreenDetail = () => {
        this.setState({ redirectScreenDetail: true });
    }

    render(){
        var vehicle = this.state.vehicle;

        if (this.state.redirectScreenDetail && vehicle) {
            return <Redirect push to={{
                pathname: "/chi-tiet-xe/" + vehicle.vehicle_partner_id + "/" + MyUtil.formatVehicleName(vehicle.vehicle_partner_name),
                state: { vehicle: vehicle }
            }} />
        }
        return(
            <div className="car-detail" onClick={this.redirectScreenDetail}>
                <div className="img-car">
                    <img src={vehicle.vehicle.vehicle_images[0].image_link}/>
                    <div className="price-car">{vehicle.vehicle_partner_default_price}</div>
                </div>
                <div className="desc-car">
                    <div className="rating">
                        <span className="star">
                            <div className="star-rating">
                                <img src="/images/star_yellow.png"/>
                                <img src="/images/star_yellow.png"/>
                                <img src="/images/star.png"/>
                                <img src="/images/star.png"/>
                                <img src="/images/star.png"/>
                    
                            </div>
                            <div className="gachnoi"></div>
                            <div className="num-trip"><p>{vehicle.vehicle.seat_number} chỗ</p></div>
                            
                        </span>
                    </div>
                    <div className="nameCar">
                        <h2>{vehicle.vehicle_partner_name}</h2>
                    </div>
                </div>
            </div>
        )
    }
}