import React from "react";
import "../styles/stylesheet.css";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: "", role: ""};
        this.btnHandler = this.btnHandler.bind(this);
    }

    emailHandler(event) {
        this.setState({email: event.target.value});
    }

    passwordHandler(event) {
        this.setState({password: event.target.value});
    }

    btnHandler(event) {
        console.log(this.state.email);
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        }).then((response) => response.json())
            .then((data) => {
                this.setState({role: data.role});
                switch (this.state.role) {
                    case "admin":
                        this.props.sendtoguest("admin", {
                            firstname: data.firstName,
                            lastname: data.lastName,
                            email: data.email,
                            id: data._id
                        });
                        break;
                    case "customer":
                        this.props.sendtoguest("customer", {
                            firstname: data.firstName,
                            lastname: data.lastName,
                            email: data.email,
                            id: data._id
                        });
                        break;
                }
            });
    }

    render() {
        let logIn = (
            <div className="logIn">
                <label>Email:</label>
                <input type="email" id="X" key="email" onChange={this.emailHandler.bind(this)}/><br/><br/>
                <label>Password:</label>
                <input type="password" id="Y" key="password" onChange={this.passwordHandler.bind(this)}/><br/><br/>
                <button onClick={this.btnHandler}> LogIn</button>
            </div>
        );

        return (
            <div>
                <h3 style={{textAlign: "center"}}>ENTER YOUR EMAIL ID AND PASSWORD</h3>
                {logIn}
            </div>
        );
    }
}