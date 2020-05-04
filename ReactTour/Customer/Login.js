import React from "react";
import ReactDOM from "react-dom";
import "./stylesheet.css";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Email: "",Password: ""};
    }
  emailHandler(event) {
    this.setState({Email: event.target.value});
   }
  passwordHandler(event) {
    this.setState({Password: event.target.value});
  }

      btnHandler(event) {

     switch (this.state.Email) {
      case "admin@email.org":
         this.props.sendtoguest("admin",{user:"kunj_admin",NetId:"bu4986"});
         break;

         case "customer@email.org":
           this.props.sendtoguest("customer",{user:"kunj_customer",NetId:"bu4986"});
          break;
      }
}
   render() {
     let logIn = <div className="logIn">
                 <label>Email:</label><input type="email" id="X" onChange={this.emailHandler.bind(this)} /><br/><br/>
                 <label>Password:</label><input type="password" id="Y" onChange={this.passwordHandler.bind(this)} /><br/><br/>
                 <button onClick={this.btnHandler.bind(this)}> LogIn </button>
                 </div>;

                 return <div>
                        <h3>ENTER YOUR EMAIL ID AND PASSWORD</h3>
                        {logIn}
                        </div>
              }
}
