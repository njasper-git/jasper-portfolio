import { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const technologies = ['All', ...new Set(projects.flatMap((p) => p.tech))]

function Projects() {
  const [selected, setSelected] = useState('All')

  useEffect(() => {
    document.title = 'Projects | Jasper Portfolio'
  }, [])

  const visibleProjects =
    selected === 'All'
      ? projects
      : projects.filter((p) => p.tech.includes(selected))

  return (
    <section className="page-section projects">
      <h1>My Projects</h1>
      <p className="page-intro">Things I have built while learning.</p>

      {projects.length > 1 && (
        <div className="filters">
          {technologies.map((tech) => (
            <button
              key={tech}
              className={selected === tech ? 'active' : ''}
              onClick={() => setSelected(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
      )}

      {visibleProjects.length === 0 ? (
        <p className="no-projects">No projects found for {selected}.</p>
      ) : (
        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              live={project.live}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Projects