import Navbar from "./Nav"
import '../css/About.css'
import BlockChain from "../assets/BlockChain.webp"
import BlockChain2 from "../assets/Blockchain2.jpg"
import Wasif from "../assets/Wasif.jpg"
import Khizar from "../assets/Khizar.jpg"
import Amish from "../assets/Amish.jpg"
import Bitcoin from "../assets/Bitcoin.jpg"
import Footer from "./Footer"

const About = () => {
  return (
    <div>
      <Navbar/>
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

      <div className="Team">
        <h1 className="H2">Meet Our Team</h1>
        <br></br>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col-card">
            <div className="card">
              <img src={Wasif} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className="card-title">Wasif Raza</h4>
                <h5 className="Job-Title">Chief Information Officer</h5>
                <p className="card-text">Wasif is a seasoned technology leader renowned for his strategic vision. As our Chief Information Officer, he navigates the intersection of technology and organizational goals with precision.</p>
              </div>
            </div>
          </div>
          <div className="col-card">
            <div className="card">
              <img src={Khizar} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className="card-title">Khizar Alam</h4>
                <h5 className="Job-Title">Chief Technology Officer</h5>
                <p className="card-text">Khizar is a blockchain expert with a wealth of experience in developing cutting-edge solutions for the digital age. His expertise in cybersecurity and computer science is second to none.</p>
              </div>
            </div>
          </div>
          <div className="col-card">
            <div className="card">
              <img src={Amish} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className="card-title">M. Amish Toor</h4>
                <h5 className="Job-Title">Lead software engineer</h5>
                <p className="card-text">Amish brings a wealth of expertise to our development team. With a passion for crafting efficient and innovative solutions, he takes the helm in overseeing the entire software development process.</p>
              </div>
            </div>
          </div>
          <div className="col-card">
            <div className="card">
              <img src="" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <h5 className="Job-Title">Senior Developer</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
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

      <Footer/>

    </div>
  )
}

export default About
