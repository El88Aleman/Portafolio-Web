import { Typewriter } from "react-simple-typewriter";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="welcome">
      <p>WELCOME &#128075; </p>
      <Typewriter
        words={["I AM FRANCO BERTONE 🤖"]}
        loop={1}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default Loader;
