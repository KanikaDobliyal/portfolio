import Section from "./Section";
import { MailIcon, PinIcon, LinkedinIcon, GithubIcon } from "./Icons";
import { profile } from "../data";

const items = [
  { icon: <PinIcon />, label: "Address", value: profile.address },
  { icon: <MailIcon />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: <LinkedinIcon />, label: "LinkedIn", value: "linkedin.com/in/kanika-dobliyal", href: profile.linkedin, external: true },
  { icon: <GithubIcon />, label: "GitHub", value: "github.com/KanikaDobliyal", href: profile.github, external: true },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      intro="Have a website in mind or want to work together? Reach out by email or find me online."
      alt
    >
      <ul className="contact">
        {items.map((it) => {
          const inner = (
            <>
              <span className="contact__icon">{it.icon}</span>
              <span>
                <span className="contact__label">{it.label}</span>
                <span className="contact__value">{it.value}</span>
              </span>
            </>
          );
          return (
            <li key={it.label}>
              {it.href ? (
                <a
                  className="contact__item"
                  href={it.href}
                  {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {inner}
                </a>
              ) : (
                <div className="contact__item">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
