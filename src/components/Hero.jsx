export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="hero__hello">Hi, I’m</p>
          <h1>Kanika Dobliyal</h1>
          <p className="hero__role">Website &amp; Front-End Developer</p>
          <p className="hero__lead">
            I build responsive, mobile-friendly websites with React, WordPress and clean,
            well-structured code.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View projects
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>
        </div>

        <div className="code" role="img" aria-label="Code snippet describing Kanika as a front-end developer">
          <div className="code__bar">
            <span className="dot dot--r" />
            <span className="dot dot--y" />
            <span className="dot dot--g" />
            <span className="code__file">kanika.js</span>
          </div>
          <pre className="code__body">
            <code>
              <span className="k">const</span> <span className="v">kanika</span> <span className="p">=</span> <span className="p">{"{"}</span>
              {"\n  "}
              <span className="a">role</span>
              <span className="p">:</span> <span className="s">"Front-End Developer"</span>
              <span className="p">,</span>
              {"\n  "}
              <span className="a">company</span>
              <span className="p">:</span> <span className="s">"Reosys, Dehradun"</span>
              <span className="p">,</span>
              {"\n  "}
              <span className="a">stack</span>
              <span className="p">:</span> <span className="p">[</span>
              <span className="s">"React"</span>
              <span className="p">,</span> <span className="s">"WordPress"</span>
              <span className="p">,</span>
              {"\n          "}
              <span className="s">"JavaScript"</span>
              <span className="p">,</span> <span className="s">"Bootstrap"</span>
              <span className="p">],</span>
              {"\n  "}
              <span className="a">builds</span>
              <span className="p">:</span> <span className="s">"responsive websites"</span>
              <span className="p">,</span>
              {"\n"}
              <span className="p">{"}"}</span>
              <span className="p">;</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
