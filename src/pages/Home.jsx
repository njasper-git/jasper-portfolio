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
        I am an Electronics and Communication Engineering diploma student from
        Coimbatore who builds responsive web applications with React,
        JavaScript, HTML and CSS. I enjoy turning ideas into working products,
        from the first line of code to a live deployment, and I am building a
        strong foundation in Python with a long-term goal of working in AI
        development.
      </p>

      <a href="/resume.pdf" download className="resume-btn">
        Download Resume
      </a>
    </section>
  )
}

export default Home