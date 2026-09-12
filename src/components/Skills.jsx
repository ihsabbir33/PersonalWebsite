import { Code2, Cpu, Globe2, ScanText } from 'lucide-react'
import { skills } from '../data/skills'

const icons = [Code2, Cpu, Globe2, ScanText]

export function Skills() {
  return <section id="skills" className="section-pad"><div className="page-width"><div className="section-heading"><div><p className="eyebrow">02 / Toolkit</p><h2>Skills that turn<br /><em>ideas into systems.</em></h2></div><p>Technologies and areas of practice carried forward from the original portfolio.</p></div><div className="skills-grid">{skills.map((skill, index) => { const Icon = icons[index]; return <article className="skill-card" key={skill.category}><Icon size={22} /><h3>{skill.category}</h3><ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul></article> })}</div></div></section>
}