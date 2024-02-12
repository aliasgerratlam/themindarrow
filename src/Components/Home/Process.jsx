import { Col, Container, Row } from 'react-bootstrap';

const Process = () => {
  return (
    <section className="home-process-v2-section">
      <div className="overlay"></div>
      <Container>
        <Row>
          <Col lg={12} className="section-title section-title-2 text-center">
            <h3 className="title">Our Process</h3>
            <p className='text-white'>We Follow These Flowless Process !</p>
          </Col>
        </Row>
      </Container>

      <div className="process-steps">
        <div className="image-overlay"></div>
        <Container>
          <div className="process-steps-inner">
            <div className="phase">
              <h3 className="number-phase">01</h3>
              <div className="phase-info">
                <h5 className="phase-title">Build Your Brand Story</h5>
                <p className="phase-desc">Mindarrow creates strong narratives to market and build your brand with the target audience. Our data-centric and transactional information approach aid in driving your business objectives and help you attain huge success across all digital properties.</p>
              </div>
            </div>
            <div className="phase">
              <h3 className="number-phase">02</h3>
              <div className="phase-info">
                <h5 className="phase-title">Audit</h5>
                <p className="phase-desc">It’s in our genes to get to the root every detail of your unique brand and business, thereafter pin-point the possible strengths and eliminate weaknesses to move forward with confidence.</p>
              </div>
            </div>
            <div className="phase">
              <h3 className="number-phase">03</h3>
              <div className="phase-info">
                <h5 className="phase-title">Brainstorming</h5>
                <p className="phase-desc">In step two our team of experts comprising of the best brains in the industry customize a plan to work well for your brand, define benchmarks and create a smooth workflow towards success building.</p>
              </div>
            </div>
            <div className="phase">
              <h3 className="number-phase">04</h3>
              <div className="phase-info">
                <h5 className="phase-title">Execution</h5>
                <p className="phase-desc">After discussing with you, our plan gets into the action mode, taking the time to measure and adjust it as needed for a maximum ROI.</p>
              </div>
            </div>
            <div className="phase">
              <h3 className="number-phase">05</h3>
              <div className="phase-info">
                <h5 className="phase-title">Analyise</h5>
                <p className="phase-desc">The results thus obtained are monitored. Then relevant actions are taken for your continued success across all marketing efforts.</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Process;
