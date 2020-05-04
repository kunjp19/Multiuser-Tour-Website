import React from "react";
import ReactDOM from "react-dom";
import Tourj from "./tours.json";
import "./tourM.css";


export default function TourTable(props)
{
  let data= Tourj.map(function(tourItem){
    let row=  <tr><td><button>Delete</button></td>
              <td>{tourItem.name}</td>
              <td>{tourItem.date}</td></tr>;
    return row;
  });
  return <div id="ts"> <h2>Tour Management</h2>
                <select><option value="Add Tours">Add Tours</option>
                </select><br/><br/>
                <table><thead><tr>
                <th></th>
                <th>Tour Name</th>
                           <th>Date</th>
                        </tr>
                  </thead>
                  <tbody>
                  {data}
                  </tbody>
                  </table>
            </div>
}
