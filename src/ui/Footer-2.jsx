import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

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
            <Col lg={7} md={5} xs={12}>
              <ReactWOW animation="fadeIn">
                <div className="footer-address text-md-start text-center">
                  <p>140 Barretts Ave New York, Holtsville, NY</p>
                  <a href="mailto:hello@themindarrow.com">hello@themindarrow.com</a>
                  <a href="tel:+61 3 9671 3953">+61 3 9671 3953</a>
                </div>
              </ReactWOW>
            </Col>
            <Col lg={3} md={3} xs={6} className="offset-lg-0 offset-md-1 offset-0 mt-md-0 mt-4">
              <ReactWOW animation="fadeIn">
                <div className="footer-list mt-30">
                  <ul>
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <Link>Terms and conditions</Link>
                    </li>
                    <li>
                      <Link>Privacy policy</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </ReactWOW>
            </Col>
            <Col lg={2} md={3} xs={6} className="mt-md-0 mt-4">
              <ReactWOW animation="fadeIn">
                <div className="footer-info mt-30">
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/mindarrowmedia/" target="_blank" rel="noreferrer">
                        <FaInstagram /> Instagram
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/the-mindarrow-media/" target="_blank" rel="noreferrer">
                        <FaLinkedin /> LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
              </ReactWOW>
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
