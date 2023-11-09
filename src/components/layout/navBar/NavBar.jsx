import { useState, useEffect } from "react";
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

    // Determinamos en qué sección estamos
    if (scrollY < 950) {
      setActiveSection("forMe");
    } else if (scrollY < 3050) {
      setActiveSection("education");
    } else if (scrollY < 3900) {
      setActiveSection("project");
    } else {
      setActiveSection("contact");
    }
  };
  return (
    <div className="navBar">
      <div className="menu-app">&#9776;</div>
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
