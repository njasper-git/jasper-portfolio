import { useState, useEffect } from 'react'
import Card from '../components/Card'
import SkillCard from '../components/SkillCard'
import { skills, categories } from '../data/skills'

function Skills() {
  const [view, setView] = useState('bars')

  useEffect(() => {
    document.title = 'Skills | Jasper Portfolio'
  }, [])

  return (
    <section className="page-section skills">
      <h1>My Skills</h1>
      <p className="page-intro">The tools I am learning and using to build things.</p>

      <div className="toggle">
        <button
          className={view === 'bars' ? 'active' : ''}
          onClick={() => setView('bars')}
        >
          Progress bars
        </button>
        <button
          className={view === 'cards' ? 'active' : ''}
          onClick={() => setView('cards')}
        >
          Cards
        </button>
      </div>

      <div className="skills-groups">
        {categories.map((category) => (
          <Card title={category} key={category}>
            <div className={view === 'cards' ? 'skill-grid' : 'skill-list'}>
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <SkillCard
                    key={skill.id}
                    name={skill.name}
                    level={skill.level}
                    view={view}
                  />
                ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Skills