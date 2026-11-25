import Section from "./Section";
import { skills } from "../data";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="The tools I use to design, build and ship websites." alt>
      <div className="skills">
        {skills.map((s) => (
          <div className="skills__row" key={s.group}>
            <h3>{s.group}</h3>
            <ul>
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
