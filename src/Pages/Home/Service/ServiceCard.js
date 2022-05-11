import React from 'react';

const ServiceCard = ({service}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={service.serviceImg} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{service.serviceTitle}!</h2>
          <p>{service.serviceSummary}</p>
          
        </div>
      </div>
    );
};

export default ServiceCard;