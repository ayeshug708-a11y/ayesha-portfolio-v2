import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home" data-aos="fade-up">

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <p className="hero-greeting">Hello, I'm</p>

        <h1 className="hero-name">
          <span>Ayesha Minahil</span>
        </h1>

        <h2 className="hero-title">
          <TypeAnimation
            sequence={[
              "Software Engineering Student",
              2000,
              "AI Full Stack Learner",
              2000,
              "Frontend Developer",
              2000,
              "Python Programmer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="hero-description">
          Passionate about Artificial Intelligence, Full Stack Development,
          and building modern, responsive web applications with clean,
          user-friendly designs.
        </p>

        <div className="hero-buttons">
          <a href="/CV.pdf" download className="btn-primary">
            Download CV
          </a>

          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>

      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="image-circle">
          <img src="/profile.png" alt="Ayesha Minahil" />
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;