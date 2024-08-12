import React from "react";
import "../styles/stylesheet.css"
import Home from "./Home.js"
import Tour from "./Tour.js"
import AboutUs from "./About.js";
import paddleboard1 from "../public/paddleboard1.jpeg";
import paddleboard2 from "../public/paddleboard2.jpeg";

let padImage1 = <img className="Center" src={paddleboard1}/>;
let padImage2 = <img className="Center" src={paddleboard2}/>;

export default class CustomerApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showing: "home"};
    }

    comingToursHandler(event) {
        this.setState({showing: "comingtours"});
    }

    mytoursHandler(event) {
        this.setState({showing: "mytours"});
    }

    homeHandler(event) {
        this.setState({showing: "home"});
    }

    aboutUsHandler(event) {
        this.setState({showing: "aboutus"});
    }

    logoutHandler(role, user) {
        fetch("/logout", {method: "GET"})
            .then((response) => response.json())
        this.setState({role: "guest"});
        this.props.outfromindex(role, user);
    }

    render() {
        let contents = null;
        let buttonBar = <div className="topNavigation">
            <button onClick={this.comingToursHandler.bind(this)}>Coming Tours</button>
            <button onClick={this.mytoursHandler.bind(this)}>My Tours</button>
            <button onClick={this.homeHandler.bind(this)}>Home</button>
            <button onClick={this.aboutUsHandler.bind(this)}>About Us</button>
            <button onClick={this.logoutHandler.bind(this)}>LogOut</button>
        </div>;

        switch (this.state.showing) {


            case "comingtours":
                contents = <Tour></Tour>;
                break;

            case "mytours":
                contents = <h2>My Tours : Not Implemented Yet</h2>
                break;

            case "home":
                contents = <Home></Home>;
                break;

            case "aboutus":
                contents = <AboutUs></AboutUs>
                break;

            case "logout":
                contents = <h2>Logout : Not Implemented Yet</h2>
                break;


        }
        return <div>
            <fieldset>
                <h1>Paddleboard Tours</h1>
                {buttonBar}
                <main>
                    {contents}
                </main>
            </fieldset>
        </div>
    }
}
