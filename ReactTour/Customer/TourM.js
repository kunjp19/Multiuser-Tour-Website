import React from "react";
import ReactDOM from "react-dom";
import Tourj from "./tours.json";
import "./tourM.css";


export default function TourTable(props)
{
   let menu=
  let data= Tourj.map(function(tourItem){
    let row=  <tr><td>{tourItem.name}</td>
              <td>{tourItem.date}</td></tr>
    return row;
  });
  return <div> <h2>Tour Management</h2>
                <table><thead><tr><th>Tour Name</th>
                           <th>Date</th>
                        </tr>
                  </thead>
                  <tbody>
                  {data}
                  </tbody>
                  </table>
            </div>
}
