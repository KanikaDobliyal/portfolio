import Section from "./Section";
import { experience } from "../data";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="timeline">
        {experience.map((e) => (
          <li className="timeline__item" key={e.role + e.period}>
            <div className="timeline__meta">
              <span className="timeline__period">{e.period}</span>
            </div>
            <div className="timeline__body">
              <h3>{e.role}</h3>
              <p className="timeline__company">{e.company}</p>
              <ul>
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
