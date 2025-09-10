import React from "react";
import myProfile from "./Images/my-profile.jpg";
import aboutImg from "./Images/about-img2.jpg";

function AboutHome(props) {

   return (
    <div className="container my-5 md-p-5 p-3">
      <div className="about-me">
      {/* row 1 */}
      <div className="row g-5 align-items-center">
        <div className="col-md-6">
          <span className="about-head mb-3">ABOUT ME</span>
          <h2 className="fw-bold mt-5">
            Welcome To My Portfolio.
          </h2>
          <p>
            Hi, I’m Kanika Dobliyal — a passionate front-end web developer and WordPress designer with a strong foundation in computer science and a keen eye for clean, user-friendly design.
          </p>
          <p>With a diploma in Computer Science & Engineering and a Bachelor’s in Computer Applications, I’ve combined formal education with over a year of real-world experience in website designing. I specialize in building responsive, visually appealing websites using HTML, CSS, and WordPress, and I’m continuously growing my skills in JavaScript (ES6), React, and Git to create more dynamic and interactive user experiences.</p>
          <p>Right now, I’m focused on building real-world projects with React and contributing to websites that are not only functional but memorable. I'm also actively learning new technologies and refining my development workflow to stay current in this ever-evolving field.</p>

        </div>

         <div className="col-md-6">
           <img
            src={myProfile}
            alt="Profile"
            className="img-fluid rounded shadow-sm mb-3"
          />
         </div>
         </div>

        {/* row 2 */}
           <div className="row g-5 align-items-center mt-2">
          <div className="col-md-6 text-center">
            <div className="d-flex mb-3">
              <hr className="flex-grow-1 me-3" />
            <span className="about-head">CONTACT ME</span>
            </div>
            
             <img
            src={aboutImg}
            alt="Developer at work"
            className="img-fluid rounded shadow-sm"
          />
          </div>

        

        <div className="col-md-6 text-center text-md-start">

          <div className="d-flex flex-column gap-3 about-icons">
            <div className="d-flex align-items-center gap-3">
              <i className="fa fa-envelope fs-5"></i>
              <div>
                <p className="mb-0">Email</p>
                <strong>kanikadob@gmail.com</strong>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <i className="fa fa-download fs-5"></i>
              <div>
                <p className="mb-0">Download CV</p>
                <a href="#" target="_blank" className="fw-semibold text-decoration-underline text-warning">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AboutHome;
