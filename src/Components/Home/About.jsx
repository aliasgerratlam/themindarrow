import { Col, Container, Image, Row } from 'react-bootstrap';
import Line from '../../assets/images/hero-line.png';
import { Link } from 'react-router-dom';
import AboutImg from '../../assets/images/about.png';
import AboutImg2 from '../../assets/images/about3.png';
import ReactWOW from 'react-wow';

const About = () => {
  return (
    <section className="about-us-area">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <ReactWOW animation="fadeInLeft">
              <div className="about-thumb">
                <Image src={AboutImg} alt="about" />
              </div>
            </ReactWOW>
          </Col>
          <Col lg={6}>
            <div className="about-content mt-md-0 mt-4">
              <img src={Line} alt="" />
              <span>About Mindarrow</span>
              <h3 className="title">Discovering Mindarrow: Unveiling the Magic Within!</h3>
              <p className="m-0">Welcome to Mindarrow, an innovative performer and highly result oriented marketing company dedicated to boost businesses in the ever-evolving digital landscape.</p>
              <Link className="main-btn" to="/about">
                About us
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center about-section-2">
          <Col lg={6} className="order-md-1 order-2">
            <div className="about-content">
              <h3 className="title">Our Mission at Mindarrow</h3>
              <p className="m-0">At Mindarrow, our mission is to empower businesses to achieve their goals through strategic and data-driven performance marketing solutions. We believe in the power of creativity, technology, and analytics to drive measurable and impactful results.</p>
              <Link className="main-btn" to="/about">
                Read More
              </Link>
            </div>
          </Col>

          <Col lg={6} className="order-md-2 order-1 mb-md-0 mb-4">
            <ReactWOW animation="fadeInRight">
              <div className="about-thumb">
                <Image src={AboutImg2} alt="about" />
              </div>
            </ReactWOW>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
