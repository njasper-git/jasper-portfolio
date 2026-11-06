import { useState, useEffect } from 'react'

function Home() {
  const [imageFailed, setImageFailed] = useState(false)

  useEffect(() => {
    document.title = 'Jasper Portfolio'
  }, [])

  return (
    <section className="page-section hero">
      {imageFailed ? (
        <div className="profile-pic placeholder">Your photo</div>
      ) : (
        <img
          src="/profile.jpg"
          alt="Photo of Jasper N"
          className="profile-pic"
          onError={() => setImageFailed(true)}
        />
      )}

      <h1>Jasper N</h1>
      <h2>Aspiring Full Stack Web Developer</h2>
      <p>
        I am a final-year ECE diploma student from Coimbatore. I enjoy
        building things from scratch and I am learning web development
        step by step.
      </p>

      <a href="/resume.pdf" download className="resume-btn">
        Download Resume
      </a>
    </section>
  )
}

export default Home