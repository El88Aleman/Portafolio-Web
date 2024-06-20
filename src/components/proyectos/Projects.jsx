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
          <h4>FRANCK COMMUNE PROJECT</h4>
          <h5>Page developed with React.js for the commune of my town</h5>
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
          <h4>JUICY BOY PROJECT</h4>
          <h5>
            Workshop developed with React.js for an Oversize T-shirt startup
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
