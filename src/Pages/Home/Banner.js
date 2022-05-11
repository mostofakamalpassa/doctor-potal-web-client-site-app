import React from "react";
import Chir from '../../assets/images/chair.png'
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

import dentalBg from '../../assets/images/bg.png'

const Banner = () => {
  return (
    <div className="hero min-h-screen  bg-white" style={{background:`url(${dentalBg})`, backgroundSize:'cover'}}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={Chir}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="w-3/5">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
