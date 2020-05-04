import React from "react";
import ReactDOM from "react-dom";
import Tourj from "./tours.json";
import "./stylesheet.css"

export default function TourTable(props)
{
  let data= Tourj.map(function(tourItem){
    let row=<div><tr><td>{tourItem.name}</td>
                <td>{tourItem.date}</td></tr></div>;
    return row;
  });
  return <div><h2>Coming Tours</h2>
           <table><tr><th>Tour Name</th>
                        <th>Date</th>
                        </tr>
                        <tbody>
                        {data}
                  </tbody>
                  </table>
            </div>
}
