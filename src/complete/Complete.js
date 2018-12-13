import React, {Component} from 'react';
import { Redirect } from 'react-router';
import './complete.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class Complete extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirectHome: false,
        }
    }

    redirectHome = () => {
        this.setState({
            redirectHome: true,
        })
    }

    render(){
        if(this.state.redirectHome){
            return <Redirect push to={"/"} />;
        }
        return (
            <div className="con-complete">
                <div className="title-complete">
                    <h2>THÔNG BÁO</h2>
                </div>
                <div className="notice">
                    <p>Bạn đã thuê xe thành công.</p>
                </div>
                <div className="notice1">
                    <p>Chúc bạn có một chuyến đi an toàn (^-^)</p>
                </div>
                <div className="goHome">
                    <button className="btnGoHome" onClick={this.redirectHome}>Về trang chủ</button>
                </div>
            </div>
        )
    }
}