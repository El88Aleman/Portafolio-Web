import { LuExternalLink } from "react-icons/lu";
import "./Projects.css";
const Projects = () => {
  const handleComunaClick = () => {
    window.open("https://comuna-de-franck-react.vercel.app/", "_blank");
  };
  const handleJuicyClick = () => {
    window.open("https://juicy-boy-react.vercel.app/", "_blank");
  };
  return (
    <div className="contenedor" data-aos="flip-up">
      <figure data-aos="flip-up">
        <img
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1702896247/eue057sxrihv8fc9g4xw.png"
          alt="Comuna de Franck"
        />
        <div className="capa">
          <h4>PROYECTO COMUNA DE FRANCK</h4>
          <h5>
            Pagina desarrollada con React.js sobre la comuna de mi pueblo en la
            que explayo algunas cosas sobre el mismo
          </h5>
          <LuExternalLink
            onClick={handleComunaClick}
            style={{ marginTop: "10px" }}
            size={30}
          />
        </div>
      </figure>
      <figure data-aos="flip-up">
        <img
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1702896247/egy1sheifc3t2dcts14g.png"
          alt="Juicy Boy"
        />
        <div className="capa">
          <h4>PROYECTO JUICY BOY</h4>
          <h5>
            Workshop desarrollado con React.js sobre un emprendimiento propio de
            remeras Oversize
          </h5>
          <LuExternalLink
            onClick={handleJuicyClick}
            style={{ marginTop: "10px" }}
            size={30}
          />
        </div>
      </figure>
    </div>
  );
};

export default Projects;
