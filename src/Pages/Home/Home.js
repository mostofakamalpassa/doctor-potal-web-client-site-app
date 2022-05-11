import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Appoint from './Appoint/Appoint';
import Banner from './Banner';
import Contact from './Contact';
import Execptional from './Execptional/Execptional';
import InfoCar from './Info/InfoCar';
import Service from './Service/Service';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <InfoCar></InfoCar>
          <Service></Service>
          <Execptional></Execptional>
          <Appoint></Appoint>
          <Testimonial></Testimonial>
          <Contact></Contact>
          <Footer></Footer>
        </div>
    );
};

export default Home;