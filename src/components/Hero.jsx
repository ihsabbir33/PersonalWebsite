import { ArrowDownRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section id="home" className="hero section-pad">
      <div className="hero-grid page-width">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="eyebrow"><span className="status-dot" /> Open to thoughtful opportunities</p>
          <h1>Sabbir Ahmed<span className="accent">.</span></h1>
          <p className="hero-role">Computer Science Graduate <span>/</span> Software Developer</p>
          <p className="hero-intro">Backend-focused Python developer building efficient web systems with Django, APIs, and data-driven intelligence.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View projects <ArrowDownRight size={17} /></a>
            <button className="button button-secondary" type="button" disabled title="A CV file was not included in the original site">Download CV <Download size={17} /></button>
            <a className="button button-secondary" href="mailto:sabbirahmed338989@gmail.com">Get in touch <Mail size={17} /></a>
          </div>
          <div className="social-row" aria-label="Social links">
            <a href="https://github.com/ihsabbir33" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <span className="unavailable-link" title="LinkedIn URL was not provided in the original site"><Linkedin size={18} /></span>
            <a href="mailto:sabbirahmed338989@gmail.com" aria-label="Email"><Mail size={18} /></a>
          </div>
        </motion.div>
        <motion.div className="hero-portrait" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.12 }}>
          <div className="portrait-frame"><img src="/profile-img.jpg" alt="Portrait of Sabbir Ahmed" /></div>
          <div className="portrait-note">Python · Django · AI/ML</div>
        </motion.div>
      </div>
      <div className="hero-bottom page-width"><span>Based in Bangladesh</span><span>Scroll to explore <ArrowDownRight size={15} /></span></div>
    </section>
  )
}