import React from "react";
import Affiliations from './Affiliations';
import Contact from './contact';
import Introduction from './Introduction';
import Footer from "./Footer";
import Navbar from "./Nav";




function home() {
    return(
        <div class="jumbotron jumbotron-fluid">
          <Navbar/>
        <div class="container">
            <h1 class="display-4">NGO Connect</h1>
            <p>A Research Initiative promoting financial integrity in Pakistani NGOs through advanced tracking systems, prioritizing transparency and utilizing blockchain technology for enhanced accountability and trust in charitable donations.</p>
        </div>

       

      <Introduction />
      <Affiliations/>
      <Contact/>
      <Footer/>
        </div>
    );
};


export default home;