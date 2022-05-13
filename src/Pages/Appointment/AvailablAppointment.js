import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import SingleAppointmentCard from "./SingleAppointmentCard";

const AvailablAppointment = ({ date, setDate }) => {
    const [service, setService] = useState([]);

    useEffect(()=>{
        fetch('data/service.json')
        .then(res => res.json())
        .then(data => setService(data));
    },[])

  return (
    <div className="my-6">
      <h2 className="text-center text-primary text-3xl">
        Available Appointment date : {format(date, "PP")}{" "}
      </h2>

      <div className="grid grid-cols-3 gap-4 my-6">
       {service.map(ser =>  <SingleAppointmentCard key={ser._id} service={ser} date={date}></SingleAppointmentCard>)}
      </div>
    </div>
  );
};

export default AvailablAppointment;
