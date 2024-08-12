import React, { Component } from "react";
import ReactDOM from "react-dom";
import AdminApp from "../src/AdminApp.js";
import GuestApp from "../src/GuestApp.js";
import CustomerApp from "../src/CustomerApp.js";
import "./../styles/stylesheet.css";

class App extends Component {
    state = { role: "guest" };

    setRole = (role) => this.setState({ role });

    sendtoindexHandler = (role) => this.setState({ role });

    outfromindex = () => this.setState({ role: "guest" });

    render() {
        const { role } = this.state;
        const contents = {
            admin: <AdminApp outfromindex={this.outfromindex} />,
            guest: <GuestApp sendtoindex={this.sendtoindexHandler} />,
            customer: <CustomerApp outfromindex={this.outfromindex} />,
        }[role];

        return (
            <div>
                <fieldset>
                    <div className="top">
                        <button onClick={() => this.setRole("admin")}>AdminApp</button>
                        <button onClick={() => this.setRole("guest")}>GuestApp</button>
                        <button onClick={() => this.setRole("customer")}>CustomerApp</button>
                    </div>
                    <main>{contents}</main>
                </fieldset>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));