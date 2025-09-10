import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import HeroImg from "./HeroImg";

function Education(props) {
  useEffect(() => {
    document.title = "Education & Experience | Kanika Portfolio";
  }, []);


  return (
    <div className="main-content">
      <HeroImg heading="Education & Experience" />

      <div className="education-section p-5">
         <div className="d-flex mb-5">
            <span className="about-head bg-btn">My Education</span>
             <hr className="flex-grow-1 ms-3" />
            </div>

             <div className="mb-4 p-3 border rounded">
        <h5>Bachelor of Computer Applications (BCA) – Lateral Entry</h5>
        <p className="mb-1"><strong>Institution:</strong> Uttarakhand Open University</p>
        <p className="mb-1"><strong>Duration:</strong> 2022 – 2025 (Distance Learning)</p>
        <p className="mb-0">Specialized in software development, web technologies, and computer applications. Completed while working full-time, enhancing both theoretical knowledge and practical application.</p>
      </div>

      <div className="mb-4 p-3 border rounded">
        <h5>Diploma in Computer Science & Engineering</h5>
        <p className="mb-1"><strong>Institution:</strong> Government Girls Polytechnic Dehradun</p>
        <p className="mb-1"><strong>Duration:</strong> 2018 – 2021</p>
        <p className="mb-0">Gained foundational knowledge of computer science including basics of programming, computer hardware, and software systems. The program provided exposure to IT fundamentals, which helped build my interest in web development.</p>
      </div>

      <div className="mb-4 p-3 border rounded">
        <h5>Senior Secondary Education (12th – Science Stream)</h5>
        <p className="mb-1"><strong>Institution:</strong> S.G.R.R Public School, Race course, Dehradun</p>
        <p className="mb-1"><strong>Board:</strong> CBSE</p>
        <p className="mb-1"><strong>Year of Passing:</strong> 2018</p>
        <p className="mb-0">Studied Physics, Chemistry, and Mathematics (PCM), building analytical and logical reasoning skills.</p>
      </div>

      </div>

      <div className="experience-section p-5">
         <div className="d-flex mb-5">
            <span className="about-head bg-btn">My Experience</span>
             <hr className="flex-grow-1 ms-3" />
            </div>


      <div className="mb-4 p-3 border rounded">
        <h5>Reosys - Dehradun</h5>
        <p className="mb-1"><strong>Designation:</strong> Website Developer</p>
        <p className="mb-1"><strong>Duration:</strong> 2024 – current</p>
        <p className="mb-0">I design and develop responsive, user-friendly websites using HTML, CSS, JavaScript, and Bootstrap. I customize WordPress themes, handle website updates and maintenance, and ensure websites are optimized for performance and SEO. I also collaborate with clients to understand their needs and deliver clean, visually appealing designs across all devices.</p>
      </div>

       <div className="mb-4 p-3 border rounded">
        <h5>Solicon Private Limited – New Delhi</h5>
        <p className="mb-1"><strong>Designation:</strong> Cloud & IT Consultant</p>
        <p className="mb-1"><strong>Duration:</strong> January 2022 – May 2023</p>
        <ul>
            <li>Provided expertise in cloud technologies, advising clients on efficient and secure cloud
solutions.</li>
<li>Collaborated with cross-functional teams to implement and maintain IT infrastructure.</li>
<li>Gathering critical information from meetings with various stakeholders and producing useful
reports.</li>
<li>Ensuring solutions meet business needs and requirements.</li>
        </ul>
      </div>

      </div>
     </div>
  );
}

export default Education;
