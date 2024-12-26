import ForMe from "./components/forMe/forMe/ForMe";
import Footer from "./components/footer/Footer";
import Projects from "./components/proyectos/Projects";
import Educations from "./components/education/Educations";
import Loader from "./components/loader/Loader";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fakeDataFetch = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(fakeDataFetch);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ForMe />
          <Projects />
          <Educations />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
