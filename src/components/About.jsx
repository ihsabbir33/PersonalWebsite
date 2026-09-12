import { BrainCircuit, Database, Layers3 } from 'lucide-react'
import { motion } from 'framer-motion'

export function About() {
  return <section id="about" className="section-pad section-muted"><div className="page-width about-layout">
    <div><p className="eyebrow">01 / About</p><h2>Building useful things<br /><em>with a clear purpose.</em></h2></div>
    <div className="about-copy"><p>Backend-focused Python developer skilled in Django, APIs, and database design. Experienced in full-stack development with React and Bootstrap, and in machine learning through work on Bengali handwritten text recognition using CRNN.</p><p>I am passionate about building efficient systems and applying AI to solve real-world problems. My computer science background gives me a strong foundation for learning, experimentation, and thoughtful engineering.</p><div className="about-triad"><span><Database size={18} />Backend systems</span><span><BrainCircuit size={18} />Applied AI</span><span><Layers3 size={18} />Full-stack craft</span></div></div>
  </div></section>
}