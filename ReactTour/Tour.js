import React from "react";
import ReactDOM from "react-dom";
import Tourj from "./tours.json";
import "./tourM.css"

 export default class TourTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showing: "comingtours"};
    }
componentDidMount(){
 this.getData();
}
   getData() {
     let response;
     fetch("/tours",{method:"GET"})
     .then((response)=>response.json())
     .then((data) => {response=data})
     .then((result) => {
      let data=response.map(function(tourItem,index){
       let row=<tr key = {index}><td>{tourItem.name}</td>
                   <td>{tourItem.date}</td></tr>;
       return row;
       });
     this.setState({ tours :data});
   })
 }
  render() {
      return <div><h2>Coming Tours</h2>
          <table><thead><tr><th>Tour Name</th><th>Date</th></tr></thead>
            <tbody>{this.state.tours}</tbody>
                  </table></div>;
        }
}
