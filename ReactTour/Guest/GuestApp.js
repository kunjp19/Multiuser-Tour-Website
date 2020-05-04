import React from "react";
import ReactDOM from "react-dom";
import "./stylesheet.css";
import Home from "./Home.js";
import AboutUs from "./About.js";
import Login from "./Login.js";
import Tour from "./Tour.js"
import paddleboard1 from "./paddleboard1.jpeg";
import paddleboard2 from "./paddleboard2.jpeg";

let padImage1 = <img className="Center" src={paddleboard1}  />;
let padImage2 = <img className="Center" src={paddleboard2}  />;

export default class GuestApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showing: "home"};
}
  sendtoguest(role,data){
    this.props.sendtoapp(role,data);
  }

  comingToursHandler(event) {
    this.setState({showing: "comingtours"});
   }
  loginHandler(event) {
    this.setState({showing: "login"});
  }
  tourSignupHandler(event) {
    this.setState({showing: "toursignup"});
  }
  aboutUsHandler(event) {
    this.setState({showing: "aboutus"});
  }
  homeHandler(event) {
    this.setState({showing: "home"});
  }

  sendtoguestHandler(role,user) {
    this.props.sendtoindex(role,user);
  }
    render() {

      let contents = null;
      let buttonBar = <div className="topNavigation">
     <button onClick={this.comingToursHandler.bind(this)}>Coming Tours</button>
     <button onClick={this.loginHandler.bind(this)}>Login</button>
     <button onClick={this.tourSignupHandler.bind(this)}>Tour Signup</button>
     <button onClick={this.aboutUsHandler.bind(this)}>About Us</button>
     <button onClick={this.homeHandler.bind(this)}>Home</button>
     </div>;

      switch (this.state.showing) {


      case "comingtours":
      contents = <Tour></Tour>;
      break;

      case "login":
      contents = <Login sendtoguest={this.sendtoguestHandler.bind(this)} ></Login>;
      break;

      case "toursignup":
      contents = <h2>Tour Signup : Not implemented yet</h2>;
      break;

     case "home":
     contents = <Home></Home>;
     break;

    case "aboutus":
       contents =  <AboutUs></AboutUs>;
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
