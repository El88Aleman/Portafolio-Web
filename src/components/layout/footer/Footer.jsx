import { BsWhatsapp } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaArrowUp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer">
      <div style={{ margin: "10px" }} className="copyRigth"></div>
      <div style={{ margin: "10px", marginBottom: "10px" }} className="iconos">
        <div>
          <a
            href="https://github.com/El88Aleman"
            rel="noopener noreferrer"
            target="_blank"
            className="github"
          >
            <FaGithub className="icon" size={30} />
          </a>
        </div>
        <div>
          <a
            href="https://wa.me/3425220425"
            rel="noopener noreferrer"
            target="_blank"
            className="whatsapp"
          >
            <BsWhatsapp className="icon" size={30} />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/franco-bertone-5b12b0267/"
            className="linkedin"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ImLinkedin className="icon" size={30} />
          </a>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <span className="flecha " onClick={scrollToTop}>
          <FaArrowUp className="icon" size={30} />
        </span>
      </div>
    </div>
  );
};

export default Footer;
