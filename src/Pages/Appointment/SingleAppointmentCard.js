import React, {useState} from 'react';
import BookingAppointment from './BookingAppointment';
const SingleAppointmentCard = ({service, date}) => {

  const [treatment, setTreatment] = useState(null);
    return (
        <div className="card bg-base-100 shadow-xl my-4">
        <div className="card-body">
          <h2 className="card-title justify-center text-3xl text-primary">{service?.name}</h2>
            {
                service?.slots.length ?  <p className='text-center font-bold'>{service?.slots[0]}  </p> :  <p className='text-center text-red-500'>Booking is fulled</p>
            }
          <p className='justify-center text-center'>{service?.slots.length} SPACES AVAILABLE </p>
          <p className='text-center'>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-center">
            <label htmlFor='booking-modal'  disabled={service?.slots.length === 0} onClick={()=> setTreatment(service)} className="btn btn-primary text-white">Book Appointment</label>
          </div>
        </div>
        {treatment && <BookingAppointment treatment={treatment} date={date}></BookingAppointment>}
      </div>
    );
};

export default SingleAppointmentCard;