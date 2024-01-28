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
                <h5 className="phase-title">Research Project</h5>
                <p className="phase-desc">Turpis wisi pede tempus assumenda pede quis ultricies dicta ipsa</p>
              </div>
            </div>
            <div className="phase">
              <h3 className="number-phase">02</h3>
              <div className="phase-info">
                <h5 className="phase-title">Evaluate Plans</h5>
                <p className="phase-desc">Turpis wisi pede tempus assumenda pede quis ultricies dicta ipsa</p>
              </div>
            </div>
            <div className="phase">
              <h3 className="number-phase">03</h3>
              <div className="phase-info">
                <h5 className="phase-title">Best Results</h5>
                <p className="phase-desc">Turpis wisi pede tempus assumenda pede quis ultricies dicta ipsa</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Process;
