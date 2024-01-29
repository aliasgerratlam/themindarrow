import { Col, Container, Image, Row } from 'react-bootstrap';
import Line from '../../assets/images/hero-line.png';
import ReactWOW from 'react-wow';
import Account from '../../assets/images/service/accountant.png';
import Partnership from '../../assets/images/service/partnership.png';
import Analytics from '../../assets/images/service/analytics.png';
import Culture from '../../assets/images/service/insight.png';
import Marketing from '../../assets/images/service/performance.png';
import Planning from '../../assets/images/service/startegy.png';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <section className="service-area service-page pb-100">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={9}>
            <div className="section-title text-center">
              <Image src={Line} alt="line" />
              <h3 className="title">Our Service</h3>
              <p>Following are the departments where we make a difference.</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={6} md={6} sm={8} className="mb-4">
            <ReactWOW animation="fadeInLeft" delay="0.2s">
              <div className="service-item">
                <div className="icon">
                  <Image src={Account} alt="Account" />
                </div>
                <div className="content">
                  <h3 className="title">Account Management & Leadership</h3>
                  <p>Coming with a hoard of experience, MindArrow commands a respectable position in the Performance Marketing domain. This aids Client Leadership, who mind what matters the most for your brand and then arrow the bull’s eye to garner excellence.</p>
                </div>
              </div>
            </ReactWOW>
          </Col>
          <Col lg={6} md={6} sm={8} className="mb-4">
            <ReactWOW animation="fadeInRight" delay="0.2s">
              <div className="service-item">
                <div className="icon">
                  <Image src={Partnership} alt="Partnership" />
                </div>
                <div className="content">
                  <h3 className="title">Content & Partnerships</h3>
                  <p>from content creation and partnership brokering to dynamic content optimization and sponsorship, we at Mindarrow pen down your expectations and add the desired conjunctions to make them a pleasing reality.</p>
                </div>
              </div>
            </ReactWOW>
          </Col>
          <Col lg={6} md={6} sm={8} className="mb-4">
            <ReactWOW animation="fadeInLeft" delay="0.2s">
              <div className="service-item">
                <div className="icon">
                  <Image src={Analytics} alt="Analytics" />
                </div>
                <div className="content">
                  <h3 className="title">Data & Analytics</h3>
                  <p>Every data and analytic service by Mindarrow is delivered with a bespoke collaborative data visualization and workflow approach. Mindarrow holds a commanding position in ethical use of data back by tools such as the Data Ethics Compass that ensures brand safety and ethical use of data.</p>
                </div>
              </div>
            </ReactWOW>
          </Col>
          <Col lg={6} md={6} sm={8} className="mb-4">
            <ReactWOW animation="fadeInRight" delay="0.2s">
              <div className="service-item">
                <div className="icon">
                  <Image src={Culture} alt="Culture" />
                </div>
                <div className="content">
                  <h3 className="title">Insights & Cultures</h3>
                  <p>
                    We at Mindarrow believe in the use of Precise Human Intelligence that holds a repute of balancing the accuracy of a machine centric approach with the empathy delivered by human insight. This culture is the outcome of services such as Audience Origin, which is an amalgamation of panel based data, digital data, and client data for deep audience understanding & activation and
                    Mindarrow’s Neurolab, which uses medical grade technology to measure the minutest of seconds, non-conscious neurological responses to brand story and media.
                  </p>
                </div>
              </div>
            </ReactWOW>
          </Col>
          <Col lg={6} md={6} sm={8} className="mb-4">
            <ReactWOW animation="fadeInLeft" delay="0.2s">
              <div className="service-item">
                <div className="icon">
                  <Image src={Marketing} alt="Marketing" />
                </div>
                <div className="content">
                  <h3 className="title">Performance Marketing</h3>
                  <p>It is a sort of digital marketing strategy beneficial for brands who want to connect with their target audience on a large scale to meet their objectives. Mindarrow possesses the calibre and experience of devising strategy, planning, purchasing and optimization for every digital media to deliver the goods for our clients. </p>
                </div>
              </div>
            </ReactWOW>
          </Col>
          <Col lg={6} md={6} sm={8} className="mb-4">
            <ReactWOW animation="fadeInRight" delay="0.2s">
              <div className="service-item">
                <div className="icon">
                  <Image src={Planning} alt="Planning" />
                </div>
                <div className="content">
                  <h3 className="title">Strategy & Planning</h3>
                  <p>Mindarrow’s data driven insights is a shot in the arm for our Strategy and Planning experts who churn good growth in return. Planning is a rainbow of flavors, oozing from communication planning, performance planning, and connections planning to ecommerce consulting, and is defined by the clients and their goals met.</p>
                </div>
              </div>
            </ReactWOW>
          </Col>
        </Row>
        <div className="text-center">
          <Link to="/service" className="main-btn">
            View All
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Service;
