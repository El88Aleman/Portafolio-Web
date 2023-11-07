import EducationsContainer from "./components/education/EducationsContainer";
import Footer from "./components/layout/footer/Footer";
import NavBar from "./components/layout/navBar/NavBar";
import ProjectsContainer from "./components/proyectos/ProjectsContainer";
import ForMe from "./components/forMe/ForMe";

function App() {
  return (
    <div>
      <NavBar />
      <ForMe />
      <EducationsContainer />
      <ProjectsContainer />
      <Footer />
    </div>
  );
}

export default App;
