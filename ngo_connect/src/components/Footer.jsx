import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-5 col-12 ft-1">
                        <h3><span>Secure</span>NGO</h3>
                        <p>Welcome to SecureNGO – Your trusted partner in NGO security. Explore our tailored solutions for resilient digital protection. Your mission, our priority.</p>
                        <div className="footer-icons">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-12 ft-2">
                        <h5>Quick Links</h5>
                        <ul>
                            <li className="nav-item">
                                <a className="" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="" href="/">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="" href="/">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="" href="/">About Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 ft-3">
                        <h5>Contact Info</h5>
                        <p><i class="fa-solid fa-phone-volume"></i> +92 3121324083</p>
                        <p><i class="fa-solid fa-envelope"></i> razawasif37@gmail.com</p>
                        <p><i class="fa-solid fa-paper-plane"></i> Karachi, Pakistan.</p>
                    </div>
                </div>
            </div>
        </div><div className='Last-footer'>
            <p>Design By Wasif Raza</p>
        </div>
        </>
  )
}

export default Footer