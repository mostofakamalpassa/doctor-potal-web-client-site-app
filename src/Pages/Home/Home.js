import React from 'react';
import Appoint from './Appoint/Appoint';
import Banner from './Banner';
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
        </div>
    );
};

export default Home;