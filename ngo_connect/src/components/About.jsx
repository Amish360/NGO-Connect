import React from 'react';
import Navbar from './Nav';
import '../css/About.css';
import Wasif from '../assets/Wasif.jpg';
import Khizar from '../assets/Khizar.jpg';
import Amish from '../assets/Amish.jpg';
import Footer from './Footer';

const About = () => {
  // Define array of team members
  const teamMembers = [
    {
      name: 'Wasif Raza',
      image: Wasif,
      jobTitle: 'Chief Information Officer',
      description:
        'Wasif is a seasoned technology leader renowned for his strategic vision. As our Chief Information Officer, he navigates the intersection of technology and organizational goals with precision.',
    },
    {
      name: 'Khizar Alam',
      image: Khizar,
      jobTitle: 'Chief Technology Officer',
      description:
        'Khizar is a blockchain expert with a wealth of experience in developing cutting-edge solutions for the digital age. His expertise in cybersecurity and computer science is second to none.',
    },
    {
      name: 'M. Amish Toor',
      image: Amish,
      jobTitle: 'Lead software engineer',
      description:
        'Amish brings a wealth of expertise to our development team. With a passion for crafting efficient and innovative solutions, he takes the helm in overseeing the entire software development process.',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="Team">
        <h1 className="H2">Meet Our Team</h1>
        <br></br>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {/* Map over the array of team members */}
          {teamMembers.map((member, index) => (
            <div className="col-card" key={index}>
              <div className="card">
                <img src={member.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">{member.name}</h4>
                  <h5 className="Job-Title">{member.jobTitle}</h5>
                  <p className="card-text">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
