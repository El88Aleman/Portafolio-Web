import { ImHtmlFive } from "react-icons/im";
import { FaBootstrap, FaCss3, FaGithub, FaSass } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiAdobephotoshop, SiMui } from "react-icons/si";
import { ImPencil2 } from "react-icons/im";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import "./Skills.css";
import "../../global/Global.css";

const Skills = () => {
  const skills = [
    { icon: <ImHtmlFive size={20} />, name: "HTML5", bgClass: "bg-html" },
    { icon: <FaCss3 size={20} />, name: "CSS3", bgClass: "bg-css" },
    {
      icon: <RiJavascriptFill size={20} />,
      name: "JavaScript",
      bgClass: "bg-javascript",
    },
    { icon: <GrReactjs size={20} />, name: "React JS", bgClass: "bg-react" },
    { icon: <FaNodeJs size={20} />, name: "Node.js", bgClass: "bg-nodejs" },
    {
      icon: <IoLogoFirebase size={20} />,
      name: "Firebase",
      bgClass: "bg-html",
    },
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
    <div>
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
    </div>
  );
};

export default Skills;
