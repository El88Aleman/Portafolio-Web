import ProjectCard from "../common/projectCard/ProjectCard";

const Projects = ({ items }) => {
  return (
    <section className="project">
      {items.map((item) => {
        return <ProjectCard key={item.id} item={item} />;
      })}
    </section>
  );
};

export default Projects;
