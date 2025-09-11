import { useEffect } from "react";
import bgImg from "./Images/bgImg.png";
import myProfile from "./Images/my-profile.jpg";
import { Link } from "react-router-dom";

const Home = (props) => {
  useEffect(() => {
    document.title = "Kanika Dobliyal | Portfolio";
  }, []);

  return (

    <div className="main-content">
      <div
        className="mask position-relative top-0 start-0"
        style={{ width: "100%", height: "100vh" }}
      >
        <img
          src={bgImg}
          className="bg-image opacity-50 object-fit-cover"
          alt="bg-img"
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
     
      <div className="about-text">
          <div className="d-lg-none d-block">
                 <img src={myProfile} alt="profile img" />
                 </div>
        <h1
          className="fw-bold my-3 animate__animated animate__zoomIn"
          style={{
            fontSize: "70px",
            fontFamily: "-moz-initial",
          }}
        >
          Hello, I am{" "}
          <br></br><span
            style={{
              color: "rgb(223 6 84)",
              fontFamily: "-moz-initial",
            }}
          >
            Kanika Dobliyal.
          </span>
        </h1>
        <p className="animate__animated animate__zoomIn"
          style={{
            fontSize: "18px",
          }}
        >
          {props.designation}
        </p>

<div className="mt-5 about-btn">
<Link className="nav-link fw-semibold text-center border py-3 border-rounded" to="/about">
                About Me <i className="fa fa-angle-double-right"></i>
              </Link>
</div>
        
      </div>

    </div>

  );
};

export default Home;
