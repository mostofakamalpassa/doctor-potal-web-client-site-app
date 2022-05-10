import React from 'react';
import Banner from './Banner';
import InfoCar from './Info/InfoCar';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <InfoCar></InfoCar>
          <Service></Service>
        </div>
    );
};

export default Home;