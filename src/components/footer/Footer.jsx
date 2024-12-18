import { Button, Form } from "react-bootstrap";
import { BsWhatsapp } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaArrowUp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [messageSent, setMessageSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICES,
        import.meta.env.VITE_EMAIL_TEMPLATES,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setMessageSent(true);
          setTimeout(() => {
            scrollToTop();
          }, 4000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="tituloContainer">
      <p className="textTitulo">CONTACTS</p>
      <hr className="separadorTitle" />
      <div className="containerFooter">
        {messageSent ? (
          <p className="mensajeAprobado">
            Mensaje enviado con éxito &#127881; &#127881; &#127881;
          </p>
        ) : (
          <>
            <Form className="form" ref={form} onSubmit={sendEmail}>
              <Form.Group
                className="labelTitle"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>EMAIL DE USTED</Form.Label>
                <Form.Control
                  className="labelText"
                  type="email"
                  placeholder="*******@gmail.com"
                  name="user_email"
                />
              </Form.Group>
              <Form.Group
                className="labelTitle"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>ASUNTO</Form.Label>
                <Form.Control
                  className="labelText"
                  type="text"
                  placeholder="Escriba aqui el asunto.."
                  name="user_name"
                />
              </Form.Group>
              <Form.Group
                className="labelTitle"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  EXPRESE AQUI LO QUE DESEA COMUNICARLE A FRANCO BERTONE PARA
                  SER CONTACTADO...
                </Form.Label>
                <Form.Control
                  className="labelText"
                  as="textarea"
                  rows={3}
                  name="message"
                />
              </Form.Group>
              <Button
                className="button"
                variant="info"
                type="submit"
                value="Send"
              >
                ENVIAR
              </Button>
              <div className="iconos">
                <a
                  href="https://github.com/El88Aleman"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="github"
                >
                  <FaGithub className="icon" size={30} />
                </a>
                <a
                  href="https://wa.me/3425220425"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="whatsapp"
                >
                  <BsWhatsapp className="icon" size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/franco-bertone-5b12b0267/"
                  className="linkedin"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ImLinkedin className="icon" size={30} />
                </a>
                <span className="flecha " onClick={scrollToTop}>
                  <FaArrowUp className="icon" size={30} />
                </span>
              </div>
            </Form>
          </>
        )}
      </div>
    </div>
  );
};

export default Footer;
