import { useEffect } from 'react';
import About from '../Components/Home/About';
import Brands from '../Components/Home/Brands';
import Hero from '../Components/Home/Hero';
import Process from '../Components/Home/Process';
import Service from '../Components/Home/Service';
import Testimonial from '../Components/Home/Testimonial';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Process />
      <Service />
      <Testimonial />
      <Brands />
    </>
  );
};

export default Home;
