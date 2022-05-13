import { format } from "date-fns";
import React from "react";

const BookingAppointment = ({treatment:{name, slots, _id}, date}) => {

  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
     <input type="checkbox" id="booking-modal" className="modal-toggle" /> 
      <div className="modal modal-bottom sm:modal-middle">
      
        <div className="modal-box">
        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg text-center text-primary my-6">
            {name}
          </h3>
            <form className="grid grid-cols-1 gap-2 justify-items-center">
            <input type="text" disabled value={format(date,'PP')} className="input input-bordered input-sm w-full max-w-xs" />
            <input type="text" disabled value={format(date,'pp')} className="input input-bordered input-sm w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
            <input type="submit" value="submit"  className="btn btn-secondary w-full max-w-xs" />
            
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
