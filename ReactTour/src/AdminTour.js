import React from "react";
import "../styles/tour.css";


export default class TourTable extends React.Component {
    constructor(props) {
        super(props);
        let rows;
        this.state = {tableRows: []};
    }

    TourNameHandler(event) {
        this.setState({name: event.target.value});
    }

    DateHandler(event) {
        this.setState({date: event.target.value});
    }

    componentDidMount() {
        fetch("/tours").then((response) => response.json())
            .then((data) => {
                this.setState({tableRows: data});
            });
    }

    AddTour() {
        var response;
        fetch("/tours/add",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: this.state.name,
                    date: this.state.date
                })
            })
            .then((response) => response.json())
            //.then((data) => {response=data})
            .then((data) => {
                var newtour = {"name": data.name, "date": data.date, "_id": data._id}
                this.state.tableRows.push(newtour)
                this.setState({tableRows: this.state.tableRows});
            });
    }

    DeleteTour(id) {
        fetch(`tours/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },

            })
            .then((response) => {
                console.log("Response :" + response);
                return fetch('/tours')
            })
            .then((data) => {
                return data.json()
            })
            .then((tour) => this.setState({tableRows: tour}))

    }

    render() {
        var that = this;
        let add = <div id="menu">
            <select>
                <option value="Add Tours">Add Tours</option>
            </select><br/><br/>
            <label>Name Of Tour:</label><input type="text" id="nameofTour"
                                               onChange={this.TourNameHandler.bind(this)}/><br/><br/>
            <label>Date :</label><input type="text" id="date" onChange={this.DateHandler.bind(this)}/><br/><br/>
            <button id="addbtn" onClick={this.AddTour.bind(this)}>Add Tour</button>
            <br/><br/>
        </div>;
        let data = this.state.tableRows.map((tourItem, i) => {
            return (<tr key={i}>
                <td>
                    <button id="delbtn" onClick={that.DeleteTour.bind(this, tourItem._id)}> Delete</button>
                </td>
                <td>{tourItem.name}</td>
                <td>{tourItem.date}</td>
            </tr>)
        });
        return <div id="ts"><h2>Tour Management</h2>
            <fieldset>{add}</fieldset>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Tour Name</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>{data}</tbody>
            </table>
        </div>
    }
}
