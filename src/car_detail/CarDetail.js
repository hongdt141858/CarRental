import React, {Component} from 'react'
import './car_detail.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class CarDetail extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="car-detail">
                <div className="img-car">
                    <img src="https://n1-pstg.mioto.vn/cho_thue_xe_tu_lai_tphcm/toyota_vios_2013/p/g/2018/11/03/17/79w1VJsrXgMTn5w1_Um7TQ.jpg"/>
                    <div className="price-car">700K</div>
                </div>
                <div className="desc-car">
                    <div className="rating">
                        <span className="star">
                            <div className="star-rating">
                                <img src="images/star_yellow.png"/>
                                <img src="images/star_yellow.png"/>
                                <img src="images/star.png"/>
                                <img src="images/star.png"/>
                                <img src="images/star.png"/>
                            </div>
                            <div className="gachnoi"></div>
                            <p>0 chuyến</p>
                        </span>
                    </div>
                    <div className="nameCar">
                        <h2>HUYNDAI ACCENT 2015</h2>
                    </div>
                </div>
            </div>
        )
    }
}