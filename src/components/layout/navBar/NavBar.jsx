import { useEffect, useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("forMe");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Obtenemos la posición actual de desplazamiento
    const scrollY = window.scrollY;
    const width = window.innerWidth;

    if (width <= 480) {
      if (scrollY < 1600) {
        setActiveSection("forMe");
      } else if (scrollY < 2750) {
        setActiveSection("education");
      } else if (scrollY < 3350) {
        setActiveSection("project");
      } else {
        setActiveSection("contact");
      }
    } else if (width <= 768) {
      if (scrollY < 1400) {
        setActiveSection("forMe");
      } else if (scrollY < 3350) {
        setActiveSection("education");
      } else if (scrollY < 4100) {
        setActiveSection("project");
      } else {
        setActiveSection("contact");
      }
    } else if (width <= 1024) {
      if (scrollY < 1150) {
        setActiveSection("forMe");
      } else if (scrollY < 3650) {
        setActiveSection("education");
      } else if (scrollY < 4400) {
        setActiveSection("project");
      } else {
        setActiveSection("contact");
      }
    } else if (width >= 1024) {
      if (scrollY < 950) {
        setActiveSection("forMe");
      } else if (scrollY < 3000) {
        setActiveSection("education");
      } else if (scrollY < 3800) {
        setActiveSection("project");
      } else {
        setActiveSection("contact");
      }
    }
  };

  return (
    <div className="navBar">
      <ul className="menu">
        <li className={activeSection === "forMe" ? "active" : ""}>
          <a href="#">FOR ME</a>
        </li>
        <li className={activeSection === "education" ? "active" : ""}>
          <a href="#">EDUCATION</a>
        </li>
        <li className={activeSection === "project" ? "active" : ""}>
          <a href="#">PROJECT</a>
        </li>
        <li className={activeSection === "contact" ? "active" : ""}>
          <a href="#">CONTACT</a>
        </li>
      </ul>
      <a className="image" href="#">
        <img
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1698878558/zwq1enrbjpzbortgl4u0.gif"
          alt="logo-nav"
          width="80px"
          height="70px"
        />
        <h1
          style={{
            color: "white",
            marginLeft: "10px",
            letterSpacing: "3px",
          }}
          className="reactLogo"
        >
          React
        </h1>
      </a>
    </div>
  );
};

export default NavBar;
