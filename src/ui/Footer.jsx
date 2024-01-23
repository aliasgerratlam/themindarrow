import { Col, Container, Image, Row } from "react-bootstrap"
import Logo from "../assets/images/white-logo.png"
import { Link } from "react-router-dom"
import { FaLinkedinIn, FaInstagram, FaRegAddressCard, FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";


const Footer = () => {
   return (
      <footer className="footer-area">
         <Container>
            <div className="footer-item">
               <Row>
                  <Col lg={6} md={6}>
                     <Row>
                        <Col md={10} className="footer-top">
                           <div className="footer-about mt-30">
                              <div className="footer-logo mb-3">
                                 <Link to="/"><Image className="logo" src={Logo} alt="logo" /></Link>
                              </div>
                              <p>Innovative media agency specializing in digital marketing and creative content. Elevate your brand with strategic campaigns that captivate audiences and drive results.</p>
                           </div>
                           <div className="footer-social">
                              <ul>
                                 <li><a href="https://www.linkedin.com/company/the-mindarrow-media/?viewAsMember=true" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li>
                                 <li><a href="#" target="_blank"><FaInstagram /></a></li>
                              </ul>
                           </div>
                        </Col>
                     </Row>
                  </Col>
                  <Col lg={2} md={6}>
                     <div className="footer-list mt-30">
                        <h4 className="title">Quick links</h4>
                        <ul>
                           <li><Link>About us</Link></li>
                           <li><Link>Terms and conditions</Link></li>
                           <li><Link>Privacy policy</Link></li>
                           <li><Link>News</Link></li>
                           <li><Link>Contact us</Link></li>
                        </ul>
                     </div>
                  </Col>
                  <Col lg={4} md={6}>
                     <div className="footer-info mt-30">
                        <h3 className="title">Get in touch</h3>
                        <ul>
                           <li><FaRegAddressCard /> 445 Main Street, New York CA-12325, USA </li>
                           <li><FaPhoneAlt /> <a href="tel:+00 125 456 888" className="text-white">+00 125 456 888</a> </li>
                           <li><IoMailOutline /> <a href="mailto:contact@gmail.com" className="text-white">contact@gmail.com</a> </li>
                        </ul>
                     </div>
                  </Col>
               </Row>
            </div>
            <div className="footer-copyright pb-4">
               <small>Copyright @ {new Date().getFullYear()}. All rights reserved</small>
            </div>
         </Container>
      </footer >
   )
}

export default Footer