import React, { useEffect } from "react";
import HeroImg from "./HeroImg";


function Contact() {
  useEffect(() => {
    document.title = "Contact | Kanika";
  }, []);
 

  return (
    <div className="main-content">
      <HeroImg heading="Contact Me" paragraph="Get in Touch with me." />

      <div className="contact-data p-5 my-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-box">
               <i className="fa fa-map-marker fs-5"></i>
               <h4 className="mb-3">Address</h4>
               <p>Dehradun, Uttarakhand, India (248001)</p>
            </div>
          </div>

          <div className="col-lg-4">
             <div className="contact-box">
               <i className="fa fa-envelope fs-5"></i>
               <h4 className="mb-3">Email</h4>
               <p>kanikadob@gmail.com</p>
            </div>
          </div>

          <div className="col-lg-4">
             <div className="contact-box">
               <i className="fa fa-link fs-5"></i>
               <h4 className="mb-3">Social Links</h4>
                <div className="social-icons">
            <a href="https://www.linkedin.com/in/kanika-dobliyal-aa3b90228/"><i className="fa-brands fa-linkedin"></i></a>
             <a href="https://github.com/KanikaDobliyal"><i className="fa-brands fa-github"></i></a>
          </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Contact;
