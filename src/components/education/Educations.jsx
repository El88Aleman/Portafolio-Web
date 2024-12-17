import { useState } from "react";
import "./Educations.css";
import { education } from "./education";

const Educations = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (images, index) => {
    setCurrentImages(images);
    setCurrentIndex(index);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setCurrentImages([]);
    setCurrentIndex(0);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="tituloContainer">
      <p className="textTitulo">EDUCATIONS</p>
      <hr className="separadorTitle" />
      <div className="containerEducation">
        <div className="education" style={{ "--quantity": education.length }}>
          {education.map((item) =>
            item.img.map((image, index) => (
              <div
                key={image.id}
                className="item"
                style={{
                  "--position": item.position,
                }}
              >
                <img
                  className={image.className}
                  src={image.src}
                  alt=""
                  onClick={() => handleImageClick(item.img, index)}
                />
              </div>
            ))
          )}
        </div>
        {isPopupVisible && (
          <div className="popup-image">
            <span className="x" onClick={handleClosePopup}>
              &times;
            </span>
            {currentImages.length > 1 ? (
              <>
                <button className="prev" onClick={handlePrevImage}>
                  &#10094;
                </button>
                <img
                  src={currentImages[currentIndex]?.src}
                  alt="Expanded View"
                  className="img-expanded"
                />
                <button className="next" onClick={handleNextImage}>
                  &#10095;
                </button>
              </>
            ) : (
              <img
                src={currentImages[currentIndex]?.src}
                alt="Expanded View"
                className="img-expanded"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Educations;
