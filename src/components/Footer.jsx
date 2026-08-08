import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">

      <h2>Ayesha Minahal</h2>

      <p>
        Software Engineering Student | React Developer | AI Enthusiast
      </p>

      <div className="footer-icons">

        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

      </div>

      <a href="#home" className="back-top">
        <FaArrowUp />
      </a>

      <p className="copyright">
        © 2026 Ayesha Minahil. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;