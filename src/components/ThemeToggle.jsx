import { useState, useEffect } from 'react'

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  function handleClick() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button className="theme-toggle" onClick={handleClick}>
      {theme === 'light' ? 'Dark mode' : 'Light mode'}
    </button>
  )
}

export default ThemeToggle