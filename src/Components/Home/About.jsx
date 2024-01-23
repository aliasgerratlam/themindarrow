import { Col, Container, Image, Row } from "react-bootstrap"
import Line from "../../assets/images/hero-line.png"
import { Link } from "react-router-dom"
import AboutImg from "../../assets/images/about.svg"

const About = () => {
    return (
        <section className="about-us-area">
            <Container>
                <Row className="align-items-center">
                    <Col lg={5}>
                        <div className="about-content">
                            <img src={Line} alt="" />
                            <span>About us</span>
                            <h3 className="title">We create mind blowing </h3>
                            <p>We are a global media agency network of 5,000 people across 20 countries united by our desire to drive good growth for our clients.</p>
                            <Link className="main-btn" to="/about">Learn More</Link>
                        </div>
                    </Col>

                    <Col lg={7}>
                        <div className="about-thumb">
                            <Image src={AboutImg} alt="about" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About