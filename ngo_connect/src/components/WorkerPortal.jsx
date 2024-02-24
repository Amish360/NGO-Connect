import './WorkerPortal.css'
import Help from "./assets/images/Help.png"
import Footer from "./Components/Footer"

const WorkerPortal = () => {
  return (
    <div>
        <div className="WP-1">
            <div className="container">
                <div className="row">
                <div className="col">
                    <br></br>
                    <br></br>
                    <h1 className="WP-H1">Become a volunteer or help out with an event.</h1>
                    <br></br>
                    <p className="WP-P1">Passionate about making a positive impact? Join our team at SecureNGO as a volunteer! Together, let's create meaningful change in our community and beyond. Whether you're interested in environmental conservation, education, healthcare, or social justice, there's a place for you here. Join us in our mission to make a difference and be a part of something greater than yourself.</p>
                </div>
                <div className="col" >
                    <img src={Help} className="Volunteer-img" alt="" />
                </div>
                </div>
            </div>
        </div>

        <div className='form-outer'>
            <div className='form-inner'>
                <h1 className="WP-V-H1">Volunteer Signup</h1>
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
                        <label for="message">Comments/Additional Information:</label>
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

export default WorkerPortal