import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const contact = () =>{
    return(
        <div class="container mt-5">
      <h2>Contact Us</h2>
      
      <form>
        <div class="form-group">
          <label for="name">Your Name:</label>
          <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
        </div>
  
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
        </div>
  
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea class="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
        </div>
  
        <button type="submit" class="btn btn-primary submitbtn">Submit</button>
      </form>
    </div>
    );
};



export default contact