import React, {Component} from 'react'
import './guide.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
export default class Guide extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="nav">
                    <h1>HƯỚNG DẪN</h1>
                </div>
                <div className="guide-left">
                    <div className="guide-left1">
                            <img src="images/guide11.png" className="img1"/>
                    </div>
                    <div className="guide-left2">
                            <img src="images/guide21.png" className="img3"/>
                    </div>
                    <div className="guide-left3">
                            <img src="images/guide31.png" className="img5"/>
                    </div>
                    <div className="guide-left4">
                            <img src="images/guide41.png" className="img7"/>
                    </div>
                    <div className="guide-left5">
                            <img src="images/guide51.png" className="img9"/>
                    </div>
                    <div className="guide-left6">
                            <img src="images/guide61.png" className="img11"/>
                    </div>
                </div>
                <div className="guide-center">
                    <div className="guide-center1">
                        <img src="images/dot1.png" className="dot1"/>
                    </div>
                    <div className="guide-center2">
                        <img src="images/dot2.png" className="dot2"/>
                    </div>
                    <div className="guide-center3">
                        <img src="images/dot3.png" className="dot3"/>
                    </div>
                    <div className="guide-center4">
                        <img src="images/dot4.png" className="dot4"/>
                    </div>
                </div>
                <div className="guide-right">
                    <div className="guide-right1">
                        <img src="images/guide12.png" className="img2"/>
                    </div>
                    <div className="guide-right2">
                        <img src="images/guide22.png" className="img4"/>
                    </div>
                    <div className="guide-right3">
                        <img src="images/guide32.png" className="img6"/>
                    </div>
                    <div className="guide-right4">
                        <img src="images/guide42.png" className="img8"/>
                    </div>
                    <div className="guide-right5">
                        <img src="images/guide52.png" className="img10"/>
                    </div>
                    <div className="guide-right6">
                        <img src="images/guide62.png" className="img12"/>
                    </div>
                </div>
            </div>
        )
    }
}