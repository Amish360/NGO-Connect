import Footer from "./Footer"
import Navbar from "./Nav"
import '../css/Benefactor.css'
import Need from "../assets/Need.png"

const Benefactor = () => {

  return (
    <div>
        <Navbar/>
        <div className="B-1">
            <div className="container">
                <div className="row">
                <div className="col">
                    <br></br>
                    <br></br>
                    <h1 className="B-H1">Need help?</h1>
                    <br></br>
                    <p className="B-P1">At SecureNGO, we understand that navigating life's challenges can be daunting, and we're here to offer a compassionate ear,
                     practical resources, and a network of caring individuals ready to provide aid. Whether you're facing personal struggles, seeking information,
                      or require immediate assistance, this space serves as a gateway to our array of services aimed at fostering well-being and empowerment for all
                       those we serve. Your well-being is our priority, and we're here to listen, support, and guide you through whatever challenges you may be facing.
                        Together, let's take the first step towards a brighter tomorrow</p>
                </div>
                <div className="col" >
                    <img src={Need} className="Need-img" alt="" />
                </div>
                </div>
            </div>
        </div>

        <div className='form-outer'>
            <div className='form-inner'>
                <h1 className="B-H-H1">Register Your Case</h1>
                <form>
                    <div className="form-group-1" >
                        <label for="name">Your Name:</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
                    </div>
                    <div className="form-group-1">
                        <label for="email">Email address:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-6">
                            <label for="phone">Phone:</label>
                            <input type="text" className="form-control" id="phone" placeholder="Enter your phone number"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="time">Best Time to Contact:</label>
                            <select id="time" class="form-control">
                                <option selected>Choose...</option>
                                <option>Morning</option>
                                <option>Afternoon</option>
                                <option>Evening</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label for="Addres">Address:</label>
                        <input type="text" className="form-control" id="Address" placeholder=""/>
                    </div>
                    <div className='row'>
                        <div class="form-group col-md-6">
                            <label for="city">City:</label>
                            <input type="text" class="form-control" id="city"/>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="state">State:</label>
                            <input type="text" class="form-control" id="state"/>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="zip">Zip:</label>
                            <input type="text" class="form-control" id="zip"/>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Detailed Information about the Case:</label>
                        <textarea class="form-control" id="message" rows="5" placeholder=""></textarea>
                    </div>
                    
                    <br></br>
                    <button type="submit" className="btn btn-primary submitbtn">Submit</button>
                </form>
            </div>
        </div>



      <Footer/>
    </div>
  )
}

export default Benefactor