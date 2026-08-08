import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? "navbar-show" : "navbar-hide"}`}>

      <h1 className="logo">AYESHA.</h1>

      <ul className="menu">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="socials">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>

      <ThemeToggle />

    </nav>
  );
}

export default Navbar;