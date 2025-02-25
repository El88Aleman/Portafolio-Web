import { Button, Form } from "react-bootstrap";
import { BsWhatsapp } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import "./Footer.css";
import UseIntersectionObserver from "../useIntersectingObserver/UseIntersectingObserver";
import Loader from "../loader/Loader";

const Footer = () => {
  const [visibleElements, setRef] = UseIntersectionObserver({
    rootMargin: "0px",
    threshold: 0.1,
  });
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICES,
        import.meta.env.VITE_EMAIL_TEMPLATES,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setMessageSent(true);
          setTimeout(() => {
            setMessageSent(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 4000);
        },
        (error) => {
          setLoading(false);
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div
      ref={setRef(0)}
      data-id="titulo"
      className={`tituloContainer ${
        visibleElements.titulo ? "visible" : "hidden"
      }`}
    >
      <p className="textTitulo">CONTACTS</p>
      <hr className="separadorTitle" />
      {loading ? (
        <Loader />
      ) : messageSent ? (
        <p className="mensajeAprobado">
          Mensaje enviado con éxito &#127881; &#127881; &#127881;
        </p>
      ) : (
        <div className="containerFooter">
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
                EXPRESE AQUI LO QUE DESEA COMUNICARLE A FRANCO BERTONE PARA SER
                CONTACTADO...
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
          </Form>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
