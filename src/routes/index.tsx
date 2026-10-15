import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  type Project,
  profile,
  heroStack,
  skills,
  projects,
  repos,
  timeline,
} from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jeremia Obed — Nexora · Software Engineer" },
      {
        name: "description",
        content:
          "Jeremia Obed (Nexora) — software engineer building web applications, backend systems and API-driven products.",
      },
      { property: "og:title", content: "Jeremia Obed — Nexora · Software Engineer" },
      {
        property: "og:description",
        content: "Web applications, reliable backends and API-driven products by Jeremia Obed.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  ["home", "Home"],
  ["about", "About"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["writing", "Writing"],
  ["contact", "Contact"],
] as const;

function CvButton({ className = "nx-btn" }: { className?: string }) {
  if (profile.cvAvailable)
    return (
      <a className={className} href={profile.cvPath} download="Jeremia-Obed-CV.pdf">
        Download CV ↓
      </a>
    );
  return (
    <span className={className} aria-disabled="true" title="CV will be available soon">
      CV coming soon
    </span>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".nx-reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && (e.target.classList.add("is-in"), io.unobserve(e.target)),
        ),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      let cur = "home";
      for (const [id] of NAV) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 140) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`nx-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nx-wrap nx-nav-inner">
        <a href="#home" className="nx-mark">
          <i aria-hidden />
          {profile.brand}
        </a>
        <nav aria-label="Primary">
          <ul className="nx-links">
            {NAV.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? "is-active" : ""}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nx-nav-cta">
          <CvButton className="nx-btn nx-btn--light nx-btn--sm" />
          <button
            className="nx-burger"
            aria-expanded={open}
            aria-controls="nx-mobile"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      <div id="nx-mobile" className={`nx-mobile ${open ? "is-open" : ""}`}>
        <ul>
          {NAV.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <CvButton className="nx-btn nx-btn--light" />
          </li>
        </ul>
      </div>
    </header>
  );
}

function SectionHead({ label, title, text }: { label: string; title: string; text?: string }) {
  return (
    <div className="nx-head nx-reveal">
      <span className="nx-label">{label}</span>
      <div>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
    </div>
  );
}

function Index() {
  useReveal();
  const numbered: (Project & { index: string })[] = projects.map((p, i) => ({
    ...p,
    index: String(i + 1).padStart(2, "0"),
  }));
  const featured = numbered.filter((p) => p.featured);
  const rest = numbered.filter((p) => !p.featured);
  const year = new Date().getFullYear();

  return (
    <div className="nx">
      <Nav />
      <main>
        <section id="home" className="nx-hero">
          <div className="nx-wrap">
            <span className="nx-label nx-rise">Jeremia Obed / Software Engineering</span>
            <div className="nx-hero-grid">
              <h1 className="nx-rise d2">
                Building software <em>that solves real problems.</em>
              </h1>
              <div className="nx-hero-side nx-rise d3">
                <p>
                  I'm Jeremia Obed, a software engineer focused on building modern web applications,
                  reliable backend systems, and useful API-driven products.
                </p>
                <p>
                  I care about maintainable code, thoughtful architecture, practical security, and
                  software that works beyond the demo.
                </p>
                <div className="nx-hero-actions">
                  <a href="#projects" className="nx-btn nx-btn--primary">
                    Explore my work <span className="arr">→</span>
                  </a>
                  <CvButton />
                </div>
              </div>
            </div>
            <div className="nx-stack nx-rise d3" aria-label="Technologies">
              <div className="nx-marquee">
                {[...heroStack, ...heroStack].map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="nx-section">
          <div className="nx-wrap nx-about nx-reveal">
            <div>
              <span className="nx-label">01 — About</span>
              <figure className="nx-portrait">
                {profile.photo ? (
                  <img
                    src={profile.photo}
                    alt="Portrait of Jeremia Obed"
                    width={832}
                    height={1040}
                    loading="lazy"
                  />
                ) : (
                  <div className="nx-portrait-empty" aria-label="Photo coming soon">
                    <span>JO</span>
                  </div>
                )}
                <figcaption className="nx-mono">Jeremia Obed — Software Engineer</figcaption>
              </figure>
            </div>
            <div>
              <p className="nx-about-lead">
                I like understanding a system all the way down — from the button a user taps to the
                row it writes in the database.
              </p>
              <div className="nx-about-cols">
                <p>
                  Most of my work sits where frontend meets backend: React interfaces talking to
                  Node.js APIs, backed by PostgreSQL and deployed on Linux. Payment integrations
                  like M-Pesa taught me that the hard part is rarely the happy path — it's
                  callbacks, retries and the states in between.
                </p>
                <p>
                  I study software engineering, and I keep a working interest in Docker, DevOps and
                  security fundamentals because they make the software I ship more dependable. I'd
                  rather build one thing that holds up than ten that only demo well.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="nx-section nx-section--alt">
          <div className="nx-wrap">
            <SectionHead
              label="02 — Selected work"
              title="Projects"
              text="A few things I've built end to end — from data model to deployment."
            />
            {featured.map((p) => (
              <article key={p.slug} className="nx-feature nx-reveal">
                <div className="nx-shot" aria-hidden>
                  <div className="nx-shot-bar">
                    <i />
                    <i />
                    <i />
                    <span className="nx-mono">
                      {(p.live || p.repo)?.replace(/^https?:\/\//, "")}
                    </span>
                  </div>
                  <div className="nx-shot-body">
                    {p.screenshot ? (
                      <img
                        src={p.screenshot}
                        alt={`Screenshot of ${p.name}`}
                        loading="lazy"
                        decoding="async"
                        width={1905}
                        height={860}
                      />
                    ) : (
                      <strong>{p.name}</strong>
                    )}
                  </div>
                </div>
                <div>
                  <span className="nx-mono">
                    {p.index} · {p.kind}
                  </span>
                  <h3>{p.name}</h3>
                  <p>{p.summary}</p>
                  <p>{p.detail}</p>
                  <div className="nx-tags">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="nx-links-row">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer">
                        Live site ↗
                      </a>
                    )}
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      Source ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
            <div className="nx-list">
              {rest.map((p) => (
                <div key={p.slug} className="nx-row nx-reveal">
                  <span className="nx-mono">{p.index}</span>
                  <h4>{p.name}</h4>
                  <p>{p.summary}</p>
                  <div className="nx-links-row">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer">
                        Live ↗
                      </a>
                    )}
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      Source ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="nx-section">
          <div className="nx-wrap">
            <SectionHead
              label="03 — Toolkit"
              title="Skills"
              text="The tools I reach for, grouped by where they sit in the stack. No ratings — the projects speak for those."
            />
            <div className="nx-skills nx-reveal">
              {skills.map((g, gi) => (
                <div
                  key={g.id}
                  className="nx-skill"
                  style={{
                    ["--d" as string]: `${gi * 0.12}s`,
                    ["--hue" as string]: `${[78, 165, 195, 35, 330, 260][gi % 6]}`,
                  }}
                >
                  <span className="nx-mono">{g.id}</span>
                  <h3>{g.title}</h3>
                  <ul>
                    {g.items.map((i, ii) => (
                      <li key={i} style={{ ["--i" as string]: ii }}>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="nx-section nx-section--alt">
          <div className="nx-wrap">
            <SectionHead label="04 — Path" title="Experience & education" />
            <div className="nx-time nx-reveal">
              {timeline.map((t) => (
                <div key={t.title} className="nx-time-row">
                  <span className="nx-mono">{t.period}</span>
                  <div>
                    <h3>{t.title}</h3>
                    <span className={`nx-mono ${t.kind === "To confirm" ? "nx-flag" : ""}`}>
                      {t.kind}
                    </span>
                  </div>
                  <p>{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="nx-section">
          <div className="nx-wrap">
            <SectionHead
              label="05 — Workspace"
              title="More on GitHub"
              text="Smaller repositories, experiments and training material."
            />
            <div className="nx-repos nx-reveal">
              {repos.map((r) => (
                <a
                  key={r.name}
                  className="nx-repo"
                  href={`${profile.github}/${r.name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>{r.name}</strong>
                  <p>{r.desc}</p>
                  <span className="nx-mono">{r.lang} · View ↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="writing" className="nx-section nx-section--alt">
          <div className="nx-wrap">
            <SectionHead label="06 — Notes" title="Writing" />
            <div className="nx-empty nx-reveal">
              <div>
                <span className="nx-label">In progress</span>
                <h3>Technical notes are on the way.</h3>
                <p className="nx-note">
                  Write-ups from real builds — no articles are published yet.
                </p>
              </div>
              <ul>
                {[
                  "Building M-Pesa integrations with Node.js",
                  "Database design & migrations with Prisma",
                  "Debugging Docker on Linux",
                  "Practical API security",
                ].map((t) => (
                  <li key={t}>
                    <span>{t}</span>
                    <span className="nx-mono">Draft</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="nx-section nx-contact">
          <div className="nx-wrap nx-reveal">
            <span className="nx-label">07 — Contact</span>
            <h2>
              Have a problem worth solving? <span>Let's build something useful.</span>
            </h2>
            <div className="nx-contact-grid">
              <a href={`mailto:${profile.email}`}>
                <span className="nx-mono">{"\n"}</span>
                <strong>{profile.email}</strong>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <span className="nx-mono">GitHub</span>
                <strong>jeremi563 ↗</strong>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <span className="nx-mono">LinkedIn</span>
                <strong>Profile ↗</strong>
              </a>
              <a href={profile.whatsapp} target="_blank" rel="noreferrer">
                <span className="nx-mono">WhatsApp</span>
                <strong>Message ↗</strong>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="nx-footer">
        <div className="nx-wrap">
          <div className="nx-footer-grid">
            <div>
              <span className="nx-mark">
                <i aria-hidden />
                {profile.brand}
              </span>
              <p>
                Jeremia Obed — software engineer building web applications, backend systems and
                APIs.
              </p>
            </div>
            <nav aria-label="Footer">
              {NAV.map(([id, label]) => (
                <a key={id} href={`#${id}`}>
                  {label}
                </a>
              ))}
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </nav>
          </div>
          <div className="nx-foot-bottom nx-mono">
            <span>© {year} Jeremia Obed</span>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
