import { Col, Container, Image, Row } from 'react-bootstrap'
import Line from '../../assets/images/hero-line.png';
import Foremost from "../../assets/images/feature/foremost.png"
import Expertise from "../../assets/images/feature/expertise.png"
import DataAnalysis from "../../assets/images/feature/data-analysis.png"
import Innovation from "../../assets/images/feature/idea.png"
import Fraud from "../../assets/images/feature/fraud.png"
import Email from "../../assets/images/feature/email-marketing.png"

const Feature = () => {
  return (
    <section className="sub-2-area feature-section pt-0">
        <Container>
            <div className="sub-box">
                <Row className="justify-content-center mb-5">
                    <Col lg={6} md={9}>
                        <div className="section-title text-center">
                        <Image src={Line} alt="line" />
                        <h3 className="title">Our Standout Features</h3>
                        <p>Following are the departments where we make a difference.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={6}>
                        <div className="sub-2-item mb-5">
                            <img src={Foremost} alt="" />
                            <h4 className="title">1st & Foremost</h4>
                            <p>It is all about Reading, Understanding and Delivering the desired advantage and edge to your brand by brainstorming its requisites, backed by AI powered Media.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="sub-2-item mb-5">
                            <img src={Expertise} alt="" />
                            <h4 className="title">Expertise</h4>
                            <p>Mindarrow has a plethora of seasoned and highly experienced marketing professionals in the performance marketing domain. From search engine optimization (SEO) to pay-per-click (PPC) advertising, our expertise gives us an edge in navigating the complexities of the digital marketing ecosystem.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="sub-2-item item-3 mb-5">
                            <img src={DataAnalysis} alt="" />
                            <h4 className="title">Data-Driven Approach</h4>
                            <p>We at Mindarrow emphasize on the power of data to inform and optimize marketing strategies. This approach warrants that every decision is backed by insightful analytics, powering us to refine and enhance our campaigns for maximum performance on a regular basis.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="sub-2-item item-3 mb-5">
                            <img src={Innovation} alt="" />
                            <h4 className="title">Innovation</h4>
                            <p>In the fast-paced world of digital marketing, innovation is the most important tool to stay afloat. We at Minarrow pride ourselves on staying at the forefront of industry trends, adopting cutting-edge technologies, and carving creative solutions to empower our clients with a competitive edge.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="sub-2-item item-3 mb-5">
                            <img src={Fraud} alt="" />
                            <h4 className="title">In-House Fraud Tool</h4>
                            <p>One of our key differentiators that make us stand tall is our proprietary in-house fraud detection tool. In this challenging era of digital advertising, where fraudulent activities and invalid traffic are popping every now and then, our robust tool ascertains your marketing budget is invested in genuine and valuable interactions. </p>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="sub-2-item item-3 mb-5">
                            <img src={Email} alt="" />
                            <h4 className="title">Email Marketing Gears</h4>
                            <p>Email marketing remains a powerful tool for engaging audiences, and at Mindarrow, we've taken it a step further. Our inbuilt email marketing gears are finely tuned to deliver personalized and impactful campaigns. From crafting compelling content to optimizing delivery times, our email marketing gears are geared towards maximizing your outreach and driving conversions.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </section>
  )
}

export default Feature