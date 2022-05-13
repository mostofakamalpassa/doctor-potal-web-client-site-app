import { format } from "date-fns";
import React from "react";

const BookingAppointment = ({ treatment: { name, slots, _id }, date , setTreatment}) => {

  const handleFormSubmit = ev =>{
    ev.preventDefault();

    const getDate = format(date, "PP");
    const time = format(date, 'pp');
    const name = ev.target.patientName.value;
    const mobile = ev.target.mobileNo.value;
    const email = ev.target.email.value;
    const address = ev.target.address.value;

    if( name.length >= 3 || mobile.length >= 10 || email.length > 3 ){
      console.log( getDate , time, name , mobile, email, address);


      setTreatment(null);



    }


  }
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2" >
            ✕
          </label>
          <h3 className="font-bold text-lg text-center text-primary my-6">
            {name}
          </h3>
          <form onSubmit={ handleFormSubmit} className="grid grid-cols-1 gap-2 justify-items-center">
            <input
              type="text"
              disabled name ="date"
              value={format(date, "PP")}
              className="input input-bordered input-sm w-full max-w-xs" />
            <input
              type="text"
              disabled
              name="time"
              value={format(date, "pp")}
              className="input input-bordered input-sm w-full max-w-xs"  />
            <select  className="select select-bordered select-sm w-full max-w-xs">
              {slots.map((x, index) => <option value={x} key={index}>{x}</option>)}
             
            </select>
            <input
              type="text"
              name="patientName"
              placeholder="Your Name"
              className="input input-bordered input-sm w-full max-w-xs" />
            <input
              type="text"
              placeholder="Mobile No"
              name="mobileNo"
              className="input input-bordered input-sm w-full max-w-xs"  />
            <input
              type="email"
              placeholder="Email"
              name='email'
              className="input input-bordered input-sm w-full max-w-xs"  />
            <input
              type="text"
              placeholder="Address"
              name='address'
              className="input input-bordered input-sm w-full max-w-xs" />
            <input
              type="submit"
              value="submit"
              className="btn btn-secondary w-full max-w-xs text-white font-bold" />
          </form>
          <div className="modal-action">
            <label htmlFor="booking-modal" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingAppointment;
