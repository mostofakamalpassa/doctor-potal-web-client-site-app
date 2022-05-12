import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppointmentBanners from './AppointmentBanners';
import AvailablAppointment from './AvailablAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            
            <AppointmentBanners date={date} setDate={setDate}></AppointmentBanners>
            <AvailablAppointment date={date}></AvailablAppointment>

            <Footer></Footer>
        </div>
    );
};

export default Appointment;