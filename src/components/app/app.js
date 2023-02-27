import { Component } from "react";
import './app.scss'
import Header from "../header/header";
import About from "../about/about";
class App extends Component{

    render () {
        return(
            <div className="app">
                <Header/>
                <About/>
            </div>
        )
    }
}

export default App;