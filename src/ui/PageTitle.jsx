import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const PageTitle = ({ title }) => {
    return (
        <div className="page-title-area">
            <div className="section__bg"></div>
            <Container>
                <Row>
                    <Col>
                        <div className="page-title-content text-center">
                            <h3 className="title">{title}</h3>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{title}</li>
                                </ol>
                            </nav>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PageTitle