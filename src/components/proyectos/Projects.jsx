import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { project } from "./project";
import "./Projects.css";
import "../global/Global.css";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const twoSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(callbackFunction, options);
    const currentSection = twoSectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    function callbackFunction(enteries) {
      enteries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          entry.target.classList.add("loaded");
          observer.unobserve(entry.target);
        } else {
          setIsVisible(false);
        }
      });
    }
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);
  return (
    <div
      className={`tituloContainer first-section ${
        isVisible ? "visible" : "hidden"
      }`}
      ref={twoSectionRef}
    >
      <p className="textTitulo">PROJECTS</p>
      <hr className="separadorTitle" />
      <div className="containerProjects">
        {project.map((trabajo) => (
          <div className="containerTarjeta" key={trabajo.id}>
            <div className="imgWrapper">
              <img
                src={trabajo.src}
                alt={trabajo.alt}
                className="imgProjects"
              />
              <div className="hoverLayer">
                <a
                  href={trabajo.hrefEnlace}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuExternalLink size={30} className="hoverIcon" />
                </a>
                <a
                  href={trabajo.hrefGit}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} className="hoverIcon" />
                </a>
              </div>
            </div>
            <div className="contenido">
              <hr className="separador" />
              <div className="estrella-fugaz"></div>
              <p className="titleProject">{trabajo.titleProject}</p>
              <p className="textProject">{trabajo.textoProject}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
