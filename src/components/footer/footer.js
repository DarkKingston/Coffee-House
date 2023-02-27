import { Component } from "react";
import './footer.scss'

class Footer extends Component{

    render () {
        return(
            <footer className="footer">
                 <div className="container">
                    <ul className="menu">
                        <li className="menu__item"><a href="#"><span><img src="/images/icons/logo_footer.svg" alt="" /></span>Coffee house</a></li>
                        <li className="menu__item"><a href="">Our coffee</a></li>
                        <li className="menu__item"><a href="#">For your pleasure</a></li>
                    </ul>
                    <div className="line">
                        <img src="/images/icons/about_ico.svg" alt="" />
                    </div>
                 </div>
            </footer>
        )
    }
}

export default Footer;