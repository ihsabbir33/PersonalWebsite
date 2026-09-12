import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Chatbot } from './components/Chatbot'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

const sectionIds = ['home', 'about', 'skills', 'projects', 'education', 'contact']

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') !== 'light')
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-30% 0px -60% 0px' },
    )
    sectionIds.forEach((id) => document.getElementById(id) && observer.observe(document.getElementById(id)))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}

export default App