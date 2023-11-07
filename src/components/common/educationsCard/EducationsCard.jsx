import { Carousel } from "react-bootstrap";
import "./EducationCard.css";

const EducationsCard = ({ item }) => {
  return (
    <div className="container-fluid">
      {Array.isArray(item.img) && item.img.length > 1 ? (
        <div data-aos={item.dataAos} className={item.className}>
          <Carousel ride="carousel" interval={5000}>
            {item.img.map((image) => (
              <Carousel.Item style={{ transform: "none" }} key={image.id}>
                <img
                  style={{
                    width: "1000px",
                    height: "550px",
                    borderRadius: "20px",
                  }}
                  className="d-block w-100"
                  src={image.src}
                  alt={image.alt}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      ) : (
        // Renderiza una sola imagen si no hay múltiples imágenes
        <div
          data-aos={item.dataAos}
          className={item.className}
          style={{ position: "relative" }}
        >
          <img
            style={{ width: "1000px", height: "550px", borderRadius: "20px" }}
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
