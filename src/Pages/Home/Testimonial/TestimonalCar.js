import React from "react";

const TestimonalCar = ({review}) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body">
       
        <p className="text-sm">{review.say}</p>
        <div className="flex justify-center my-4">
            <img src={review.img} alt="" />
           <div className="ml-4 self-center">
           <h3 className="text-lg font-bold ">{review.name}</h3>
            <h4 className="text-lg font-bold">location</h4>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonalCar;
