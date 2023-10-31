import { useEffect, useState } from "react";
import { educations } from "../../educationsMock";
import Educations from "./Educations";

const EducationsContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(educations);
      // reject("salio todo mal")
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => console.log(error));

    // .finally(()=>console.log("hola"))
  }, []);
  return <Educations items={items} />;
};

export default EducationsContainer;
