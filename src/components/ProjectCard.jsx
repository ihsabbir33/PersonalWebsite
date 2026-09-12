import { ArrowUpRight, ImageOff } from 'lucide-react'
import { motion } from 'framer-motion'

export function ProjectCard({ project, index }) {
  return <motion.article className="project-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.45, delay: index * 0.06 }}>
    <div className="project-visual">{project.image ? <img src={project.image} alt={`${project.title} project preview`} loading="lazy" /> : <><ImageOff size={24} /><span>Project visual<br />coming soon</span></>}</div>
    <div className="project-body"><div className="project-meta"><span>{project.category}</span><span>0{index + 1}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><div className="project-links"><span>Links not provided</span><ArrowUpRight size={16} /></div></div>
  </motion.article>
}