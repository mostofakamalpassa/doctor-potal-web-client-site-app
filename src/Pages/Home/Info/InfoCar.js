import React from 'react';
import Info from './Info';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const InfoCar = () => {
    const bgGradientColor = "bg-gradient-to-r from-primary to-secondary";
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
            <Info bgColor={bgGradientColor} img={clock}></Info>
            <Info bgColor='bg-accent' img={marker}></Info>
            <Info bgColor={bgGradientColor} img={phone}></Info>
        </div>
    );
};

export default InfoCar;