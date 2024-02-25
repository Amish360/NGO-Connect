import React from "react";
import BlockChain from "../assets/BlockChain.webp"
import 'bootstrap/dist/css/bootstrap.min.css';
import BlockChain2 from "../assets/Blockchain2.jpg"
import Bitcoin from "../assets/Bitcoin.jpg"



const introduction = () =>{
    return(
    <div class="jumbotron">
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


      <div className="container">
        <div className="row">
          <div className="col">
            <br></br>
            <br></br>
            <h1 className="H3">Want to learn more about Blockchain?</h1>
            <br></br>
            <p className="P1">"Explore the most recent and comprehensible blog post elucidating the intricacies of blockchain technology. Visit a reputable website that regularly publishes updated content on emerging technologies and read their latest blog entry explaining the fundamental principles and workings of blockchain. Look for a blog that is accessible and easy to understand, ensuring that it provides a clear and informative guide to demystify the complexities of blockchain technology."</p>
            <button type="button" class="btn btn-success">Read More</button>
          </div>
          <div className="col" >
            <img src={Bitcoin} className="img-thumbnail1" alt="" />
          </div>
          <div className="col" >
            <img src={BlockChain2} className="img-thumbnail1" alt="" />
          </div>
          
        </div>
      </div>

    </div>

    
    
    );
}


export default introduction;