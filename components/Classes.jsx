import { site } from '../site.config';
import { waLink } from './wa';
import Reveal from './Reveal';

export default function Classes() {
  return (
    <section id="classes" className="classes">
      <div className="container">
        <Reveal>
          <p className="eyebrow">What we practice</p>
          <h2 className="section-title">Classes for every stage of your journey</h2>
        </Reveal>
        <div className="class-grid">
          {site.classes.map((c, idx) => (
            <Reveal key={c.name} className="class-card" delay={idx * 90}>
              <span className="level-tag">{c.level}</span>
              <h3>{c.name}</h3>
              <p className="class-desc">{c.desc}</p>
              <p className="class-time">{c.time}</p>
              <a
                href={waLink(`Hi, I'd like to join the "${c.name}" class. Can you tell me more?`)}
                target="_blank" rel="noopener noreferrer" className="class-link"
              >
                Ask about this class →
              </a>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .classes { background: var(--stone); }
        .section-title { font-size: clamp(2rem, 4vw, 2.9rem); color: var(--forest); margin-bottom: 52px; max-width: 640px; }
        .class-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .class-card {
          background: var(--white); border-radius: 20px; padding: 34px;
          border: 1px solid var(--stone-dark);
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .class-card.reveal { transition: transform .3s ease, box-shadow .3s ease, opacity .8s ease; }
        .class-card:hover { transform: translateY(-6px); box-shadow: 0 22px 44px rgba(24,34,25,.12); }
        .level-tag {
          display: inline-block; font-size: .7rem; letter-spacing: .1em; text-transform: uppercase;
          color: var(--brass-deep); background: var(--stone); padding: 6px 13px; border-radius: 100px;
          font-weight: 600; margin-bottom: 18px;
        }
        .class-card h3 { font-size: 1.55rem; color: var(--ink); margin-bottom: 10px; }
        .class-desc { color: var(--ink-soft); margin-bottom: 18px; }
        .class-time { font-weight: 600; color: var(--forest); font-size: .9rem; margin-bottom: 18px; }
        .class-link { color: var(--brass-deep); font-weight: 600; font-size: .95rem; }
        .class-link:hover { text-decoration: underline; }
        @media (max-width: 720px) { .class-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
