import { Component } from "react";
import './app.scss'
import Header from "../header/header";

class App extends Component{

    render () {
        return(
            <div className="app">
                <Header/>
            </div>
        )
    }
}

export default App;