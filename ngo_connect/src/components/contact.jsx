import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/contact.css"; // Import CSS file

const Contact = () => {
    return (
        <div className="contact-container mt-5">
            <h2>Contact Us</h2>
            
            <form>
                <div className="form-group">
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
                </div>
        
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
                </div>
        
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                </div>
        
                <button type="submit" className="btn btn-primary submitbtn">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
