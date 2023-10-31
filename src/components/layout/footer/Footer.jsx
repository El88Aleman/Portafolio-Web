import { Button } from "react-bootstrap";
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="titulo">
        <h1>CONTACTOS</h1>
      </div>
      <div className="contenido">
        <div>
          <Button style={{ fontSize: "20px", padding: 0 }} variant="none">
            <SiGmail style={{ fontSize: "30px", color: "red" }} />
          </Button>
        </div>
        <div>
          <Button
            style={{ fontSize: "20px", padding: 0 }}
            variant="none"
            target="_blank"
            href="https://wa.me/543425220425"
          >
            <BsWhatsapp style={{ fontSize: "30px", color: "limegreen" }} />
          </Button>
        </div>
        <div>
          <Button
            href=""
            style={{ fontSize: "20px", padding: 0 }}
            variant="none"
          >
            <ImLinkedin style={{ fontSize: "30px", color: "dodgerblue" }} />
          </Button>
        </div>
        <div className="copyRigth">
          <h2>© Copy Right 2023 Franco Bertone Portafolio Web</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
