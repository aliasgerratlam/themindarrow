import { Col, Container, Image, Row } from 'react-bootstrap';
import PageTitle from '../ui/PageTitle';
import ReactWOW from 'react-wow';
import Account from '../assets/images/service/accountant.png';
import Partnership from '../assets/images/service/partnership.png';
import Analytics from '../assets/images/service/analytics.png';
import Culture from '../assets/images/service/insight.png';
import Marketing from '../assets/images/service/performance.png';
import Planning from '../assets/images/service/startegy.png';
import Technology from '../assets/images/service/technology.png';
import Investment from '../assets/images/service/investment.png';
import Facebook from '../assets/images/feature/social-media.png';
import GoogleAds from '../assets/images/feature/adwords.png';
import Amazon from '../assets/images/feature/amazon.png';
import LinkedIn from '../assets/images/feature/linkedin.png';
import Consumer from '../assets/images/feature/consumer.png';

import SEO from '../assets/images/service/seo.png';
import Content from '../assets/images/service/content-marketing.png';
import PPC from '../assets/images/service/payperclick.png';
import Report from '../assets/images/service/analytic-and-marketing.png';
import SMM from '../assets/images/service/social-media.png';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const ServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-page">
      <Helmet>
        ‍<meta charSet="utf-8" />
        <title>Services - TheMindArrow</title>
        <meta
          name="description"
          content="Elevate your online presence with Themindarrow Digital Marketing's comprehensive services. From strategic SEO and engaging social media campaigns to innovative branding solutions, our expert team delivers tailored strategies that drive results. Explore our suite of digital marketing services designed to amplify your brand and achieve sustainable growth in the digital landscape."
        ></meta>
        <meta name="keywords" content="Services"></meta>
      </Helmet>

      <PageTitle title="Services" />

      <section className="service-area service-page-area pb-100">
        <Container>
          <div className="heading-1 text-center">
            <h1 className="display-5">
              Mindful Services of <span>TheMindArrow</span>{' '}
            </h1>
            <p>Following are the departments where we make a difference:</p>
          </div>

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
            <Col lg={6} md={6} sm={8} className="mb-4">
              <ReactWOW animation="fadeInLeft" delay="0.2s">
                <div className="service-item">
                  <div className="icon">
                    <Image src={Technology} alt="Technology" />
                  </div>
                  <div className="content">
                    <h3 className="title">Technology Consulting & Development</h3>
                    <p>Be it ad operations and data integrity to reporting systems and martech & adtech consulting, services of Mindarrow Technology Consulting & Development team of experts are both broad and deep which are instrumental in driving success in this modern marketing world.</p>
                  </div>
                </div>
              </ReactWOW>
            </Col>
            <Col lg={6} md={6} sm={8} className="mb-4">
              <ReactWOW animation="fadeInRight" delay="0.2s">
                <div className="service-item">
                  <div className="icon">
                    <Image src={Investment} alt="Investment" />
                  </div>
                  <div className="content">
                    <h3 className="title">Trading & Investment</h3>
                    <p>
                      Mindarrow’s trading and investment team has the expertise to analyse and negotiate across all media touchpoints- online, offline, global or local. Such sound is their analysis that they ttime and again deliver the most effective contact point for every client to any consumer. Mindarrow also holds the edge in developing market leading tools and services including carbon
                      calculators, designed to empower clients for making conscious decisions around media plan impact and inclusion PMPs, private market places that intentionally direct, investment to marginalized communities that adversely impacted by aggressive keyword exclusion list.
                    </p>
                  </div>
                </div>
              </ReactWOW>
            </Col>
          </Row>
        </Container>
      </section>

      
      <div className="feature-line text-center mb-5">
        <h2>Partner with us to propel your brand to new heights.</h2>
        <h3>Feel free to customize this further based on your specific brand voice and audience</h3>
      </div>
      

      <section className="sub-2-area bg-light">
        <Container>
          <div className="sub-box">
            <Row>
              <Col lg={4} md={6}>
                <ReactWOW animation="fadeInUp" delay="0.2s">
                  <div className="sub-2-item mt-30">
                    <Image src={SEO} alt="SEO" />
                    <h4 className="title">Search Engine Optimization </h4>
                    <p>Boost your online visibility and organic traffic with our expert SEO strategies.</p>
                  </div>
                </ReactWOW>
              </Col>
              <Col lg={4} md={6}>
                <ReactWOW animation="fadeInUp" delay="0.2s">
                  <div className="sub-2-item mt-30">
                    <Image src={PPC} alt="PPC" />
                    <h4 className="title">Pay-Per-Click (PPC) Advertising</h4>
                    <p>Drive targeted traffic to your website through strategic and cost-effective PPC campaigns.</p>
                  </div>
                </ReactWOW>
              </Col>
              <Col lg={4} md={6}>
                <ReactWOW animation="fadeInUp" delay="0.2s">
                  <div className="sub-2-item mt-30 item-3">
                    <Image src={SMM} alt="SMM" />
                    <h4 className="title">Social Media Marketing</h4>
                    <p>Engage and enhance your brands visibility on popular social platforms with Mindarrow’s effective social media marketing strategies.</p>
                  </div>
                </ReactWOW>
              </Col>
              <Col lg={4} md={6}>
                <ReactWOW animation="fadeInUp" delay="0.2s">
                  <div className="sub-2-item mt-30 item-3">
                    <Image src={Content} alt="Content" />
                    <h4 className="title">Content Marketing</h4>
                    <p>Express, Elevate and stamp your brand with Mindarrow’s compelling and relevant content that resonates with your target audience.</p>
                  </div>
                </ReactWOW>
              </Col>
              <Col lg={4} md={6}>
                <ReactWOW animation="fadeInUp" delay="0.2s">
                  <div className="sub-2-item mt-30 item-3">
                    <Image src={Report} alt="Report" />
                    <h4 className="title">Analytics and Reporting</h4>
                    <p>Gain valuable insights into the performance of your campaigns through detailed analytics and transparent reporting.</p>
                  </div>
                </ReactWOW>
              </Col>

              <Col lg={4} md={6}>
                <ReactWOW animation="fadeInUp" delay="0.2s">
                  <div className="sub-2-item mt-30 item-3">
                    <Image src={Facebook} alt="Report" />
                    <h4 className="title">Facebook & Instagram</h4>
                    <p>Advertising Expertise: Our meticulously tailored Facebook and Instagram ad campaigns seamlessly integrate authentic messaging with captivating imagery to effectively resonate your brand’s narrative to highly segmented audiences.</p>
                  </div>
                </ReactWOW>
              </Col>

              <Col lg={4} md={6}>
                <ReactWOW animation="fadeInUp" delay="0.2s">
                  <div className="sub-2-item mt-30 item-3">
                    <Image src={GoogleAds} alt="Report" />
                    <h4 className="title">Google Ads Mastery</h4>
                    <p>Mindarrow has also mastered the art of positioning your brand on the world’s largest search platform where high intent searchers can know your brand through targeted keyword bidding.</p>
                  </div>
                </ReactWOW>
              </Col>

              <Col lg={4} md={6}>
                <ReactWOW animation="fadeInUp" delay="0.2s">
                  <div className="sub-2-item mt-30 item-3">
                    <Image src={Amazon} alt="Report" />
                    <h4 className="title">Amazon Services Excellence</h4>
                    <p>On Amazon too, Mindarrow can further build your brand with well crafted and growth enhancing paid media campaigns, comprising of compelling creatives. We adeptly manage sales and inventory across all Amazon platforms.</p>
                  </div>
                </ReactWOW>
              </Col>

              <Col lg={4} md={6}>
                <ReactWOW animation="fadeInUp" delay="0.2s">
                  <div className="sub-2-item mt-30 item-3">
                    <Image src={LinkedIn} alt="Report" />
                    <h4 className="title">LinkedIn Advertising Authority</h4>
                    <p>Let your brand hold the edge on the world’s largest networking platform with Mindarrow, where we’ll establish your brand as a thought leader within your industry or connect with professionals and businesses seeking your products and services.</p>
                  </div>
                </ReactWOW>
              </Col>
              
              <Col lg={6} md={6}>
                <ReactWOW animation="fadeInUp" delay="0.2s">
                  <div className="sub-2-item mt-30 item-3">
                    <Image src={Consumer} alt="Report" />
                    <h4 className="title">Consumer Touchpoint Targeting Technology</h4>
                    <p>Now, with so much advancement in brand building, you can capitalize big. Fresh from the oven is the AI touch. Harness it to reach your valued audience. From implementing personalized shopping experiences and user journeys to constructing sophisticated retargeting flows using online data, Mindarrow’s solutions enable you to bring to life lost sales and intensify customer engagement.</p>
                  </div>
                </ReactWOW>
              </Col>

             

              
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ServicePage;
