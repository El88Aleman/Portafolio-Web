import EducationsContainer from "./components/education/EducationsContainer";
import Footer from "./components/layout/footer/Footer";
import NavBar from "./components/layout/navBar/NavBar";
import ProjectsContainer from "./components/proyectos/ProjectsContainer";
import SobreMi from "./components/sobreMi/SobreMi";

function App() {
  return (
    <div>
      <NavBar />
      <SobreMi />
      <EducationsContainer />
      <ProjectsContainer />
      <Footer />
    </div>
  );
}

export default App;
