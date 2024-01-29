import { Col, Container, Form, Row } from 'react-bootstrap';
import PageTitle from '../ui/PageTitle';
import ReactWOW from 'react-wow';
import Pin from '../assets/images/location.png';
import Mail from '../assets/images/mail.png';
import Phone from '../assets/images/phone.png';
import { useEffect } from 'react';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-us-page">
      <PageTitle title="Contact us" />

      <Container className="contact-us-area">
        <Row>
          <Col lg={4} md={6}>
            <ReactWOW animation="fadeInUp" delay="0.2s">
              <div className="sub-2-item text-center">
                <img src={Pin} alt="Pin" />
                <h4 className="title">Reach us</h4>
                <p>70 Washington Square South, New York, NY 10012, United States</p>
              </div>
            </ReactWOW>
          </Col>
          <Col lg={4} md={6}>
            <ReactWOW animation="fadeInUp" delay="0.4s">
              <div className="sub-2-item text-center">
                <img src={Mail} alt="Mail" />
                <h4 className="title">Email us</h4>
                <p>
                  <a href="mailto:johndoe@gmail.com">johndoe@gmail.com</a>
                </p>
              </div>
            </ReactWOW>
          </Col>
          <Col lg={4} md={6}>
            <ReactWOW animation="fadeInUp" delay="0.6s">
              <div className="sub-2-item text-center">
                <img src={Phone} alt="Phone" />
                <h4 className="title">Call us</h4>
                <p>
                  <a href="tel:+91876543210">+91876543210</a>
                </p>
              </div>
            </ReactWOW>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="contact-us-box">
              <h3 className="title text-center display-5">Get in Touch</h3>
              <p className="text-center">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours.</p>
              <Form>
                <Row className="no-gutters">
                  <Col md={6}>
                    <div className="input-box mt-10">
                      <input type="text" placeholder="First Name" />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="input-box mt-10">
                      <input type="text" placeholder="Last Name" />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="input-box mt-10">
                      <input type="email" placeholder="Email address" />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="input-box mt-10">
                      <input type="text" placeholder="Phone number" />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="input-box mt-10">
                      <textarea name="#" id="#" cols="30" rows="10" placeholder="Message"></textarea>
                    </div>

                    <div className="input-box mt-4">
                      <button className="main-btn " type="submit">
                        Submit
                      </button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28581.96266852134!2d-74.00995716943102!3d40.72567301613608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599051e43f09%3A0x73708ab233ccf977!2sBobst%20Library%2C%2070%20Washington%20Square%20S%2C%20New%20York%2C%20NY%2010012%2C%20USA!5e0!3m2!1sen!2sin!4v1706355286677!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
