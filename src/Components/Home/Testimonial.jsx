import { Col, Container, Image, Row } from "react-bootstrap"
import Line from "../../assets/images/hero-line.png"
import Slider from "react-slick"

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
    };

    return (
        <section className="testimonial-area">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} md={9}>
                        <div className="section-title section-title-2 text-center">
                            <Image src={Line} alt="line" />
                            <h3 className="title">Testimonial</h3>
                            <p>Our focus is on delivering you the absolute best support guiding you through training and providing.</p>
                        </div>
                    </Col>
                </Row>
                <Slider className="row testimonial-active" {...settings}>

                    <div className="testimonial-item mt-30">
                        <div className="quote">
                            <svg xmlns="http://www.w3.org/2000/svg" width="53.729" height="40" viewBox="0 0 53.729 40">
                                <g data-name="Group 21" transform="translate(0 0)">
                                    <path data-name="Union 1" d="M47.055,40a1.21,1.21,0,0,1-1.018-.509L31.106,19.357A12.178,12.178,0,0,1,29.07,11.1,12.364,12.364,0,1,1,45.98,23.881l6.957,14.253A1.313,1.313,0,0,1,51.806,40ZM18.1,40a1.209,1.209,0,0,1-1.018-.509L2.149,19.357A12.77,12.77,0,0,1,.056,11.043,12.395,12.395,0,1,1,17.023,23.881L23.98,38.134A1.313,1.313,0,0,1,22.849,40Z" transform="translate(0 0)" />
                                </g>
                            </svg>
                        </div>
                        <p>There are many variations from into passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                        <div className="info">
                            <h5 className="title">Abdur Rohman</h5>
                            <span>Sr. Product designer</span>
                        </div>
                    </div>


                    <div className="testimonial-item mt-30">
                        <div className="quote">
                            <svg xmlns="http://www.w3.org/2000/svg" width="53.729" height="40" viewBox="0 0 53.729 40">
                                <g data-name="Group 21" transform="translate(0 0)">
                                    <path data-name="Union 1" d="M47.055,40a1.21,1.21,0,0,1-1.018-.509L31.106,19.357A12.178,12.178,0,0,1,29.07,11.1,12.364,12.364,0,1,1,45.98,23.881l6.957,14.253A1.313,1.313,0,0,1,51.806,40ZM18.1,40a1.209,1.209,0,0,1-1.018-.509L2.149,19.357A12.77,12.77,0,0,1,.056,11.043,12.395,12.395,0,1,1,17.023,23.881L23.98,38.134A1.313,1.313,0,0,1,22.849,40Z" transform="translate(0 0)" />
                                </g>
                            </svg>
                        </div>
                        <p>There are many variations from into passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                        <div className="info">
                            <h5 className="title">Mehedi Hasan</h5>
                            <span>Sr. Product designer</span>
                        </div>
                    </div>


                    <div className="testimonial-item mt-30">
                        <div className="quote">
                            <svg xmlns="http://www.w3.org/2000/svg" width="53.729" height="40" viewBox="0 0 53.729 40">
                                <g data-name="Group 21" transform="translate(0 0)">
                                    <path data-name="Union 1" d="M47.055,40a1.21,1.21,0,0,1-1.018-.509L31.106,19.357A12.178,12.178,0,0,1,29.07,11.1,12.364,12.364,0,1,1,45.98,23.881l6.957,14.253A1.313,1.313,0,0,1,51.806,40ZM18.1,40a1.209,1.209,0,0,1-1.018-.509L2.149,19.357A12.77,12.77,0,0,1,.056,11.043,12.395,12.395,0,1,1,17.023,23.881L23.98,38.134A1.313,1.313,0,0,1,22.849,40Z" transform="translate(0 0)" />
                                </g>
                            </svg>
                        </div>
                        <p>There are many variations from into passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                        <div className="info">
                            <h5 className="title">Mosharof Hossain</h5>
                            <span>Sr. Product designer</span>
                        </div>
                    </div>


                    <div className="testimonial-item mt-30">
                        <div className="quote">
                            <svg xmlns="http://www.w3.org/2000/svg" width="53.729" height="40" viewBox="0 0 53.729 40">
                                <g data-name="Group 21" transform="translate(0 0)">
                                    <path data-name="Union 1" d="M47.055,40a1.21,1.21,0,0,1-1.018-.509L31.106,19.357A12.178,12.178,0,0,1,29.07,11.1,12.364,12.364,0,1,1,45.98,23.881l6.957,14.253A1.313,1.313,0,0,1,51.806,40ZM18.1,40a1.209,1.209,0,0,1-1.018-.509L2.149,19.357A12.77,12.77,0,0,1,.056,11.043,12.395,12.395,0,1,1,17.023,23.881L23.98,38.134A1.313,1.313,0,0,1,22.849,40Z" transform="translate(0 0)" />
                                </g>
                            </svg>
                        </div>
                        <p>There are many variations from into passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                        <div className="info">
                            <h5 className="title">Rayhan Uddin</h5>
                            <span>Sr. Product designer</span>
                        </div>
                    </div>

                    <div className="testimonial-item mt-30">
                        <div className="quote">
                            <svg xmlns="http://www.w3.org/2000/svg" width="53.729" height="40" viewBox="0 0 53.729 40">
                                <g data-name="Group 21" transform="translate(0 0)">
                                    <path data-name="Union 1" d="M47.055,40a1.21,1.21,0,0,1-1.018-.509L31.106,19.357A12.178,12.178,0,0,1,29.07,11.1,12.364,12.364,0,1,1,45.98,23.881l6.957,14.253A1.313,1.313,0,0,1,51.806,40ZM18.1,40a1.209,1.209,0,0,1-1.018-.509L2.149,19.357A12.77,12.77,0,0,1,.056,11.043,12.395,12.395,0,1,1,17.023,23.881L23.98,38.134A1.313,1.313,0,0,1,22.849,40Z" transform="translate(0 0)" />
                                </g>
                            </svg>
                        </div>
                        <p>There are many variations from into passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                        <div className="info">
                            <h5 className="title">Imran Ahmed</h5>
                            <span>Sr. Product designer</span>
                        </div>
                    </div>
                </Slider>
            </Container>
        </section>
    )
}

export default Testimonial