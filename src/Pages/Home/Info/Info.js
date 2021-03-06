import React from "react";

const Info = ({img, bgColor}) => {
  return (
    <div className={`card lg:card-side shadow-xl ${bgColor} text-white px-4 py-3`}>
    <figure><img className="rounded" src={img} alt="Album"/></figure>
    <div className="card-body">
      <h2 className="card-title">New album is released!</h2>
      <p>Click the button to listen on Spotiwhy app.</p>
    
    </div>
  </div>
  );
};

export default Info;
