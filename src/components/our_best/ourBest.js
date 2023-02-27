import { Component } from "react";
import './ourBest.scss'

class OurBest extends Component{

    render () {
        return(
            <section className="our">
                <div className="container">
            
                    <div className="our__title">
                        Our best
                    </div>

                    <div className="our__product">
                        <div className="our__product__box">
                            <div className="our__product__box__image"><img src="images/coffe_prod_1.png" alt="" /></div>
                            <div className="our__product__box__title">Solimo Coffee Beans 2kg</div>
                            <div className="our__product__box__price">10.73$</div>
                        </div>
                        <div className="our__product__box">
                            <div className="our__product__box__image"><img src="images/coffe_prod_2.png" alt="" /></div>
                            <div className="our__product__box__title">Solimo Coffee Beans 2kg</div>
                            <div className="our__product__box__price">10.73$</div>
                        </div>
                        <div className="our__product__box">
                            <div className="our__product__box__image"><img src="images/coffe_prod_3.png" alt="" /></div>
                            <div className="our__product__box__title">Solimo Coffee Beans 2kg</div>
                            <div className="our__product__box__price">10.73$</div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default OurBest;