import React from "react";

const TestimonalCar = ({review}) => {
  return (
    <div class="card  bg-base-100 shadow-xl">
      <div class="card-body">
       
        <p className="text-sm">{review.say}</p>
        <div class="flex justify-center my-4">
            <img src={review.img} alt="" />
            <h3 className="text-lg font-bold self-center ml-4">{review.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonalCar;
