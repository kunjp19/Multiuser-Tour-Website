import React from "react";
import ReactDOM from "react-dom";
import AdminApp from "./AdminApp.js";
import GuestApp from "/GuestApp.js";
import CustomerApp from "./CustomerApp.js"
import "./stylesheet.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "guest",user:""};

    }

    adminHandler(event) {
    this.setState({role: "admin"});
   }
    guestHandler(event) {
    this.setState({role: "guest"});
   }
    customerHandler(event) {
    this.setState({role: "customer"});
    }
    sendtoindexHandler(role,user){
    this.setState({role: role , user:user});
    }
    outfromindex(){
    this.setState({role:"guest",user:"undefined"})
            }
    render() {

       let contents = null;
       let buttonBar = <div className="top">
      <button onClick={this.adminHandler.bind(this)}>AdminApp</button>
      <button onClick={this.guestHandler.bind(this)}>GuestApp</button>
      <button onClick={this.customerHandler.bind(this)}>CustomerApp</button>
      </div>;

     switch (this.state.role) {

      case "admin":
        contents = <AdminApp outfromindex={this.outfromindex.bind(this)}></AdminApp>;
        break;

      case "guest":
        contents =  <GuestApp sendtoindex={this.sendtoindexHandler.bind(this)} ></GuestApp>;
        break;

      case "customer":
        contents = <CustomerApp outfromindex={this.outfromindex.bind(this)}></CustomerApp>;
        break;
      }

      return  <div>
      {buttonBar}
      <fieldset>
      <main>
      {contents}
      </main>
      </fieldset>
    </div>
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));
