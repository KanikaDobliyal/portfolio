import React, { useEffect } from "react";
import html from "./Images/html.png";
import css from "./Images/css-3.png";
import javascript from "./Images/js.png";
import react from "./Images/react.png";
import bootstrap from "./Images/bootstrap.png";
import git from "./Images/git.png";
import github from "./Images/github-sign.png";
import tailwind from "./Images/tailwind-logo.png";
import wordpress from "./Images/wordpress.png";
import vscode from "./Images/vs-code.png";
import photoshop from "./Images/photoshop.png";
import canva from "./Images/canva-logo.png";
import AboutHome from "./AboutHome";
import HeroImg from "./HeroImg";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "./About.css";

function About(props) {
  useEffect(() => {
    document.title = "About Me | Kanika Portfolio";
  }, []);

  const skillsIcon = {
    width: "70px",
    height: "70px",
  };

  return (
    <div className="main-content">
      <HeroImg heading="About Me" />
      <AboutHome />

      <div className="container my-5 text-center">
        <h1
          className="my-5"
          style={{ color: "white", fontSize: "50px", }}
        >
          {props.heading}
        </h1>
        <div className="row d-flex justify-content-lg-evenly text-center mt-4">
          <div className="col-lg-2 col-4 my-4 skills animate__animated animate__pulse">
              <img
                className="rounded"
                src={html}
                alt="html-img"
                style={skillsIcon}
              />
          </div>
          <div className="col-lg-2 col-4 my-4 skills animate__animated animate__pulse">
        
              <img
                className="rounded"
                src={css}
                alt="css-img"
                style={skillsIcon}
              />
          
          </div>
          <div className="col-lg-2 col-4 my-4 skills animate__animated animate__pulse">
           
              <img
                className="rounded"
                src={javascript}
                alt="javascript-img"
                style={skillsIcon}
              />
           
          </div>
          <div className="col-lg-2 col-4 my-4 skills animate__animated animate__pulse">
            
              <img
                className="rounded"
                src={react}
                alt="react-img"
                style={skillsIcon}
              />
         
          </div>
          <div className="col-lg-2 col-4 my-4 skills animate__animated animate__pulse">
           
              <img
                className="rounded"
                src={bootstrap}
                alt="bootstrap-img"
                style={skillsIcon}
              />
           
          </div>
          <div className="col-lg-2 col-4 my-4 skills animate__animated animate__pulse">
           
              <img
                className="rounded"
                src={tailwind}
                alt="tailwind-img"
                style={skillsIcon}
              />
           
          </div>
          <div className="col-lg-2 col-4 my-4 skills animate__animated animate__pulse">
          
              <img
                className="rounded"
                src={git}
                alt="git-img"
                style={skillsIcon}
              />
          
          </div>
          <div className="col-lg-2 col-4 my-4 skills animate__animated animate__pulse">
           
              <img
                className="rounded"
                src={github}
                alt="github-img"
                style={skillsIcon}
              />
           
          </div>

          <div className="col-lg-2 col-4 my-4 skills animate__animated animate__pulse">
          
              <img
                className="rounded"
                src={wordpress}
                alt="github-img"
                style={skillsIcon}
              />
           
          </div>
          <div className="col-lg-2 col-4 my-4 skills animate__animated animate__pulse">
           
              <img
                className="rounded"
                src={photoshop}
                alt="github-img"
                style={skillsIcon}
              />
           
          </div>
          <div className="col-lg-2 col-4 my-4 skills animate__animated animate__pulse">
           
              <img
                className="rounded"
                src={vscode}
                alt="github-img"
                style={skillsIcon}
              />
          
          </div>
          <div className="col-lg-2 col-4 my-4 skills animate__animated animate__pulse">
           
              <img
                className="rounded"
                src={canva}
                alt="github-img"
                style={skillsIcon}
              />
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
