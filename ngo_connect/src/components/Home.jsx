import React from "react";
import Affiliations from './Affiliations';
import Contact from './contact';
import Introduction from './Introduction';
import Slider from './Slider';


function home() {
    return(
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">NGO Connect</h1>
            <p>A Research Initiative promoting financial integrity in Pakistani NGOs through advanced tracking systems, prioritizing transparency and utilizing blockchain technology for enhanced accountability and trust in charitable donations.</p>
        </div>

        <Slider/>
      <Introduction />
      <Affiliations/>
      <Contact/>
        </div>
    );
};


export default home;