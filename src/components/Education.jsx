import Section from "./Section";
import { education } from "../data";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="edu">
        {education.map((e) => (
          <div className="edu__item" key={e.degree}>
            <p className="edu__period">{e.period}</p>
            <h3>{e.degree}</h3>
            <p>{e.school}</p>
            {e.board && <p className="edu__board">Board: {e.board}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
}
