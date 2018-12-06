import React, {Component} from 'react';
import './car_item.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class Car_Item extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="car_item">
                <div className="img-car">
                    <img src=" https://n1-pstg.mioto.vn/g/2018/09/04/14/M7zkITu97njAk7pNYhhESg.jpg"/>
                </div>
            </div>
        )
    }
}