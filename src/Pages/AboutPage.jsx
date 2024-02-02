import { Accordion, Col, Container, Row } from 'react-bootstrap';
import PageTitle from '../ui/PageTitle';
import AboutImage from '../assets/images/about-2.jpg';
import Mockup from '../assets/images/mockup.png';
import Line from '../assets/images/hero-line.png';
import Port1 from '../assets/images/portfolio-1.png';
import Port2 from '../assets/images/portfolio-2.png';
import Port3 from '../assets/images/portfolio-3.png';
import Port4 from '../assets/images/portfolio-4.png';
import Port5 from '../assets/images/portfolio-5.png';
import Port6 from '../assets/images/portfolio-6.png';
import Port7 from '../assets/images/portfolio-7.png';
import Port8 from '../assets/images/portfolio-8.png';
import ReactWOW from 'react-wow';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About us - Themindarrow</title>
        <meta name="description" content="Discover the driving force behind Themindarrow Digital Marketing in our About Us page. Uncover our passion for innovative strategies, client success stories, and the dedicated team propelling your brand to new heights. Explore the intersection of creativity and technology as we navigate the ever-evolving landscape of digital marketing together."></meta>
        <meta name="keywords" content="Digital Marketing Visionaries, Innovative Marketing Team, Strategic Solutions Expertise"></meta>
      </Helmet>

      <PageTitle title="About us" />

      <section className="about-2-area">
        <Container>
          <Row className="align-items-center">
            <Col md={5} className="order-md-1 order-2">
              <div className="about-2-content">
                <h3 className="title">Top Affiliate Industry Summits</h3>
                <p>It is one of the highly valued and well-known events in the affiliate marketing domain, with global and regional presence. This summit covers a wide range of topics related to affiliate marketing.</p>

                <Accordion defaultActiveKey="0">
                  <ReactWOW animation="fadeInDown" delay="0.4s">
                    <Accordion.Item eventKey="0" className="item mb-2">
                      <Accordion.Header>
                        <h4 className="title">B2B Marketing Exchange (B2BMX)</h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>While it is not exclusively focused on lead generation, B2BMX covers various aspects of B2B marketing, including lead generation strategies and tactics.</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </ReactWOW>
                  <ReactWOW animation="fadeInDown" delay="0.5s">
                    <Accordion.Item eventKey="1" className="item mb-2">
                      <Accordion.Header>
                        <h4 className="title">AW Summit (Affiliate World Summit)</h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>This is a global conference that brings along top affiliate marketers and industry professionals on a single platform. It focuses on the latest trends, strategies, and technologies in the affiliate marketing space.</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </ReactWOW>
                  <ReactWOW animation="fadeInDown" delay="0.6s">
                    <Accordion.Item eventKey="2" className="item mb-2">
                      <Accordion.Header>
                        <h4 className="title">ASEURO (Affiliate Summit Europe)</h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>It is a European edition of the Affiliate Summit, offering networking opportunities and educational sessions for affiliate marketers.</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </ReactWOW>
                  <ReactWOW animation="fadeInDown" delay="0.7s">
                    <Accordion.Item eventKey="3" className="item">
                      <Accordion.Header>
                        <h4 className="title">Performance Marketing Insights (PMI)</h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>A series of global events focusing on performance marketing, covering topics such as affiliate marketing, lead generation, and digital advertising.</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </ReactWOW>
                </Accordion>
              </div>
            </Col>
            <Col md={7} className="order-md-2 order-1">
              <ReactWOW duration="3000ms" animation="fadeInRight">
                <div className="about-2-thumb">
                  <div className="thumb-2 text-center">
                    <img src={AboutImage} alt="" />
                    <div className="box">
                      <h3 className="title">
                        <span>25</span>+
                      </h3>
                      <span> Years of Experience</span>
                    </div>
                  </div>
                </div>
              </ReactWOW>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-2-area about-2-section pt-0">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} md={6}>
              <div className="about-2-thumb animated wow fadeInLeft" data-wow-duration="3000ms" data-wow-delay="0ms">
                <div className="thumb-2 text-start">
                  <img src={Mockup} alt="" />
                </div>
              </div>
            </Col>
            <Col lg={5} md={6}>
              <div className="about-2-content">
                <h3 className="title">Top Lead Generation Summits</h3>
                <Accordion defaultActiveKey="4">
                  <ReactWOW animation="fadeInDown" delay="0.8s">
                    <Accordion.Item eventKey="4" className="item mb-2">
                      <Accordion.Header>
                        <h4 className="title">LeadsCon</h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>It is a premier event instrumental for lead generation professionals, providing insights into the latest trends, strategies, and technologies in the lead generation industry.</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </ReactWOW>
                  <ReactWOW animation="fadeInDown" delay="1s">
                    <Accordion.Item eventKey="6" className="item mb-2">
                      <Accordion.Header>
                        <h4 className="title">Digital Summit</h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>These events cover a broad spectrum of digital marketing topics, including lead generation, and are held in various locations across the United States.</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </ReactWOW>
                  <ReactWOW animation="fadeInDown" delay="1.2s">
                    <Accordion.Item eventKey="7" className="item">
                      <Accordion.Header>
                        <h4 className="title">Content Marketing World</h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>While primarily focused on content marketing, this event often explores lead generation strategies within the context of content creation and distribution.</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </ReactWOW>
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div id="portfolio-scroll" className="portfolio-style-1-area pt-70">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6} md={8}>
              <div className="section-title text-center">
                <img src={Line} alt="" />
                <h3 className="title">Our Project</h3>
                <p>Our focus is on delivering you the absolute best support guiding you through training and providing.</p>
              </div>
            </Col>
          </Row>
          <div className="portfolio-wrapper">
            <ReactWOW animation="fadeInUp" delay="0.2s">
              <div className="project-5-item">
                <img src={Port1} alt="" />
                <div className="project-overlay">
                  <h3 className="title">Digital Product Design</h3>
                  <span>Artist, Illustration</span>
                </div>
              </div>
            </ReactWOW>
            <ReactWOW animation="fadeInUp" delay="0.4s">
              <div className="project-5-item">
                <img src={Port2} alt="" />
                <div className="project-overlay">
                  <h3 className="title">Digital Product</h3>
                  <span>Artist, Illustration</span>
                </div>
              </div>
            </ReactWOW>
            <ReactWOW animation="fadeInUp" delay="0.6s">
              <div className="project-5-item">
                <img src={Port3} alt="" />
                <div className="project-overlay">
                  <h3 className="title">Digital Product </h3>
                  <span>Artist, Illustration</span>
                </div>
              </div>
            </ReactWOW>
            <ReactWOW animation="fadeInUp" delay="0.8s">
              <div className="project-5-item">
                <img src={Port4} alt="" />
                <div className="project-overlay">
                  <h3 className="title">Digital Product </h3>
                  <span>Artist, Illustration</span>
                </div>
              </div>
            </ReactWOW>
            <ReactWOW animation="fadeInUp" delay="1s">
              <div className="project-5-item">
                <img src={Port5} alt="" />
                <div className="project-overlay">
                  <h3 className="title">Digital Product Design</h3>
                  <span>Artist, Illustration</span>
                </div>
              </div>
            </ReactWOW>
            <ReactWOW animation="fadeInUp" delay="1.2s">
              <div className="project-5-item">
                <img src={Port6} alt="" />
                <div className="project-overlay">
                  <h3 className="title">Digital Product</h3>
                  <span>Artist, Illustration</span>
                </div>
              </div>
            </ReactWOW>

            <ReactWOW animation="fadeInUp" delay="1.4s">
              <div className="project-5-item">
                <img src={Port7} alt="" />
                <div className="project-overlay">
                  <h3 className="title">Digital Product </h3>
                  <span>Artist, Illustration</span>
                </div>
              </div>
            </ReactWOW>
            <ReactWOW animation="fadeInUp" delay="1.6s">
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
  );
};

export default AboutPage;
