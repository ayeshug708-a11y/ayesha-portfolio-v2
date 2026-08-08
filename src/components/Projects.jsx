import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern responsive portfolio website built using React, CSS, and animations."
    },
    {
      title: "Smart Campus Network",
      description:
        "A computer network project designed in Cisco Packet Tracer with VLANs, DHCP, routing and services."
    },
    {
      title: "AI Learning Projects",
      description:
        "Practice projects focused on Artificial Intelligence and programming concepts."
    }
  ];

  return (
    <section className="projects" id="projects">

      <h2>My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <button>View Project</button>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Projects;