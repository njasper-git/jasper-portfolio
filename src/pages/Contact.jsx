import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { contactLinks } from '../data/contact'

const emptyForm = { name: '', email: '', message: '' }

function validate(values) {
  const errors = {}
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!emailPattern.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }

  return errors
}

function Contact() {
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.title = 'Contact | Jasper Portfolio'
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: '' })
    setSent(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const foundErrors = validate(values)
    setErrors(foundErrors)

    if (Object.keys(foundErrors).length === 0) {
      const subject = encodeURIComponent(`Portfolio message from ${values.name}`)
      const body = encodeURIComponent(
        `${values.message}\n\nFrom: ${values.name} (${values.email})`
      )
      window.location.href = `mailto:${contactLinks.email}?subject=${subject}&body=${body}`
      setSent(true)
      setValues(emptyForm)
    }
  }

  return (
    <section className="page-section contact">
      <h1>Contact Me</h1>
      <p className="page-intro">
        Have a question or want to say hello? Send me a message.
      </p>

      <div className="contact-grid">
        <Card title="Get in touch">
          <ul className="contact-links">
            <li>
              <span className="info-label">Email</span>
              <a href={`mailto:${contactLinks.email}`}>{contactLinks.email}</a>
            </li>
            {contactLinks.linkedin && (
              <li>
                <span className="info-label">LinkedIn</span>
                <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  View my profile
                </a>
              </li>
            )}
            <li>
              <span className="info-label">GitHub</span>
              <a href={contactLinks.github} target="_blank" rel="noopener noreferrer">
                njasper-git
              </a>
            </li>
          </ul>
        </Card>

        <Card title="Send a message">
          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              className={errors.name ? 'has-error' : ''}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              className={errors.email ? 'has-error' : ''}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={values.message}
              onChange={handleChange}
              className={errors.message ? 'has-error' : ''}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}

            <button type="submit" className="submit-btn">Send Message</button>

            {sent && (
              <p className="success">
                Thank you! Your email app should open with the message ready to send.
              </p>
            )}
          </form>
        </Card>
      </div>
    </section>
  )
}

export default Contact