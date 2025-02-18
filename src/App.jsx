import ForMe from "./components/forMe/forMe/ForMe";
import Projects from "./components/projects/Projects";
import Educations from "./components/education/Educations";
import Footer from "./components/footer/Footer";
import { FaArrowUpLong } from "react-icons/fa6";
import { useEffect, useState } from "react";

function App() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <ForMe />
      <Projects />
      <Educations />
      <Footer />
      <div
        className={`fixedIcons arrow-up ${showArrow ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <div className="fixedIconContainer">
          <FaArrowUpLong size={25} />
        </div>
      </div>
    </>
  );
}

export default App;
