import { useState } from "react";
import "./Educations.css";
import { education } from "./education";

const Educations = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setSelectedImage("");
  };
  return (
    <div className="tituloContainer">
      <p className="textTitulo">EDUCATIONS</p>
      <hr className="separadorTitle" />
      <div className="containerEducation">
        <div className="education">
          {education.map((item) =>
            item.img.map((image) => (
              <img
                key={image.id}
                className={image.className}
                src={image.src}
                alt=""
                onClick={() => handleImageClick(image.src)}
              />
            ))
          )}
        </div>
        {isPopupVisible && (
          <div className="popup-image">
            <span className="x" onClick={handleClosePopup}>
              &times;
            </span>
            <img
              src={selectedImage}
              alt="Expanded View"
              className="img-expanded"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Educations;
