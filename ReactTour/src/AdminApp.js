import React from "react";
import "../styles/stylesheet.css";
import Home from "./Home.js";
import AdminTours from "./AdminTour.js";
import AboutUs from "./About.js";
import paddleboard1 from "../public/paddleboard1.jpeg";
import paddleboard2 from "../public/paddleboard2.jpeg";

const padImage1 = <img className="Center" src={paddleboard1}/>;
const padImage2 = <img className="Center" src={paddleboard2}/>;

export default class AdminApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showing: "home"};
        this.bindHandlers();
    }

    bindHandlers() {
        this.tourMHandler = this.tourMHandler.bind(this);
        this.customerMHandler = this.customerMHandler.bind(this);
        this.homeHandler = this.homeHandler.bind(this);
        this.aboutUsHandler = this.aboutUsHandler.bind(this);
        this.logoutHandler = this.logoutHandler.bind(this);
    }

    tourMHandler() {
        this.setState({showing: "tourM"});
    }

    customerMHandler() {
        this.setState({showing: "customerM"});
    }

    homeHandler() {
        this.setState({showing: "home"});
    }

    aboutUsHandler() {
        this.setState({showing: "aboutus"});
    }

    logoutHandler(role, user) {
        fetch("/logout", {method: "GET"})
            .then((response) => response.json())
            .then(() => {
                this.setState({role: "guest"});
                this.props.outfromindex(role, user);
            });
    }

    render() {
        const buttonBar = (
            <div className="topNavigation">
                <button onClick={this.tourMHandler}>Tour😎</button>
                <button onClick={this.customerMHandler}>Customer</button>
                <button onClick={this.aboutUsHandler}>About Us</button>
                <button onClick={this.homeHandler}>Home</button>
                <button onClick={this.logoutHandler}>LogOut</button>
            </div>
        );

        const contents = {
            tourM: <AdminTours/>,
            home: <Home/>,
            aboutus: <AboutUs/>
        }[this.state.showing];

        return (
            <div>
                <fieldset>
                    <h1>Paddleboard Tours 🚌</h1>
                    {buttonBar}
                    <main>{contents}</main>
                </fieldset>
            </div>
        );
    }
}