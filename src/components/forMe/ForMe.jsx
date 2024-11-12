import { Col, Image } from "react-bootstrap";
import { ImHtmlFive } from "react-icons/im";
import { FaBootstrap, FaCss3, FaGithub, FaSass } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiAdobephotoshop, SiMui } from "react-icons/si";
import { ImPencil2 } from "react-icons/im";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { GoCheck } from "react-icons/go";
import { Typewriter } from "react-simple-typewriter";
import curriculum from "./cv/Cv-FrancoBertone.pdf";
import "./ForMe.css";

const ForMe = () => {
  const handleClickCv = () => {
    window.open(curriculum, "_blank");
  };
  const skills = [
    { icon: <ImHtmlFive size={30} />, name: "HTML5", bgClass: "bg-html" },
    { icon: <FaCss3 size={30} />, name: "CSS3", bgClass: "bg-css" },
    {
      icon: <RiJavascriptFill size={30} />,
      name: "JavaScript",
      bgClass: "bg-javascript",
    },
    { icon: <GrReactjs size={30} />, name: "React", bgClass: "bg-react" },
    { icon: <FaNodeJs size={30} />, name: "Node.js", bgClass: "bg-nodejs" },
    {
      icon: <FaBootstrap size={30} />,
      name: "Bootstrap",
      bgClass: "bg-bootstrap",
    },
    { icon: <SiMui size={30} />, name: "MUI", bgClass: "bg-mui" },
    { icon: <FaGithub size={30} />, name: "GitHub", bgClass: "bg-github" },
    { icon: <FaSass size={30} />, name: "Sass", bgClass: "bg-sass" },
    {
      icon: <SiAdobephotoshop size={30} />,
      name: "Photoshop",
      bgClass: "bg-photoshop",
    },
    {
      icon: <ImPencil2 size={30} />,
      name: "Corel-Draw",
      bgClass: "bg-coreldraw",
    },
  ];
  return (
    <div className="forMe">
      <div className="primeraParte">
        <Col data-aos="zoom-in-right" style={{ marginLeft: "30px" }}>
          <Image
            src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1718750911/ifnggbh8q4lvtjtnry9n.png"
            width="200px"
            height="300px"
            roundedCircle
          />
        </Col>
        <div>
          <div className="titulo">
            <h1>
              Hello &#128075; my name is Franco Bertone!
              <span className="textTitle">
                <Typewriter
                  words={[" I'am Programer Frontend"]}
                  loop={1}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={3000}
                />
              </span>
            </h1>
          </div>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className={`skill-item ${skill.bgClass}`}>
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
          <div>
            <a className="cv" onClick={handleClickCv}>
              <span id="span1"></span>
              <span id="span2"></span>
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
      <div className="segundaParte">
        <div style={{ margin: "10px" }}>
          <p className="text">
            <GoCheck className="tilde" size={30} />I am an Argentine citizen, I
            am 26 years old and I am attracted to innovative things
          </p>
        </div>
        <div style={{ margin: "10px" }}>
          <p className="text">
            <GoCheck className="tilde" size={30} />
            Something more personal about me is that I am passionate about the
            history of the old European continent... which led me to be very
            self-taught in this sense
          </p>
        </div>
        <div style={{ margin: "10px" }}>
          <p className="text">
            <GoCheck className="tilde" size={30} />I like to make my own
            personalized clothes
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForMe;
