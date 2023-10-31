import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <nav>
        <ul className="menu">
          <li className="forMe">
            <a href="#forMe">FOR ME</a>
          </li>
          <li className="education">
            <a href="#education">EDUCATION</a>
          </li>
          <li className="project">
            <a href="#project">PROJECT</a>
          </li>
          <li className="contact">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
      <div className="image">
        <a href="#">
          <img
            src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1698418934/lhlz6xwt83egy9ukjwoj.gif"
            alt="logo-nav"
            width="200px"
            height="120px"
          />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
