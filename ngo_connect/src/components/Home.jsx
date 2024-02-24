import React from "react";
import Affiliations from './Affiliations';
import Contact from './contact';
import Introduction from './Introduction';
import BlockChain from "../assets/BlockChain.webp"



function home() {
    return(
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">NGO Connect</h1>
            <p>A Research Initiative promoting financial integrity in Pakistani NGOs through advanced tracking systems, prioritizing transparency and utilizing blockchain technology for enhanced accountability and trust in charitable donations.</p>
        </div>

        <div className="container">
        <div className="row">
          <div className="col">
            <br></br>
            <br></br>
            <h1 className="H1">Mission statement</h1>
            <br></br>
            <p className="P1">At SecureNGO, we believe in the power of blockchain<br></br>
              technology to create a more transparent, accountable, and<br></br>
              secure world. Our mission is to empower philanthropy by<br></br>
              providing innovative solutions that ensure the highest levels <br></br>
              of trust and integrity. We are committed to making a <br></br>
              positive impact on society and driving meaningful change <br></br>
              that benefits people and communities around the globe.</p>
          </div>
          <div className="col" >
            <img src={BlockChain} className="img-thumbnail" alt="" />
          </div>
        </div>
      </div>


      <Introduction />
      <Affiliations/>
      <Contact/>
        </div>
    );
};


export default home;