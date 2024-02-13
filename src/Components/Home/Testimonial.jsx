import { Col, Container, Image, Row } from 'react-bootstrap';
import Line from '../../assets/images/hero-line.png';
import Slider from 'react-slick';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial-area">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={9}>
            <div className="section-title section-title-2 text-center">
              <Image src={Line} alt="line" />
              <h3 className="title">Testimonial</h3>
              <p className="text-white">Our focus is on delivering you the absolute best support guiding you through training and providing.</p>
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
            <p className="text-white">Choosing theMindarrow for our digital marketing needs was a game-changer! Their team's expertise and dedication catapulted our online presence to new heights. We saw a significant increase in traffic and engagement, leading to tangible business growth. Highly recommend their services!</p>
            <div className="info">
              <h5 className="title">Emily Parker</h5>
              {/* <span>Sr. Product designer</span> */}
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
            <p className="text-white">I can't thank theMindarrow enough for their exceptional work! From strategizing to execution, they delivered top-notch digital marketing solutions tailored to our business goals. Their transparent communication and proactive approach made the entire process seamless. A trustworthy partner indeed!</p>
            <div className="info">
              <h5 className="title">Michael Johnson</h5>
              {/* <span>Sr. Product designer</span> */}
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
            <p className="text-white">Working with theMindarrow has been a breath of fresh air! They took the time to understand our brand and target audience, crafting campaigns that resonated deeply. The results speak for themselves – improved brand visibility, higher conversions, and happier customers. Look no further for your digital marketing needs.</p>
            <div className="info">
              <h5 className="title">Sophia Rodriguez</h5>
              {/* <span>Sr. Product designer</span> */}
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
            <p className="text-white">Kudos to theMindarrow for their outstanding performance! Their team's creativity and innovation set them apart in the digital marketing landscape. With their strategic guidance, we experienced a significant boost in online engagement and brand awareness. Partnering with them was one of the best decisions we made for our business.</p>
            <div className="info">
              <h5 className="title">Rayhan Uddin</h5>
              {/* <span>Sr. Product designer</span> */}
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
            <p className="text-white">theMindarrow exceeded our expectations in every way possible! Their professionalism, attention to detail, and commitment to delivering results are unmatched. They not only helped us reach our target audience but also provided valuable insights to optimize our marketing efforts further. A reliable partner for long-term success.</p>
            <div className="info">
              <h5 className="title">Imran Ahmed</h5>
              {/* <span>Sr. Product designer</span> */}
            </div>
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonial;
