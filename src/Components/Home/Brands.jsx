import { Col, Container, Image, Row } from "react-bootstrap";
import Assurance from "../../assets/images/assurance.png";
import geico from "../../assets/images/geico.png";
import LendingTree from "../../assets/images/lendingtree.png";
import Liberty from "../../assets/images/libertyInsurance.png";
import Corporate from "../../assets/images/Corporate_Banner.jpg";

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
                    <Col lg={12} className="mt-5">
                        <div className="brand-3-items d-flex justify-content-between">
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
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Brands