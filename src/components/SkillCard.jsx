function SkillCard({ name, level, view }) {
  let label = 'Beginner'
  if (level >= 70) {
    label = 'Advanced'
  } else if (level >= 40) {
    label = 'Intermediate'
  }

  if (view === 'cards') {
    return (
      <div className="skill-card">
        <h4>{name}</h4>
        <p className="skill-label">{label}</p>
      </div>
    )
  }

  return (
    <div className="skill-bar-item">
      <div className="skill-bar-top">
        <span>{name}</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ '--level': `${level}%` }}></div>
      </div>
    </div>
  )
}

export default SkillCard