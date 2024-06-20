import { Col, Image } from "react-bootstrap";
import { ImHtmlFive, ImLinkedin } from "react-icons/im";
import { FaBootstrap, FaCss3, FaGithub } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiAdobephotoshop, SiMongodb, SiMui } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import curriculum from "./cv/CVFrancoBertone.pdf";
import "./ForMe.css";

const ForMe = () => {
  const handleClickGitHub = () => {
    window.open("https://github.com/El88Aleman", "_blank");
  };
  const handleClickLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/franco-bertone-5b12b0267/",
      "_blank"
    );
  };
  const handleClickCv = () => {
    window.open(curriculum, "_blank");
  };
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
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <span className="html">
                <ImHtmlFive size={30} />
                <h5 style={{ marginLeft: "5px" }}>HTML5</h5>
              </span>
              <span className="css">
                <FaCss3 size={30} />
                <h5 style={{ marginLeft: "5px" }}>CSS3</h5>
              </span>
              <span className="java">
                <RiJavascriptFill size={30} />
                <h5 style={{ marginLeft: "5px" }}>JAVASCRIPT</h5>
              </span>
              <span className="mongo">
                <SiMongodb size={30} />
                <h5 style={{ marginLeft: "5px" }}>MONGODB</h5>
              </span>
              <span className="mui">
                <SiMui size={30} />
                <h5 style={{ marginLeft: "5px" }}>MUI</h5>
              </span>
              <span className="bootstrap">
                <FaBootstrap size={30} />
                <h5 style={{ marginLeft: "5px" }}>BOOTSTRAP</h5>
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <span className="express">
                <h5>EXPRESS.JS</h5>
              </span>
              <span className="react">
                <GrReactjs size={30} />
                <h5 style={{ marginLeft: "5px" }}>REACT JS</h5>
              </span>
              <span className="corel">
                <img
                  src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1696426889/onyzps3oveo5pl5jccao.png"
                  alt="CorelDraw"
                  width="30px"
                  height="30px"
                />
                <h5 style={{ marginLeft: "5px" }}>CORELDRAW X7</h5>
              </span>
              <span className="photoshop">
                <SiAdobephotoshop size={30} />
                <h5 style={{ marginLeft: "5px" }}>ADOBE PHOTOSHOP</h5>
              </span>
              <span className="nodejs">
                <h5 style={{ marginLeft: "5px" }}>NODE</h5>
                <FaNodeJs size={30} />
              </span>
            </div>
          </div>
          <div>
            <a className="cv" onClick={handleClickCv}>
              <span id="span1"></span>
              <span id="span2"></span>
              DOWNLOAD CV
            </a>
          </div>
          <div className="iconos">
            <div className="linkedin" onClick={handleClickLinkedIn}>
              <ImLinkedin className="icon" size={30} />
            </div>
            <div className="github" onClick={handleClickGitHub}>
              <FaGithub className="icon" size={30} />
            </div>
          </div>
        </div>
      </div>
      <div className="segundaParte">
        <div style={{ margin: "10px" }}>
          <h2 className="text">
            <img
              src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1699044021/a76af34b02ocsuoijein.png"
              width="50px"
              height="40px"
              className="tilde"
            />
            I am an Argentine citizen with an Italian passport, I am 26 years
            old and I am attracted to innovative things
          </h2>
        </div>
        <div style={{ margin: "10px" }}>
          <h2 className="text">
            <img
              src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1699044021/a76af34b02ocsuoijein.png"
              width="50px"
              height="40px"
              className="tilde"
            />
            Something more personal about me is that I am passionate about the
            history of the old European continent... which led me to be very
            self-taught in this sense
          </h2>
        </div>
        <div style={{ margin: "10px" }}>
          <h2 className="text">
            <img
              src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1699044021/a76af34b02ocsuoijein.png"
              width="50px"
              height="40px"
              className="tilde"
            />
            I like to make my own personalized clothes
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ForMe;
