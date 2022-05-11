import React, { useState } from "react";

import cheir from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanners = () => {
  const [date, setDate] = useState(new Date());
  const css =`
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: blue;
    color: blue;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: red;
  }
  `
  return (
      <>
      <style>{css}</style>
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={cheir} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          {<DayPicker mode="single" selected={date} onSelect={setDate} modifiersClassNames={{selected: 'my-selected',
          today: 'my-today'}}/>}
          <p>You have selected Date {format(date,"PP")}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AppointmentBanners;
