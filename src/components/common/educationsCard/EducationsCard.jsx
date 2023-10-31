import { Carousel } from "react-bootstrap";
import "./EducationCard.css";

const EducationsCard = ({ item, specialClass }) => {
  return (
    <div className={`education ${specialClass}`}>
      {Array.isArray(item.img) && item.img.length > 1 ? (
        <Carousel>
          {item.img.map((image) => (
            <Carousel.Item key={image.id}>
              <img className="d-block w-100" src={image.src} alt={image.alt} />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        // Renderiza una sola imagen si no hay múltiples imágenes
        <div
          className={`education ${specialClass}`}
          style={{ position: "relative" }}
        >
          <img
            className="d-block w-100"
            src={item.img[0].src}
            alt={item.img[0].alt}
          />
        </div>
      )}
    </div>
  );
};

export default EducationsCard;
