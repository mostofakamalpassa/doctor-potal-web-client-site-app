import React from 'react';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import appointmentImg from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div className=" my-4" style={{background:`url(${appointmentImg})`}}>
        <div className="mx-auto py-5">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary">Contact Us</h1>
            <p className="py-6 text-center text-4xl text-white">Stay connected with us</p>
          </div>
          </div>
          <div className="mx-auto">
            <div className="card-body mx-auto lg:w-[600px]">
              <div className="form-control">
                <input type="text" placeholder="Email Address" className="input input-bordered " />
              </div>
          
              <div className="form-control">
                <input type="text" placeholder="Subject" className="input input-bordered" />
              </div>
          
              <div className="form-control">
                <textarea type="text" placeholder="Your message" className="textarea textarea-ghost bg-white"></textarea>
              </div>
          
              <div className="form-control w-24 mx-auto mt-6">
               <PrimaryButton>Submit</PrimaryButton>
              </div>
            </div>
          </div>
        
      </div>
    );
};

export default Contact;