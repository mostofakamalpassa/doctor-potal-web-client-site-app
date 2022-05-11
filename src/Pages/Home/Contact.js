import React from 'react';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import appointmentImg from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div class=" my-4" style={{background:`url(${appointmentImg})`}}>
        <div class="mx-auto py-5">
          <div class="text-center">
            <h1 class="text-3xl font-bold text-primary">Contact Us</h1>
            <p class="py-6 text-center text-4xl text-white">Stay connected with us</p>
          </div>
          </div>
          <div class="mx-auto">
            <div class="card-body mx-auto lg:w-[600px]">
              <div class="form-control">
                <input type="text" placeholder="Email Address" class="input input-bordered " />
              </div>
          
              <div class="form-control">
                <input type="text" placeholder="Subject" class="input input-bordered" />
              </div>
          
              <div class="form-control">
                <textarea type="text" placeholder="Your message" class="textarea textarea-ghost bg-white"></textarea>
              </div>
          
              <div class="form-control w-24 mx-auto mt-6">
               <PrimaryButton>Submit</PrimaryButton>
              </div>
            </div>
          </div>
        
      </div>
    );
};

export default Contact;