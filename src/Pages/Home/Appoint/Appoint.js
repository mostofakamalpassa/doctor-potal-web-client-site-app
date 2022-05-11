import React from "react";
import appointImg from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
const Appoint = () => {
  return (
    <div
      class="shadow-xl lg:flex justify-center items-center my-32"
      style={{ background: `url(${appointImg})` }}
    >
      <figure className="bg-auto flex-1">
        <img className="mt-[-150px]" src={doctor} alt="Album" />
      </figure>
      <div class="text-white flex-1">
        <h2 class="card-title text-3xl text-primary">Appointment</h2>
        <h1 className="text-5xl mt-5">Make an appointment Today</h1>
        <p className="text-2xl my-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div class="card-actions my-5">
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Appoint;
