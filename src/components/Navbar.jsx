import { useEffect, useState } from "react";
import { navLinks } from "../data";
import useTheme from "../useTheme";
import { MoonIcon, SunIcon } from "./Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [theme, toggleTheme] = useTheme();

  // Highlight the nav link of the section currently in view
  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const isDark = theme === "dark";

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="logo" aria-label="Kanika Dobliyal – home" onClick={() => setOpen(false)}>
          KD
        </a>

        <nav id="nav-links" className={`nav__links ${open ? "is-open" : ""}`} aria-label="Main">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "is-active" : ""}
              aria-current={active === l.id ? "true" : undefined}
              onClick={() => {
                setActive(l.id);
                setOpen(false);
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className="nav__toggle icon-btn"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
