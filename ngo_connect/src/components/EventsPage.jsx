import './EventsPage.css'
import Volunteer from "./assets/images/Volunteer.png"
import Footer from "./Components/Footer"

const EventsPage = () => {
  return (
    <div>
        <div className="EP-1">
            <div className="container">
                <div className="row">
                <div className="col">
                    <br></br>
                    <br></br>
                    <h1 className="EP-H1">Upcoming<br></br>Events!</h1>
                    <br></br>
                    <p className="EP-P1">Exciting opportunities await! Join us for our upcoming events at SecureNGO, where you can actively engage with our mission and make a tangible difference. Whether you're a seasoned volunteer or eager to start giving back, there's something for everyone. From community clean-up initiatives to educational workshops and fundraising events, we invite you to be a part of the action. Together, let's create meaningful change and build a brighter future for all.</p>
                </div>
                <div className="col" >
                    <img src={Volunteer} className="Event-img" alt="" />
                </div>
                </div>
            </div>
        </div>
        <div >
            <h1 className='NoEvents'>No events to show currently. Please wait for a while or contact the our team. Thank You!</h1>
        </div>
        <Footer/>
    </div>
  )
}

export default EventsPage