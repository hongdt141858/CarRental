import React, {Component} from 'react';
import './car_item.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Redirect } from 'react-router';

export default class Car_Item extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirectScreenDetail: false,
            redirectCustomer: false,
        }
    }

    redirectScreenDetail = () => {
        this.setState({ redirectScreenDetail: true });
    }

    redirectCustomer = () => {
        this.setState({ redirectCustomer: true });
    }

    render(){

        if (this.state.redirectScreenDetail) {
            return <Redirect push to={"/screen_detail" } />;
        }

        if (this.state.redirectCustomer) {
            return <Redirect push to={"/customer" } />;
        }

        return(
            <div className="car_item" onClick={this.redirectScreenDetail}>
                <div className="img-car">
                    <img src=" https://n1-pstg.mioto.vn/g/2018/09/04/14/M7zkITu97njAk7pNYhhESg.jpg"/>
                </div>
                <div className="desc-car">
                    <div className="rating">
                        <span className="star">
                            <div className="star-rating">
                                <img src="images/star_yellow.png"/>&nbsp;
                                <img src="images/star_yellow.png"/>&nbsp;
                                <img src="images/star.png"/>&nbsp;
                                <img src="images/star.png"/>&nbsp;
                                <img src="images/star.png"/>&nbsp;
                            </div>
                            <p><b>750K</b></p>
                        </span>
                    </div>
                    <div className="name-car">
                        <h2>CHEVROLET CRUZE 2018</h2>
                    </div>
                    <div className="trip-distance">
                        <div className="num-trip">
                                <img src ="images/trip.png"/>
                                <p>2 chuyến</p>
                        </div>
                        <div className="num-distance">
                                <img src="images/distance.png"/>
                                <p>5.5 km</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}