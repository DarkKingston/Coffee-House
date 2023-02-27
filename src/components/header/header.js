import { Component, Fragment } from "react";
import './header.scss'
import Promo from "../promo/promo";
class Header extends Component{

    render () {
        return(
            <div className="header">
                <ul className="menu">
                    <li className="menu__item"><a href="#"><span><img src="/images/icons/logo.svg" alt="" /></span>Coffee house</a></li>
                    <li className="menu__item"><a href="">Our coffee</a></li>
                    <li className="menu__item"><a href="#">For your pleasure</a></li>
                </ul>
                
                <Promo/>
            </div>
        )
    }
}

export default Header;