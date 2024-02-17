import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactStripe = () => {
  return (
    <div className="contact-stripe py-5">
      {/* <div className="shapedividers_com-5355"></div> */}
      <Container>
        <div className="contact-stripe-items d-flex flex-column justify-content-center align-items-center text-center">
          <div className="item">
            <p>Whether you're a startup, eager to make a valued impression or are an established business aiming to amplify your online presence, Mindarrow will be elated and honored to collaborate with you. Let's embark on a journey of growth and success together.</p>
            <p>Contact us today to discuss how our performance marketing expertise can elevate your brand to new heights.</p>
          </div>
          <div className="item mt-4">
            <Link to="/contact" className="main-btn">
              Let's Collaborate!
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactStripe;
