import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  useEffect(() => {
    document.title = 'Page not found | Jasper Portfolio'
  }, [])

  return (
    <section className="page-section hero">
      <h1>Oops!</h1>
      <h2>This page does not exist</h2>
      <p>The address you typed doesn't match any page on this site.</p>
      <Link to="/" className="resume-btn">Back to Home</Link>
    </section>
  )
}

export default NotFound