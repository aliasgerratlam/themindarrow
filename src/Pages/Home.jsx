import { useEffect } from 'react';
import About from '../Components/Home/About';
import Brands from '../Components/Home/Brands';
import Hero from '../Components/Home/Hero';
import Process from '../Components/Home/Process';
import Service from '../Components/Home/Service';
import Testimonial from '../Components/Home/Testimonial';
import { Helmet } from 'react-helmet';
import ContactStripe from '../Components/Home/ContactStripe';
import Feature from '../Components/Home/Feature';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        ‍<meta charSet="utf-8" />
        <title>Themindarrow lead digital agency</title>
        <meta name="description" content="Discover the driving force behind Themindarrow Digital Marketing. Uncover our passion for innovative strategies, client success stories, and the dedicated team propelling your brand to new heights."></meta>
        <meta name="keywords" content="Digital Marketing, Innovative Marketing Team, Strategic Solutions Expertise"></meta>
      </Helmet>

      <Hero />
      <About />
      <Feature />
      <Process />
      <Service />
      <Testimonial />
      <Brands />
      <ContactStripe />
    </>
  );
};

export default Home;
