import React from "react";
import treatment from '../../../assets/images/treatment.png';
const Execptional = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl my-16">
      <figure>
        <img
          src={treatment}
          alt="Movie"
        />
      </figure>
      <div className="lg:w-3/5 lg:p-12 p-5 flex flex-col justify-center">
        <h2 className="card-title my-6 text-5xl bold">Exceptional Dental Care, on Your Terms</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        <div className="card-actions mt-6">
        <button className="bg-gradient-to-r from-primary to-secondary px-3 py-2 hover:bg-sky-700 text-white uppercase font-bold rounded">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Execptional;
