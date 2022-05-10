import React from 'react';
import Banner from './Banner';
import Execptional from './Execptional/Execptional';
import InfoCar from './Info/InfoCar';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <InfoCar></InfoCar>
          <Service></Service>
          <Execptional></Execptional>
        </div>
    );
};

export default Home;