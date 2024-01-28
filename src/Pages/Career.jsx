import { Col, Container, Form, Image, Row } from 'react-bootstrap'
import PageTitle from '../ui/PageTitle'
import { FaArrowRightLong } from "react-icons/fa6";
import Collab from "../assets/images/discovery.png"
import Innovate from "../assets/images/innovate.png"
import Success from "../assets/images/success.png"
import WorkLife from "../assets/images/work-life.png"
import ReactWOW from 'react-wow';

const Career = () => {
    return (
        <div className='career-page'>
            <PageTitle title="Career" />
            <Container>
                <div className='career-info'>
                    <Row>
                        <Col>
                            <Row className='service-item-wrapper'>
                                <Col md={6}>
                                    <ReactWOW animation='fadeInUp' delay='0.2s'>
                                        <div className="service-item">
                                            <div className="icon">
                                                <Image src={Collab} alt='' />
                                            </div>
                                            <h3 className="title">Discover Your Potential</h3>
                                            <p>Unlock growth with inclusive learning, mentorship, and career advancement opportunities.</p>
                                        </div>
                                    </ReactWOW>
                                </Col>
                                <Col md={6}>
                                    <ReactWOW animation='fadeInUp' delay='0.4s'>
                                        <div className="service-item">
                                            <div className="icon">
                                                <Image src={Innovate} alt='' />
                                            </div>
                                            <h3 className="title">Innovate with Impact</h3>
                                            <p>Embrace change, contribute to projects, and make a real impact.</p>
                                        </div>
                                    </ReactWOW>
                                </Col>
                                <Col md={6}>
                                    <ReactWOW animation='fadeInUp' delay='0.6s'>
                                        <div className="service-item">
                                            <div className="icon">
                                                <Image src={Success} alt='' />
                                            </div>
                                            <h3 className="title">Collaborate for Success</h3>
                                            <p>Team success through inclusive collaboration, valuing every voice and contribution.</p>
                                        </div>
                                    </ReactWOW>
                                </Col>
                                <Col md={6}>
                                    <ReactWOW animation='fadeInUp' delay='0.8s'>
                                        <div className="service-item">
                                            <div className="icon">
                                                <Image src={WorkLife} alt='' />
                                            </div>
                                            <h3 className="title">Work-Life Integration</h3>
                                            <p>Balance life with a flexible, supportive work environment for well-being.</p>
                                        </div>
                                    </ReactWOW>
                                </Col>
                            </Row>
                        </Col>

                        <Col className='ps-5'>
                            <h2 className='mb-3 display-5'>Your life at <span>MindArrow</span></h2>
                            <p>When you choose Mindarrow, you're not just choosing a job – you're choosing a community that feels like family. Our culture is built on respect, trust, and a shared commitment to excellence. As a Mindarrow team member, you'll be surrounded by passionate and talented individuals who are dedicated to making a positive impact on the world.</p>
                            <p>Your life at Mindarrow is more than just a career – it's a journey of personal and professional growth, innovation, and collaboration. Join us and be part of a team that is shaping the future and creating a workplace where you can thrive. Explore our current opportunities and start your exciting journey with Mindarrow today.</p>
                        </Col>
                    </Row>
                </div>

                <div className='heading-1 text-center'>
                    <h1 className='mb-2 display-4'>Join our team at <span>MindArrow</span></h1>
                    <p>Are you ready to embark on a journey where your ideas take flight, creativity knows no bounds, and innovation is the language we speak? Look no further than TheMindArrow – a dynamic team of visionaries, creators, and problem solvers dedicated to shaping the future!</p>
                </div>

                <div className='form-wrapper'>
                    <div className="contact-us-box contact-us-area pt-4">
                        <Form>
                            <Row>
                                <Col lg={9} className='offset-md-2'>
                                    <ReactWOW animation='fadeIn'>
                                        <Row>
                                            <Col md={6} className='p-0'>
                                                <div className="input-box">
                                                    <input type="text" placeholder="First Name" />
                                                </div>
                                            </Col>
                                            <Col md={6} className='p-0'>
                                                <div className="input-box">
                                                    <input type="text" placeholder="Last Name" />
                                                </div>
                                            </Col>
                                            <Col md={6} className='p-0'>
                                                <div className="input-box">
                                                    <input type="email" placeholder="Email address" />
                                                </div>
                                            </Col>
                                            <Col md={6} className='p-0'>
                                                <div className="input-box">
                                                    <input type="text" placeholder="Phone number" />
                                                </div>
                                            </Col>
                                            <Col md={6} className='p-0'>
                                                <div className="input-box">
                                                    <Form.Select aria-label="Default select example">
                                                        <option>Location</option>
                                                        <option value="1">United State</option>
                                                        <option value="2">United Kingdom</option>
                                                        <option value="3">Singapur</option>
                                                        <option value="4">India</option>
                                                        <option value="5">Dubai</option>
                                                    </Form.Select>
                                                </div>
                                            </Col>
                                            <Col md={6} className='p-0'>
                                                <div className="input-box">
                                                    <Form.Select aria-label="Default select example">
                                                        <option value="">Select...</option>
                                                        <option value="Finance">Finance</option>
                                                        <option value="Office Support">Office Support</option>
                                                        <option value="New Business Marketing">New Business Marketing</option>
                                                        <option value="Content Partnerships">Content Partnerships</option>
                                                        <option value="Trading Investment">Trading Investment</option>
                                                        <option value="Account Management Leadership">Account Management Leadership</option>
                                                        <option value="Technology Consulting Development">Technology Consulting Development</option>
                                                        <option value="Strategy Planning">Strategy Planning</option>
                                                        <option value="Culture / Insights / Data Analytics">Culture / Insights / Data Analytics</option>
                                                        <option value="Performance Marketing">Performance Marketing</option>
                                                    </Form.Select>
                                                </div>
                                            </Col>
                                            <Col md={12} className='p-0'>
                                                <div className="input-box mt-4">
                                                    <button className="main-btn " type="submit">Submit</button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </ReactWOW>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Career