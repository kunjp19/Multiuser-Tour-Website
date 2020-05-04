import React from "react";
import ReactDOM from "react-dom";
import "./stylesheet.css";
import Home from "./Home.js";
import AdminTours from "./AdminTour.js";
import paddleboard1 from "./paddleboard1.jpeg";
import paddleboard2 from "./paddleboard2.jpeg";
let padImage1 = <img className="Center" src={paddleboard1}  />;
let padImage2 = <img className="Center" src={paddleboard2}  />;

export default class AdminApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showing : "home"};
    }
    tourMHandler(event) {
      this.setState({showing: "tourM"});
     }
    customerMHandler(event) {
      this.setState({showing: "customerM"});
    }
    homeHandler(event) {
      this.setState({showing: "home"});
    }
    aboutUsHandler(event) {
      this.setState({showing: "aboutus"});
    }
    logoutHandler(role, user) {
        this.props.outfromindex(role,user);
}
      render() {

        let contents= null;
        let buttonBar = <div className="topNavigation">
       <button onClick={this.tourMHandler.bind(this)}>Tour Management</button>
       <button onClick={this.customerMHandler.bind(this)}>Customer Management</button>
       <button onClick={this.aboutUsHandler.bind(this)}>About Us</button>
       <button onClick={this.homeHandler.bind(this)}>Home</button>
       <button onClick={this.logoutHandler.bind(this)}>LogOut</button>
       </div>;

        switch (this.state.showing) {


        case "tourM":
        contents = <AdminTours></AdminTours>;
        break;

        case "customerM":
        contents = <h2>Customer Management : Not Implemented Yet</h2>
        break;

        case "home":
        contents = <Home></Home>;
        break;

        case "aboutus":
        contents = <h2>About Us : Not Implemented Yet</h2>
        break;
         }
                return <div>
                  <h1>Paddleboard Tours</h1>
                  {buttonBar}
                  <main>
                  {contents}
                  </main>
              </div>
    }
}
