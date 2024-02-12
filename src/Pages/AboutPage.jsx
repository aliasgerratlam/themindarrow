import { Accordion, Col, Container, Image, Row } from 'react-bootstrap';
import PageTitle from '../ui/PageTitle';
import AboutImage from '../assets/images/about-2.jpg';
import Line from '../assets/images/hero-line.png';

import Arsenal from '../assets/images/feat/arsenal.png';
import Adv from '../assets/images/feat/adv.png';
import Offer from '../assets/images/feat/offer.png';
import Payment from '../assets/images/feat/payment.png';
import Account from '../assets/images/feat/accountant.png';
import Vertical from '../assets/images/feat/vertical.png';

import Image1 from "../assets/images/global/b2b.jpg"
import Image2 from "../assets/images/global/affiliate-world.jpg"
import Image3 from "../assets/images/global/ASEURo.jpg"
import Image4 from "../assets/images/global/performace.webp"

import One from "../assets/images/global/LeadsCon.webp"
import Two from "../assets/images/global/tech-event.webp"
import Three from "../assets/images/global/content-market.jpg"

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

      <div className="feature-page pt-5">
        <div className="section-1">
          <Container>
            {/* <Row className="align-items-center feature-section-1">
              <Col md={6}>
                <div className="about-content mt-md-0 mt-4">
                  <img src={Line} alt="" />
                  <span>OUR GAME PLAN</span>
                  <h3 className="title">Build Your Brand Story</h3>
                  <p className="m-0">Mindarrow creates strong narratives to market and build your brand with the target audience. Our data-centric and transactional information approach aid in driving your business objectives and help you attain huge success across all digital properties.</p>
                </div>
              </Col>

              <Col lg={6}>
                <Row className="service-item-wrapper">
                  <Col md={6} xs={6}>
                    <ReactWOW animation="fadeInUp" delay="0.2s">
                      <div className="service-item">
                        <div className="icon">
                          <Image src={Audit} alt="" />
                        </div>
                        <h3 className="title">Audit</h3>
                        <p>It’s in our genes to get to the root every detail of your unique brand and business, thereafter pin-point the possible strengths and eliminate weaknesses to move forward with confidence.</p>
                      </div>
                    </ReactWOW>
                  </Col>
                  <Col md={6} xs={6}>
                    <ReactWOW animation="fadeInUp" delay="0.4s">
                      <div className="service-item">
                        <div className="icon">
                          <Image src={Brain} alt="" />
                        </div>
                        <h3 className="title">Brainstorming</h3>
                        <p>In step two our team of experts comprising of the best brains in the industry customize a plan to work well for your brand, define benchmarks and create a smooth workflow towards success building.</p>
                      </div>
                    </ReactWOW>
                  </Col>
                  <Col md={6} xs={6}>
                    <ReactWOW animation="fadeInUp" delay="0.6s">
                      <div className="service-item">
                        <div className="icon">
                          <Image src={Execution} alt="" />
                        </div>
                        <h3 className="title">Execution</h3>
                        <p>After discussing with you, our plan gets into the action mode, taking the time to measure and adjust it as needed for a maximum ROI.</p>
                      </div>
                    </ReactWOW>
                  </Col>
                  <Col md={6} xs={6}>
                    <ReactWOW animation="fadeInUp" delay="0.8s">
                      <div className="service-item">
                        <div className="icon">
                          <Image src={Analyze} alt="" />
                        </div>
                        <h3 className="title">Analyze</h3>
                        <p>The results thus obtained are monitored. Then relevant actions are taken for your continued success across all marketing efforts.</p>
                      </div>
                    </ReactWOW>
                  </Col>
                </Row>
              </Col>
            </Row> */}

            <Row className="align-items-center feature-section-2">
              <Col md={6}>
                <ReactWOW animation="fadeInLeft">
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

              <Col md={6}>
                <div className="about-content mt-md-0 mt-4">
                  <img src={Line} alt="" />
                  <span>TIME FOR A CHANGE</span>
                  <h3 className="title">Transform your brand with Mindarrow Media</h3>
                  <p className="m-0">With Mindarrow at the helm of lead generation, our unrivaled expertise in delivering top-tier leads through sophisticated targeting methodologies is sure to take your brand to level next. Every lead generated is primed for conversion into valuable customers. Having offered proven solutions tailored for both Lenders and Affiliates, MindArrow Media emerges as the distinguished choice for those seeking quality and conversion.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>


      <div className="global-presence-page">
        <section className="sub-2-area feature-section">
            <Container>
                <div className="sub-box">
                    <Row className="justify-content-center">
                        <Col lg={10} md={10}>
                            <div className="section-title text-center">
                                <Image src={Line} alt="line" />
                                <h3 className="title">Our Global Presence</h3>
                                <p>Mindarrow’s active participation in some of the most esteemed events within the affiliate marketing domain, both globally and regionally further strengthens its ability to deliver exceptional quality. These invaluable platforms see the convergence of industry stalwarts exchanging insights.</p>
                                <p>Among the distinguished events we have actively participated and cracked the code of regular success for our esteemed clients are:</p>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="global-wrapper">
                    <Row className="align-items-center">
                        <Col md={4}>
                            <ReactWOW animation="fadeInUp" delay="0.1s">
                                <div className="global-item">
                                    <Image src={Image1} alt="" /> 
                                </div>
                            </ReactWOW>
                        </Col>

                        <Col md={8} className="align-self-center">
                            <ReactWOW animation="fadeInUp" delay="0.2s">
                                <div className="global-item content bg-light">
                                    <h2 className="title">B2B Marketing Exchange (B2BMX)</h2>
                                    <p>While not exclusively centered on lead generation, B2BMX is a pivotal summit encompassing various facets of B2B marketing, including strategies and tactics related to lead generation. </p>
                                </div>
                            </ReactWOW>
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col md={8}>
                            <ReactWOW animation="fadeInUp" delay="0.3s">
                                <div className="global-item content bg-light">
                                    <h2 className="title">AW Summit (Affiliate World Summit)</h2>
                                    <p>A globally renowned summit, the Affiliate World Summit serves as a nexus for the brightest minds in affiliate marketing. This platform empowers us with an opportunity to deepen our industry insights and cultivate strategic partnerships on a global scale.</p>
                                </div>
                            </ReactWOW>
                        </Col>

                        <Col md={4}>
                            <ReactWOW animation="fadeInUp" delay="0.4s">
                                <div className="global-item">
                                    <Image src={Image2} alt="" /> 
                                </div>
                            </ReactWOW>
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col md={4}>
                            <ReactWOW animation="fadeInUp" delay="0.5s">
                                <div className="global-item">
                                    <Image src={Image3} alt="" /> 
                                </div>
                            </ReactWOW>
                        </Col>

                        <Col md={8}>
                            <ReactWOW animation="fadeInUp" delay="0.6s">
                                <div className="global-item content bg-light">
                                    <h2 className="title">ASEURO (Affiliate Summit Europe)</h2>
                                    <p>As affiliates, our engagement at the Affiliate Summit Europe highlights our dedication to fostering connections within the European affiliate marketing landscape. This summit provides an exclusive opportunity to delve into regional dynamics and emerging trends.</p>
                                </div>
                            </ReactWOW>
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col md={8}>
                            <ReactWOW animation="fadeInUp" delay="0.7s">
                                <div className="global-item content bg-light">
                                    <h2 className="title">Performance Marketing Insights (PMI)</h2>
                                    <p>Our presence at PMI, another valued summit reflects our commitment to harness the power of performance marketing. The valuable insights gained at PMI lend us an opportunity to elevate our strategies in the dynamic realm of affiliate marketing.</p>
                                </div>
                            </ReactWOW>
                        </Col>

                        <Col md={4}>
                            <ReactWOW animation="fadeInUp" delay="0.8s">
                                <div className="global-item">
                                    <Image src={Image4} alt="" /> 
                                </div>
                            </ReactWOW>
                        </Col>
                    </Row>
                </div>

                <Row className="service-item-wrapper mb-5">
                    <Col md={4}>
                        <ReactWOW animation="fadeInUp" delay="0.2s">
                            <div className="service-item text-center p-4">
                                <div className="icon mb-4">
                                    <Image src={One} alt="" />
                                </div>
                                <h3 className="title">LeadsCon</h3>
                                <p>It is a premier event instrumental for lead generation professionals, providing insights into the latest trends, strategies, and technologies in the lead generation industry.</p>
                            </div>
                        </ReactWOW>
                    </Col>
                    <Col md={4}>
                        <ReactWOW animation="fadeInUp" delay="0.4s">
                            <div className="service-item text-center p-4">
                                <div className="icon mb-4">
                                    <Image src={Two} alt="" />
                                </div>
                                <h3 className="title">Digital Summit</h3>
                                <p>These events cover a broad spectrum of digital marketing topics, including lead generation, and are held in various locations across the United States.</p>
                            </div>
                        </ReactWOW>
                    </Col>
                    <Col md={4}>
                        <ReactWOW animation="fadeInUp" delay="0.6s">
                            <div className="service-item text-center p-4">
                                <div className="icon mb-4">
                                    <Image src={Three} alt="" />
                                </div>
                                <h3 className="title">Content Marketing World</h3>
                                <p>While primarily focused on content marketing, this event often explores lead generation strategies within the context of content creation and distribution.</p>
                            </div>
                        </ReactWOW>
                    </Col>
                </Row>

                <p className="highlight-line">As we have been eyeing for the best and excellence, we have never let such opportunities of participating high valued summits go a begging. We endorse the significance of staying well-informed, and our attendance at these events reaffirms our dedication to providing our clients with innovative and effective solutions.</p>
            </Container>
        </section>
    </div>

      

      <section className='feature-page'>
        <div className="section-1">
          <div className="lender-publisher-section my-4">
            <Container>
              <div className="attain-section text-center mb-3">
                <div className="about-content mt-md-0 mt-4 ms-0">
                  <img src={"Line"} alt="" />
                  <h3 className="title">Attain Big</h3>
                  <p className="m-0 text-white">Partnering with Mindarrow media you’ll unlock the full potential of your financial offerings, surpassing the competition with our unmatched loan lead generation metrics.</p>
                </div>
              </div>
              <Row>
                <Col md={6} className="text-center">
                    <h3 className="title">Are You a Lender?</h3>
                    <p className="m-0 text-white">While developing a great product is the first step in an increasingly saturated market, it’s often a challenge to use the right marketing techniques to make it big. If you invest and mould yourself as per the changes, benefits will come your way in terms of acquiring more customers faster and at a lower cost. Mindarrow’s highly effective lead generation programme will do the honors to elevate your ROI and connect with your target audience. Furthermore our cutting-edge technology and targeted approach will divulge for you pre-qualified and conversion-ready leads. </p>
                </Col>

                <Col md={6} className="text-center">
                    <h3 className="title">Are You a Publisher?</h3>
                    <p className="m-0 text-white">Digital marketing has transformed the publishing industry by manifolds by extending multiple opportunities for growth and success. This has made it evident that the bright future of the publishing lies in the digital realm. You can scale further by amplifying your earnings with Mindarrow Media's high-performing loan affiliate program. Exclusive offers, industry-leading commissions, and a dedicated team committed to your success await you.</p>
                </Col>
              </Row>
            </Container>
          </div>        
        </div>

      <section className="sub-2-area bg-light">
        <Container>
          <div className="about-content text-center mb-5">
            <img src={Line} alt="" />
            <h3 className="title">Explore Opportunities</h3>
          </div>

          <div className="sub-box">
            <Row>
              <Col lg={4} md={6}>
                <ReactWOW animation="fadeInUp" delay="0.2s">
                  <div className="sub-2-item mb-5">
                    <Image src={Arsenal} alt="SEO" />
                    <h4 className="title">Our Arsenal </h4>
                    <p>With a huge network of 36+ publishers by Mindarrow’s side your brand gets a comprehensive coverage across multiple platforms to connect with its target audience on a grand scale.</p>
                  </div>
                </ReactWOW>
              </Col>
              <Col lg={4} md={6}>
                <ReactWOW animation="fadeInUp" delay="0.2s">
                  <div className="sub-2-item mb-5">
                    <Image src={Adv} alt="PPC" />
                    <h4 className="title">50+ Advertisers</h4>
                    <p>Mindarrow’s another arsenal known to hit the bull’s eye is the network of 50 advertisers who place confidence in our capabilities to deliver the right leads for your business growth.</p>
                  </div>
                </ReactWOW>
              </Col>
              <Col lg={4} md={6}>
                <ReactWOW animation="fadeInUp" delay="0.2s">
                  <div className="sub-2-item mb-5">
                    <Image src={Offer} alt="PPC" />
                    <h4 className="title">1k+ Offers</h4>
                    <p>Another brilliance to add repute to your brand is our network of over 1k+ lead generation opportunities, meticulously focused on quality, ensuring each lead is relevant and qualified. </p>
                  </div>
                </ReactWOW>
              </Col>
              <Col lg={4} md={6}>
                <ReactWOW animation="fadeInUp" delay="0.2s">
                  <div className="sub-2-item mb-5">
                    <Image src={Payment} alt="PPC" />
                    <h4 className="title">Flexible Payment Terms</h4>
                    <p>Experience flexibility in payment terms tailored for publishers, including bi-weekly, monthly, and net options with varying due dates (7, 15, 30, 45 days), ensuring optimal payment processing and options.</p>
                  </div>
                </ReactWOW>
              </Col>
              <Col lg={4} md={6}>
                <ReactWOW animation="fadeInUp" delay="0.2s">
                  <div className="sub-2-item mb-5">
                    <Image src={Account} alt="PPC" />
                    <h4 className="title">Dedicated Account Manager</h4>
                    <p>Access our 24/7 account managers, ready to answer queries, provide updates, and address concerns, fostering open communication to keep our partners well-informed and cultivating robust partnerships.</p>
                  </div>
                </ReactWOW>
              </Col>
              <Col lg={4} md={6}>
                <ReactWOW animation="fadeInUp" delay="0.2s">
                  <div className="sub-2-item mb-5">
                    <Image src={Vertical} alt="PPC" />
                    <h4 className="title">10+ Verticals</h4>
                    <p>Loaded with extensive expertise across more than 10 verticals is a key asset of our team that gives an edge and empowers clients with limitless growth opportunities. Tailored solutions and result-driven strategies define our commitment to growth.</p>
                  </div>
                </ReactWOW>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      </section>
    </div>
  );
};

export default AboutPage;
