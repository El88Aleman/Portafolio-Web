import { useEffect, useRef } from "react";
import { ImHtmlFive } from "react-icons/im";
import { FaBootstrap, FaCss3, FaGithub, FaSass } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiAdobephotoshop, SiMui } from "react-icons/si";
import { ImPencil2 } from "react-icons/im";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import curriculum from "./cv/Cv-FrancoBertone.pdf";
import "./ForMe.css";

const ForMe = () => {
  const handleClickCv = () => {
    window.open(curriculum, "_blank");
  };
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e) => {
      const cardRect = card.getBoundingClientRect();
      const isInBounds =
        e.clientX >= cardRect.left &&
        e.clientX <= cardRect.right &&
        e.clientY >= cardRect.top &&
        e.clientY <= cardRect.bottom;

      if (!isInBounds) {
        return;
      }

      const xPosition = (e.clientX - cardRect.left) / cardRect.width;
      const yPosition = (e.clientY - cardRect.top) / cardRect.height - 0.6;
      const xOffset = xPosition - 0.6;
      const dxNorm = Math.min(Math.max(xOffset, -0.6), 0.6);

      card.style.transform = `perspective(1000px) rotateY(${
        dxNorm * 75
      }deg) rotateX(${yPosition * 75}deg)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = "none";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const skills = [
    { icon: <ImHtmlFive size={20} />, name: "HTML5", bgClass: "bg-html" },
    { icon: <FaCss3 size={20} />, name: "CSS3", bgClass: "bg-css" },
    {
      icon: <RiJavascriptFill size={20} />,
      name: "JavaScript",
      bgClass: "bg-javascript",
    },
    { icon: <GrReactjs size={20} />, name: "React", bgClass: "bg-react" },
    { icon: <FaNodeJs size={20} />, name: "Node.js", bgClass: "bg-nodejs" },
    {
      icon: <FaBootstrap size={20} />,
      name: "Bootstrap",
      bgClass: "bg-bootstrap",
    },
    { icon: <SiMui size={20} />, name: "MUI", bgClass: "bg-mui" },
    { icon: <FaGithub size={20} />, name: "GitHub", bgClass: "bg-github" },
    { icon: <FaSass size={20} />, name: "Sass", bgClass: "bg-sass" },
    {
      icon: <SiAdobephotoshop size={20} />,
      name: "Photoshop",
      bgClass: "bg-photoshop",
    },
    {
      icon: <ImPencil2 size={20} />,
      name: "Corel-Draw",
      bgClass: "bg-coreldraw",
    },
    {
      icon: <FaDatabase size={20} />,
      name: "SQLite",
      bgClass: "bg-sqlite",
    },
  ];
  return (
    <div className="containerCarta" ref={cardRef}>
      <div className="perspective">
        <div className="fondoCarta" />
        <div style={{ display: "flex" }}>
          <p className="programer">PROGRAMER FRONTED</p>
          <p className="nivel">Nivel PS 100</p>
          <img
            className="imgProgramer"
            src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1698878558/zwq1enrbjpzbortgl4u0.gif"
            alt="react js"
          />
        </div>
        <div>
          <img
            className="img1"
            src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1718750911/ifnggbh8q4lvtjtnry9n.png"
            alt="Franco Bertone"
          />
        </div>
        <div>
          <hr className="separador1" />
          <p className="skillText">SKILLS</p>
          <div className="scroller">
            <div className="scroller__inner">
              {skills.concat(skills).map((skill, index) => (
                <div key={index} className={`scrollerItem ${skill.bgClass}`}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <hr className="separador2" />
        </div>
        <div className="containerCv">
          <a className="cv" onClick={handleClickCv}>
            <span id="span1"></span>
            <span id="span2"></span>
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForMe;
