import { Col, Container, Image, Row } from 'react-bootstrap';
import Logo from '../assets/images/white-logo.png';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaInstagram, FaRegAddressCard, FaPhoneAlt } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

const FooterNew = () => {
  return (
    <footer className="footer-area footer-area-2">
      <Container>
        <div className="footer-item">
          <div className="footer-heading text-center">
            <h2 className="m-0">Got a Project?</h2>
            <h3 className="m-0">Let's Get to Work</h3>
          </div>

          <Row>
            <Col lg={7} md={6}>
              <div className="footer-address">
                <p>Level 7, 289 Flinders Lane Melbourne, Victoria 3000</p>
                <a href="mailto:hello@themindarrow.com">hello@themindarrow.com</a>
                <a href="tel:+61 3 9671 3953">+61 3 9671 3953</a>
              </div>
            </Col>
            <Col lg={3} md={3}>
              <div className="footer-list mt-30">
                <ul>
                  <li>
                    <Link>About us</Link>
                  </li>
                  <li>
                    <Link>Terms and conditions</Link>
                  </li>
                  <li>
                    <Link>Privacy policy</Link>
                  </li>
                  <li>
                    <Link>News</Link>
                  </li>
                  <li>
                    <Link>Contact us</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2} md={3}>
              <div className="footer-info mt-30">
                <ul>
                  <li>
                    <Link>Instagram</Link>
                  </li>
                  <li>
                    <Link>Facebook</Link>
                  </li>
                  <li>
                    <Link>Youtube</Link>
                  </li>
                  <li>
                    <Link>LinkedIn</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="footer-copyright pb-4">
          <small>Copyright @ {new Date().getFullYear()}. All rights reserved</small>
        </div>
      </Container>
    </footer>
  );
};

export default FooterNew;
