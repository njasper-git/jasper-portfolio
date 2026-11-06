import { useEffect } from 'react'
import Card from '../components/Card'
import { personalInfo, education, objective } from '../data/about'

function About() {
  useEffect(() => {
    document.title = 'About | Jasper Portfolio'
  }, [])

  return (
    <section className="page-section about">
      <h1>About Me</h1>
      <p className="page-intro">A little bit about who I am and where I am headed.</p>

      <div className="about-grid">
        <Card title="Personal Information">
          {personalInfo.map((item) => (
            <div className="info-row" key={item.label}>
              <span className="info-label">{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </Card>

        <Card title="Education">
          <p className="card-strong">{education.degree}</p>
          <p>{education.college}</p>
          <p className="card-note">{education.status}</p>
        </Card>

        <div className="about-wide">
          <Card title="Career Objective">
            <p>{objective}</p>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default About