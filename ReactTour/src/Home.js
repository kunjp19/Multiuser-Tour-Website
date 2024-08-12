import React from "react";
import "../styles/stylesheet.css";
import paddleboard2Image from "../public/paddleboard2.jpeg";
let padImage = <img className="Center" src={paddleboard2Image}/>;


function Home() {
    return <div>
        {padImage}
        <p>Hello, We are from <b>Paddleboard Tour</b>. This one has to be the most important requirement. Otherwise,
            there is not much stand up paddling you can do. Standup paddleboards come in different shapes and sizes.
            It is important that you choose the one that suits you best. Many boards are designed to serve specific
            purposes. As a beginner, the best thing to do would be to choose an all-around paddle board. Choose a
            wide board, 30 inches or wider will do, to help you achieve and maintain balance on the water. You can
            decide to get a fiberglass paddleboard (the traditional hard boards) or an inflatable SUP. Inflatable paddle
            boards are usually affordable, durable and a great choice for flat water and river paddle boarding.
            Epoxy SUPs, on the other hand, are in general more expensive, more responsive and better for SUP surfing.
            Making a choice may be difficult, but you can always ask for advice at the local shop to help you out.
            Alternatively, rent boards for a while to see which type and size suits you best.</p>
    </div>;
}

export default Home;