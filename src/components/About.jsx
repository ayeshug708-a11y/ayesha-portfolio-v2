import "../styles/About.css";

function About() {
  return (
    <section className="about" id="about" data-aos="fade-right">

      <h2 className="section-title">
        <span>About Me</span>
      </h2>

      <div className="about-container">

        <div className="about-image">
          <img src="/profile.png" alt="Ayesha" />
        </div>

        <div className="about-content">

          <h3>Software Engineering Student</h3>

          <p>
            I am Ayesha Minahil, a Software Engineering student at
            COMSATS University Islamabad. I enjoy creating responsive,
            modern websites and continuously improving my skills in
            Artificial Intelligence, Full Stack Development, Python,
            and React.
          </p>

          <div className="about-info">


            <div className="info-box">
              <h4>Location</h4>
              <p>Pakistan</p>
            </div>

            <div className="info-box">
              <h4>Focus</h4>
              <p>AI • React • Python</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;