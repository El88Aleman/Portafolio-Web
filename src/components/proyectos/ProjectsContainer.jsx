import { useEffect, useState } from "react";
import { projects } from "../../projectsMock";
import Projects from "./Projects";

const ProjectsContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(projects);
      // reject("salio todo mal")
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => console.log(error));

    // .finally(()=>console.log("hola"))
  }, []);
  return <Projects items={items} />;
};

export default ProjectsContainer;
