import React from "react";
import ReactDOM from "react-dom";
import "./stylesheet.css"
import Home from "./Home.js"
import paddleboard1 from "./paddleboard1.jpeg";
import paddleboard2 from "./paddleboard2.jpeg";

let padImage1 = <img className="Center" src={paddleboard1}  />;
let padImage2 = <img className="Center" src={paddleboard2}  />;

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
        logoutHandler(event) {
          this.props.outfromindex(role,user)
        }


          render() {

            let contents= null;
            let buttonBar = <div className="topNavigation">
           <button onClick={this.comingToursHandler.bind(this)}>Coming Tours</button>
           <button onClick={this.mytoursHandler.bind(this)}>My Tours</button>
           <button onClick={this.homeHandler.bind(this)}>Home</button>
           <button onClick={this.aboutUsHandler.bind(this)}>About Us</button>
           <button onClick={this.logoutHandler.bind(this)}>LogOut</button>
           </div>;

            switch (this.state.showing) {


            case "comingtours":
            contents = <h2>Coming Tours : Not Implemented Yet</h2>
            break;

            case "mytours":
            contents = <h2>My Tours : Not Implemented Yet</h2>
            break;

            case "home":
            contents = <Home></Home>;
            break;

            case "aboutus":
            contents = <h2>About Us : Not Implemented Yet</h2>
            break;

            case "logout":
            contents = <h2>Logout : Not Implemented Yet</h2>
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
