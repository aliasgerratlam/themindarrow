import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import PageTitle from '../ui/PageTitle';
import Collab from '../assets/images/discovery.png';
import Innovate from '../assets/images/innovate.png';
import Success from '../assets/images/success.png';
import WorkLife from '../assets/images/work-life.png';
import ReactWOW from 'react-wow';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="career-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Join us now - Themindarrow</title>
        <meta
          name="description"
          content="Explore exciting opportunities at Themindarrow Digital Marketing! Join our dynamic team of digital enthusiasts, where innovation meets creativity. Discover a fulfilling career path in a collaborative environment that values growth, excellence, and the pursuit of cutting-edge marketing strategies. Take the next step in your professional journey with us."
        ></meta>
        <meta name="keywords" content="Digital Marketing Careers, Marketing Job Opportunities, SEO Specialist Positions"></meta>
      </Helmet>

      <PageTitle title="Career" />
      <Container>
        <div className="career-info">
          <Row>
            <Col lg={6}>
              <Row className="service-item-wrapper">
                <Col md={6} xs={6}>
                  <ReactWOW animation="fadeInUp" delay="0.2s">
                    <div className="service-item">
                      <div className="icon">
                        <Image src={Collab} alt="" />
                      </div>
                      <h3 className="title">Discover Your Potential</h3>
                      <p>Unlock growth with inclusive learning, mentorship, and career advancement opportunities.</p>
                    </div>
                  </ReactWOW>
                </Col>
                <Col md={6} xs={6}>
                  <ReactWOW animation="fadeInUp" delay="0.4s">
                    <div className="service-item">
                      <div className="icon">
                        <Image src={Innovate} alt="" />
                      </div>
                      <h3 className="title">Innovate with Impact</h3>
                      <p>Embrace change, contribute to projects, and make a real impact.</p>
                    </div>
                  </ReactWOW>
                </Col>
                <Col md={6} xs={6}>
                  <ReactWOW animation="fadeInUp" delay="0.6s">
                    <div className="service-item">
                      <div className="icon">
                        <Image src={Success} alt="" />
                      </div>
                      <h3 className="title">Collaborate for Success</h3>
                      <p>Team success through inclusive collaboration, valuing every voice and contribution.</p>
                    </div>
                  </ReactWOW>
                </Col>
                <Col md={6} xs={6}>
                  <ReactWOW animation="fadeInUp" delay="0.8s">
                    <div className="service-item">
                      <div className="icon">
                        <Image src={WorkLife} alt="" />
                      </div>
                      <h3 className="title">Work-Life Integration</h3>
                      <p>Balance life with a flexible, supportive work environment for well-being.</p>
                    </div>
                  </ReactWOW>
                </Col>
              </Row>
            </Col>

            <Col className="ps-md-5 pd-3 text-md-start text-center pt-md-0 pt-4" lg={6}>
              <h2 className="mb-3 display-5">
                Your life at <span>MindArrow</span>
              </h2>
              <p>When you choose Mindarrow, you're not just choosing a job – you're choosing a community that feels like family. Our culture is built on respect, trust, and a shared commitment to excellence. As a Mindarrow team member, you'll be surrounded by passionate and talented individuals who are dedicated to making a positive impact on the world.</p>
              <p>Your life at Mindarrow is more than just a career – it's a journey of personal and professional growth, innovation, and collaboration. Join us and be part of a team that is shaping the future and creating a workplace where you can thrive. Explore our current opportunities and start your exciting journey with Mindarrow today.</p>
            </Col>
          </Row>
        </div>

        <div className="heading-1 text-center">
          <h1 className="mb-2 display-4">
            Join our team at <span>MindArrow</span>
          </h1>
          <p>Are you ready to embark on a journey where your ideas take flight, creativity knows no bounds, and innovation is the language we speak? Look no further than TheMindArrow – a dynamic team of visionaries, creators, and problem solvers dedicated to shaping the future!</p>
        </div>

        <div className="form-wrapper">
          <div className="contact-us-box contact-us-area pt-4">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col lg={9} className="offset-md-2">
                  <ReactWOW animation="fadeIn">
                    <Row>
                      <Col md={6} className="p-0">
                        <div className="input-box">
                          <input
                            type="text"
                            placeholder="First Name"
                            {...register('firstname', {
                              required: 'This field is required',
                            })}
                          />
                          {errors?.firstname?.message && <p className="invalid-feedback d-block mb-0">{errors?.firstname?.message}</p>}
                        </div>
                      </Col>
                      <Col md={6} className="p-0">
                        <div className="input-box">
                          <input
                            type="text"
                            placeholder="Last Name"
                            {...register('lastname', {
                              required: 'This field is required',
                            })}
                          />
                          {errors?.lastname?.message && <p className="invalid-feedback d-block mb-0">{errors?.lastname?.message}</p>}
                        </div>
                      </Col>
                      <Col md={6} className="p-0">
                        <div className="input-box">
                          <input
                            type="email"
                            placeholder="Email address"
                            {...register('email', {
                              required: 'This field is required',
                              validate: (value) => {
                                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                return re.test(String(value).toLowerCase()) || 'Please enter a valid email address';
                              },
                            })}
                          />
                          {errors?.email?.message && <p className="invalid-feedback d-block mb-0">{errors?.email?.message}</p>}
                        </div>
                      </Col>
                      <Col md={6} className="p-0">
                        <div className="input-box">
                          <input
                            type="text"
                            placeholder="Phone number"
                            {...register('phone', {
                              required: 'This field is required',
                              validate: (value) => {
                                const re = /^[0-9\b]+$/;
                                return re.test(value) || 'Please enter a valid phone number';
                              },
                            })}
                          />
                          {errors?.phone?.message && <p className="invalid-feedback d-block mb-0">{errors?.phone?.message}</p>}
                        </div>
                      </Col>
                      <Col md={6} className="p-0">
                        <div className="input-box">
                          <Form.Select
                            aria-label="Default select example"
                            {...register('location', {
                              required: 'Please select location',
                            })}
                          >
                            <option value="">Location</option>
                            <option value="1">United State</option>
                            <option value="2">United Kingdom</option>
                            <option value="3">Singapur</option>
                            <option value="4">India</option>
                            <option value="5">Dubai</option>
                          </Form.Select>
                          {errors?.location?.message && <p className="invalid-feedback d-block mb-0">{errors?.location?.message}</p>}
                        </div>
                      </Col>
                      <Col md={6} className="p-0">
                        <div className="input-box">
                          <Form.Select
                            aria-label="Default select example"
                            {...register('profession', {
                              required: 'Please select your profession',
                            })}
                          >
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
                          {errors?.profession?.message && <p className="invalid-feedback d-block mb-0">{errors?.profession?.message}</p>}
                        </div>
                      </Col>
                      <Col md={12} className="p-0">
                        <div className="input-box mt-4">
                          <button className="main-btn " type="submit">
                            Submit
                          </button>
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
  );
};

export default Career;
