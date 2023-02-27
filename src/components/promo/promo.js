import { Component } from "react";
import './promo.scss'

class Promo extends Component{

    render () {
        return(
            <div className="promo">
                <div className="container">
                    <h1 className="promo_title">
                        Everything You Love About Coffee    
                    </h1>
                    <div className="line">
                        <img src="/images/icons/coffee_bg_icon.svg" alt="" />
                    </div>
                    <div className="message">
                        <div className="mes">We makes every day full of energy and taste</div>
                        <div className="mes">Want to try our beans?</div>
                    </div>
                    <div className="more">
                        <button className="btn_more">
                            Mores
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Promo;