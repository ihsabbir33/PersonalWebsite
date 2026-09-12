import { education } from '../data/education'

export function Education() {
  return <section id="education" className="section-pad"><div className="page-width education-layout"><div><p className="eyebrow">04 / Education</p><h2>A foundation for<br /><em>continuous learning.</em></h2></div><div className="education-list">{education.map((item) => <article className="education-item" key={item.year}><span className="education-year">{item.year}</span><div><h3>{item.title}</h3><p className="institution">{item.institution}</p><p>{item.details}</p></div></article>)}</div></div></section>
}