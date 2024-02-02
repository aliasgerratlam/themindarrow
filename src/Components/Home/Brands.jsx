import { Col, Container, Image, Row } from 'react-bootstrap';
import Assurance from '../../assets/images/assurance.png';
import geico from '../../assets/images/geico.png';
import LendingTree from '../../assets/images/lendingtree.png';
import Liberty from '../../assets/images/libertyInsurance.png';
import Corporate from '../../assets/images/Corporate_Banner.jpg';

import Nerd from '../../assets/images/nerd.jpg';
import Health from '../../assets/images/health.jpg';
import Renewal from '../../assets/images/renewal.jpg';
import Walk from '../../assets/images/walk.jpg';
import Adt from '../../assets/images/adt.jpg';
import American from '../../assets/images/american.jpg';

const Brands = () => {
  return (
    <div className="brand-3-area">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="brand-3-items d-flex justify-content-between">
              <div className="item corporate-ban">
                <Image src={Corporate} alt="Corporate" />
              </div>
            </div>
          </Col>
          <Col lg={12} className="mt-0">
            <div className="brand-3-items brand-multiple d-flex justify-content-md-center justify-content-center flex-wrap">
              <div className="item">
                <Image src={Assurance} alt="Assurance" />
              </div>
              <div className="item">
                <Image src={geico} alt="geico" />
              </div>
              <div className="item">
                <Image src={LendingTree} alt="LendingTree" />
              </div>
              <div className="item">
                <Image src={Liberty} alt="Liberty" />
              </div>

              <div className="item">
                <Image src={American} alt="american" />
              </div>
              <div className="item">
                <Image src={Adt} alt="adt" />
              </div>
              <div className="item">
                <Image src={Walk} alt="adt" />
              </div>
              <div className="item">
                <Image src={Nerd} alt="nerd" />
              </div>
              <div className="item">
                <Image src={Renewal} alt="Renewal" />
              </div>
              <div className="item">
                <Image src={Health} alt="Health" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Brands;
