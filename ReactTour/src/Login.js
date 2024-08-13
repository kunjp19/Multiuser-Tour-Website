import React from "react";
import "../styles/stylesheet.css";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "", role: "" };
        this.handleChange = this.handleChange.bind(this);
        this.btnHandler = this.btnHandler.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    btnHandler() {
        console.log(this.state.email);
        fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            this.setState({ role: data.role });
            this.props.sendtoguest(data.role, {
                firstname: data.firstName,
                lastname: data.lastName,
                email: data.email,
                id: data._id
            });
        });
    }

    render() {
        return (
            <div className="center-container">
                <div>
                    <h3 className="center-text">ENTER YOUR EMAIL ID AND PASSWORD</h3>
                    <div className="input-container">
                        <label>Email</label>
                        <input type="email" name="email" value={this.state.email}
                               onChange={this.handleChange}/><br/><br/>
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.password}
                               onChange={this.handleChange}/><br/><br/>
                    </div>
                </div>
            </div>
        );
    }
}