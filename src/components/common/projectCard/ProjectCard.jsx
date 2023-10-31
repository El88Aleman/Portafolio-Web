import "./ProjectCard.css";
import { ImGithub } from "react-icons/im";

const ProjectCard = ({ item }) => {
  const handleClick = () => {
    window.open(item.url, "_blank");
  };
  return (
    <div className="project">
      <div>
        <img
          style={{
            width: `${item.size.width}px`,
            height: `${item.size.height}px`,
          }}
          src={item.img}
          alt=""
        />
        <h3 style={{ color: "white" }}>{item.title}</h3>
        <span className="github" onClick={handleClick}>
          <ImGithub className="icon" size={30} />
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
