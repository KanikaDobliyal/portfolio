import React from "react";
import NavBar from "./Components/NavBar";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import DarkModeToggle from './Components/DarkModeToggle';
import Education from "./Components/education";

function App() {
  return (
    <div>
      <HashRouter>
        <ScrollToTop />
        <NavBar />
      

        <Routes>
          <Route
            exact
            path="/"
            element={<Home designation="a front-end developer and WordPress designer creating clean, responsive, and user-friendly websites. I specialize in HTML, CSS, JavaScript, and React." />}
          ></Route>
          <Route
            exact
            path="/about"
            element={<About heading="My Skills" />}
          ></Route>
           <Route
            exact
            path="/education"
            element={<Education />}
          ></Route>
          <Route
            exact
            path="/projects"
            element={<Projects heading="Projects" />}
          ></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>

      </HashRouter>

  <DarkModeToggle />
      
    </div>
  );
}

export default App;
