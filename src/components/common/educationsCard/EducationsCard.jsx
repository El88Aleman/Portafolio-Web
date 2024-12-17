import "./EducationCard.css";

const EducationsCard = ({ item }) => {
  return (
    <div className="containerEducation">
      {Array.isArray(item.img) && item.img.length > 1 ? (
        <div className={item.className}>
          <div>
            {item.img.map((image) => (
              <div style={{ transform: "none" }} key={image.id}>
                <img
                  className="educationCard"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={item.className} style={{ position: "relative" }}>
          <img
            className="educationCard"
            src={item.img[0].src}
            alt={item.img[0].alt}
          />
        </div>
      )}
    </div>
  );
};

export default EducationsCard;
