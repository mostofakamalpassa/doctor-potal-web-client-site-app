import React from 'react';

const SingleAppointmentCard = ({service}) => {
    return (
        <div className="card bg-base-100 shadow-xl my-4">
        <div className="card-body">
          <h2 className="card-title justify-center text-3xl text-primary">Card title!</h2>
          <p className='justify-center'>Available Space {service?.slots.length}</p>
          <p className='justify-center'>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Book Appointment</button>
          </div>
        </div>
      </div>
    );
};

export default SingleAppointmentCard;