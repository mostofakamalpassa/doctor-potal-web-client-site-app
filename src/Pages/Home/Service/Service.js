import React from 'react';
import treatment from '../../../assets/images/whitening.png';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import ServiceCard from './ServiceCard';

const Service = () => {

    const services = [
        {
            _id: 1,
            serviceTitle:'Fluoride Treatment',
            serviceSummary: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            serviceImg: treatment
        },
        {
            _id: 2,
            serviceTitle:'Cavity',
            serviceSummary: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            serviceImg:cavity
        },
        {
            _id: 3,
            serviceTitle:'Teeth Whitening',
            serviceSummary: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            serviceImg:fluoride
        }

    ]
    return (
        <div>
            <div className='mx-auto text-center my-12'>
                <h3 className='text-2xl text-primary'>Our Services</h3>
                <h2 className='text-4xl my-3'>Services We Provide</h2>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {services.map(service => (<ServiceCard key={service._id} service={service}></ServiceCard>))}
            </div>


        </div>
    );
};

export default Service;