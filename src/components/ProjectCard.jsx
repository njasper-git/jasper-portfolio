function ProjectCard({ title, description, tech, github, live }) {
  return (
    <div className="card project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <ul className="tech-list">
        {tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="project-links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer">
            Live site
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard