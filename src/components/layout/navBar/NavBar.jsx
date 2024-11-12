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
    const scrollY = window.scrollY;
    const width = window.innerWidth;

    if (width <= 480) {
      if (scrollY < 950) {
        setActiveSection("forMe");
      } else if (scrollY < 2100) {
        setActiveSection("project");
      } else if (scrollY < 3600) {
        setActiveSection("education");
      } else {
        setActiveSection("contact");
      }
    } else if (width <= 768) {
      if (scrollY < 650) {
        setActiveSection("forMe");
      } else if (scrollY < 2350) {
        setActiveSection("project");
      } else if (scrollY < 5200) {
        setActiveSection("education");
      } else {
        setActiveSection("contact");
      }
    } else if (width >= 1024) {
      if (scrollY < 300) {
        setActiveSection("forMe");
      } else if (scrollY < 1950) {
        setActiveSection("project");
      } else if (scrollY < 4900) {
        setActiveSection("education");
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
        <li className={activeSection === "project" ? "active" : ""}>
          <a href="#">PROJECT</a>
        </li>
        <li className={activeSection === "education" ? "active" : ""}>
          <a href="#">EDUCATION</a>
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
      </a>
    </div>
  );
};

export default NavBar;
