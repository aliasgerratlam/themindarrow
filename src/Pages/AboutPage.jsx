import { Col, Container, Row } from "react-bootstrap"
import PageTitle from "../ui/PageTitle";
import AboutImage from "../assets/images/about-2.jpg"

const AboutPage = () => {
    return (
        <div className="about-page">
            <PageTitle title="About us" />

            <section className="about-2-area">
                <Container>
                    <Row>
                        <Col lg={5} md={9}>
                            <div className="about-2-content mt-30">
                                <h3 className="title">We help to create</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="about-2-thumb mt-30 animated wow fadeInRight" data-wow-duration="3000ms" data-wow-delay="0ms">
                                <div className="thumb-2 ml-80">
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
        </div>
    )
}

export default AboutPage