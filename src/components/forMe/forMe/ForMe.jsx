import curriculum from "../cv/CV-FrancoBertone.pdf";
import Skills from "../skills/Skills";
import "./ForMe.css";
import "../../global/Global.css";
import UseIntersectionObserver from "../../useIntersectingObserver/UseIntersectingObserver";

const ForMe = () => {
  const handleClickCv = () => {
    window.open(curriculum, "_blank");
  };
  const [visibleElements, setRef] = UseIntersectionObserver({
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <div
      ref={setRef(0)}
      data-id="titulo"
      className={`tituloContainer ${
        visibleElements.titulo ? "visible" : "hidden"
      }`}
    >
      <p className="textTitulo">ABOUT ME</p>
      <hr className="separadorTitle" />
      <div className="imgContainer">
        <img
          className="imgProgramer"
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1739821350/yxogdqq0yov0svmcdblj.png"
          alt="react js"
        />
        <div className="reactLogoContainer">
          <div className="reactLogo">
            <div className="reactCircle"></div>
            <div className="reactCircle"></div>
            <div className="reactCircle"></div>
            <span className="reactCore"></span>
          </div>
          <p className="reactText">React JS</p>
        </div>
      </div>
      <div style={{ marginTop: "50px", marginBottom: "20px", width: "100%" }}>
        <p className="textParrafo">
          Hola, me llamo <strong>Franco Bertone</strong> y soy{" "}
          <strong>Programador Front-end.</strong>👨‍💻
        </p>
        <p className="textParrafo">
          Con una pasión por crear experiencias web interactivas y dinámicas, me
          especializo en el desarrollo de aplicaciones utilizando tecnologías
          modernas como{" "}
          <strong>React JS, React Native, JavaScript, HTML y CSS. </strong> 🚀
        </p>
        <p className="textParrafo">
          Mi objetivo es siempre escribir código limpio, eficiente y mantenible,
          y disfruto colaborando con equipos para llevar proyectos desde la
          concepción hasta la implementación. 💡
        </p>
        <p className="textParrafo">
          Estoy en constante aprendizaje y me encanta enfrentar nuevos desafíos
          que me permitan crecer profesionalmente. Si estás buscando un
          desarrollador comprometido y entusiasta para tu equipo, ¡me encantaría
          hablar contigo! 🤝
        </p>
      </div>
      <div>
        <Skills />
      </div>
      <div className="containerCv">
        <a className="cv" onClick={handleClickCv}>
          <span id="span1"></span>
          <span id="span2"></span>
          DOWNLOAD CV
        </a>
      </div>
    </div>
  );
};

export default ForMe;
