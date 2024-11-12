import { LuExternalLink } from "react-icons/lu";
import "./Projects.css";
const Projects = () => {
  const handleComunaClick = () => {
    window.open("https://comuna-de-franck-react.vercel.app/", "_blank");
  };
  const handleJuicyClick = () => {
    window.open("https://juicy-boy-react.vercel.app/", "_blank");
  };
  const handleNbClick = () => {
    window.open("https://nb-soluciones.com.ar/", "_blank");
  };
  const handleCasteBebidasClick = () => {
    window.open("https://youtube.com/shorts/Qw6LLeKtRvk", "_blank");
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
      <figure data-aos="flip-up">
        <img
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1730292232/hwbvbl2vphtvbwi3epph.png"
          alt="Nb Soluciones"
        />
        <div className="capa">
          <h4>NB SOLUCIONES</h4>
          <h5>
            Page developed with React.js for Industrial Engineer Nicolas
            Beresvil
          </h5>
          <LuExternalLink
            onClick={handleNbClick}
            style={{ marginTop: "10px" }}
            size={30}
          />
        </div>
      </figure>
      <figure data-aos="flip-up">
        <img
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1730293240/ewpmp5qk6lovkkcv4dpv.png"
          alt="Caste Bebidas"
        />
        <div className="capa">
          <h4>CASTE BEBIDAS</h4>
          <h5>
            Cell phone application developed with React Native for the beverage
            distributor Caste Bebidas
          </h5>
          <LuExternalLink
            onClick={handleCasteBebidasClick}
            style={{ marginTop: "10px" }}
            size={30}
          />
        </div>
      </figure>
    </div>
  );
};

export default Projects;
