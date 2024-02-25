import React from "react";
import "../css/Affiliations.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import edhi from "../assets/edhi.jpg"
import jdc from "../assets/jdc.png"
import abt from "../assets/ansarburneytrust.png"

const Affiliations = () => {
    // Define array of NGO data
    const ngos = [
        { name: "Edhi Center", image: edhi },
        { name: "Ansar Burney Trust", image: abt },
        { name: "JDC Foundation", image: jdc }
    ];

    return (
        <section className="jumbotron">
            <h1>NGOS affiliated with us</h1>
            
            <div className="card-container md-4 row align-items:center">
                {ngos.map((ngo, index) => (
                    <div key={index} className="col-md-4" style={{ height: "200px", width: "300px"  }}>
                        <div className="card" >
                            <img src={ngo.image} className="choose-icons" alt={ngo.name} style={{ height: "200px", width: "200px"  }} />
                            <h3>{ngo.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Affiliations;
