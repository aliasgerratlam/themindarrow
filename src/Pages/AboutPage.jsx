import { Col, Container, Row } from "react-bootstrap"
import PageTitle from "../ui/PageTitle";
import AboutImage from "../assets/images/about-2.jpg"
import Mockup from "../assets/images/mockup.png"
import Line from "../assets/images/hero-line.png"
import Port1 from "../assets/images/portfolio-1.png"
import Port2 from "../assets/images/portfolio-2.png"
import Port3 from "../assets/images/portfolio-3.png"
import Port4 from "../assets/images/portfolio-4.png"
import Port5 from "../assets/images/portfolio-5.png"
import Port6 from "../assets/images/portfolio-6.png"
import Port7 from "../assets/images/portfolio-7.png"
import Port8 from "../assets/images/portfolio-8.png"
import ReactWOW from "react-wow";

const AboutPage = () => {
    return (
        <div className="about-page">
            <PageTitle title="About us" />

            <section className="about-2-area">
                <Container>
                    <Row>
                        <Col lg={5} md={9}>
                            <div className="about-2-content">
                                <h3 className="title">We help to create</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="about-2-thumb animated wow fadeInRight" data-wow-duration="3000ms" data-wow-delay="0ms">
                                <div className="thumb-2 text-center">
                                    <img src={AboutImage} alt="" />
                                    <div className="box">
                                        <h3 className="title"><span>25</span>+</h3>
                                        <span> Years of Experience</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="about-2-area about-2-section pt-0">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="about-2-thumb animated wow fadeInLeft" data-wow-duration="3000ms" data-wow-delay="0ms">
                                <div className="thumb-2 text-start">
                                    <img src={Mockup} alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} md={9}>
                            <div className="about-2-content">
                                <h3 className="title">Why Choose us</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                <ReactWOW animation='fadeInDown' delay='0.2s'>
                                    <div className="item active mt-4">
                                        <h4 className="title mb-1">Experience and Expertise</h4>
                                        <p>Sitting proudly atop is the two-storey penthouse. The  and opens breathtaking plunge.</p>
                                    </div>
                                </ReactWOW>

                                <ReactWOW animation='fadeInDown' delay='0.4s'>
                                    <div className="item active mt-4">
                                        <h4 className="title mb-1">Customized Solutions</h4>
                                        <p>Sitting proudly atop is the two-storey penthouse. The  and opens breathtaking plunge.</p>
                                    </div>
                                </ReactWOW>
                                <ReactWOW animation='fadeInDown' delay='0.6s'>
                                    <div className="item active mt-4">
                                        <h4 className="title mb-1">Trust and Reliability</h4>
                                        <p>Sitting proudly atop is the two-storey penthouse. The  and opens breathtaking plunge.</p>
                                    </div>
                                </ReactWOW>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>

            <div id="portfolio-scroll" className="portfolio-style-1-area pt-70">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6} md={9}>
                            <div className="section-title text-center">
                                <img src={Line} alt="" />
                                <h3 className="title">Our Project</h3>
                                <p>Our focus is on delivering you the absolute best support guiding you through training and providing.</p>
                            </div>
                        </Col>
                    </Row>
                    <div className="portfolio-wrapper">

                        <ReactWOW animation='fadeInUp' delay='0.2s'>
                            <div className="project-5-item">
                                <img src={Port1} alt="" />
                                <div className="project-overlay">
                                    <h3 className="title">Digital Product Design</h3>
                                    <span>Artist, Illustration</span>
                                </div>
                            </div>
                        </ReactWOW>
                        <ReactWOW animation='fadeInUp' delay='0.4s'>
                            <div className="project-5-item">
                                <img src={Port2} alt="" />
                                <div className="project-overlay">
                                    <h3 className="title">Digital Product</h3>
                                    <span>Artist, Illustration</span>
                                </div>
                            </div>
                        </ReactWOW>
                        <ReactWOW animation='fadeInUp' delay='0.6s'>
                            <div className="project-5-item">
                                <img src={Port3} alt="" />
                                <div className="project-overlay">
                                    <h3 className="title">Digital Product </h3>
                                    <span>Artist, Illustration</span>
                                </div>
                            </div>
                        </ReactWOW>
                        <ReactWOW animation='fadeInUp' delay='0.8s'>
                            <div className="project-5-item">
                                <img src={Port4} alt="" />
                                <div className="project-overlay">
                                    <h3 className="title">Digital Product </h3>
                                    <span>Artist, Illustration</span>
                                </div>
                            </div>
                        </ReactWOW>
                        <ReactWOW animation='fadeInUp' delay='1s'>
                            <div className="project-5-item">
                                <img src={Port5} alt="" />
                                <div className="project-overlay">
                                    <h3 className="title">Digital Product Design</h3>
                                    <span>Artist, Illustration</span>
                                </div>
                            </div>
                        </ReactWOW>
                        <ReactWOW animation='fadeInUp' delay='1.2s'>
                            <div className="project-5-item">
                                <img src={Port6} alt="" />
                                <div className="project-overlay">
                                    <h3 className="title">Digital Product</h3>
                                    <span>Artist, Illustration</span>
                                </div>
                            </div>
                        </ReactWOW>

                        <ReactWOW animation='fadeInUp' delay='1.4s'>
                            <div className="project-5-item">
                                <img src={Port7} alt="" />
                                <div className="project-overlay">
                                    <h3 className="title">Digital Product </h3>
                                    <span>Artist, Illustration</span>
                                </div>
                            </div>
                        </ReactWOW>
                        <ReactWOW animation='fadeInUp' delay='1.6s'>
                            <div className="project-5-item">
                                <img src={Port8} alt="" />
                                <div className="project-overlay">
                                    <h3 className="title">Digital Product Design</h3>
                                    <span>Artist, Illustration</span>
                                </div>
                            </div>
                        </ReactWOW>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default AboutPage