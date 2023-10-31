import { Col, Image } from "react-bootstrap";
import { AiOutlineCheck } from "react-icons/ai";
import { ImHtmlFive, ImLinkedin } from "react-icons/im";
import { FaBootstrap, FaCss3, FaGithub } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiAdobephotoshop, SiMongodb, SiMui } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import "./SobreMi.css";

const SobreMi = () => {
  return (
    <div>
      <div className="primeraParte">
        <Col style={{ marginLeft: "30px" }}>
          <Image
            src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1698417605/um0a0rkia1utvius0c4l.png"
            width="240px"
            height="300px"
            roundedCircle
          />
        </Col>
        <div>
          <div className="titulo">
            <h1>
              Hello! My name and surname is Franco Bertone, I`am Programer
              Frontend
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
            </div>
          </div>
          <div>
            <a className="cv" href="#">
              <span id="span1"></span>
              <span id="span2"></span>
              DESCARGAR CV
            </a>
          </div>
          <div className="iconos">
            <div className="linkedin">
              <ImLinkedin className="icon" size={30} />
            </div>
            <div className="github">
              <FaGithub className="icon" size={30} />
            </div>
          </div>
        </div>
      </div>
      <div className="segundaParte">
        <div style={{ margin: "10px" }}>
          <h2 className="text">
            <AiOutlineCheck size={50} className="tilde" />
            Me considero una persona amigable, responsable, pro-activa, con una
            buena educacion en casa lo cual me conlleva a no perder los valores
            escenciales que se necesitan dia a dia para un ambiente laboral
          </h2>
        </div>
        <div style={{ margin: "10px" }}>
          <h2 className="text">
            <AiOutlineCheck size={50} className="tilde" />
            Tengo un emprendimiento textil en el cual estampo remeras y buzos
            personalizados, hace poco inicie una marca propia de Remeras
            Oversize
          </h2>
        </div>
        <div style={{ margin: "10px" }}>
          <h2 className="text">
            <AiOutlineCheck size={50} className="tilde" />
            Me gusta mucho la historia, diria que soy un apasionado por ella..
            se mucho sobre los acontesimientos belicos que trasendieron durante
            la vida en el viejo continente Europeo
          </h2>
        </div>
        <div style={{ margin: "10px" }}>
          <h2 className="text">
            <AiOutlineCheck size={50} className="tilde" />
            Actualmente me encuentro cursando la carrera de Backend en
            CoderHouse para convertirme en Desarrollador Web Full Stack, aunque
            deberia aclarar que lo que realmente en lo que me siento comodo y me
            gusta hacer es la parte del Frontend
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
