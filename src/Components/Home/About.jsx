import { Col, Container, Image, Row } from 'react-bootstrap';
import Line from '../../assets/images/hero-line.png';
import { Link } from 'react-router-dom';
import AboutImg from '../../assets/images/about2.png';
import AboutImg2 from '../../assets/images/about3.png';
import { BsGraphUp } from 'react-icons/bs';
import { AiOutlineNotification } from 'react-icons/ai';

const About = () => {
  return (
    <section className="about-us-area">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="about-thumb">
              <Image src={AboutImg} alt="about" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-content">
              <img src={Line} alt="" />
              <span>About us</span>
              <h3 className="title">We create mind blowing </h3>
              <p className="m-0">
                We are a global media agency network of 5,000 people across 20 countries united by our desire to drive good growth for our clients. Our diverse team combines expertise in media strategy, creative solutions, and innovative technology to deliver impactful campaigns. Together, we cultivate meaningful connections, surpassing client expectations and fostering sustainable success.
              </p>
              <Link className="main-btn" to="/about">
                About us
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center about-section-2">
          <Col lg={6}>
            <div className="about-content">
              <h3 className="title">It's all about the people, and process</h3>
              <p className="m-0">In the realm of a digital agency, success hinges on two pivotal elements: people and process. A talented and collaborative team, coupled with streamlined and effective processes, forms the bedrock for delivering exceptional digital solutions and driving client success.</p>
              <Row className="mt-4">
                <Col>
                  <div className="small-info">
                    <BsGraphUp />
                    <h4 className="mt-3">Grow Business</h4>
                    <p>We help you social media grow your business</p>
                  </div>
                </Col>

                <Col>
                  <div className="small-info">
                    <AiOutlineNotification />
                    <h4 className="mt-3">Media Marketing</h4>
                    <p>We help you social media grow your business</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg={6}>
            <div className="about-thumb">
              <Image src={AboutImg2} alt="about" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
