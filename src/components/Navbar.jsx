import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  ['home', 'Home'], ['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'],
  ['education', 'Education'], ['contact', 'Contact'],
]

export function Navbar({ darkMode, setDarkMode, activeSection }) {
  const [open, setOpen] = useState(false)
  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <button className="wordmark" onClick={() => goTo('home')} aria-label="Go to home">
          SA<span>.</span>
        </button>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([id, label]) => <button key={id} className={activeSection === id ? 'active' : ''} onClick={() => goTo(id)}>{label}</button>)}
        </div>
        <div className="nav-actions">
          <button className="icon-button" onClick={() => setDarkMode((value) => !value)} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'} title="Toggle theme">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="menu-button icon-button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>
    </header>
  )
}