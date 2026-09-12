import { useState } from 'react'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

const filters = ['All', 'Web', 'Programming', 'AI']

export function Projects() {
  const [filter, setFilter] = useState('All')
  const visibleProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter)
  return <section id="projects" className="section-pad section-dark"><div className="page-width"><div className="section-heading projects-heading"><div><p className="eyebrow">03 / Selected work</p><h2>Projects with<br /><em>practical ambition.</em></h2></div><p>Five projects spanning intelligent systems, web platforms, and applied software development.</p></div><div className="filter-row" role="group" aria-label="Filter projects">{filters.map((item) => <button key={item} className={filter === item ? 'selected' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="projects-grid">{visibleProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div></div></section>
}