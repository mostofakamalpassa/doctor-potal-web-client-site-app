import React from 'react';

const SingleAppointmentCard = ({service}) => {
    return (
        <div className="card bg-base-100 shadow-xl my-4">
        <div className="card-body">
          <h2 className="card-title justify-center text-3xl text-primary">Card title!</h2>
            {
                service?.slots.length ?  <p className='text-center font-bold'>{service?.slots[0]}  </p> :  <p className='text-center text-red-500'>Booking is fulled</p>
            }
          <p className='justify-center text-center'>{service?.slots.length} SPACES AVAILABLE </p>
          <p className='text-center'>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-center">
            <button disabled={service?.slots.length === 0} className="btn btn-primary">Book Appointment</button>
          </div>
        </div>
      </div>
    );
};

export default SingleAppointmentCard;