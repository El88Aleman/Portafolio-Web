import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const handleWhatsappClick = () => {
    window.open("https://wa.me/543425220425", "_blank");
  };
  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/franco-bertone-5b12b0267/",
      "_blank"
    );
  };
  const handleGmailClick = () => {
    const destinatario = "francobertone10@gmail.com"; // Reemplaza con tu dirección de correo

    const mailtoLink = `mailto:${destinatario}`;
    window.open(mailtoLink, "_blank");
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer">
      <div style={{ margin: "10px" }} className="copyRigth">
        <h2 style={{ color: "white" }}>
          © Copyright 2023 Franco Bertone Web Portfolio
        </h2>
      </div>
      <div style={{ margin: "10px", marginBottom: "10px" }} className="iconos">
        <div>
          <span className="gmail" onClick={handleGmailClick}>
            <SiGmail className="icon" size={30} />
          </span>
        </div>
        <div>
          <span className="whatsapp" onClick={handleWhatsappClick}>
            <BsWhatsapp className="icon" size={30} />
          </span>
        </div>
        <div>
          <span className="linkedin" onClick={handleLinkedInClick}>
            <ImLinkedin className="icon" size={30} />
          </span>
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
