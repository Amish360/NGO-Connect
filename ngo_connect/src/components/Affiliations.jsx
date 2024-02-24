import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import edhi from "../assets/edhi.jpg"
import jdc from "../assets/jdc.png"
import abt from "../assets/ansarburneytrust.png"

const Affiliations = () => {
    return (
        <section className="jumbotron">
            <h1>NGOS affiliated with us</h1>
            
            <div className="card-container md-4 row align-items:center">
                <div className="col-md-4" style={{ height: "200px", width: "300px"  }}>
                    <div className="card" >
                        <img src={edhi} className="choose-icons" alt="Edhi Center" style={{ height: "200px", width: "200px"  }} />
                        <h3>Edhi Center</h3>
                    </div>
                </div>
                <div className="col-md-4" style={{ height: "200px", width: "300px"  }}>
                    <div className="card">
                        <img src={abt} className="choose-icons" alt="Ansar Burney Trust" style={{ height: "200px", width: "200px"  }} />
                        <h3>Ansar Burney Trust</h3>
                    </div>
                </div>
                <div className="col-md-4" style={{ height: "200px", width: "300px"  }}>
                    <div className="card" >
                        <img src={jdc} className="choose-icons" alt="JDC Foundation" style={{ height: "200px", width: "200px" }} />
                        <h3>JDC Foundation</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Affiliations;
