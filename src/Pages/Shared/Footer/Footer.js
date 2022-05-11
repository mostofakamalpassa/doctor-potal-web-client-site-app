import React from "react";
import footer from '../../../assets/images/footer.png'
const Footer = () => {
  return (
    
      <footer class=" p-10" style={{background:`url(${footer})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
          <div className="footer">
          <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">Emergency Checkup</a>
          <a class="link link-hover">Monthly Checkup</a>
          <a class="link link-hover">Weekly Checkup</a>
          <a class="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span class="footer-title">ORAL HEALTH</span>
          <a class="link link-hover">Fluoride Treatment</a>
          <a class="link link-hover">Cavity Filling</a>
          <a class="link link-hover">Teath Whitening</a>
         </div>
        <div>
          <span class="footer-title">OUR ADDRESS</span>
          <a class="link link-hover">New York - 101010 Hudson</a>
         
        </div>
          </div>
        <div class="items-center grid-flow-col">
        <p className="text-center">Copyright © 2022 - All right reserved</p>
      </div>
      </footer>
     
   
  );
};

export default Footer;
