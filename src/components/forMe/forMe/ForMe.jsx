import { useEffect, useRef, useState } from "react";
import curriculum from "../cv/Cv-FrancoBertone.pdf";
import Skills from "../skills/Skills";
import "./ForMe.css";
import "../../global/Global.css";

const ForMe = () => {
  const fhirstSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(callbackFunction, options);
    const currentSection = fhirstSectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    function callbackFunction(enteries) {
      enteries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          entry.target.classList.add("loaded");
          observer.unobserve(entry.target);
        } else {
          setIsVisible(false);
        }
      });
    }
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);
  const handleClickCv = () => {
    window.open(curriculum, "_blank");
  };
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const handleMouseMove = (e) => {
      const cardRect = card.getBoundingClientRect();
      const isInBounds =
        e.clientX >= cardRect.left &&
        e.clientX <= cardRect.right &&
        e.clientY >= cardRect.top &&
        e.clientY <= cardRect.bottom;

      if (!isInBounds) {
        return;
      }

      const xPosition = (e.clientX - cardRect.left) / cardRect.width;
      const yPosition = (e.clientY - cardRect.top) / cardRect.height - 0.6;
      const xOffset = xPosition - 0.6;
      const dxNorm = Math.min(Math.max(xOffset, -0.6), 0.6);

      card.style.transform = `perspective(1000px) rotateY(${
        dxNorm * 75
      }deg) rotateX(${yPosition * 75}deg)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = "none";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`tituloContainer first-section ${
        isVisible ? "visible" : "hidden"
      }`}
      ref={fhirstSectionRef}
    >
      <p className="textTitulo">FOR ME</p>
      <hr className="separadorTitle" />
      <div className="containerCarta" ref={cardRef}>
        <div className="perspective">
          <div className="fondoCarta" />
          <div style={{ display: "flex" }}>
            <p className="programer">PROGRAMER FRONTED</p>
            <p className="nivel">Nivel PS 100</p>
            <img
              className="imgProgramer"
              src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1698878558/zwq1enrbjpzbortgl4u0.gif"
              alt="react js"
            />
          </div>
          <div className="contenedorImg">
            <img
              className="imgFranco front"
              src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1732736155/gzmvignfzariunwuigfy.png"
              alt="Franco Bertone 1"
            />
            <img
              className="imgFranco back "
              src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1732738166/p5thzjn7ljgu2bvzbllt.png"
              alt="Franco Bertone 2"
            />
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
      </div>
    </div>
  );
};

export default ForMe;
