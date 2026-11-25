import { getImage } from "./images";
import { useState } from "react";
import Section from "./Section";
import { ArrowUpRight } from "./Icons";
import { projects } from "../data";

// Live preview of the site, used when no local screenshot is set.
const preview = (url) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=900&h=560`;

function ProjectImage({ project }) {
  const [failed, setFailed] = useState(false);
  const src = (project.image && getImage(project.image)) || preview(project.url);

  if (failed) {
    return (
      <div className="project__img project__img--fallback" aria-hidden="true">
        {project.title.charAt(0)}
      </div>
    );
  }
  return (
    <div className="project__img">
      <img
        src={src}
        alt={`Screenshot of the ${project.title} website`}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      intro="A selection of live websites I have built and maintained."
      alt
    >
      <div className="projects">
        {projects.map((p) => (
          <article className="project" key={p.title}>
            <ProjectImage project={p} />
            <div className="project__body">
              <p className="project__type">{p.type}</p>
              <h3>{p.title}</h3>
              <p className="project__desc">{p.description}</p>
              <ul className="project__tech" aria-label="Technologies used">
  {p.tech.map((t) => (
    <li key={t}>{t}</li>
  ))}
</ul>
              <a className="btn btn--primary btn--sm" href={p.url} target="_blank" rel="noopener noreferrer">
                View Project <ArrowUpRight />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
