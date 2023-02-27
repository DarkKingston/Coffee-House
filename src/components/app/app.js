import { Component } from "react";
import './app.scss'
import Header from "../header/header";
import About from "../about/about";
import OurBest from "../our_best/ourBest";
import Footer from "../footer/footer";
class App extends Component{

    render () {
        return(
            <div className="app">

                <Header/>

                <About/>

                <OurBest/>

                <Footer/>

            </div>
        )
    }
}

export default App;