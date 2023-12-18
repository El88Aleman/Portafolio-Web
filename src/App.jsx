import EducationsContainer from "./components/education/EducationsContainer";
import Footer from "./components/layout/footer/Footer";
import NavBar from "./components/layout/navBar/NavBar";
import ForMe from "./components/forMe/ForMe";
import Projects from "./components/proyectos/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <ForMe />
      <EducationsContainer />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
