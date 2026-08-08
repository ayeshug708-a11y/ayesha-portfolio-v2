import "../styles/Skills.css";

function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Artificial Intelligence",
    "Full Stack Development",
    "Git & GitHub",
    "SQL",
    "Problem Solving"
  ];

  return (
    <section className="skills" id="skills">

      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            {skill}
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;